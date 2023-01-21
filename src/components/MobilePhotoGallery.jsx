import { Box, ImageList, ImageListItem, styled, Typography } from '@mui/material'
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

const StyledBox= styled(Box)({
    backgroundColor:"rgba(0, 0, 0, 0.5)",
    width:"100%",
    position:"fixed",
    top:"10%",
    color:"violet",
    transform:"translate(0,-50%)",
    textAlign:"center",
    zIndex:5
    
  


})

const MobilePhotoGallery = () => {

    const photoArr = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9] 

  return (
    <Box position="absolute">
        <StyledBox >
            <Typography fontSize={"1.3rem"} fontWeight={500} fontFamily="Verdana">
                Shop the hottest deals of the season!
            </Typography>
        </StyledBox>
    <ImageList sx={{ width: "100%", height: "100%", }}  variant="masonry" cols={1} gap={0}>
    {photoArr.map((item) => (
      <ImageListItem key={item.img}>
        <img
          src={`${item}?w=161&fit=crop&auto=format`}
          srcSet={`${item}?w=161&fit=crop&auto=format&dpr=2 2x`}
          alt="style photo"
          loading="lazy"
        />
      </ImageListItem>
    ))}
  </ImageList>
  </Box>
  )
}

export default MobilePhotoGallery