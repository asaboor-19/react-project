import { Link } from "react-router-dom";

function Navbar({ likes }) {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        My Store
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <span>Liked Items: {likes}</span>
      </div>
    </nav>
  );
}

export default Navbar;