import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const BooksContainer = props => {
  const bookCards = props.books.length > 0 ?
    props.books.map(t => (<p key={t.id}><Link to={`/books/${t.id}`}>{t.attributes.title}</Link></p>)) :
    null
  return bookCards
}

const mapStateToProps = state => {
  return {
    books: state.userBooks
  }
}

export default connect(mapStateToProps)(BooksContainer)
