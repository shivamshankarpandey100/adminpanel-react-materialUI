import React from 'react'
import SideBar from '../Component/SideBar'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import img from "./image/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
import "./css/user.css"



export default function User() {
  return (
        <Box sx={{display:'flex'}}>
          <SideBar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 ,marginTop:"55px"}}>
            <Typography variant="h5">
             User
             <p className="title">Current User</p>
             <div>
             
  <h2>User Profile</h2>
  <div className="card">
    <img src={img} alt="John" className='card2' />
    <h6>user name</h6>
    <h6>Email</h6>
    
    <p>Admin User</p>
    <div style={{ margin: "24px 0" }}>
      
    </div>
  </div>

             </div>
            </Typography>
          </Box>
        </Box>
  )
}
