import React, { Component } from 'react';
import ContactCard from "./ContactCard";
import './App.css';

class App extends Component {
  render(){
    return(
      <>
        < ContactCard
          name = "Ryan"
          mobile = "3433444324"
          work = "2223332323"
          email = "ryan@gmail.com"
        />
      </>

    );
  }
}

export default App;
