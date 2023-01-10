import { Grid, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import GalleryItem from '../components/galleryItem'
import WishList from '../components/WishList'
import { Params, useParams } from 'react-router-dom'

const Shopping = () => {

let{category} = useParams()

    const [items , setitems] = useState([])

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

     console.log(category)
  return (
    <>
    <Stack direction="row" justifyContent="center" alignItems="center">
    <WishList/>
    <Stack flex={4}>
        <Grid container>
            {mappedItems}
        </Grid>
    </Stack>
    </Stack>
    </>
  )
}

export default Shopping