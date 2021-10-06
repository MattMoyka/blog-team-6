import { useState, useEffect } from 'react'
import { getPosts, deletePost } from '../../services/posts'
import { Link } from "react-router-dom"
import "./Home.css"

export default function Home() {

  const [posts, setPosts] = useState([])
  const [toggle, setToggle] = useState(false)


  useEffect(() => {
    const fetchPosts = async () => {
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
    setToggle((prevToggle) => !prevToggle)
  }

  return (
    <div className="page">
      {posts?.map((post) => {
        return (
          <div className="Indi-Post">
            <div className="post-img">
              <img className='img' src={post.imgURL} alt={post?.name} />
            </div>
            <div className='info'>
              <div className='words'>
                <h3><b>Name:</b> {post?.name} </h3>
                <h4><b>Status:</b> {post?.status}</h4>
              </div>
              <div className='buttons'>
                <Link className='editButton' to={`/editpost/${post._id}`}><i class="far fa-edit fa-2x"></i></Link>
                <button className='deleteButton' id={post._id} onClick={handleEvent}><i class="far fa-trash-alt fa-2x"></i></button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
