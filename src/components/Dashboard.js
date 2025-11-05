import React from "react";
import "../styles/dashboard.css";

function Dashboard() {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/signin";
  };

  return (
    <div className="dashboard-container">
      <h1>Hello User!!</h1>
      <h1>Welcome to StackGuard</h1>
      <p>How are you doing today?</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;