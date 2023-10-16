import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchStudentById,
  fetchStudents,
  updateStudentById,
} from "./studentAPI";

const initialState = {
  value: 0,
  status: "idle",
  students: [],
  selectstudent: null,
};

export const fetchStudentsAsync = createAsyncThunk(
  "student/fetchStudentList",
  async () => {
    const response = await fetchStudents();
    console.log(response);
    return response.data;
  }
);

export const fetchStudentByIdAsync = createAsyncThunk(
  "student/fetchStudenteById",
  async (id) => {
    const response = await fetchStudentById(id);
    return response.data;
  }
);
export const updateStudentByIdAsync = createAsyncThunk(
  "student/updateStudentById",
  async ({ data, id }) => {
    console.log(data);
    const response = await updateStudentById(data, id);
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
      })
      .addCase(fetchStudentByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStudentByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectstudent = action.payload;
      })
      .addCase(updateStudentByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateStudentByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectstudent = action.payload;
      });
  },
});

export const selectStudents = (state) => state.student.students;
export const selectStudentById = (state) => state.student.selectstudent;
export default studentSlice.reducer;
