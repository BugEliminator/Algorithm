const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const data = input[0].split(' ')
const a = Number(data[0])
const b = Number(data[1])

const result = a - b

console.log(result)