import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Post() {
    const {id} = useParams()
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get('http://localhost:3001/getpostbyid/' + id)
        .then(result => setPost(result.data))
        .catch(err => console.log(err))
    }, [])
  return (
    <div className="container">
        <div className="post">
            <img src={`http://localhost:3001/Images/${post.file}`} alt="" />
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>

    </div>
  )
}

export default Post