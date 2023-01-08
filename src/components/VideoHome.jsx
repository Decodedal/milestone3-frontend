import { Box, Stack, Typography } from '@mui/material'
import { maxHeight } from '@mui/system'
import React from 'react'
import BgVideo from "../assets/landingbg.mp4"
import PhotoGallery from './PhotoGallery'


const HomeVideo = () => {
  return (
    <Box>
    <Box width="100%" height="100%">
        <video autoPlay loop muted
        style={{
            width:"100%",
            maxHeight:"100vh",
            objectFit:"cover",
            zIndex:"-1",
         

        }}
        >
            <source src={BgVideo} type="video/mp4"/>
        </video>
        {/* <Stack height="100%" justifyContent="center" alignItems="center">
            <Box width="20%" bgcolor="green">
                <Typography>
                    Shop the hottest fashons
                </Typography>
            </Box>
        </Stack> */}
    </Box> 
    </Box>
  )
}

export default HomeVideo