import { Close, ShoppingCartOutlined } from '@mui/icons-material';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Drawer, IconButton, Stack, styled, Typography } from '@mui/material';
import React, {useContext, useState} from 'react';
import { CartContext } from '../context/CartContext';
import Badge from '@mui/material/Badge';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -5,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

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
   
    // const handleAdd = (id) =>{
    //     let index
    //     for(let i = 0; i<cart.length; i++){
    //         if(cart.id === id){
    //             index = i
    //         } 
    //     }
    //     setCart(...cart,cart[index].quantity + 1)
    // }
    
    // const handleAddToCart = (clickedItem) => { 
    // setCart((prev) => {
    //     const isItemInCart = prev.find((item) => item.id === clickedItem.id);
  
    //     if (isItemInCart) {
    //       return prev.map((item) =>
    //         item.id === clickedItem.id
    //           ? { ...item, quantity: item.quantity + 1 }
    //           : item
    //       );
    //     }
  
    //     return [...prev, { ...clickedItem, quantity: 1 }];
    //   });
    // };
    

  return (
    <>
 
    <IconButton onClick={e=> handleCartOpen()} color='inherit'>
        <StyledBadge badgeContent={cart.length} color="secondary">
         <ShoppingCartOutlined />
        </StyledBadge>
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
                  <span>Cart</span>

                  <Divider sx={{mb: 2}}/>
                  
                  <Stack sx={{height:"100vh"}} gap={3} justifyContent="space-evenly">
                    {/* will return items in cart as a list of cards and should stop it from breaking if their are no items in the cart */}
                    {
                        cart.length != 0 ? 
                        cart.map((item, key) =>{
                            return(
                                <>
                                <Card key={key} sx={{ maxWidth: 400, backgroundSize:"contain" }}>
                                <CardMedia
                                  component="img"
                                  // alt={item.title}
                                  height="100"
                                  
                                  // image = {item.image}
                                />
                                <CardContent>
                                  <Typography gutterBottom component="div">
                                    {/* {item.title} */}
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                    {/* {item.size === "select a size" ? "" : item.size} */}
                                  </Typography>
                                </CardContent>
                                <CardActions>
                                <Stack direction="row" justifyContent="space-between" alignItems="space-between">
                                  {/* <Button onClick={((item) => handleAddToCart(item))} size="small">+</Button> */}
                                        <Typography m={1}>
                                            {/* {item.quantity} */}
                                        </Typography>
                                  <Button size="small">-</Button>
                                </Stack>
                                </CardActions>
                              </Card>
                              </>
                              
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