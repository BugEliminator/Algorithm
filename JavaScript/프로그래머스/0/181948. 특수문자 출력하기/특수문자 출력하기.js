const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', function () {
    console.log(`!@#$%^&*(\\'"<>?:;`)
});


// 백슬래시는 escape 문자라서 2개를 써야 1개로 인식함