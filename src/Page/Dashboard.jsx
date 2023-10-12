import React from 'react'
import SideBar from '../Component/SideBar'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function Dashboard() {
  return (
    <Box sx={{display:'flex'}}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 ,marginTop:"55px"}}>
        
        <Typography variant='h4'>
            Welcome to Dashboard
        </Typography>
        <Typography paragraph>
          The DashBoard
        </Typography>
      </Box>
    </Box>
  )
}
