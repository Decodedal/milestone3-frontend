import { ImageList, ImageListItem } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
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

    const photoArr = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9] 

  return (
   <Box width="100%" >
    <ImageList sx={{ width: "100%", height: "100vh" }} variant="woven" cols={{xs:1, md:3}} gap={8}>
  {photoArr.map((item, key) => (
    <ImageListItem key={key}>
      <img
        src={`${item}?w=161&fit=crop&auto=format`}
        srcSet={`${item}?w=161&fit=crop&auto=format&dpr=2 2x`}
        alt="stylish photo"
        loading="lazy"
        style={{borderRadius:"20px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}
      />
    </ImageListItem>
  ))}
</ImageList>
   </Box>
  )
}

export default PhotoGallery