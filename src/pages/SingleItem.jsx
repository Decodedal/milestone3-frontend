import { AddShoppingCart } from '@mui/icons-material'
import { Box, Button, ButtonGroup, Divider, Paper, Stack, Typography } from '@mui/material'
import { click } from '@testing-library/user-event/dist/click'
import React, { useContext, useEffect, useState } from 'react'
import { json, useParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const SingleItem = () => {
    // gets us access to cart state so we can set cart contents


    
        


    const { id } = useParams()

    const [item , setitem] = useState([])
    const [size, setSize] = useState(["select a size"])
    const { cart, setCart } = useContext(CartContext)
   

    const handleSize = (size) => setSize(size)


    //checks if cart is empty will simply add to cart if it is not it loops through finds the index that matches the item id and incrments its quanitity by 1. 
    // const addToCart = () =>{
    //   if(cart.length != 0){
    //     let index 
    //     for(let i = 0; i<cart.length; i++){
    //       if(item.id === cart[i].id){
    //       index = i
    //       }
    //     } 
    //     return setCart(...cart[index].quantity += 1)
    //   }
    //   return(
    //     setCart([...cart,{
    //       id: item.id,
    //       title:item.title,
    //       image:item.image,
    //       size:size, 
    //       price:item.price,
    //       quantity:1
    //      }])
    //   )
    // }

  

    useEffect(()=>{
      const data = window.localStorage.getItem('style_central_cart');
      if (data != null) setCart(JSON.parse(data))
        console.log(data)
     },[])
    

useEffect(()=>{
   const getData = async() =>{
   const resdata = await fetch(`https://fakestoreapi.com/products/${id}`)
   let parsedData = await resdata.json()
   setitem(parsedData)
//    window.localStorage.setItem('test',JSON.stringify(parsedData))
   }

   getData()
},[])
//  console.log(item)


 useEffect(()=>{
  window.localStorage.setItem('style_central_cart', JSON.stringify(cart))
 },[cart])

//  const localCart = () =>{
//   if(cart.length === 0 ){
//     return(
//       setCart([...cart,{
//         id:item.id,
//         quantity:1
//       }])
//     )
//   }
//  const updateCart = cart.map((cart)=> cart.id === item.id ? cart["quantity"] +=1 : console.log("not the same"))
//   return(
//    setCart(updateCart)
//   )
// }



const handleAddToCart = (clickedItem) => {
  setCart((prev) => {
    const isItemInCart = prev.find((item) => item.id === clickedItem.id);

    if (isItemInCart) {
      return prev.map((item) =>
        item.id === clickedItem.id
          ? { id:clickedItem.id, quantity: item.quantity + 1 }
          : item
      );
    }

    return [...prev, { id:item.id, quantity: 1 }];
 });
};




  return (
    <>
    <Stack direction={{xs:"column", md:"row"}}  height="100vh" alignItems={"center"}>
    <Stack maxHeight={"100vh"} alignItems='center' width={{xs:"100%", md:"50%"}} justifyContent="center" flex={1}>

     <img style={{width:"70%"}} src={item.image} alt={item.title}/>
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
    
    <Box display={item.category === "men's clothing" || item.category === "women's clothing" ? "block" : "none" }>
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button onClick={e => handleSize("Small")}>S</Button>
      <Button onClick={e => handleSize("Medium")}>M</Button>
      <Button onClick={e => handleSize("Large")}>L</Button>
      <Button onClick={e => handleSize("Extra Large")}>XL</Button>
   </ButtonGroup>
   </Box>
   </Stack>
   <Box display={item.category === "men's clothing" || item.category === "women's clothing" ? "block" : "none" }>
    Size:  {size}
    </Box>
    {/* <Button onClick={()=>addToCart()} sx={{marginTop:"5px"}}> */}
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