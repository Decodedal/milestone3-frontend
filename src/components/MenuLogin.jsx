import { Login } from '@mui/icons-material'
import { Avatar, Box, Button, IconButton, Menu, MenuItem, styled } from '@mui/material'
import userEvent from '@testing-library/user-event'
import React, { useState, useContext } from 'react'
import { CurrentUser } from '../context/UserContext'

const StyledButton= styled(Button)({
  color:"inherit",
  fontWeight:"bold",

})



const MenuLogin = ({ show }) => {
    const [open, setOpen] = useState(false)

    const {currentUser, setCurrentUser} = useContext(CurrentUser)

    const handleLogout = () =>{
      setCurrentUser(null)
      localStorage.clear()
      window.location.reload()
    }

  return (
    
    <Box display={show}>
        <IconButton sx={{transform:"translatex(50%)"}} onClick={e => setOpen(true)} color='inherit'>
           <Login/>
        </IconButton> 
        <Button variant='Outlined' onClick={e => setOpen(true)}>{currentUser === null ? "Login" : <Avatar sx={{backgroundColor:"#0b07f5"}}>{currentUser.first_name[0]}{currentUser.last_name[0]}</Avatar>}</Button>
    
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
        <MenuItem>{ currentUser === null ? <StyledButton fullWidth color='inherit' href='/login'>Login</StyledButton> :<StyledButton>Hello {currentUser.first_name} {currentUser.last_name}</StyledButton>}</MenuItem>
        <MenuItem><StyledButton fullWidth color='inherit' href='/signup'>Create Account</StyledButton></MenuItem>
        <MenuItem><StyledButton fullWidth onClick={() => handleLogout()}>Logout</StyledButton></MenuItem>
     </Menu>
     </Box>
  )
}

export default MenuLogin