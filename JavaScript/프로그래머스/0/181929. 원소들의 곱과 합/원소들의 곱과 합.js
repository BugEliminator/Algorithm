let x = 1   // 모든 원소들의 곱을 구하는 곳
let xx = 0  // 모든 원소들의 합의 제곱을 구하는 곳

function solution(num_list) {
    for(let i of num_list) {
        x *= i
        xx += i
    }
    return x < xx**2 ? 1 : 0
}