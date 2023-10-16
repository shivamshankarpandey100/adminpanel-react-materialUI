import React, { useEffect, useState } from 'react';
import SideBar from '../Component/SideBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "./css/List.css"
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudentsAsync, selectStudents } from '../features/student/studentSlice';

export default function StudentList() {
 const column=["ID","Full Name","Mobile No:","Email","Course Id","Action"]
  const dispatch =useDispatch()
  const records=useSelector(selectStudents);
  console.log(records)
  useEffect(() => {
    dispatch(fetchStudentsAsync())
  }, [dispatch]);
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
                   record.status===true &&
                 ( <tr key={i}>
                    <td>{record.id}</td>
                    <td>{record.studentName}</td>
                    <td>{record.mobileNumber}</td>
                    <td>{record.email}</td>
                    <td>{record.courseId}</td>
                    <td>
                      <button className='btn1'>Update</button>
                      <button className='btn2'>Remove</button>
                    </td>
                  </tr>)
                ))}
              </tbody>
            </table>
          </div>
        </Typography>
      </Box>
    </Box>
  );
}

