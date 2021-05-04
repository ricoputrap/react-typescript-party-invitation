import React, { useState } from 'react'

const AddToList = () => {

  const [input, setInput] = useState({
    name: "",
    age: "",
    url: "",
    note: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="AddToList">
      <input
        name="name"
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
      />
      <input
        name="age"
        type="text"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
      />
      <input
        name="url"
        type="text"
        placeholder="Image URL"
        className="AddToList-input"
        value={input.url}
        onChange={handleChange}
      />
      <textarea
        name="note"
        placeholder="Notes"
        className="AddToList-input"
        value={input.note}
        onChange={handleChange}
      />
    </div>
  )
}

export default AddToList
