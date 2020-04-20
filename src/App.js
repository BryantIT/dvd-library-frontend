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
import NewMovieForm from './components/NewMovieForm';
import NewBookForm from './components/NewBookForm';
import MovieCard from './components/MovieCard';
import BookCard from './components/BookCard';
import Home from './components/Home';
import { Route, Switch, withRouter  } from 'react-router-dom';


class App extends Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn, userBooks, userMovies } = this.props
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' render={()=> loggedIn ? <MainContainer/> : <Home/>} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/movies' component={MoviesContainer} />
          <Route exact path='/books' component={BooksContainer} />
          <Route exact path='/movies/new' component={NewMovieForm} />
          <Route exact path='/books/new' component={NewBookForm} />
          <Route exact path='/movies/:id' render={props => {
              const movie = userMovies.find(movie =>
                movie.id === props.match.params.id)

                return <MovieCard movie={movie}{...props}/>
              }
            } />
          <Route exact path='/books/:id' render={props => {
              const book = userBooks.find(book =>
                book.id === props.match.params.id)

                return <BookCard book={book}{...props}/>
              }
            } />
          <Route exact path='/movies/:id/edit' render={props => {
                const movie = userMovies.find(movie =>
                  movie.id === props.match.params.id)

                  return <NewMovieForm movie={movie}{...props}/>
                }
              } />
            <Route exact path='/books/:id/edit' render={props => {
                const book = userBooks.find(book =>
                  book.id === props.match.params.id)

                  return <NewBookForm book={book}{...props}/>
                }
              } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    userMovies: state.userMovies,
    userBooks: state.userBooks
  })
}


export default withRouter(connect(mapStateToProps, {getCurrentUser})(App));
