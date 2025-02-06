function solution(n) {
    let result = 0
    if(n % 2 === 0) {   //짝수인 경우
        for(let i = n; i > 0; i -= 2) {
            result += i ** 2
        }
    } else {
        for(let i = n; i > 0; i -= 2) {
            result += i
        }
    }
    return result
}