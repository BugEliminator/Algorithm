function solution(num, n) {
    if(Number.isInteger(num / n)) {
        return 1
    } else {
        return 0
    }
    
    // return Number.isInteger(num / n)
}

// Number.isInteger(x)는 x가 정수인지? 아니지? 검증해주는 역할을 수행.
// 정수가 맞다면 true, 아니라면 false