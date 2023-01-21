import { Box, Button, Paper, Stack, Typography } from '@mui/material'

import React, { useEffect, useState } from 'react'
import Carousel from 'react-material-ui-carousel'

import photo1 from "../assets/photo1.jpg"
import photo2 from "../assets/photo2.jpg"
import photo3 from "../assets/photo3.jpg"
import photo4 from "../assets/photo4.jpg"
import photo5 from "../assets/photo5.jpg"
import photo6 from "../assets/photo6.jpg"
import photo8 from "../assets/photo8.jpg"




const PhotoGallery = () => {
 
    const photoArr = [photo1, photo2, photo3, photo4, photo5, photo6, photo8,] 

  return (
   
    <Carousel>
        {
            photoArr.map((item, i)=> <Item key={i} item={item}/>)
        }
    </Carousel>
   
  )
}

const hot = <Box bgcolor="rgb(255, 102, 102,0.5)" border={1} borderRadius="10px">
<Typography color={"#fcffa3"} fontSize={"12rem"} fontFamily="Verdana" sx={{textShadow:"1px 4px 2px rgba(0,0,0,0.6)"}}>
    Hot Deals
</Typography>
</Box>



export default PhotoGallery

function Item({item}){


    return (
        <Paper sx={{
            backgroundImage:`url(${item})`,
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat",
            // resize
            height:"100vh",
            width:"100%",
            
            

        }}>
        <Stack minHeight={"100vh"} alignItems="flex-end" justifyContent={"center"} >
            {hot}
        </Stack>
        </Paper>
    )
}
