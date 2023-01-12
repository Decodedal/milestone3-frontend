import { CheckroomOutlined, Login, ShoppingCartOutlined, Menu as NavMenu, Close } from '@mui/icons-material'
import { AppBar, Button, Divider, Drawer, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import { Box, Stack, styled } from '@mui/system'
import React, { useState } from 'react'
import MenuLogin from './MenuLogin'
import ShoppingCart from './shoppingCart'

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"
})

const Nav = () => {
  
    const [navOpen, setNavOpen] = useState(false)
  return (
    <AppBar sx={{position:{xs:"fixed", sm:"sticky"}}}>
        <StyledToolbar>
            <Stack direction='row' alignItems="center">
            <IconButton href='/' color='inherit'>
                <CheckroomOutlined/>
            </IconButton>
            <Typography display={{xs:"none", sm:"inline"}} fontWeight={500}>
                    Style Central
                </Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-around" minWidth="40%" display={{xs:"none", md:"flex"}}>
              
               <Button href='/shop/all' variant='Outlined'> Shop All</Button>
               <Button href="/shop/men%27s%20clothing" variant='Outlined'> Mens</Button>
               <Button href='/shop/women%27s%20clothing' variant='Outlined'> Womens</Button>
               <Button href='/shop/jewelery' variant='Outlined'> Jewelry</Button>
               <Button href='/shop/electronics' variant='Outlined'> Electronics</Button>
            </Stack>
            <Stack direction='row'>
                <ShoppingCart/>
                <MenuLogin/>
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
                  <Button href="/shop/all" variant="contained">Shop All</Button>
                  <Button href="/shop/men%27s%20clothing"  variant="contained">Mens</Button>
                  <Button href="/shop/women%27s%20clothing" variant="contained">Womens</Button>
                  <Button href="/shop/jewelery"  variant="contained">Jewelry</Button>
                  <Button href="/shop/electronics" variant="contained">Electronics</Button>
                  
                  </Stack>
            </Box>
        </Drawer>
   
        </StyledToolbar>
    </AppBar>
  )
}

export default Nav