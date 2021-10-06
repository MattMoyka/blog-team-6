import { useState, useEffect } from 'react'
import { getPosts, deletePost} from '../../services/posts'
import { Link } from "react-router-dom"
import "./Home.css"

export default function Home() {

  const [posts, setPosts] = useState([])
  const [toggle, setToggle] = useState(false)


  useEffect(() => {
    const fetchPosts = async() => {
      const allPosts = await getPosts()
      setPosts(allPosts)
      console.log(allPosts)
    }
    fetchPosts()
  }, [toggle]);

  function handleEvent(e) {
    e.preventDefault()
    console.log(e.target.id)
    deletePost(e.target.id)
    setToggle((prevToggle)=>!prevToggle)
  }

  return (
    <div>
      {posts?.map((post) => {
        return (
          <div className="Indi-Post">
            <div className="post-img">
            <img src={post.imgURL} alt={post?.name} />
            </div>
            <h3>Name: {post?.name} </h3>
            <h4>Statuts {post?.status}</h4>
            <Link to={`/editpost/${post._id}`}>Edit Post</Link>
            <button id={post._id} onClick={handleEvent}>Delete Post</button>
          </div>
        )
      })}
    </div>
  )
}
