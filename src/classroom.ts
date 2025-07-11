import { User } from './interfaces'
import { load } from './dataStore.ts'

export function newClassroom (
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
        classroomId: newClassroomId,
    })
}

export function deleteClassroom (
    classroomIdToDelete: number,
) {
    const data = load();
    let classrooms = data.classrooms;
    let classroomToDelete = data.classrooms.find(classroom => classroom.classroomId === classroomIdToDelete);
    if (!classroomIdToDelete) {
        throw new Error("classroom does not exist");
    }  
    classrooms.splice(1, classroomIdToDelete);
    let index = classrooms.findIndex(classroom => classroom === classroomToDelete);
    classrooms.splice(1, index);
}