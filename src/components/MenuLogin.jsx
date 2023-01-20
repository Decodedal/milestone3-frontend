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

  const clearCartDb = async() =>{
    return(
      await fetch(`http://localhost:4000/items/deleter/${currentUser.user_id}`,{
        method:"POST",
        headers:{
            'Content-Type' : 'application/json'
        }
    })
    )
  }


    //updates db cart status for departing user so it can be recovered
    const updateCartDB = async(item) =>{
      return(
        await fetch('http://localhost:4000/items/cart',{
          method:"POST",
          headers:{
              'Content-Type' : 'application/json'
          },
          body: JSON.stringify({
            user_id: currentUser.user_id,
            item_id: item.id,
            cart:true,
            quantity:item.quantity
          })
      })
      )
    }

    const handleLogout = async () =>{
      await clearCartDb()
      const cart = localStorage.getItem("style_central_cart")
      const workIt = JSON.parse(cart)
      for(let item of workIt){
        updateCartDB(item)
      }
       localStorage.clear()
      setCurrentUser(null)
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