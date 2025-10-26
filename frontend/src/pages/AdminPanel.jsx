import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    if (!token) navigate("/admin/login");

    const fetchMessages = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/messages", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setMessages(res.data);
      } catch (err) {
        alert("You are not authorized!");
        navigate("/admin/login");
      }
    };

    fetchMessages();
  }, [token, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div style={{ padding: "40px", background: "#121212", minHeight: "100vh", color: "#fff" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ color: "#4caf50" }}>Admin Dashboard</h2>
        <button onClick={handleLogout} style={{ padding: "10px 20px", borderRadius: "8px", border: "none", background: "#4caf50", cursor: "pointer", color: "#fff" }}>Logout</button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "30px" }}>
        {messages.map(msg => (
          <div key={msg._id} style={{ background: "#1e1e2f", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.3)" }}>
            <p><strong>Name:</strong> {msg.name}</p>
            <p><strong>Email:</strong> {msg.email}</p>
            <p><strong>Message:</strong> {msg.message}</p>
            <p><small>{new Date(msg.createdAt).toLocaleString()}</small></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
