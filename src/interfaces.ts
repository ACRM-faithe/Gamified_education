export interface UserDetails {
  user: {
    userId: string;
    username: string;
    name: string;
    email: string;
    class: string;
  };
}

export interface User {
  userId: string;
  username: {};
  name: string;
  email: string;
  class: string;
  password: string;
  sessions: string[];
  classroom: Classroom;
}

export interface Classroom {
  id: number;
  name: string;
  students: User[];
  teacher: User[];
}

export interface Task {
  timeCreated: number;
  dueDate: number;
  details: string;
  completed: boolean;
}

export interface dataStoreObj {
  classrooms: Classroom[];
}
