import { useState, useEffect } from 'react'
import { getPosts } from '../services/posts'

export default function Home() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchPosts = async() => {
      const allPosts = await getPosts()
      setPosts(allPosts)
      console.log(allPosts)
    }
    fetchPosts()
  }, []);
  console.log(posts)

  return (
    <div>
      {posts?.map((post) => {
        return (
          <div className="Indi-Post">
            <div className="post-img">
            <img src={post?.imgURL} alt={post?.name} />
            </div>
            <h3>Name: {post?.name} </h3>
            <h4>Statuts {post?.status} </h4>
          </div>
        )
      })}
    </div>
  )
}
