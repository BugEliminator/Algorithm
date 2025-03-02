function solution(answers) {
    let result = []
    let one = [1,2,3,4,5]
    let two = [2,1,2,3,2,4,2,5]
    let thr = [3,3,1,1,2,2,4,4,5,5]
    let onePoint = 0
    let twoPoint = 0
    let thrPoint = 0
    for(let i = 0; i < answers.length; i++) {
        let oneLength = i % one.length
        let twoLength = i % two.length
        let thrLength = i % thr.length
        
        if(answers[i] === one[oneLength]) onePoint++
        if(answers[i] === two[twoLength]) twoPoint++
        if(answers[i] === thr[thrLength]) thrPoint++
    }
    let maxScore = Math.max(onePoint, twoPoint, thrPoint);
    if (onePoint === maxScore) result.push(1);
    if (twoPoint === maxScore) result.push(2);
    if (thrPoint === maxScore) result.push(3);

    return result
}

// 모듈러 연산을 활용하여 배열을 순환했음. i % one.length