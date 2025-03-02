function solution(numbers) {
    let box = []
    
    for (let i = 0; i < numbers.length; i++) {
        for(let j = 0; j < numbers.length; j++) {
            if(i !== j) {
                box.push(numbers[i] + numbers[j])
            } 
        }
    }
     let result = [...new Set(box)]
    
    return result.sort((a, b) => a - b);
}



// 1. 2중 for문을 사용해서 모든 경우의 수를 구해서 새로운 배열a에 저장
// 2. a배열에서 중복된 값을 삭제하고 sort()사용