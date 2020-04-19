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
import NewMoviesForm from './components/NewMovies';
import NewBooksForm from './components/NewBooks';
import Home from './components/Home';
import { Route, Switch, withRouter  } from 'react-router-dom';


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
          <Route exact path='/movies' component={MoviesContainer} />
          <Route exact path='/books' component={BooksContainer} />
          <Route exact path='/movies/new' component={NewMoviesForm} />
          <Route exact path='/books/new' component={NewBooksForm} />
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


export default withRouter(connect(mapStateToProps, {getCurrentUser})(App));
