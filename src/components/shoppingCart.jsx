import { Close, ShoppingCartOutlined } from '@mui/icons-material';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Drawer, IconButton, Stack, styled, Typography } from '@mui/material';
import React, {useContext, useEffect, useState} from 'react';
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
    const [item, setItem] = useState([])

    const [cartOpen, setCartOpen] = useState(false)

    

    const handleCartOpen = () => {
        if(cart.length === 0){
            setCartOpen(false)
        }else{
            setCartOpen(true)
        }
    }

  //retrieves cart data from local storage 
    useEffect(()=>{
      const data = window.localStorage.getItem('style_central_cart');
      if (data != null) setCart(JSON.parse(data))
     },[])

  //uses cart data to call product info from api I see this as a safty measure so that the user can only alter product id or quantity from local storage if they were savy. 
     useEffect(()=>{
      const itemArr = []
      cart.map((cartItem) =>{
      const getData = async() =>{
      const resdata = await fetch(`https://fakestoreapi.com/products/${cartItem.id}`)
      let parsedData = await resdata.json()
      itemArr.push(parsedData)
      }
   
      getData()
    })
    setItem(itemArr)
   },[])

   console.log(item)
//   useEffect(()=>{
//     const getData = async() =>{
//     const resdata = await fetch(`https://fakestoreapi.com/products/1`)
//     let parsedData = await resdata.json()
//     setItem(parsedData)
//     console.log(parsedData)
//  //    window.localStorage.setItem('test',JSON.stringify(parsedData))
//     }
 
//     getData()
//  },[])

    // useEffect(()=>{
    //   window.localStorage.setItem('style_central_cart', JSON.stringify(cart))
    //  },[cart])
    

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
                                  alt={item.title}
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
                                <Stack direction="row" justifyContent="space-between" alignItems="space-between">
                                  {/* <Button onClick={((item) => handleAddToCart(item))} size="small">+</Button> */}
                                        <Typography m={1}>
                                            {item.quantity}
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