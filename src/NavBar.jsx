import { Link } from 'react-router';
import './header.css';

export function NavBar() {
  return (
    <div className="header">

      {/* Left side */}
      <Link className="logo" to="/">
        Logo
      </Link>

      {/* Right side */}
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/college">College</Link>
        </li>
      </ul>

    </div>
  );
}