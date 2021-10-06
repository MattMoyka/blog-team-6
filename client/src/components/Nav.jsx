import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="nav">
      <Link className="link" to="/">
        <h1>Blog Team 6</h1>
      </Link>
      <Link className="link" className="addItem" to="/createpost">
        <h3>Add Item</h3>
      </Link>
    </div>
  );
}
