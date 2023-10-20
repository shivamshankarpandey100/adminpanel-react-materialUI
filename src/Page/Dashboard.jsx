import React from 'react'
import SideBar from '../Component/SideBar'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import img from "./image/ESD_LOGO_Rectangular.png"
import "./css/dbrd.css"


export default function Dashboard() {
  return (
    <Box sx={{display:'flex'}}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 ,marginTop:"55px"}}>
        <div className='bgi'>
        <Typography variant='#'>
          
            
          <img src={img} alt="user" className='esd' />
          <h1><u>ESD (Employee Skill's Devlopment Program) :</u></h1>
          <hr></hr>
          <b><h3>That is the Admin's Panel Dashboard</h3></b>
      </Typography>
      <Typography paragraph>
        <span className='spn'>
        ESD program is for the Student to Devloped him/her skills.
       Employee skill development is a crucial aspect of employee training and development programs.
        Upskilling and reskilling employees is the primary focus of L&D programs in 2023, 
        as it helps workers meet organizational standards, reduces replacement costs, 
        and improves workplace performance.
         Employee training programs help employees learn specific knowledge or 
         skills to improve performance in their current roles, while employee 
         development focuses on employee growth and future performance, 
         rather than an immediate job role. High-impact training and development
          programs don't just happen, and managers and employees work together to
           create a development plan that identifies areas to develop or enhance 
           and ascertains what actions or activities need to be taken to acquire and embed that learning.
        </span>
     
      </Typography>
        </div>
       
      </Box>
    </Box>
  )
}
