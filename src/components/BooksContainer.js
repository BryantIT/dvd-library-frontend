import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const BooksContainer = props => {
  const bookCards = props.books.length > 0 ?
    props.books.map(t => (
      <div key={t.id} className="w3-quarter">
        <div className="box gallery">
          <div className="card">
            <div className="background">
              <div className="info">
                <Link className="overlay" to={`/books/${t.id}`}></Link>
                <h2>{t.attributes.title}</h2>
                <p><small>by: </small>{t.attributes.author}</p>
                <div className="foot">
                  <i className="line"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>)) : null
  return (
    <div className="w3-row-padding w3-container w3-padding-32 w3-center">

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
