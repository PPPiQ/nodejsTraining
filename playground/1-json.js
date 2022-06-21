const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
data.name = "Piotr";
data.age = "39";
const stringifyData = JSON.stringify(data);
fs.writeFileSync('1-json.json', stringifyData);
