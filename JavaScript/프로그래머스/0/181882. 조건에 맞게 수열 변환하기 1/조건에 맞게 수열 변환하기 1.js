function solution(arr) {
    let result = []
    for(let x of arr) {
        if(x >= 50 && x % 2 === 0) {
            result.push(x / 2)
        } else if(x <= 50 && x % 2 !== 0) {
            result.push(x * 2)
        } else {
            result.push(x)
        }
    }
    return result
}