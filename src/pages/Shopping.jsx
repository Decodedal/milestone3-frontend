import { Container, Grid, Stack } from '@mui/material'
import React, { useEffect, useState, useContext } from 'react'
import GalleryItem from '../components/galleryItem'

import { Params, useParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext'


const Shopping = () => {

let{category} = useParams()
    
    const [items , setitems] = useState([])
    const { cart, setCart } = useContext(CartContext)

    useEffect(()=>{
        const getData = async() =>{
        if(category === "all"){
            const resdata = await fetch(`https://fakestoreapi.com/products`)
            const parsedData = await resdata.json()
            setitems(parsedData)
        }else{    
            const resdata = await fetch(`https://fakestoreapi.com/products/category/${category}`)
            const parsedData = await resdata.json()
            setitems(parsedData)
        }
        
     //    window.localStorage.setItem('test',JSON.stringify(parsedData))
        }
     
        getData()
     },[])

     const mappedItems = items.map((item, key)=>{
        return(
            <GalleryItem item = {item} key ={key}/>
        )
     })

     useEffect(()=>{
        window.localStorage.setItem('style_central_cart', JSON.stringify(cart))
      
       },[cart])

     console.log(mappedItems.length)


  return (
    <>
    <Stack direction="row" justifyContent="center" alignItems="center">
     { mappedItems.length < 10
     ?
     <Stack minHeight={"100vh"} justifyContent={"center"} flex={4} >
        <Container>
        <Grid container spacing={4}>
            {mappedItems}
        </Grid>
        </Container>
    </Stack>
     :
    <Stack flex={4} mt={6}>
        <Container>
        <Grid container spacing={4}>
            {mappedItems}
        </Grid>
        </Container>
    </Stack>
    }
    </Stack>
    </>
  )
}

export default Shopping