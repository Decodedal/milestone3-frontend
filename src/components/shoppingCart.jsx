import { Close, ShoppingCartOutlined } from '@mui/icons-material'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Drawer, IconButton, Stack, Typography } from '@mui/material'
import React, {useContext, useState} from 'react'
import { CartContext } from '../context/CartContext'


const ShoppingCart = () => {

    const {cart, setCart}  = useContext(CartContext)

    const [cartOpen, setCartOpen] = useState(false)

    console.log(cart)

    const handleCartOpen = () => {
        if(cart.length === 0){
            setCartOpen(false)
        }else{
            setCartOpen(true)
        }
    }
   

  return (
    <>
    <IconButton onClick={e=> handleCartOpen()} color='inherit'>
         <ShoppingCartOutlined />
    </IconButton>
               
                <Drawer 
          
          anchor="right" //from which side the drawer slides in

          variant="temporary" //if and how easily the drawer can be closed

          open={cartOpen} //if open is true, drawer is shown
          
          onClose={e => setCartOpen(false)} //function that is called when the drawer should close
        
          onOpen={e =>  setCartOpen(true)} //function that is called when the drawer should open
        >
            
            <Box sx={{
                  p: 2,
                  height: 1,
                  backgroundColor: "primary.light",
                }}>
              {/* The inside of the drawer */}
              <IconButton onClick={e => setCartOpen(false)}  sx={{mb: 2}}>
                    <Close />
                  </IconButton>

                  <Divider sx={{mb: 2}}/>
                  <Typography> 
                        Cart
                    </Typography>
                  <Stack sx={{height:"30vh"}} justifyContent="space-evenly">
                    {/* will return items in cart as a list of cards and should stop it from breaking if their are no items in the cart */}
                    {
                        cart.length != 0 ? 
                        cart.map((item, key) =>{
                            return(
                                <Card key={key} sx={{ maxWidth: 200 }}>
                                <CardMedia
                                  component="img"
                                  alt="green iguana"
                                  height="100"
                                  image = {item.image}
                                />
                                <CardContent>
                                  <Typography gutterBottom component="div">
                                    {item.title}
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                    {item.size === "select a size" ? "" : item.size}
                                  </Typography>
                                </CardContent>
                                <CardActions>
                                  <Button size="small">Share</Button>
                                  <Button size="small">Learn More</Button>
                                </CardActions>
                              </Card>
                            )
                        })
                        :"nothing to see here"
                    }
                    <Divider/>
                    
                  </Stack>
            </Box>
        </Drawer>
    
    </>
  )
}

export default ShoppingCart