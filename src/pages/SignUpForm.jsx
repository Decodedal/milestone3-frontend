import { Box, Button, Stack, styled, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const StyledTextfield= styled(TextField)({
    marginTop:20,
    marginBottom:20,
    display:"block"
})

const SignUpForm = () => {
  const navigate = useNavigate()
  

  const [user, setUser] = useState({
    first_name:'',
    last_name:'',
    email:'',
    password:''
  })

  async function handleSubmit(e){
    e.preventDefault()

    await fetch('https://style-central-bakcend.onrender.com/users/',{
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
        
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit} autoComplete="off">
        <Stack width={"50vw"}  height="50vh" alignItems="center" justifyContent="space-around">
          
                {/* <label htmlFor='first_name'>FirstName</label> */}
                <StyledTextfield
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
                 />
            
            
            <StyledTextfield
                 label="Email"
                 variant='outlined'
                 fullWidth
                 required
                 onChange={e => setUser({...user, email:e.target.value})}
                 name='email'
                 />

            <StyledTextfield
                 label="password"
                 variant='outlined'
                 fullWidth
                 required
                 onChange={e => setUser({...user, password:e.target.value})}
                 name='password'
                 />
            
            <Button fullWidth onClick={e => handleSubmit(e)} variant="contained">Submit</Button>
            </Stack>
        </form>
        
    </Stack>
  )
}

export default SignUpForm