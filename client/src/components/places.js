import React, { Component } from 'react'
import QuestionList from './questions'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Cardz from './card'
import '../card.css'

export default class Googleplaces extends Component {
    constructor() {
        super();
        this.state = {
            places : [],
            toggleState: false
        }
    }


    
    // componentDidUpdate() {
    // fetch("/dday")
    //     .then(res => res.json())
    //     .then(
    //         (result) => {
    //         this.setState({ places: result.results })
    //          console.log(this.state.places)
            
    //         })
    
    // }

    // showData = () => {
        
    //     fetch("/ruckus")
    //     .then(res => res.json())
    //     .then(
    //         (result) => {
    //         this.setState({ places: result.results })
    //          console.log(this.state.places)
    //         })
    //     }

    // this.state.cart.map((item, key) =>
    // <li key={item.id}>{item.name}</li>


  render() {

   
    const items = this.state.places.map((spot, key) =>
    <Cardz name={spot.name} vicinity={spot.vicinity} rating={spot.rating} price_level={spot.price_level} totalratings={spot.user_ratings_total} /> 
     //<p key={spot.id}>{spot.name}    Rating:{spot.rating}   Price:{spot.price_level}/5     Location:{spot.vicinity} Total Ratings-{spot.user_ratings_total}<br/></p>
    )
   
      
      return (<div>
           
      <QuestionList />
      {/* <div class="form-footer">
      <button  onClick={this.showData}  class="btn">Submit</button>
      </div> */}
      {items}
        </div>);

        }

    }
