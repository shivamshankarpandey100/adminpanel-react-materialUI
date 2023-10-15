import React, { useEffect } from 'react'
import SideBar from '../Component/SideBar'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudentsAsync, selectStudents } from '../features/student/studentSlice';



export default function StudentList() {
  const dispatch=useDispatch();
  const studentList=useSelector(selectStudents);
  console.log(studentList);
  useEffect(() => {
   dispatch(fetchStudentsAsync());
  }, [dispatch])
  
  return (
    <Box sx={{display:'flex'}}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 ,marginTop:"55px"}}>
            <Typography variant="h5">
             Student List
            </Typography>
          
          </Box>
    </Box>
  )
}
