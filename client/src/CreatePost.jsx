import axios from 'axios'
import React, { useState } from 'react'

function CreatePost() { 
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [file, setFile] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('file', file)
        
        axios.post('http://localhost:3001/create', formData)
        .then(res => {
            if (res.data === "Success") {
                window.location.href = "/"
            }
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='container'>
        <div className='form'>
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" className='field' placeholder='Title' onChange={e => setTitle(e.target.value)}/>
                <textarea name="desc" id="desc" cols="30" rows="10" className='field' placeholder='Description' onChange={e => setDescription(e.target.value)}></textarea>
                <input type="file" className='field' placeholder='Select File' onChange={e => setFile(e.target.files[0])}/>
                <button>Post</button>
            </form>
        </div>
    </div>
  )
}

export default CreatePost