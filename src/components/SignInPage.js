import React, { useState } from "react";
import "../styles/auth.css";

function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email === email && user.password === password) {
      window.location.href = "/config";
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="auth-container">
      <div className="icon-container">
        <img src="https://media.licdn.com/dms/image/v2/D560BAQEejcz_CLv80g/company-logo_200_200/B56ZnCuenUJwAI-/0/1759908588506/stackguard_logo?e=2147483647&v=beta&t=c3gqBkF0-b7S6PXnnk1FiKfRMtJIMLuDL4cAs3m3U-M" className="icon" alt="Stackguard icon" />
        <h1>Stackguard</h1>
      </div>
      <h2>Welcome back to Stackguard</h2>
      <p>Secure your codebase with advanced secret scanning security best practices</p>

      <form onSubmit={handleSignIn}>
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
        <button type="submit">Sign In</button>
      </form>

      <p className="terms">
        By continuing, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
      </p>
      <p>
        Don’t have an account? <a href="/register">Create account</a>
      </p>
    </div>
  );
}

export default SignInPage;
