import { useState, useEffect } from "react"
import { useParams , Redirect} from 'react-router-dom'
import { getPost, updatePost } from '../../services/posts'
import './EditPost.css'

export default function EditPost() {

  const [post, setPost] = useState({
    name: "",
    status: "",
    imgURL: "",
  })

  const [isUpdated, setUpdated] = useState(false)
  let { id } = useParams()

  useEffect(() => {
    const fetchPost = async() => {
      const post = await getPost(id)
      setPost(post)
    }
    fetchPost()
  }, [id])

  const handleChange = (event) => {
    const { name, value } = event.target
    setPost({
      ...post,
      [name]: value,
    })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    const updated = await updatePost(id, post)
    setUpdated(updated)
  }

  if (isUpdated) {
    return <Redirect to={`/`} />
  }

  return (
    <div className="edit-div">
      <h1 className="h1-edit">Let's make some changes!</h1>
    <form onSubmit={handleSubmit}>
    <input
      className="input-name"
      placeholder='Name'
      value={post.name}
      name='name'
      autoFocus
      onChange={handleChange}
    />
    <textarea
      className="input-status"
      placeholder='Status'
      value={post.status}
      name='status'
      onChange={handleChange}
    />
    <input
      className="input-image"
      placeholder='Image URL'
      value={post.imgURL}
      name='imgURL'
      autoFocus
      onChange={handleChange}
    />
 <button type='submit' className="edit-button">Edit</button>
      </form>
      </div>
  )
}
