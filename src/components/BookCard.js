import React from 'react'

const BookCard = ({ book }) => {
  return (
    book ?
      <div>
        <h3>{book.attributes.title}</h3>
        <p>{book.attributes.author}</p>
        <p>{book.attributes.description}</p>
      </div> :
      <p>This the the Book card with no book!</p>
  )
}

export default BookCard
