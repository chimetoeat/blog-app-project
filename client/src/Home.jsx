import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Home() {

  const [posts, setPosts] = useState([])


  useEffect(() => {
    axios.get('http://localhost:3001/getposts')
    .then(posts => {
      setPosts(posts.data)
    })
    .catch(err => console.log(err))
  }, []);

  return (
    <div>
      <div className="container">
        {
          posts.map(post => (
            <Link to={`/post/${post._id}`} className="post">
              <img src={`http://localhost:3001/Images/${post.file}`} alt="" />
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </Link>
          ))
        }
      </div>
    </div>
  )
  
}

export default Home;
