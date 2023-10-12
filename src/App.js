import React from 'react'
import {Routes,Route,BrowserRouter} from "react-router-dom"
import Dashboard from './Page/Dashboard'
import AddStudent from './Page/AddStudent'
import User from './Page/User'
import StudentList from './Page/StudentList'
import AddCourses from './Page/AddCourses'
import CoursesList from './Page/CourseList'
import UserList from './Page/UserList'
import Logout from './Page/Logout'
import LoginPage from './Page/LoginPage'
import SignUpPage from './Page/SignUpPage'
import Protected from './Page/Protected'

export default function App() {
  return (
 <>
  <BrowserRouter>
    <Routes>
        <Route path='/' element={ <Protected> <Dashboard /></Protected>}></Route>
        <Route path='/User' element={ <Protected> <User /></Protected> }></Route>
        <Route path='/AddStudent' element={<Protected> <AddStudent /></Protected> }></Route>
        <Route path='/StudentList' element={<Protected> <StudentList /></Protected>}></Route>
        <Route path='/AddCourses' element={<Protected><AddCourses /></Protected>}></Route>
        <Route path='/CourseList' element={<Protected><CoursesList /></Protected>}></Route>
        <Route path='/UserList' element={<Protected><UserList /></Protected>}></Route>
        <Route path='/Logout' element={<Logout />}></Route>
        <Route path='/Login' element={<LoginPage />}></Route>
        <Route path='/Signup' element={<SignUpPage />}></Route>
    </Routes>
  </BrowserRouter>
 </>
  )
}