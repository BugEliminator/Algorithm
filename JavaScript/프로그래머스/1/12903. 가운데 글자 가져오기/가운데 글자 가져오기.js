function solution(s) {
    let newS = Math.floor(s.length / 2)
    if(s.length % 2 !== 0) {
        return s[newS]
    } else {
        return s[newS - 1] + s[newS]
    }
}


/*
1. s가 짝수인지 홀수인지 검증하고
2. 그 결과에 따라 조건을 다르게 준다.
    - 홀수면 Math.floor()
    - 짝수면 절반 나누고 그거랑 그거 - 1
*/