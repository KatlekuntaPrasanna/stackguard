import React, { useState } from "react";
import "../styles/auth.css";

function ConfigPage() {
  const [key, setKey] = useState("");
  const [error, setError] = useState("");

  const handleVerify = (e) => {
    e.preventDefault();

    if (key.length < 100 || key.length > 1000) {
      setError("Key must be between 100 and 1000 characters.");
      return;
    }

    localStorage.setItem("configKey", key);
    window.location.href = "/dashboard";
  };

  return (
    <div className="auth-container">
      <div className="icon-container">
        <img src="https://media.licdn.com/dms/image/v2/D560BAQEejcz_CLv80g/company-logo_200_200/B56ZnCuenUJwAI-/0/1759908588506/stackguard_logo?e=2147483647&v=beta&t=c3gqBkF0-b7S6PXnnk1FiKfRMtJIMLuDL4cAs3m3U-M" className="icon" alt="Stackguard icon" />
        <h1>Stackguard</h1>
      </div>
      <h2>Verify your public key</h2>
      <p className="subtitle">
        To get started, provide your public key for verification
      </p>

      <form onSubmit={handleVerify}>
        <textarea
          placeholder="Enter your public key"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          required
          rows={6}
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Verify</button>
      </form>

      <p>Don’t have a public key? <b>Contact your administrator</b></p>
    </div>
  );
}

export default ConfigPage;
