import React from 'react'
import { Link } from 'react-router-dom'

const BookCard = ({ book }) => {

  return (
    book ?
      <div className="w3-row-padding w3-container w3-padding-32 w3-center">
        <div className="box gallery">
          <div className="card">
            <div className="background">
              <div className="info">
                <h3 className="bg">{book.attributes.title}</h3>
                <p className="bg"><small>by: </small>{book.attributes.author}</p>
                <div className="foot">
                  <i className="line"></i>
                    <p className="bg">{book.attributes.description}</p>
                </div>
              </div>
              <img src={book.attributes.imageurl} alt={book} className="cover-sizing"/>
            </div>
          </div>
        </div>
        <Link className="input-button" to={`/books/${book.id}/edit`}>Edit Book</Link>
      </div> : null
  )
}

export default BookCard
