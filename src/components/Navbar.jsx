import "../styles.css";
import { FaYoutube, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const email = localStorage.getItem("userEmail");
  const username = email ? email.split("@")[0] : "User";

  function logout() {
    localStorage.removeItem("userEmail");
    navigate("/");
  }

  return (
    <div className="navbar">
      <div className="nav-left">
        <FaYoutube className="yt-icon" />
        <h2>YouTube</h2>
      </div>

      <div className="nav-right">
        <span className="username">{username}</span>
        <FaUserCircle className="profile-icon" />

        <button className="logout-btn" onClick={logout}>
          <FaSignOutAlt />
        </button>
      </div>
    </div>
  );
}
