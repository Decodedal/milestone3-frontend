import { Login } from '@mui/icons-material'
import { Box, Button, IconButton, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'

const MenuLogin = () => {
    const [open, setOpen] = useState(false)
  return (
    
    <Box display={{xs:"none", md:"block"}}>
        <IconButton onClick={e => setOpen(true)} color='inherit'>
           <Login/>
        </IconButton>
        <Button variant='Outlined' onClick={e => setOpen(true)}> Login</Button>
    
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
     </Box>
  )
}

export default MenuLogin