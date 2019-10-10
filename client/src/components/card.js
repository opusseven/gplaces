import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../card.css'

const useStyles = makeStyles({
    card: {
      minWidth: 7,
      width: 4,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const cardz = ({name,vicinity,rating,price_level,totalratings}) => {   


    
    return (
       
        <div>
            
            {/* <p>Woahhhhhh</p>
            <p>{name}</p>
            <p>{location}</p>
            <p>{rating}</p> */}


            <Card className= "bullet">
      <CardContent>
        <Typography className="bulletin" color="black" gutterBottom>
          {name}
        </Typography>
        <Typography className="bulletin" variant="h5" component="h2">
          {rating}
        </Typography>
        <Typography className="bulletin" color="black">
         Location: {vicinity}
        </Typography>
        <Typography className="bulletin" variant="body2" component="p">
          Price: {price_level}/5
          <br />
         Total Ratings: {totalratings}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className="bullet explore" size="small">Explore</Button>
      </CardActions>
    </Card>












        </div>
    )
}

export default cardz
