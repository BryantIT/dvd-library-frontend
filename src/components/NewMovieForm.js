import React from 'react';

const NewMovieForm = () => {
  return (
    <form>
      <input placeholder="Title" name="title" type="text" />
      <input placeholder="Release Year" name="year" type="text" />
      <textarea placeholder="Description" name ="description" />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default NewMovieForm
