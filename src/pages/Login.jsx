import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import "../styles.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    if (password === "1144") {
      localStorage.setItem("userEmail", email);
      navigate("/user");
    } else {
      setShowModal(true);
      setTimeout(() => setShowModal(false), 2000);
    }
  }

  return (
    <div className={`login-container ${showModal ? "blur" : ""}`}>
      {showModal && <Modal message="Invalid Password!" />}

      <form className="login-box" onSubmit={handleLogin}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password (1144)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
