import React, { Component } from 'react'
import '../Question.css'
import Cardz from './card'
export default class QuestionList extends Component {
                constructor(props){
                    super(props)
                    this.state = {
                        data: 'hide',
                        name: '',
                        gender: '',
                        location: '',
                        criteria: '',
                        places: [],
                        test: 'medical'
                    }
                    let showData = this.showData.bind(this)
                }

                showData = () => {
                    let INFO = this.state.criteria
                    let LOC = this.state.location
                    console.log(this.state.location)
                    console.log(INFO)
                    fetch(`http://localhost:3005/ruckus/${INFO}/locale/${LOC}`)
                    .then(res => res.json())
                    .then(
                        (result) => {
                        this.setState({ places: result.results })
                         console.log(this.state.places)
                        })
                    }
                toggleDiv = () => {
                    console.log("hiii")
                    this.setState({data:'show'})
                }

                handleNameChange = (e) => {
                    this.setState({name: e.target.value});
                    console.log(this.state.name)
                 }

                 handleGenderChange = (e) => {
                    this.setState({gender: e.target.value});
                    console.log(this.state.gender)
                 }

                 handleLocationChange = (e) => {
                    this.setState({location: e.target.value});
                    console.log(this.state.location)
                 }

                 handleCriteriaChange = (e) => {
                    this.setState({criteria: e.target.value});
                    console.log(this.state.criteria)
                 }
    render() {
        console.log(this.state.places)

        const items = this.state.places.map((spot, key) =>
    <Cardz name={spot.name} vicinity={spot.vicinity} rating={spot.rating} price_level={spot.price_level} totalratings={spot.user_ratings_total} /> 
        )
        return(
            <div>
            
<h1 class="ttle">DDAY</h1>
  <h2 class="mmle">Enter Your Information</h2>

  {/* <form method="" class="form" action="#"> */}
    <fieldset class="form-fieldset ui-input __first">
      <input type="text" name="name" id="username" tabindex="0" value={this.state.name} onChange={this.handleNameChange} />
      <label for="username">
        <span data-text="Name">Name</span>
      </label>
    </fieldset>
    
    <fieldset class="form-fieldset ui-input __second">
      <input type="text" name="gender" id="email" tabindex="0" value={this.state.gender} onChange={this.handleGenderChange} />
      <label for="email">
        <span data-text="Gender">Gender</span>
      </label>
    </fieldset>
    
    <fieldset class="form-fieldset ui-input __third">
      <input type="text" id="new-password" value={this.state.location} onChange={this.handleLocationChange}/>
      <label for="new-password">
        <span data-text="Desired Destination">Desired Destination</span>
      </label>
    </fieldset>
    
    <fieldset class="form-fieldset ui-input __fourth">
      <input type="Date" id="repeat-new-password" />
      <label for="repeat-new-password">
        <span data-text="Travel Dates">Travel Dates</span>
      </label>
    </fieldset>



    <fieldset class="form-fieldset ui-input __fourth">
      <input type="text" id="repeat-new-password" value={this.state.criteria} onChange={this.handleCriteriaChange} />
      <label for="repeat-new-password">
        <span data-text="What are you looking for ? (EX. bars,clubs,food,gyms,medical etc.)">Activities</span>
      </label>
    </fieldset>

  {/* <fieldset class="form-fieldset ui-input __fourth">   
   <h3>Categories</h3> <select id="new-password">
<option value=""></option>
<option value="#">Food</option>
<option value="#">Festivals</option>
<option value="#">NightLife</option>
<option value="#">Fitness</option>
<option value="#">Entertainment</option>
</select>
</fieldset> */}


<fieldset class="form-fieldset ui-input __fourth">   
   <h3>Whats important to you?</h3> <select id="new-password">
<option value=""></option>
<option value="#">Price</option>
<option value="#">Ratings</option>
<option value="#">Uniqueness</option>
<option value="#">Quality</option>
<option value="#">Peer Reccomendation</option>
</select>
</fieldset>

    
    <input type="submit" value="Submit" />
     <div class="form-footer">
      <button onClick={this.showData}  class="btn">Submmit</button>
      </div>
  {/* </form> */}

{items}
</div>

        )}}