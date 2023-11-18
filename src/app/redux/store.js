import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todoSlice";

// export const store = configureStore({
//   reducer: todoReducer,
// });

const rootReducer = combineReducers({
  todoData: todoReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
