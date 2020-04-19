import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser';
import Nav from './components/Nav';
import Login from './components/Login';
import Logout from './components/Logout';
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
          <Route exact path='/login' component={Login} />
          <Route exact path='/logout' component={Logout} />
          <Route exact path='/my-movies' component={MoviesContainer} />
          <Route exact path='/my-books' component={BooksContainer} />
      </div>
    );
  }
}



export default connect(null, {getCurrentUser})(App);
