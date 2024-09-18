let ltBigNum = []
let rtBigNum = []

function solution(sizes) {
    var answer = 0;
    
    for (let i = 0; i < sizes.length; i++) {

        if(sizes[i][0] < sizes[i][1]) {  // 오른쪽값이 왼쪽값보다 크다면?
            
            let box = sizes[i][0]   // 우선 왼쪽값을 변수에 보관
            
            sizes[i][0] = sizes[i][1]   // 오른쪽 값을 왼쪽에 왼쪽 값을 오른쪽으로 바꿔줌
            sizes[i][1] = box              
        }
        ltBigNum.push(sizes[i][0])
        rtBigNum.push(sizes[i][1])
        
    }

    return Math.max(...ltBigNum) * Math.max(...rtBigNum);
}


/*
    1. 배열의 크기를 비교해서 큰값을 오른쪽에 배치하고 작은값은 왼쪽에 배치   [큰값, 작은값]
    2. 배열마다 왼쪽에 있는 값 중에서 제일 큰 값을 찾기
    3. 배열마다 오른쪽에 있는 값 중에서 제일 큰 값을 찾기
    4. 제일 큰 값 2개를 곱하면서 바로 리턴해주기
*/

/*

10  /   7
12  /   3
8   /   15
14  /   7
5   /   15
: 120

14  /   4
19  /   6
6   /   16
18  /   7
7   /   11
: 133
*/