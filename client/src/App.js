import React from 'react';
import './App.css';
import Places from './components/places'
import QuestionList from './components/questions'
import AppBar from './components/appbar'
import FooterBar from './components/footerbar'
import Grid from '@material-ui/core/Grid';
import Card from './components/card'




function App() {

  return (
    <div className="App">
      <AppBar  />
      <QuestionList />
      <Places />
      {/* <Card name="qweefd" location="Monday" rating="why"/> */}
      <Grid container justify="center">
      <FooterBar />
      </Grid>
    </div>
      
  );
}

export default App;
