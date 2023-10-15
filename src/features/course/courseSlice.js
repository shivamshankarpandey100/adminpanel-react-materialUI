import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCourses } from "./courseAPI";

const initialState = {
  value: 0,
  status: "idle",
  courses: [],
};

export const fetchCoursesAsync = createAsyncThunk(
  "course/fetchCourseList",
  async () => {
    const response = await fetchCourses();
    console.log(response)
    return response.data;
  }
);

export const courseSlice = createSlice({
  name: "course",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchCoursesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCoursesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.courses = action.payload;
       
      });
  },
});

export const selectCourses = (state) => state.course.courses;

export default courseSlice.reducer;
