


import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Checkbox, Grid, IconButton, Typography } from '@mui/material'


const GalleryItem = ( { item }, { key } ) => {


  return (
    <Grid item xs={12} sm={6} lg={3} >
    <Card sx={{ maxWidth: "100%"}} key={key}>
    <CardActionArea>
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
        <Typography variant="body2"   color="text.secondary">
         {item.description}
        </Typography>
      </CardContent>
      <CardActions>
      <IconButton  aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite sx={{color:'red'}}/>}/>
      </IconButton>
      </CardActions>
    </CardActionArea>
  </Card>
  </Grid>
  )
}

export default GalleryItem