import React, { useState } from "react";

function EditBook() {
  const [formData, setFormData] = useState({
    bookname: "",
    authorname: "",
    imageurl: "",
  });

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
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add a Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Book Name:</label><br />
          <input
            type="text"
            name="bookname"
            value={formData.bookname}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div>
          <label>Author Name:</label><br />
          <input
            type="text"
            name="authorname"
            value={formData.authorname}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div>
          <label>Image URL:</label><br />
          <input
            type="text"
            name="imageurl"
            value={formData.imageurl}
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
