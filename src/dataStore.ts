const fs = require('fs');


export let data = {};

export function load() {
    const json = fs.readFileSync('data.json', { flag: 'r' });
    data = JSON.parse(json.toString());
}


export function setData(newData) {
    data = newData;
    const json = JSON.stringify(newData, null, 4);
    fs.writeFileSync('data.json', json, { flag: 'w' });
}





