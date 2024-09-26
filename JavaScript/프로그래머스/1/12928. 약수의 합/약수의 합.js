function solution(n) {
    var answer = 0;
    
    for(let i = 0; i <= n; i++) {
        if(n % i === 0) {
            answer += i
        }
    }
    
    return answer;
}

// n의 약수를 구하는 식을 생성
// 