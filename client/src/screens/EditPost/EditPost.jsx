import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { getPost, updatePost } from '../../services/posts'

export default function EditPost() {

  const [post, setPost] = useState({
    name: "",
    status: "",
    imgURL: "",
  })

  let { id } = useParams()

  useEffect(() => {
    const fetchPost = async() => {
      const post = await getPost(id)
      setPost(post)
    }
    fetchPost()
  }, [id])

  return (
    <div>
      Edit Page
    </div>
  )
}
