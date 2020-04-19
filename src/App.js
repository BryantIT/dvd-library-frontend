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
import Home from './components/Home';
import { Route, Switch  } from 'react-router-dom';


class App extends Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn } = this.props
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' render={()=> loggedIn ? <MainContainer/> : <Home/>} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/my-movies' component={MoviesContainer} />
          <Route exact path='/my-books' component={BooksContainer} />
        </Switch>  
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}


export default connect(mapStateToProps, {getCurrentUser})(App);
