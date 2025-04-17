import React from 'react'

function MyBooks({_id,name, author,image }) {
  return (
    <div>
      <img src= {image} alt={name}/>
      <p>{name}</p>
      <p>{author}</p>
<button>edit</button> {/* when clicking edit button it should go to the EditBookPage */}
    <button>delete</button> {/* write a function to delete the book */}
    </div>
  )
}

export default MyBooks
