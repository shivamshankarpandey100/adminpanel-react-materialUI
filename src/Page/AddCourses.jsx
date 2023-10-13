import React from 'react'
import SideBar from '../Component/SideBar'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';


export default function AddCourses() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);
  return (
    <Box sx={{display:'flex'}}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 ,marginTop:"55px"}}>
            <Typography variant="h5">
            <div className="center">
            <form
              className="form"
              onSubmit={handleSubmit((data) => {
                console.log(data);
              })}
            >
              <p className="title">Course form </p>
              {/* <p className="message">Student Registration form </p> */}
              <div className="flex">
                <label>
                  Course name :
                  <input
                    placeholder="Course name"
                    type="text"
                    className="input"
                    id="CourseName"
                    {...register("CourseName", {
                      required:
                        "Course Name is required",
                    })}
                  />
                </label>
                {errors.CourseName && (
                  <p className="text-red-400">{errors.CourseName.message}</p>
                )}
                {/* <label>
                 <input required="" placeholder="" type="text" className="input" />
                   <span>Lastname</span>
                         </label> */}
              </div>
              <div>
                <label>
                   CourseId:
                  <input
                    placeholder="CourseId"
                    type="number"
                    className="input"
                    id="CourseId"
                    minLength={5}
                    maxLength={10}
                    {...register("CourseId", {
                      required: "CourseId  is required",
                      pattern: {
                        pattern: /^[0-9]{10}$/,
                        message: "CourseId cannot exceed ten characters",
                      },
                    })}
                  />
                  {/* <span></span> */}
                </label>
                {errors.CourseId && (
                  <p className="text-red-400">{errors.CourseId.message}</p>
                )}
                {errors.CourseId &&
                  errors.CourseId.type === "max" && (
                    <span role="text-red-400">
                      Phone Number must contian 10 characters
                    </span>
                  )}
              </div>
            
           
              
              <div>
                <label>
                  Course Description:
                  <textarea
                    id="CourseDescription"
                    placeholder="Short description about course"
                    type="textarea"
                    className="input"
                    rows={4}
                    cols={50}
                    maxLength={50}
                    {...register("CourseDescription", {
                      required: "Course Description is required",
                    })}
                  />
                  {/* <span></span> */}
                </label>
                {errors.CourseDescription && (
                  <p className="text-red-400">{errors.CourseDescription.message}</p>
                )}
              </div>

              <div className="button-container">
                <button type="reset" className="reset" value="Reset">
                  Reset
                </button>

                <button type="submit" className="submit-2 " value="Submit">
                  Login
                </button>
              </div>
            </form>
          </div>
            </Typography>
          
          </Box>
    </Box>
  )
}
