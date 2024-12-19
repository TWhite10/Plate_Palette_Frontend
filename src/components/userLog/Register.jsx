import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Register() {
    const [username,setUsername] = useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegistration = async (e) =>{
        e.preventDefault();
        try{
            if (!username || !email || !password || !confirmPassword ) {
                setError('Please fill in all fields.');
                return;
            }

            if (password !== confirmPassword) {
                throw new Error("Passwords do not match");
            }
            const response = await fetch("http://localhost:5050/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, password }), 
            });
            const data = await response.json();
            if (response.ok) {

                navigate("/login");
            } else {
              setError(data.error.message);
            }
          } catch (err) {
            setError("Something went wrong. Please try again.");
          }


    }
    return (
        <div className="register-page">
          <h2>Register</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <form onSubmit={handleRegistration}>
          <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            />
        </div>
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
        <div>
          <label>confirmPassword:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}


export default Register;