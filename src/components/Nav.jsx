import { CheckroomOutlined, Login, ShoppingCartOutlined } from '@mui/icons-material'
import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import { Box, Stack, styled } from '@mui/system'
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"
})

const Nav = () => {
    const [open, setOpen] = useState(false)
  return (
    <AppBar>
        <StyledToolbar>
            <Stack direction='row' alignItems="center">
            <IconButton color='inherit'>
                <CheckroomOutlined/>
            </IconButton>
            <Typography fontWeight={500}>
                    Style Central
                </Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-around" minWidth="30%">
               <Button variant='Outlined'> Mens</Button>
               <Button variant='Outlined'> Womens</Button>
               <Button variant='Outlined'> Jewelry</Button>
               <Button variant='Outlined'> Electronics</Button>
            </Stack>
            <Stack direction='row'>
                <IconButton color='inherit'>
                    <ShoppingCartOutlined />
                </IconButton>
            <Box>
                <IconButton onClick={e => setOpen(true)} color='inherit'>
                   <Login/>
                </IconButton>
                <Button variant='Outlined' onClick={e => setOpen(true)}> Login</Button>
                </Box>
                </Stack>
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