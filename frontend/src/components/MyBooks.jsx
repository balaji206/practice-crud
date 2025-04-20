import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
function MyBooks({_id,name, author,image }) {

  const navigate = useNavigate();
  const handledelete=()=>{
    axios.delete(`http://localhost:8000/delete/${_id}`)
    .then(()=>{
      alert('book is deleted successfully')
      navigate('/')
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div>
      <img src= {image} alt={name}/>
      <p>{name}</p>
      <p>{author}</p>
      <Link to={`/edit/${_id}`}><button>edit</button> </Link>
      {/* when clicking edit button it should go to the EditBookPage */}
      
    <button onClick={handledelete}>delete</button>
 {/* write a function to delete the book */}
    </div>
  )
}

export default MyBooks
