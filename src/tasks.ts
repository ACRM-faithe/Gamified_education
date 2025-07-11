

export interface Task {
    timeCreated: number,
    dueDate: number,
    details: string,
    completed: boolean,
}


//TODO: a user needs to be able to create a task
// A task needs a due date 
// A description
// when it was created 
// when it was finished 
// unique identifier

function createTask(userId: string, description: string, due_date: number): Task {
    //TODO: check valid date

    const task: Task = {
        timeCreated: Math.floor(Date.now() / 1000),
        dueDate: due_date,
        details: description,
        completed: false,
    };





}


function editTask() {

}


function completeTask() {

}

function deleteTask() {

}
