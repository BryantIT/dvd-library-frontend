import React, { Component } from 'react';
import './App.css';
import './style.scss';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser';
import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/users/Login';
import Signup from './components/users/Signup';
import MainContainer from './components/MainContainer';
import BooksContainer from './components/books/BooksContainer';
import MoviesContainer from './components/movies/MoviesContainer';
import MovieCard from './components/movies/MovieCard';
import BookCard from './components/books/BookCard';
import EditBookFormWrapper from './components/books/EditBookFormWrapper';
import EditMovieFormWrapper from './components/movies/EditMovieFormWrapper';
import NewBookFormWrapper from './components/books/NewBookFormWrapper';
import NewMovieFormWrapper from './components/movies/NewMovieFormWrapper';
import { Route, Switch, withRouter  } from 'react-router-dom';


class App extends Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn, userMovies, userBooks } = this.props
    return (
      <div className="main w3-main w3-content w3-padding">
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
