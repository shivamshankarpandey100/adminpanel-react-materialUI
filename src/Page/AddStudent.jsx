import React from 'react'
import SideBar from '../Component/SideBar'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import  "./css/StudentForm.css";


export default function AddStudent() {
  return (
    <Box sx={{display:'flex'}}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 ,marginTop:"55px"}}>
        
      <Typography variant='h4'>
      <form className="form">
  <p className="title">Register </p>
  <p className="message">Signup now and get full access to our app. </p>
  <div className="flex">
    <label>
      <input className="input" type="text" placeholder="" required="" />
      <span>Firstname</span>
    </label>
    <label>
      <input className="input" type="text" placeholder="" required="" />
      <span>Lastname</span>
    </label>
  </div>
  <label>
    <input className="input" type="email" placeholder="" required="" />
    <span>Email</span>
  </label>
  <label>
    <input className="input" type="password" placeholder="" required="" />
    <span>Password</span>
  </label>
  <label>
    <input className="input" type="password" placeholder="" required="" />
    <span>Confirm password</span>
  </label>
  <button className="submit">Submit</button>
  <p className="signin">
    Already have an acount ? <a href="#">Signin</a>{" "}
  </p>
</form>

        </Typography>
      </Box>
    </Box>
  )
}
