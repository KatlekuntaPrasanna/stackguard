import React, { useState } from "react";
import "../styles/auth.css";

function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    const newUser = { firstName, lastName, email, password };
    localStorage.setItem("user", JSON.stringify(newUser));
    setMessage("Registration successful! You can now sign in.");

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="auth-container">
      <div className="icon-container">
        <img src="https://media.licdn.com/dms/image/v2/D560BAQEejcz_CLv80g/company-logo_200_200/B56ZnCuenUJwAI-/0/1759908588506/stackguard_logo?e=2147483647&v=beta&t=c3gqBkF0-b7S6PXnnk1FiKfRMtJIMLuDL4cAs3m3U-M" className="icon" alt="Stackguard icon" />
        <h1>Stackguard</h1>
      </div>
      <h2>Welcome to Stackguard</h2>
      <p>Secure your codebase with advanced secret scanning security best practices</p>

      <form onSubmit={handleRegister}>
        <div className="name-container">
          <input
            type="text"
            placeholder="Enter first name"
            value={firstName}
            className="first-name"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enter last name"
            value={lastName}
            className="last-name"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <input
          type="email"
          placeholder="Enter email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" className="button">Create Account</button>
      </form>

      {message && <p className="success">{message}</p>}

      <p className="terms">
        By continuing, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
      </p>
      <p>
        Already have an account? <a href="/signin">Sign in</a>
      </p>
    </div>
  );
}

export default RegisterPage;
