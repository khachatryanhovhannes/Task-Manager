import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../services/apiService";
import { IAddTask, IGetTasksParapms, ITask } from "../../models";

const getTasks = createAsyncThunk(
  "tasks/getTasks",
  async ({ take, skip, date, status }: IGetTasksParapms) => {
    console.log(take, skip)
    const dueDate = date ? `&dueDate=${date}` : "";
    const statusType = status ? `&status=${status.split(" ").join("%20")}` : "";
    const res = await instance.get(
      `/tasks?take=${take}&skip=${skip}${dueDate}${statusType}`
    );
    return res.data;
  }
);

const addTask = createAsyncThunk("tasks/addTask", async (task: IAddTask) => {
  const res = await instance.post("/tasks", task);
  return res.data;
});

const editTask = createAsyncThunk("tasks/edit", async (task: ITask) => {
  const res = await instance.patch(`tasks/${task.id}`, {
    title: task.title,
    description: task.description,
    dueDate: task.dueDate.substring(0, 10),
    status: task.status,
  });

  return res.data;
});

const deleteTask = createAsyncThunk("tasks/delete", async (id: number) => {
  const res = await instance.delete(`/tasks/${id}`);
  return res.data;
});

export { getTasks, addTask, editTask, deleteTask };
