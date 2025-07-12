import { dataStoreObj } from './interfaces';

const fs = require('fs');

export let data: dataStoreObj = {
  classrooms: [],
  classroomIds: [],
  userIds: [],
};

export function load() {
  const json = fs.readFileSync('src/data.json', { flag: 'r' });
  data = JSON.parse(json.toString());
  return data;
}

export function setData(newData: dataStoreObj) {
  data = newData;
  const json = JSON.stringify(newData, null, 4);
  fs.writeFileSync('src/data.json', json, { flag: 'w' });
}


export function clear(data: dataStoreObj) {
  data = {
    classrooms: [],
    classroomIds: [],
    userIds: [],
  };
  setData(data);
}
