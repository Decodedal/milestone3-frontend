import { AddShoppingCart } from '@mui/icons-material'
import { Box, Button, ButtonGroup, Divider, Paper, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleItem = () => {

    const { id } = useParams()

    const [item , setitem] = useState([])
    const [size, setSize] = useState(["select a size"])
   

    const handleSize = (size) => setSize(size)



useEffect(()=>{
   const getData = async() =>{
   const resdata = await fetch(`https://fakestoreapi.com/products/${id}`)
   let parsedData = await resdata.json()
   setitem(parsedData)
//    window.localStorage.setItem('test',JSON.stringify(parsedData))
   }

   getData()
},[])
 console.log(item)

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
    <Button sx={{marginTop:"5px"}}>
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