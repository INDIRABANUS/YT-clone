import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  function handleLogin() {
    if (pass !== "1144") {
      setShowModal(true);
      setTimeout(() => setShowModal(false), 2000);
      return;
    }
    navigate("/user", { state: { email } });
  }

  return (
    <div className="login-page">
      {showModal && <Modal message="Invalid Username or Password" />}

      <div className="login-box">
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPass(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
