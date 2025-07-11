import { Classroom, User } from "./interfaces";
import { data } from "./dataStore";


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

function updateStudent(studentid: number,): boolean {

}
