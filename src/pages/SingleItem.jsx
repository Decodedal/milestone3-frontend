import { AddShoppingCart } from '@mui/icons-material'
import { Box, Button, ButtonGroup, Divider, Stack, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const SingleItem = () => {
    // gets us access to cart state so we can set cart contents


    
        


    const { id } = useParams()
    const [message, setMessage] = useState("")
    const [item , setitem] = useState([])
    const [size, setSize] = useState("select a size")
    const { cart, setCart } = useContext(CartContext)
   

    function handleSize(size){
      return [setSize(size), setMessage("")]
    }

    

useEffect(()=>{
   const getData = async() =>{
   const resdata = await fetch(`https://fakestoreapi.com/products/${id}`)
   let parsedData = await resdata.json()
   setitem(parsedData)
   if(parsedData.category === "jewelery" || parsedData.category === "electronics"){
    setSize(null)
   }
//    window.localStorage.setItem('test',JSON.stringify(parsedData))
   }

   getData()
},[])
console.log(size)


 useEffect(()=>{
  window.localStorage.setItem('style_central_cart', JSON.stringify(cart))

 },[cart])



const handleAddToCart = (clickedItem) => {
  if(size === "select a size"){
    return setMessage("Select a size before adding to cart.")
  }
  setMessage("Item added to cart")
  setCart((prev) => {
    const isItemInCart = prev.find((item) => item.id === clickedItem.id);

    if (isItemInCart) {
      return prev.map((item) =>
        item.id === clickedItem.id
          ? { ...item, quantity: item.quantity + 1, size:size }
          : {...item, size:size}
      );
    }

    return [...prev, { ...clickedItem, quantity: 1 , size:size }];
  });
};


  return (
    <>
    <Stack direction={{xs:"column", md:"row"}}  height="100vh" alignItems={"center"}>
    <Stack maxHeight={"100vh"} alignItems='center' width={{xs:"100%", md:"50%"}} justifyContent="center" flex={1}>

     <img style={{width:"60%"}} src={item.image} alt={item.title}/>
    </Stack>
    <Box width={{xs:"100%", md:"40%"}} maxHeight={"90vh"}>
    <Stack p={1} m={2} bgcolor={'white'} maxHeight={"100vh"} >
    <Typography gutterBottom fontSize={"1.5rem"}>
      {item.title}
    </Typography>
    <Divider/>
    <Typography gutterBottom >
      {item.description}
    </Typography>
    <Divider/>
    <Stack mt={2} direction={"row"} justifyContent="space-between">
    <Typography gutterBottom fontSize={"1.5rem"}>
      ${item.price}
    </Typography>
    
    <Box display={size === null ? "none" : "block" }>
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button onClick={e => handleSize("Small")}>S</Button>
      <Button onClick={e => handleSize("Medium")}>M</Button>
      <Button onClick={e => handleSize("Large")}>L</Button>
      <Button onClick={e => handleSize("Extra Large")}>XL</Button>
   </ButtonGroup>
   </Box>
   </Stack>
   <Box display={size === null ? "none" : "block" }>
    Size:  {size}
    </Box>
    <Typography fontSize={"bold"} color={message[0] === "S" ? "Red" : "Green"}>{message}</Typography>
    <Button onClick={()=> handleAddToCart(item)} sx={{marginTop:"5px"}}>
      <AddShoppingCart/>
        Add To Cart
    </Button>

    </Stack>
    </Box>
    </Stack>
  
    </>
  )
}

export default SingleItem