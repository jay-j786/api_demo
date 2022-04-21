import {configureStore} from '@reduxjs/toolkit';
import postReducer from './apiSlice';

export const store = configureStore({
  reducer: {
    post: postReducer,
  },
});
