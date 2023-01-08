import React from 'react'
import VideoHome from "../components/VideoHome"
import PhotoGallery from '../components/PhotoGallery'
import MobilePhotoGallery from '../components/MobilePhotoGallery'
import { Box } from '@mui/material'

const Landing = () => {
  return (
    <>
    <Box display={{xs:"none", md:"block"}}>
    <PhotoGallery/>
    <VideoHome/>
    </Box>
    <Box display={{xs:"block", md:"none"}}>
    <MobilePhotoGallery/>
    </Box>
    </>
  )
}

export default Landing