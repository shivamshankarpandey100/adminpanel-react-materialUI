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
        
      <Typography variant='h6'>
        <div className="center">
      <form className="form">
  <p className="title">Student form </p>
  {/* <p className="message">Student Registration form </p> */}
  <div className="flex">
    <label>Full name :
      <input required="" placeholder="full name" type="text" className="input" />
      
    </label>
    {/* <label>
      <input required="" placeholder="" type="text" className="input" />
      <span>Lastname</span>
    </label> */}
  </div>
  <div>
    <label>Mobile no:
    <input required="" placeholder="+91-XXXXXXXXXX" type="text" className="input" maxLength={13} />
    {/* <span></span> */}
  </label>
  </div>
  <div>
  <label>Email:
    <input required="" placeholder="xyz@gmail.com" type="email" className="input" />
    {/* <span></span> */}
  </label>
  </div>
  <div>
  <label>DOB(Date of Birth):
    <input required="" placeholder="DOB" type="date" className="input" />
    {/* <span></span> */}
  </label>
  </div>
  <div>
    <label>City:
    <input required="" placeholder="City" type="text" className="input" maxLength={15} />
    {/* <span></span> */}
  </label>
  </div>
  <div>
    <label>Address:
    <input required="" placeholder="Address" type="text" className="input" maxLength={80} />
    {/* <span></span> */}
  </label>
  </div>
  <br />
  <div>
  <label>Select Course:
  <select>
  <option value="" defaultChecked>-SELECT-</option>
    <option value="B.tech">B.tech</option>
    <option value="Bio-Tech">Bio-Tech</option>
    <option value="BBA">BBA</option>
    <option value="BCA">BCA</option>
    <option value="MBA">MBA</option>
    <option value="MCA">MCA</option>
    <option value="LLB">LLB</option>
    <option value="MBBS">MBBS</option>
  </select>
  </label>

  </div>
 <br />
  <div>
    <input type="button" className="submit" value={"submit"} />
    
  </div>
<br />
  <div>
    <input type="button" className="submit" value={"reset"} />
    </div>
  
  

</form>
</div>


        </Typography>
      </Box>
    </Box>
  )
}
