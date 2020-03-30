import { configureStore } from '@reduxjs/toolkit';
import actionReducer from "../features/actions/actionSlice";

export default configureStore({
  reducer: {
    restaurent: actionReducer
  }
});
