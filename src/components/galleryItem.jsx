import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Checkbox, Collapse, Grid, IconButton, styled, Typography } from '@mui/material'
import { useState, useContext, useEffect } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CurrentUser } from '../context/UserContext'


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const GalleryItem = ( { item }, { key } ) => {

    const {currentUser, setCurrentUser} = useContext(CurrentUser)

    const [message, setMessage]=useState(null)

    const [expanded, setExpanded] = useState(false);

    const[checked, setChecked] = useState(false)


    const handleCheck = () =>{
      setChecked(!checked)
    }

    
      
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    //warns user that they must be signed in to use items and then removes the meassage after 4 seconds
    const handeSetMessage = () =>{
        setMessage("You must be signed in to Like items")
       
           setTimeout(() => {
            setMessage(null)
           }, 4000);
       
    }
//fetch dbdata for item likes
    useState(async()=>{
      if(currentUser !== null){
      const resData = await fetch(`https://style-central-bakcend.onrender.com/items/${currentUser.user_id}`)
      const parsedData = await resData.json()
      for(let i of parsedData){
        if(i.item_id === item.id){
          setChecked(true)
          console.log(checked)
        }
      }
    }
    },[])

    
    //when an item checked status changes db entry is created or updated
    const handleLike = ( async(item, bool) => {
        setChecked(!checked)
        await fetch('https://style-central-bakcend.onrender.com/items/like',{
            method:"POST",
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
              user_id: currentUser.user_id,
              item_id: item.id,
              liked: bool
            })
        })
        console.log(checked)
    })
   

  return (
    <Grid item xs={12} sm={6} lg={3} >
    <Card sx={{ maxWidth: "100%"}} key={key}>
    <CardActionArea href={`/${item.id}`} >
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt={item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {item.title}
        </Typography>
        <Typography color="red">{message}</Typography>
      </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
      
      {/* if their is no current user the checkbox is diabled */}
        { currentUser === null ? 
        <IconButton onClick={() => handeSetMessage()}  aria-label="add to favorites">
        <Checkbox disabled icon={<FavoriteBorder/>}/>
        </IconButton> 
        : 
        <Box  aria-label="add to favorites">
          {/* runs function to update database based on item being liked or not */}
        {
          checked === false 
          ?
          <IconButton onClick={()=> handleLike(item, true)}>
          <FavoriteBorder/>
          </IconButton>
          :
          <IconButton onClick={()=> handleLike(item, false)}>
          <Favorite sx={{color:'red'}}/>
          </IconButton>
        }
        </Box>
        }
        
    <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography variant="body2"   color="text.secondary">
         {item.description}
        </Typography>
        </CardContent>
      </Collapse>
  </Card>
  </Grid>
  )
}

export default GalleryItem