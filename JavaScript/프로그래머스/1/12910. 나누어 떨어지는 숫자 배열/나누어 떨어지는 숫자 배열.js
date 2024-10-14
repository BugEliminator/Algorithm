function solution(arr, divisor) {
    let answer = [];
    
    for(let x of arr) {
        if(x % divisor === 0) {
            answer.push(x)
        }
    }
    if(answer.length > 0) return answer.sort((a,b) => a - b)
    if(answer.length === 0 ) return [-1]
    
    return answer;
}

// 1. arr만큼 for반복
// 2. arr[i] % divisor !== 0 이면 false
// 2-1. true라면 arr[i]를 answer에 푸시