import React, { Component } from 'react';
import './App.css';
import TrackBlock from './tracks/TrackBlock.js';
import Feature from './features/Feature';
import Menu from './menu/Menu';
import Footer from './features/Footer';
import {Provider} from "mobx-react";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Login from './user/Login';
import SignUp from './user/SignUp';
import About from './features/About';
import Favorites from './tracks/Favorites';
import UserStore from "./stores/UserStore";
import TrackStore from './stores/TrackStore';
var axios = require("axios");


class App extends Component {

  render() { 
    return (        
    <Provider userStore={new UserStore()} trackStore={new TrackStore()}>


      <div className="App">
        <Router>
            <div>
            <header><Menu getUser={this.getUser}/></header>           
            <Feature/> 
            <div className="container">
              <Route exact path='/' render={() => <TrackBlock />} />
              <Route path='/login' render={() => <Login history={this.props.history} setUser={this.setUser} success={this.state.success} />} />
              <Route path='/signup' render={() => <SignUp />} />
              <Route path='/about' render={() => <About />} />
              <Route path='/favorites' render={()=> <Favorites getUser={this.getUser} musicData={this.state.musicData} playCount={this.state.playCount} />} />
            </div>
           <Footer />
           </div>
          </Router>
        </div>
      </Provider>
      );
  }
}

export default App;