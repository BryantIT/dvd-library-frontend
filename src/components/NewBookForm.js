import React from 'react';

const NewBookForm = () => {
  return (
    <form>
      <input placeholder="Title" name="title" type="text" />
      <input placeholder="Author" name="author" type="text" />
      <textarea placeholder="Description" name ="description" />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default NewBookForm
