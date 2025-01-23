function solution(n) {
    var answer = [];
    let i = 1;
    while (i <= n) {
        if (i % 2 === 1) {
            answer.push(i)
        }
        i += 1
    }
    
    return answer;
}


// 1. 1부터 100까지 홀수로 출력
// 2. 정수 n 보다 낮은 값 출력