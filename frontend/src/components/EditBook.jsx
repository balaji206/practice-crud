import React, { useEffect, useState } from "react";
import axios from 'axios'
import {  useNavigate, useParams } from "react-router-dom";
function EditBook() {
  const navigate = useNavigate();
  const {id} = useParams();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    image: "",
  });

  useEffect(()=>{
    axios.get(`http://localhost:8000/books/${id}`)
    .then(res=>{
      setFormData({
        title : res.data?.title||"",
        author:res.data?.author||"",
        image:res.data?.image||""
      })
    })
    .catch((err)=>{
      console.log(err);
    })
  },[id])
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can send it to your backend here using fetch or axios
    axios.put(`http://localhost:8000/edit/${id}`,formData)
    .then(()=>{alert('Details are updated');
      setFormData({title:'',author:'',image:''})
    })
    .catch(err=>{console.log(err)
      alert('failed to update details')
    })
    navigate('/')
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add a Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Book Name:</label><br />
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div>
          <label>Author Name:</label><br />
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div>
          <label>Image URL:</label><br />
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>

      {formData.imageurl && (
        <div style={{ marginTop: "20px" }}>
          <h4>Image Preview:</h4>
          <img src={formData.imageurl} alt="Book" width="200" />
        </div>
      )}
    </div>
  );
}

export default EditBook;
