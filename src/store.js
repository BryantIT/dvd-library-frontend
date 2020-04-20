import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// import usersReducer from './reducers/users';
import currentUser from './reducers/currentUser';
import loginForm from './reducers/loginForm';
import userMovies from './reducers/userMovies';
import userBooks from './reducers/userBooks';
import signupForm from './reducers/signupForm';
import bookForm from './reducers/bookForm';
import movieForm from './reducers/movieForm';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  // users: usersReducer,
  currentUser,
  loginForm,
  userMovies,
  userBooks,
  signupForm,
  bookForm,
  movieForm
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store
