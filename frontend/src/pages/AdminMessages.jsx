import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const token = localStorage.getItem("adminToken");
      if (!token) return;

      try {
        const res = await axios.get("http://localhost:5000/api/messages", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setMessages(res.data);
      } catch (err) {
        alert("Failed to fetch messages!");
      }
    };
    fetchMessages();
  }, []);

  return (
    <div className="admin-messages">
      <h2>Admin Messages</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Received</th>
          </tr>
        </thead>
        <tbody>
          {messages.map(msg => (
            <tr key={msg._id}>
              <td>{msg.Name}</td>
              <td>{msg.Email}</td>
              <td>{msg.Message}</td>
              <td>{new Date(msg.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminMessages;
