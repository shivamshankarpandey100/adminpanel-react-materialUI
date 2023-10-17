import React, { useEffect, useState } from 'react';
import SideBar from '../Component/SideBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "./css/List.css"
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudentsAsync, selectStudents } from '../features/student/studentSlice';
import { FaTrash,FaEdit } from "react-icons/fa";
import style from "./css/custom.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from 'react-router-dom';
export default function StudentList() {
 const column=["ID","Full Name","Mobile No:","Email","Course Id","Action"]
  const dispatch =useDispatch()
  const records=useSelector(selectStudents);
  const navigate =useNavigate()
  const handleRemove = async (e, id) => {
    e.preventDefault();
    console.log(id);
    const response = await fetch(
      "http://localhost:8082/student/deletestudent/" + id,
      {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      }
    );
    dispatch(fetchStudentsAsync());
    toast.success("Deleted successfully", {
      className: style.customtoastsuccess,
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  console.log(records)
  useEffect(() => {
    dispatch(fetchStudentsAsync())
  }, [dispatch]);
  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: '55px' }}>
        <Typography variant="">
        <div className='heading'>Student List</div>
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
                 ( <tr key={i}>
                    <td>{i+1}</td>
                    <td>{record.studentName}</td>
                    <td>{record.mobileNumber}</td>
                    <td>{record.email}</td>
                    <td>{record.courseId}</td>
                    <td>
                      <button className='btn1'  onClick={()=>{navigate(`/StudentEdit/${record.id}`)}}><FaEdit></FaEdit></button>
                      <button className='btn2' onClick={(e) => handleRemove(e, record.id)}><FaTrash></FaTrash></button>
                    </td>
                  </tr>)
                ))}
              </tbody>
            </table>
          </div>
        </Typography>
      </Box>
    </Box>
    <ToastContainer/>
    </>
  );
}

