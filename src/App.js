import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
// import Albums from './components/albums/albums';
// import Links from './components/links/links';
import Content from './components/content/content';
import Login from './components/login/login';
import SearchForm from './components/SearchForm/SearchForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        {/* <Login /> */}

        <SearchForm />

         <Content /> 
        {/* <Albums />  
        <Links /> */}


      </div>

    );
  }
}

export default App;
