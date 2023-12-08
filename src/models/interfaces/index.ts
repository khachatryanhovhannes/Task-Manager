interface ITask {
  createdAt: string;
  description: string;
  dueDate: string;
  id: number;
  status: string;
  title: string;
  updatedAt: string;
  userId: number;
}

interface IAddTask {
  title: string;
  description: string;
  dueDate: string;
  status: string;
}

interface IUser {
  createdAt: string;
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  role: string;
  updatedAt: string;
}

interface IUserRegister {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface IUserLogin {
  email: string;
  password: string;
}

interface IUserChangePassword {
  email: string;
  password: string;
  newPassword: string;
}

interface IUserChangeData {
  newEmail?: string;
  firstName?: string;
  lastName?: string;
}

interface IGetTasksParapms {
  skip: number;
  take: number;
  date?: string;
  status?: string;
}

export type {
  IGetTasksParapms,
  IUserLogin,
  IUserRegister,
  IUser,
  ITask,
  IAddTask,
  IUserChangePassword,
  IUserChangeData,
};
