import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/auth/authSlice'
import courseReducer from '../features/course/courseSlice'
import studentReducer from '../features/student/studentSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth:authReducer,
    course:courseReducer,
    student:studentReducer,
  },
});
