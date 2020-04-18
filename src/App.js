import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser';
import Nav from './components/Nav';
import MainContainer from './components/MainContainer';

class App extends Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div>
        <Nav />
        <MainContainer />
      </div>
    );
  }
}



export default connect(null, {getCurrentUser})(App);
