import { Classroom, User } from './interfaces'
import { data, load, setData } from './dataStore'

export function newClassroom(
    teacher: User[],
    students: User[],
    name: string,
) {
    const data = load();
    let newClassroomId = data.classroomIds.length;
    data.classroomIds.push(newClassroomId);
    data.classrooms.push({
        name: name,
        students: students,
        teacher: teacher,
        leaderboard: [],
        classroomId: newClassroomId,
    })
}

export function deleteClassroom(
    classroomIdToDelete: number,
) {
    const data = load();
    let classrooms = data.classrooms;
    let classroomToDelete = data.classrooms.find(classroom => classroom.classroomId === classroomIdToDelete);
    if (!classroomToDelete) {
        throw new Error("classroom does not exist");
    }
    classrooms.splice(1, classroomIdToDelete);
    //let index = classrooms.findIndex(classroom => classroom === classroomToDelete);
    //classrooms.splice(1, index);
}

function getClassroom(classid: number): Classroom | undefined {
    return data.classrooms.find((clas: Classroom) => { return clas.classroomId === classid; });
}

function displayLeaderBoard(classid: number) {
    const classroom = getClassroom(classid);
    if (!classroom) {
        console.log(`The classroom id you provided ${classid} does not match 
any classrooms`);
        return;
    }

    let count = 1;
    for (const rank of classroom.leaderboard) {
        console.log(`(${count}) ${rank.name} [${rank.points}]`);
        ++count;
    }
}

function editClassroomName(classid: number, newName: string) {
    const classroom = getClassroom(classid);
    if (!classroom) {
        console.log(`The classroom id you provided ${classid} does not match 
any classrooms`);
        return;
    }


    classroom.name = newName;
    setData(data);
}

function addClassroomTeacher(classid: number, newTeacher: User) {
    const classroom = getClassroom(classid);
    if (!classroom) {
        console.log(`The classroom id you provided ${classid} does not match 
any classrooms`);
        return;
    }


    classroom.teacher.push(newTeacher);
    setData(data);
}

function removeClassroomTeacher(classid: number, removeTeacherid: number) {
    const classroom = getClassroom(classid);
    if (!classroom) {
        console.log(`The classroom id you provided ${classid} does not match 
any classrooms`);
        return;
    }

    classroom.teacher.splice(classroom.teacher.findIndex((teacher: User) => teacher.userId === removeTeacherid), 1);
    data.userIds.splice(data.userIds.findIndex((id: number) => id === removeTeacherid), 1);
    setData(data);

}

function addStudentToClassroom(classid: number, student: User) {
    const classroom = getClassroom(classid);
    if (!classroom) {
        console.log(`The classroom id you provided ${classid} does not match 
any classrooms`);
        return;
    }

    classroom.students.push(student);
    setData(data);
}

function removeStudentFromClassroom(classid: number, studentId: number) {
    const classroom = getClassroom(classid);
    if (!classroom) {
        console.log(`The classroom id you provided ${classid} does not match 
any classrooms`);
        return;
    }

    classroom.students.splice(classroom.students.findIndex((student: User) => student.userId === studentId), 1);
    setData(data);
}

