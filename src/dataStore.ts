import { dataStoreObj } from "./interfaces";

const fs = require('fs');


export let data: dataStoreObj = {
    classrooms: [],
    classroomIds: [],
    userIds: [],
};

export function load() {
    const json = fs.readFileSync('data.json', { flag: 'r' });
    data = JSON.parse(json.toString());
    return data;
}


export function setData(newData) {
    data = newData;
    const json = JSON.stringify(newData, null, 4);
    fs.writeFileSync('data.json', json, { flag: 'w' });
}





