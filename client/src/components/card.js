import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../card.css'
import Modal from './modal'
// import Googlemap from './googlemap'
import { withGoogleMap, GoogleMap } from 'react-google-maps';


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

// const cardz = ({name,vicinity,rating,price_level,totalratings,photos}) => {   

  
    
//     return (
       
//         <div>
            
//             {/* <p>Woahhhhhh</p>
//             <p>{name}</p>
//             <p>{location}</p>
//             <p>{rating}</p> */}


//             <Card className= "bullet">
//       <CardContent>
//         <Typography className="bulletin" color="black" gutterBottom>
//           {name} {photos}
//         </Typography>
//         <Typography className="bulletin" variant="h5" component="h2">
//           {rating}
//         </Typography>
//         <Typography className="bulletin" color="black">
//          Location: {vicinity}
//         </Typography>
//         <Typography className="bulletin" variant="body2" component="p">
//           Price: {price_level}/5
//           <br />
//          Total Ratings: {totalratings}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button onClick={this.showModal} className="bullet explore" size="small">Explore</Button>
//       </CardActions>
      
//     </Card>



// </div>
// )
// }
export default class Cardz extends Component {


  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    const {name,vicinity,rating,price_level,totalratings,photos,photoz} = this.props;
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
        defaultZoom = { 13 }
      >
      </GoogleMap>
   ));

    return (
      <div>
        <Card className= "bullet">
     <CardContent>
         <Typography className="bulletin" color="black" gutterBottom>
           {name} {photos} {photoz}
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
       <Modal show={this.state.show} handleClose={this.hideModal} >
        <p>Pics,info, etc</p>
        {name}
     
        {/* <GoogleMapExample
          containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        /> */}


        </Modal>
         <Button onClick={this.showModal} className="bullet explore" size="small">Explore</Button>
       </CardActions>
      
     </Card> 
      </div>
    )
  }
}

   










//export default cardz
