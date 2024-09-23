function solution(arr) {
    let answer = 0;
    
    for (let x of arr) {
        answer += x
    }

    return answer / arr.length;
}