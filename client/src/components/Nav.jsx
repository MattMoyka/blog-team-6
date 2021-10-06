import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <div>
      <Link to="/"><h1>Blog team 6</h1></Link>
      <Link to="/createpost"><h1>Add Item</h1></Link>
    </div>
  )
}

