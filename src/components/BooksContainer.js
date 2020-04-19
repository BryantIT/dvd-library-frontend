import React from 'react';
import { connect } from 'react-redux';

const BooksContainer = props => {
  const bookCards = props.books.length > 0 ?
    props.books.map(t => (<p key={t.id}>{t.attributes.title}</p>)) :
    null
  return bookCards
}

const mapStateToProps = state => {
  return {
    books: state.userBooks
  }
}

export default connect(mapStateToProps)(BooksContainer)
