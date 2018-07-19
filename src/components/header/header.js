import React, { Component } from 'react';
import './header.css';

class Header extends Component {

  render() {
    return (
<header className="App-header">
<div className="container">
  <div className="row">
    <div className="col-sm" id= "Header_block"> 
    
   </div>
    <div className="col-sm" id= "Header_center">
      <img src="../assets/crateDiggingRedStamp_Resize.jpg" className="App-logo" alt="logo" />
      <h1 className="App-title"><bold>CrateDiggingPHL</bold></h1>
    </div>
    <div className="col-sm" id= "Header_block">
    
    </div>
  </div>
</div>

</header>
    );
  }
}
export default Header;