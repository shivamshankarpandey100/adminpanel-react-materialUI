

import React, { useEffect, useState } from 'react';
import SideBar from '../Component/SideBar'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "./css/List.css"
import { fetchCoursesAsync, selectCourses } from '../features/course/courseSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function CoursesList() {
  const column=["ID","Course Name","Course Id","Description","Action"]
  const dispatch =useDispatch()
  const records=useSelector(selectCourses);
  console.log(records)
  useEffect(() => {
    dispatch(fetchCoursesAsync())
  }, [dispatch]);
  return (
    <Box sx={{display:'flex'}}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 ,marginTop:"55px"}}>
            <Typography variant="">
             <div className='heading'>Course List</div>
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
                 (<tr key={i}>
                   <td>{i + 1}</td>
                   <td>{record.courseName}</td>
                   <td>{record.courseId}</td>                
                   <td>{record.courseDetail}</td>
                   <td>
                     <button className='btn1'>Update</button>
                     <button className='btn2'>Remove</button>
                   </td>
                 </tr>
                 )
                ))}
              </tbody>
            </table>
          </div>
            </Typography>
          
          </Box>
    </Box>
  )
}
