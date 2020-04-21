import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const BooksContainer = props => {
  const bookCards = props.books.length > 0 ?
    props.books.map(t => (<div key={t.id} className="w3-quarter"><Link to={`/books/${t.id}`}>{t.attributes.title}</Link></div>)) :
    null
  return (
    <div className=" w3-row-padding w3-container w3-padding-32 w3-center">

        {bookCards}

    </div>
  )

}

const mapStateToProps = state => {
  return {
    books: state.userBooks
  }
}

export default connect(mapStateToProps)(BooksContainer)
