import React, { useState } from "react";
import data from "./data";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Student Directory</h1>
      <input
        type="text"
        placeholder="Search by name, roll no, or email..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredData.length > 0 ? (
          filteredData.map((student) => (
            <li key={student.id} className="student-card">
              <p><strong>Name:</strong> {student.name}</p>
              <p><strong>Roll No:</strong> {student.rollNo}</p>
              <p><strong>Email:</strong> {student.email}</p>
            </li>
          ))
        ) : (
          <p>No student found.</p>
        )}
      </ul>
    </div>
  );
}

export default App;

