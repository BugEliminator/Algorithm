function solution(a, b, c, d) {
    let box = [a, b, c, d];
    box.sort((a,b) => a - b)
    let unOverlapBox = [...new Set(box)]
    console.log(unOverlapBox)
    if(unOverlapBox.length === 1) return 1111 * box[0]    // 4개 같은 경우
    if(box[1] === box[2] && unOverlapBox.length === 2) {    // 3개 같은 경우
        if(box[0] === box[1]) { // 2 2 2 4
            return (10 * box[0] + box[3]) * (10 * box[0] + box[3])
        } else {    // 1 2 2 2
            return (10 * box[3] + box[0]) * (10 * box[3] + box[0])
        }
    }  
    if(unOverlapBox.length === 3) {     // 맞는 2개가 1세트 인경우
        if(box[0] === box[1]) {  // 1 1 2 3
            return box[2] * box[3]
        } else if(box[1] === box[2]) {   // 1 2 2 3
            return box[0] * box[3]
        } else { // 1 2 3 3
            return box[0] * box[1]
        }
    }    
    if(box[1] !== box[2] && unOverlapBox.length === 2) {    // 맞는 2개가 2세트 인경우
       return (box[2] + box[1]) * (box[2] - box[1])     // 2 2 3 3
    }    
    if(unOverlapBox.length === 4) return box[0]    // 모두 다른 경우
}

/*
모든 경우 솔트 처리할꺼임
4개가 같은 경우 - 쉬움
3개가 같은 경우 - [1]과 [2]가 같아야 하고 중복값 지웠을때 2개만 남아야함.
2개가 같은 경우 - 중복 값 지웠을때 3개만 남아야함
2개가 각각 같은 경우 - [1]과 [2]가 달라야하고 중복값 지웠을때 2개만 남아야함.
모두 다른 경우 - 쉬움
*/

// 같은 수를 지워버리는 메서드를 씀, 