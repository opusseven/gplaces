import React, { Component } from 'react'
import '../Question.css'
export default class QuestionList extends Component {
                constructor(props){
                    super(props)
                    this.state = {
                        data: 'hide'
                    }

                }

                toggleDiv = () => {
                    console.log("hiii")
                    this.setState({data:'show'})
                }

    render() {
        return (
            <div>
<h1 class="ttle">DDAY</h1>
  <h2 class="mmle">Enter Your Information</h2>

  <form method="post" class="form" action="http://localhost:3005/dyno">
    <fieldset class="form-fieldset ui-input __first">
      <input type="text" name="age" id="username" tabindex="0" />
      <label for="username">
        <span data-text="Age">Age</span>
      </label>
    </fieldset>
    
    <fieldset class="form-fieldset ui-input __second">
      <input type="text" name="gender" id="email" tabindex="0" />
      <label for="email">
        <span data-text="Gender">Gender</span>
      </label>
    </fieldset>
    
    <fieldset class="form-fieldset ui-input __third">
      <input type="text" id="new-password" />
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
   <h3>Categories</h3> <select id="new-password">
<option value=""></option>
<option value="#">Food</option>
<option value="#">Festivals</option>
<option value="#">NightLife</option>
<option value="#">Fitness</option>
<option value="#">Entertainment</option>
</select>
</fieldset>


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

    {/* <div class="form-footer">
      <button  onClick={this.toggleDiv}  class="btn">Submit</button>
    </div> */}
    <input type="submit" value="Submit" />
  </form>

</div>

        )}}