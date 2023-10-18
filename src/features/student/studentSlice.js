import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchStudentByEmail,
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
    const response = await updateStudentById(data, id);

    return response.data;
  }
);
export const fetchStudentByEmailAsync = createAsyncThunk(
  "student/fetchStudentByEmail",
  async (id) => {
    const response = await fetchStudentByEmail(id);
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
      })
      .addCase(fetchStudentByEmailAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStudentByEmailAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.students = action.payload;
      });
  },
});

export const selectStudents = (state) => state.student.students;
export const selectStudentById = (state) => state.student.selectstudent;
export default studentSlice.reducer;
