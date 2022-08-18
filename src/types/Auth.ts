export interface Role {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  role: string;
}

export interface User {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  firstName: string;
  lastName: string;
  roles: Role[];
}
