export interface User {
  id: number;
  name: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
}

export interface login {
  email: string;
  password: string;
}
