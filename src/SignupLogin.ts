import { data, setData } from './dataStore';
import { User } from './interfaces';

interface Classroom {
  classroomId: number;
  students: User[];
  teacher: User[];
}

const generateSession = (length: number = 6): string => {
  let session = '';
  for (let i = 0; i < length; i++) {
    session += Math.floor(Math.random() * 10).toString();
  }
  return session;
};

export const studentRegister = (
  email: string,
  password: string,
  name: string,
  Class: number
): void => {
  const chosenClass = data.classrooms.find((classroom) => classroom.classroomId === Class);

  if (!chosenClass) {
    throw new Error("Class doesn't exist");
  }

  const userSession = generateSession();
  const userId = Math.floor(Math.random() * 10);

  const newStudent: User = {
    userId,
    email,
    password,
    name,
    sessions: [userSession],
    classroom: chosenClass,
  };

  chosenClass.students.push(newStudent);
  setData(data);
};

export const teacherRegister = (
  email: string,
  password: string,
  name: string,
  Class: number
): void => {
  const chosenClass = data.classrooms.find((classroom) => classroom.classroomId === Class);

  if (!chosenClass) {
    throw new Error("Class doesn't exist");
  }

  const userSession = generateSession();
  const userId = Math.floor(Math.random() * 10);

  const newTeacher: User = {
    userId,
    email,
    password,
    name,
    sessions: [userSession],
    classroom: chosenClass,
  };

  chosenClass.teacher.push(newTeacher);
  setData(data);
};
