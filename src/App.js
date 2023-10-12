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


export default function App() {
  return (
 <>
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/User' element={<User />}></Route>
        <Route path='/AddStudent' element={<AddStudent />}></Route>
        <Route path='/StudentList' element={<StudentList />}></Route>
        <Route path='/AddCourses' element={<AddCourses />}></Route>
        <Route path='/CourseList' element={<CoursesList />}></Route>
        <Route path='/UserList' element={<UserList />}></Route>
        <Route path='/Logout' element={<Logout />}></Route>
    </Routes>
  </BrowserRouter>
 </>
  )
}
