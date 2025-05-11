const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const [A, B] = input.split(" ").map(Number);

let arr = []
for (let i = 1; arr.length <= B; i++) {
    for (let j = 0; j < i; j++) {
        arr.push(i);
    }
}

let result = arr.slice(A - 1, B)
const sum = result.reduce((a, b) => a + b, 0);
console.log(sum);