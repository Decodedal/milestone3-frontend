import { Button, ImageList, ImageListItem, Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import photo1 from "../assets/photo1.jpg"
import photo2 from "../assets/photo2.jpg"
import photo3 from "../assets/photo3.jpg"
import photo4 from "../assets/photo4.jpg"
import photo5 from "../assets/photo5.jpg"
import photo6 from "../assets/photo6.jpg"
import photo7 from "../assets/photo7.jpg"
import photo8 from "../assets/photo8.jpg"
import photo9 from "../assets/photo9.jpg"



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

export default PhotoGallery

function Item({item})
{
    return (
        <Paper sx={{
            backgroundImage:`url(${item})`,
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat",
            // resize
            height:"100vh",
            width:"100%"
            

        }}>
            <h2>working</h2>
            <p>huh</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}
