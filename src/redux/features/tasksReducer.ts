import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "../../models/interfaces";

interface ITasks {
  tasks: ITask[];
}

const initialState: ITasks = {
  tasks: [],
};
export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTasksToState: (state, action: PayloadAction<ITask[]>) => {
      state.tasks = action.payload;
    },
    addTaskToState: (state, action: PayloadAction<ITask>) => {
      state.tasks.push(action.payload);
    },
    deleteTaskToState: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    editTaskToState: (state, action: PayloadAction<ITask>) => {
      const oldTaskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      console.log(oldTaskIndex)
      state.tasks[oldTaskIndex] = action.payload;
    },
  },
});

export const {
  deleteTaskToState,
  editTaskToState,
  addTaskToState,
  addTasksToState,
} = tasksSlice.actions;

export default tasksSlice.reducer;
