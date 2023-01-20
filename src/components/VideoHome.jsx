import { Box, Stack, Typography } from '@mui/material'

import React from 'react'

import BgVideo from "../assets/landingbg.mp4"



const HomeVideo = () => {

 const cool = <Box bgcolor="rgb(102, 179, 255,0.5)" border={1} borderRadius="10px">
<Typography color={"#fff"} fontSize={"12rem"} fontFamily="Verdana" sx={{textShadow:"1px 4px 2px rgba(0,0,0,0.6)"}}>
    Cool Styles
</Typography>
</Box>

  return (
    <Box  >
    <Box zIndex={-2} position={"absolute"} width="100%" height="100%">
        <video autoPlay loop muted
        style={{
            width:"100%",
            maxHeight:"100vh",
            objectFit:"cover",
            zIndex:"-1",
            position:"absolute"
         

        }}
        >
            <source src={BgVideo} type="video/mp4"/>
        </video>
        <Stack zIndex={3}  minHeight="100vh" justifyContent="center" alignItems="flex-start">
            {cool}
        </Stack>
    </Box> 
    </Box>
  )
}

export default HomeVideo