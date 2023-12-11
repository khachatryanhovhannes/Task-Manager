import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../services/apiService";
import { IAddTask, IGetTasksParapms, ITask } from "../../models";
import axios from "axios";

const getTasks = createAsyncThunk(
  "tasks/getTasks",
  async ({ take, skip, date, status }: IGetTasksParapms) => {
    try {
      const dueDate = date ? `&dueDate=${date}` : "";
      const statusType = status
        ? `&status=${status.split(" ").join("%20")}`
        : "";
      const res = await instance.get(
        `/tasks?take=${take}&skip=${skip}${dueDate}${statusType}`
      );
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return Promise.reject(error.response.data.message);
      } else {
        return Promise.reject("Something Wrong");
      }
    }
  }
);

const addTask = createAsyncThunk("tasks/addTask", async (task: IAddTask) => {
  try {
    const res = await instance.post("/tasks", task);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return Promise.reject(error.response.data.message);
    } else {
      return Promise.reject("Something Wrong");
    }
  }
});

const editTask = createAsyncThunk("tasks/edit", async (task: ITask) => {
  try {
    const res = await instance.patch(`tasks/${task.id}`, {
      title: task.title,
      description: task.description,
      dueDate: task.dueDate.substring(0, 10),
      status: task.status,
    });

    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return Promise.reject(error.response.data.message);
    } else {
      return Promise.reject("Something Wrong");
    }
  }
});

const deleteTask = createAsyncThunk("tasks/delete", async (id: number) => {
  try {
    const res = await instance.delete(`/tasks/${id}`);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return Promise.reject(error.response.data.message);
    } else {
      return Promise.reject("Something Wrong");
    }
  }
});

export { getTasks, addTask, editTask, deleteTask };
