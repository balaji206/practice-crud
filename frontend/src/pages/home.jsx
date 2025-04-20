import React,{useEffect, useState} from 'react'
import MyBooks from '../components/MyBooks'

import { Link } from 'react-router-dom'
import axios from 'axios'

function home() {
    const [book, setBook]=useState([])
    // write a function to get the book from backend and display it 
    useEffect(()=>{
      axios.get("http://localhost:8000/books")
      .then((res)=>{
        setBook(res.data)
      })
      .catch(err=>console.error(err))
    },[])
  return (
    <div>
        <div><Link to='/create'><button>create book</button></Link></div>
       {
      book.map((item, id)=>
      <MyBooks key={id} {...item}/>
      )
     }
    </div>
  )
}

export default home
