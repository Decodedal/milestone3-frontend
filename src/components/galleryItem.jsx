import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Checkbox, Collapse, Grid, IconButton, styled, Typography } from '@mui/material'
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

    const [expanded, setExpanded] = useState(false);
      
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

  return (
    <Grid item xs={12} sm={6} lg={3} >
    <Card sx={{ maxWidth: "100%"}} key={key}>
    <CardActionArea href={`/item/${item.id}`} >
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
      </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
      <IconButton  aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite sx={{color:'red'}}/>}/>
      </IconButton>
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