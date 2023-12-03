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

export type { IUserLogin, IUserRegister, IUser, ITask, IAddTask };
