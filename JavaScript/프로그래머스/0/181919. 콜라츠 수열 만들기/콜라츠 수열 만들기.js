function solution(n) {
    let result = []
    let x = n
    for(let i = 0; i < 1000; i++) {
        result.push(x)
        if(x === 1) return result
        if(x % 2 === 0) {   // 짝수라면?
            x = x / 2 
        } else if(x % 2 === 1) {    // 홀수라면?
            x = 3 * x + 1
        }
    }
}