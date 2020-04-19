import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser';
import Nav from './components/Nav';
import Login from './components/Login';
import Signup from './components/Signup';
import MainContainer from './components/MainContainer';
import BooksContainer from './components/BooksContainer';
import MoviesContainer from './components/MoviesContainer';
import { Route  } from 'react-router-dom';


class App extends Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div>
        <Nav />
          <Route exact path='/' component={MainContainer} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/my-movies' component={MoviesContainer} />
          <Route exact path='/my-books' component={BooksContainer} />
      </div>
    );
  }
}



export default connect(null, {getCurrentUser})(App);
