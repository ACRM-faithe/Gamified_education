import { Classroom, User } from "./interfaces";
import { data, setData } from "./dataStore";


//get a student
//update a student 
//remove a studnet
function getStudent(studentid: number, classroomId: number): User | undefined {
    const classroom = data.classrooms
        .find((classroom: Classroom) => {
            return classroom.classroomId === classroomId
        });

    if (classroom === undefined) {
        console.log(`The classroom id you provided ${classroomId} does not match 
any classrooms`);
        return;
    }


    const student = classroom.students.find((user: User) => {
        return user.userId == studentid;
    });


    if (student === undefined) {
        console.log(`The student id you provided ${studentid} does not match 
any id's in classroom: ${classroom.name}`);
        return;
    }


    return student;
}

//userId: number,
//username: string,
//name: string,
//email: string,
//password: string,
//sessions: string[],
//classroom: Classroom,
function updateStudent(studentid: number, classroomId: number,
    changes: {
        name?: string,
        email?: string,
        password?: string,
        classroom?: Classroom
    }): boolean {

    const student = getStudent(studentid, classroomId);

    if (student === undefined) {
        return false;
    }

    if (changes.name) {
        student.name = changes.name;
    }

    if (changes.email) {
        student.email = changes.email;
    }

    if (changes.password) {
        student.password = changes.password;
    }

    if (changes.classroom) {
        student.classroom = changes.classroom;
    }

    setData(data);
    return true;
}

function changePassword(studentid: number, classroomId: number,
    oldPassword: string, newPassword: string): boolean {
    const student = getStudent(studentid, classroomId);

    if (student === undefined) {
        return false;
    }

    if (student.password === oldPassword) {
        student.password = newPassword;
        setData(data);
        return true;
    }
    return false;
}


function removeStudent(studentid: number, classroomId: number) {
    const classroom = data.classrooms
        .find((classroom: Classroom) => {
            return classroom.classroomId === classroomId
        });

    if (classroom === undefined) {
        console.log(`The classroom id you provided ${classroomId} does not match 
any classrooms`);
        return false;
    }

    const student = classroom.students.find((user: User) => {
        return user.userId == studentid;
    });

    if (student === undefined) {
        console.log(`The student id you provided ${studentid} does not match 
any id's in classroom: ${classroom.name}`);
        return false;
    }

    data.userIds.splice(data.userIds.indexOf(student.userId), 1);
    classroom.students.splice(classroom.students.indexOf(student), 1);
    setData(data);
    return true;
}

