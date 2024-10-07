function solution(x, n) {
    var answer = [];
    for(let i = 1; i <= n; i++) {
        answer.push(i * x)
    }
    
    return answer;
}

// 1. for반복문 n번만큼 반복하고 answer.push(i*x)
