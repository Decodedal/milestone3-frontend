import { Box, Button, Stack, styled, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const StyledTextfield= styled(TextField)({
    marginTop:20,
    marginBottom:20,
    display:"block"
})

const LoginForm = () => {
  const navigate = useNavigate()
  

  const [user, setUser] = useState({
    first_name:'',
    last_name:'',
    email:''
  })

  async function handleSubmit(e){
    e.preventDefault()

    await fetch('http://localhost:4000/users/',{
        method:"POST",
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(user)
    })
        navigate('/shop/all')
  }

// function handleSubmit(){
//     console.log(JSON.stringify(user))
// }

console.log(user)
    return (
    <Stack  height="100vh" alignItems={"center"} justifyContent="center">
        
        <h1>Login</h1>
        <form onSubmit={handleSubmit} autoComplete="off">
        <Stack width={"50vw"}  height="50vh" alignItems="center" justifyContent="space-around">
          
                {/* <label htmlFor='first_name'>FirstName</label> */}
                {/* <StyledTextfield
                 label="First name"
                 variant='outlined'
                 fullWidth
                 required
                 onChange={e => setUser({...user, first_name:e.target.value})}
                 name='first_name'
                 />
            
            
            <StyledTextfield
                 label="Last name"
                 variant='outlined'
                 fullWidth
                 required
                 onChange={e => setUser({...user, last_name:e.target.value})}
                 name='last_name'
                 /> */}
            
            
            <StyledTextfield
                 label="Email"
                 variant='outlined'
                 fullWidth
                 required
                 onChange={e => setUser({...user, email:e.target.value})}
                 name='email'
                 />
            
            <Button fullWidth onClick={e => handleSubmit(e)} variant="contained">Submit</Button>
            </Stack>
        </form>
        
    </Stack>
  )
}

export default LoginForm