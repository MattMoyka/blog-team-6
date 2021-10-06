import { useState } from "react"
import { createPost } from "../../services/posts"
import { Redirect } from "react-router"
import './CreatePost.css'


export default function CreatePost() {
  const [post, setPost] = useState({
    name: '',
    status: '',
    imgURL:''
  })
  const [isCreated, setCreated] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setPost({
      ...post,
      [name]:value
    })
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createPost(post)
    setCreated([created])
  }
  
  if (isCreated) {
    return <Redirect to={`/`} />
}

  return (
    <div className="create-div">
<h1 className="h1-create"> Let's create a new post </h1>

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
        onChange={handleChange}
      />
   <button type='submit' className="submit-button">Create</button>
      </form>
      </div>
  )
}
