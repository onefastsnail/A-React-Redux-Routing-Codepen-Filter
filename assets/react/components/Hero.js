import React from 'react';
import {Link, IndexLink} from 'react-router';

class Hero extends React.Component {

  //our constructor
  constructor(props) {
    //this calls the parent constructor
    super(props);
  }

  //Our method used by react, and is required for components
  render() {
    return (
      <div className="jumbotron">
        <h1>A React Redux Blog Filter</h1>
        <p>Something here</p>
      </div>
    );
  }
}

export default Hero;