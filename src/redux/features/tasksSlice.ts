import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "../../models/interfaces";
import {
  addTask,
  deleteTask,
  editTask,
  getTasks,
} from "../actions/taskActions";

interface ITasks {
  tasks: ITask[];
  isGeneralTasksLoading: boolean;
  error: string | undefined;
  allTasksCount: number;
  isTaskEventLoading: boolean;
  isTaskModify: boolean;
  taskEventError: string | undefined;
}

const initialState: ITasks = {
  tasks: [],
  isGeneralTasksLoading: false,
  error: undefined,
  allTasksCount: 0,
  isTaskEventLoading: false,
  isTaskModify: false,
  taskEventError: undefined,
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
      console.log(oldTaskIndex);
      state.tasks[oldTaskIndex] = action.payload;
    },
  },
  extraReducers: (builder) => {
    // --------------- Get Tasks --------------------
    builder.addCase(getTasks.pending, (state) => {
      state.isGeneralTasksLoading = true;
    });
    builder.addCase(getTasks.rejected, (state, action) => {
      state.isGeneralTasksLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getTasks.fulfilled, (state, action) => {
      state.isGeneralTasksLoading = false;
      if (action.payload._meta) {
        state.allTasksCount = action.payload._meta.total;
      }
      state.tasks = action.payload.data;
      state.isTaskModify = false;
      state.taskEventError = undefined;
    });
    // --------------- Add Task ------------------
    builder.addCase(addTask.pending, (state) => {
      state.isTaskEventLoading = true;
    });
    builder.addCase(addTask.fulfilled, (state) => {
      state.isTaskModify = true;
      state.isTaskEventLoading = false;
    });
    builder.addCase(addTask.rejected, (state, action) => {
      state.taskEventError = action.error.message;
      state.isTaskModify = false;
      state.isTaskEventLoading = false;
    });
    // --------------- Edit Task --------------------
    builder.addCase(editTask.pending, (state) => {
      state.isTaskEventLoading = true;
    });
    builder.addCase(editTask.fulfilled, (state) => {
      state.isTaskEventLoading = false;
      state.isTaskModify = true;
    });
    builder.addCase(editTask.rejected, (state, action) => {
      state.taskEventError = action.error.message;
      state.isTaskEventLoading = false;
    });
    // -------------- delete Task -------------------
    builder.addCase(deleteTask.pending, (state) => {
      state.isTaskEventLoading = true;
    });
    builder.addCase(deleteTask.fulfilled, (state) => {
      state.isTaskEventLoading = false;
      state.isTaskModify = true;
    });
    builder.addCase(deleteTask.rejected, (state, action) => {
      state.taskEventError = action.error.message;
      state.isTaskEventLoading = false;
    });
  },
});

export const {
  deleteTaskToState,
  editTaskToState,
  addTaskToState,
  addTasksToState,
} = tasksSlice.actions;

export default tasksSlice.reducer;
