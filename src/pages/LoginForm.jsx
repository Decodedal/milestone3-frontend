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
  

const [credentials, setCredentials] = useState({
    email:'',
    password:'',
})

const [errorMessage, setErrorMessage] = useState(null)



  async function handleSubmit(e){
    e.preventDefault()
  }

// function handleSubmit(){
//     console.log(JSON.stringify(credentials))
// }


    return (
    <Stack  height="100vh" alignItems={"center"} justifyContent="center">
        
        <h1>Login</h1>
        <form onSubmit={handleSubmit} autoComplete="off">
        <Stack width={"50vw"}  height="50vh" alignItems="center" justifyContent="space-around">
              
            <StyledTextfield
                 label="Email"
                 variant='outlined'
                 fullWidth
                 required
                 onChange={e => setCredentials({...credentials, email:e.target.value})}
                 name='email'
                 />

            <StyledTextfield
                 label="Password"
                 variant='outlined'
                 fullWidth
                 required
                 onChange={e => setCredentials({...credentials, password:e.target.value})}
                 name='password'
                 />   
            
            <Button fullWidth onClick={e => handleSubmit(e)} variant="contained">Submit</Button>
            </Stack>
        </form>
        
    </Stack>
  )
}

export default LoginForm