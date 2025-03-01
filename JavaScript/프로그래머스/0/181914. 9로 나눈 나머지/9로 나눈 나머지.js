function solution(number) {
    let num = 0 // 각 자리 숫자의 합
    for(let x of number) {
        num += Number(x)
    }
    return num % 9
}