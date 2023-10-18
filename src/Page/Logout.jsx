import React, { useEffect } from 'react'
import SideBar from '../Component/SideBar'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { signOutAsync } from '../features/auth/authSlice';

export default function Logout() {
 
  // const dispatch =useDispatch()
  // useEffect(() => {
  //   dispatch(signOutAsync())
  // }, [dispatch]);
  return (
    <Box sx={{display:'flex'}}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 ,marginTop:"55px"}}>
            <Typography variant="h5">
             Logout Page
            </Typography>
          
          </Box>
    </Box>
  )
}
