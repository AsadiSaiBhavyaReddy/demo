import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';

export default function Placement() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8081/display').then((response) => {
      console.log(response.data);
      setResult(response.data);
    });
  }, []);

  function handleDelete(event) {
    const studentId = event.currentTarget.getAttribute("data-student");
    axios.delete('http://localhost:8081/delete', {
      params: {
        id: studentId
      }
    }).then((response) => {
      console.log(response.data);
      // Refresh the data after delete
      axios.get('http://localhost:8081/display').then((response) => {
        setResult(response.data);
      });
    });
  }

  function handleDownload() {
    const ws = XLSX.utils.json_to_sheet(result);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Placements");
    XLSX.writeFile(wb, "placement_data.xlsx");
  }

  if (!result) {
    return (
      <div>
        The Placement Data is Not Available
      </div>
    );
  } else {
    return (
      <div>
        <h2>The Placement Data</h2>
        <button onClick={handleDownload}>Download as Excel</button>
        <br /><br />
        <table border="1">
          <thead>
            <tr>
              <th>Parent's Name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Department</th>
              <th>Purpose of Visit</th>
              <th>Date</th>
              <th>Time</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {result.map((user) => (
              <tr key={user.id}>
                <td>{user.parentName}</td>
                <td>{user.gender}</td>
                <td>{user.age}</td>
                <td>{user.mobile}</td>
                <td>{user.email}</td>
                <td>{user.studentId}</td>
                <td>{user.studentName}</td>
                <td>{user.department}</td>
                <td>{user.purpose}</td>
                <td>{user.date}</td>
                <td>{user.time}</td>
                <td>
                  <button onClick={handleDelete} data-student={user.id}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
