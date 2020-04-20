import React from 'react'
import { Link } from 'react-router.dom'

const BookCard = ({ book }) => {
  return (
    book ?
      <div>
        <h3>{book.attributes.title}</h3>
        <p>{book.attributes.author}</p>
        <p>{book.attributes.description}</p>
        <Link to={`/books/${book.id}/edit`}>Edit Book</Link>
      </div> : null

  )
}

export default BookCard
