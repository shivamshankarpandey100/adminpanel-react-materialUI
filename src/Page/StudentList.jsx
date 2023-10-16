import React, { useEffect, useState } from 'react';
import SideBar from '../Component/SideBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "./css/List.css"

export default function StudentList() {
  const [column, setColumn] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/db')
      .then((res) => res.json())
      .then((data) => {
        setColumn(Object.keys(data.users[0]));
        setRecords(data.users);
      });
  }, []);
  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: '55px' }}>
        <Typography variant="">
        <div className='heading'>Student List</div>
          <div>
            <table className="table">
              <thead>
                <tr>
                  {column.map((c, i) => (
                    <th key={i}>{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {records.map((record, i) => (
                  <tr key={i}>
                    <td>{record.ID}</td>
                    <td>{record.Name}</td>
                    <td>{record.Email}</td>
                    <td>{record.Password}</td>
                    <td>
                      <button className='btn1'>Update</button>
                      <button className='btn2'>Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Typography>
      </Box>
    </Box>
  );
}

