import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchStudents } from "./studentAPI";


const initialState = {
  value: 0,
  status: "idle",
  students: [],
};

export const fetchStudentsAsync = createAsyncThunk(
  "student/fetchStudentList",
  async () => {
    const response = await fetchStudents();
    console.log(response);
    return response.data;
  }
);

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchStudentsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStudentsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.students = action.payload;
       
      });
  },
});

export const selectStudents = (state) => state.student.students;

export default studentSlice.reducer;
