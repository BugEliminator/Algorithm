function solution(n, k) {
    let result = [];
    for (let i = 1; k * i <= n; i++) result.push(k * i);
    return result;
}