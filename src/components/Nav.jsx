import { CheckroomOutlined, Login, ShoppingCartOutlined, Menu as NavMenu, Close } from '@mui/icons-material'
import { AppBar, Button, Divider, Drawer, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import { Box, Stack, styled } from '@mui/system'
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"
})

const Nav = () => {
    const [open, setOpen] = useState(false)
    const [navOpen, setNavOpen] = useState(false)
  return (
    <AppBar sx={{position:{xs:"fixed", sm:"sticky"}}}>
        <StyledToolbar>
            <Stack direction='row' alignItems="center">
            <IconButton color='inherit'>
                <CheckroomOutlined/>
            </IconButton>
            <Typography display={{xs:"none", sm:"inline"}} fontWeight={500}>
                    Style Central
                </Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-around" minWidth="40%" display={{xs:"none", md:"flex"}}>
               <Button variant='Outlined'> Mens</Button>
               <Button variant='Outlined'> Womens</Button>
               <Button variant='Outlined'> Jewelry</Button>
               <Button variant='Outlined'> Electronics</Button>
            </Stack>
            <Stack direction='row'>
                <IconButton color='inherit'>
                    <ShoppingCartOutlined />
                </IconButton>
            <Box display={{xs:"none", md:"block"}}>
                <IconButton onClick={e => setOpen(true)} color='inherit'>
                   <Login/>
                </IconButton>
                <Button variant='Outlined' onClick={e => setOpen(true)}> Login</Button>
                </Box>
                <IconButton onClick={e=> setNavOpen(true)} color='inherit' sx={{display:{sm:"block", md:"none"}}}> 
                    <NavMenu/>
                </IconButton>
                </Stack>
                <Drawer
          
          anchor="right" //from which side the drawer slides in

          variant="temporary" //if and how easily the drawer can be closed

          open={navOpen} //if open is true, drawer is shown
          
          onClose={e => setNavOpen(false)} //function that is called when the drawer should close
        
          onOpen={e =>  setNavOpen(true)} //function that is called when the drawer should open
        >
            
            <Box sx={{
                  p: 2,
                  height: 1,
                  backgroundColor: "primary.light",
                }}>
              {/* The inside of the drawer */}
              <IconButton onClick={e => setNavOpen(false)}  sx={{mb: 2}}>
                    <Close />
                  </IconButton>

                  <Divider sx={{mb: 2}}/>
                  <Stack sx={{height:"30vh"}} justifyContent="space-evenly">
                  <Button href='#' variant="contained">Mens</Button>
                  <Button href='#' variant="contained">Womens</Button>
                  <Button href='#' variant="contained">Jewelry</Button>
                  <Button href='#' variant="contained">Electronics</Button>
                  
                  </Stack>
            </Box>
        </Drawer>
                <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>My WishList</MenuItem>
        <MenuItem>Logout</MenuItem>
        <MenuItem>Create Account</MenuItem>
      </Menu>
        </StyledToolbar>
    </AppBar>
  )
}

export default Nav