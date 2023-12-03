import axios from "axios";
import { BASE_URL } from "../constants";
import { IAddTask, ITask, IUserLogin, IUserRegister } from "./../models";
import { getToken } from "./../helpers";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 0,
  headers: { "Content-Type": "application/json" },
});

instance.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${getToken()}`;
  return config;
});

async function userRegister(newUserData: IUserRegister) {
  try {
    const response = await instance.post("/auth/register", newUserData);

    if (response.data) {
      return response.data.data;
    } else {
      throw new Error("Response format ...............");
    }
  } catch (error) {
    throw error;
  }
}

async function userLogin(userLoginData: IUserLogin) {
  try {
    const response = await instance.post("/auth/login", userLoginData);

    if (response.data) {
      return response.data.data;
    } else {
      throw new Error("Response format ...............");
    }
  } catch (error) {
    throw error;
  }
}

async function getUserInfo() {
  try {
    const response = await instance.get("/users/profile");

    if (response.data) {
      return response.data.data;
    } else {
      throw new Error("Response format ...............");
    }
  } catch (error) {
    throw error;
  }
}

async function getTasks(take: number, skip: number, date:string, status: string) {
  try {
    // dueDate=2024-01-23
    const dueDate = date ? `&dueDate=${date}` : ""
    const statusType = status ? `&status=${status.split(" ").join("%20")}` : "";
    console.log(dueDate)
    const response = await instance.get(
      `/tasks?take=${take}&skip=${skip}${dueDate}${statusType}`
    );

    if (response.data) {
      return response.data;
    } else {
      throw new Error("Response format ...............");
    }
  } catch (error) {
    throw error;
  }
}

async function addTask(newTask: IAddTask) {
  try {
    const response = await instance.post("/tasks", newTask);

    if (response.data) {
      return response.data.data;
    } else {
      throw new Error("Response format ...............");
    }
  } catch (error) {
    throw error;
  }
}

async function deleteTask(id: number) {
  try {
    const response = await instance.delete(`/tasks/${id}`);

    if (response.status === 204) {
      return response;
    } else {
      throw new Error("Response format ...............");
    }
  } catch (error) {
    throw error;
  }
}

async function editTask(task: ITask) {
  try {
    const response = await instance.patch(`tasks/${task.id}`, task);

    if (response.data) {
      return response.data;
    } else {
      throw new Error("Response format ...............");
    }
  } catch (error) {
    throw error;
  }
}

export {
  userRegister,
  userLogin,
  getUserInfo,
  getTasks,
  addTask,
  deleteTask,
  editTask,
};
