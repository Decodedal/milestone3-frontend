import { Box, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUpForm = () => {
  const navigate = useNavigate()


  const [user, setUser] = useState({
    firstName:'',
    lastName:'',
    email:'',
    password:''
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

    return (
    <Stack bgcolor={"red"} height="100vh" alignItems={"center"} justifyContent="center">
        
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit} autoComplete="off">
        <Stack width={"50vw"} bgcolor={"yellow"} height="50vh" alignItems="center" justifyContent="space-around">
            <Box >
                {/* <label htmlFor='first_name'>FirstName</label> */}
                <TextField label="firstname"
                 variant='outlined'
                 fullWidth
                 required
                 />
                <input
                    required
                    value={user.firstName}
                    onChange={e => setUser({...user, firstName:e.target.value})}
                    id="first_name"
                    name='first_name' 
                    />
            </Box>
            <Box>
                <label htmlFor='last_name'>LastName</label>
                <input
                    required
                    value={user.lastName}
                    onChange={e => setUser({...user, lastName:e.target.value})}
                    id="last_name"
                    name='last_name' 
                    />
            </Box>
            <Box>
                <label htmlFor='email'>Email</label>
                <input
                    required
                    value={user.email}
                    onChange={e => setUser({...user, email:e.target.value})}
                    id='email'
                    name='email' 
                    />
            </Box>
            </Stack>
        </form>
        
    </Stack>
  )
}

export default SignUpForm