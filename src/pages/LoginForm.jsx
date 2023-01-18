import { Box, Button, Stack, styled, TextField, Typography } from '@mui/material'
import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CurrentUser } from '../context/UserContext'


const StyledTextfield= styled(TextField)({
    marginTop:20,
    marginBottom:20,
    display:"block"
})

const LoginForm = () => {
  const navigate = useNavigate()
  
  const {currentUser, setCurrentUser} = useContext(CurrentUser)

const [credentials, setCredentials] = useState({
    email:'',
    password:'',
})

const [errorMessage, setErrorMessage] = useState(null)



   
async function handleSubmit(e) {
    e.preventDefault()
    const response = await fetch(`http://localhost:4000/authentication/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })

    const data = await response.json()

    if(response.status === 200){
        setCurrentUser(data.user)
        localStorage.setItem('token', data.token)
        navigate('/shop/all')
  
    }else{
        setErrorMessage(data.message)
    }

    
}
  


// function handleSubmit(){
//     console.log(JSON.stringify(credentials))
// }


    return (
    <Stack  height="100vh" alignItems={"center"} justifyContent="center">
        <h1>Login</h1>
        <Typography mt={2} color="red" fontWeight={"bold"}>{errorMessage}</Typography>
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