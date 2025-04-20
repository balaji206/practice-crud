import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// write a form that taking bookname, authorname, image
function CreateBook() {
  const navigate = useNavigate();
  const [book,Setbook] = useState({
    title:'',
    author:'',
    image:''
})

  const handlechange=(e)=>
  {
    const {name,value} = e.target;
    Setbook(prev=>({
      ...prev,
      [name]:value
    }))
  }

  const handlesubmit=async(e)=>{
    e.preventDefault();
    try{
      const res = await axios.post('http://localhost:8000/create',book);
      alert('book was added');
      Setbook({title:'',author:'',image:''});
      navigate('/')
    }
    catch(err)
    {
      console.error(err);
      alert('error in adding book');
    }
  }
  return (
    <div>
      <form className='book' onSubmit={handlesubmit}>

        <label>Book Name:</label>
        <input type="text" name='title'value={book.title} onChange={handlechange}/>
        <br />
        <label>Author Name:</label>
        <input type="text" name="author" value={book.author} onChange={handlechange}/>
        <br />
        <label>Image:</label>
        <input type="url" name="image" id="" value={book.image} onChange={handlechange}/>

        <button className='submit'>Add Book</button>
      </form>
    </div>
  )
}

export default CreateBook
