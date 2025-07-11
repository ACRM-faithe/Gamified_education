export interface UserDetails {
  user: {
    userId: number;
    username: string;
    name: string;
    email: string;
    class: string; //class name
  };
}

export interface User {
  userId: number;
  name: string;
  email: string;
  password: string;
  sessions: string[];
  classroom: Classroom;
}

export interface Classroom {
  name: string;
  students: User[];
  teacher: User[];
  classroomId: number;
}

export interface Task {
  timeCreated: number;
  dueDate: number;
  details: string;
  completed: boolean;
}

export interface dataStoreObj {
  classrooms: Classroom[];
  classroomIds: number[];
  userIds: number[];
}
