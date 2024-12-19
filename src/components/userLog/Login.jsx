import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch("http://localhost:5050/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
  
        const data = await response.json();
     

        if (response.ok) {
            localStorage.setItem("token", data.data.tokens.accessToken);
            localStorage.setItem('userId', data.data.user._id);
            navigate("/profile");
          } else {
            setError(data.error.message);
          }
        } catch (err) {
          setError("Something went wrong. Please try again.");
        }
      };
      return (
        <div className="login-page">
          <h2>Login</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

          
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>


        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;