import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser';
import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import MainContainer from './components/MainContainer';
import BooksContainer from './components/BooksContainer';
import MoviesContainer from './components/MoviesContainer';
import MovieCard from './components/MovieCard';
import BookCard from './components/BookCard';
import EditBookFormWrapper from './components/EditBookFormWrapper';
import EditMovieFormWrapper from './components/EditMovieFormWrapper';
import NewBookFormWrapper from './components/NewBookFormWrapper';
import NewMovieFormWrapper from './components/NewMovieFormWrapper';
import { Route, Switch, withRouter  } from 'react-router-dom';


class App extends Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn, userMovies, userBooks } = this.props
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' render={()=> loggedIn ? <MainContainer/> : <Home/>} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/movies' component={MoviesContainer} />
          <Route exact path='/books' component={BooksContainer} />
          <Route exact path='/movies/new' component={NewMovieFormWrapper} />
          <Route exact path='/books/new' component={NewBookFormWrapper} />
          <Route exact path='/movies/:id' render={props => {
              const movie = userMovies.find(movie =>
                movie.id === props.match.params.id)

                return <MovieCard movie={movie} {...props}/>
              }
            }/>
          <Route exact path='/books/:id' render={props => {
              const book = userBooks.find(book =>
                book.id === props.match.params.id)

                return <BookCard book={book} {...props}/>
              }
            }/>
          <Route exact path='/movies/:id/edit' render={props => {
                const movie = userMovies.find(movie =>
                  movie.id === props.match.params.id)

                  return <EditMovieFormWrapper movie={movie} {...props}/>
                }
              }/>
          <Route exact path='/books/:id/edit' render={props => {
              const book = userBooks.find(book =>
                book.id === props.match.params.id)

                return <EditBookFormWrapper book={book} {...props}/>
              }
            }/>
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
