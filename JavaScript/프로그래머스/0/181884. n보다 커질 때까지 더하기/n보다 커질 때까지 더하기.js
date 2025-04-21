function solution(numbers, n) {
    let result = 0
    for(let x of numbers) {
        if(result <= n) result += x
    }
    return result
}