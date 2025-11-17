import { FaYoutube, FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar({ name, toggleSidebar, onLogout, onSearch }) {
  return (
    <nav className="navbar">
      <GiHamburgerMenu className="hamburger" onClick={toggleSidebar} />

      <div className="nav-left">
        <FaYoutube className="yt-logo" />
        <h2>YouTube Clone</h2>
      </div>

      <input
        type="text"
        placeholder="Search videos..."
        className="search-input"
        onChange={(e) => onSearch(e.target.value)}
      />

      <div className="nav-right">
        <span className="username">{name}</span>
        <FaUserCircle className="profile-icon" />
        <button className="logout-btn" onClick={onLogout}>Logout</button>
      </div>
    </nav>
  );
}
