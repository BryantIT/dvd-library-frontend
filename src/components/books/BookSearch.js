import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const BookSearch = props => {

  const handleChange = event => {
    const { name, value } = event.target
  }

  const bookCards =

    props.books.sort((a, b) => a.attributes.title.localeCompare(b.attributes.title)).map(t => (
      <div key={t.id} className="w3-quarter w3-margin-bottom">
        <div className="box gallery">
          <div className="card">
            <div className="background">
              <div className="info">
                <Link className="overlay" to={`/books/${t.id}`}></Link>
                <h2>{t.attributes.title}</h2>
                <p><small>by: </small>{t.attributes.author}</p>
                <div className="foot">
                  <i className="line"></i>
                  <p>{t.attributes.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>))
  return (
    <div className="w3-row-padding w3-container w3-padding-32 w3-center">
    <div className="search-container">
        <input type="text" className="search-input" onChange={handleChange}></input>
    </div>
        {bookCards}
    </div>
  )

}

const mapStateToProps = state => {
  return {
    books: state.userBooks
  }
}

export default connect(mapStateToProps)(BookSearch)
