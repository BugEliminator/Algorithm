function solution(numLog) {
    let result = ""
    let box = 0 // 연산결과를 잠시 가지고 있는 박스
    for(let i = 0; i < numLog.length; i++) {
        box = numLog[i+1] - numLog[i]
        if(box === 1) result += "w"
        if(box === -1) result += "s"
        if(box === 10) result += "d"
        if(box === -10) result += "a"
    }
    return result
}
    
// 설명: i + 1 과 i 를 빼준 수가 뭐냐에 따라서 부여한 알파벳을 result에 넣어준다.
// 1 - 0 = 1 => w
// 0 - 1 = -1 => s
// 10 - 0 = 10 => d
// 0 - 10 = -10 => a
// 1 - 0 = 1 => w
// 0 - 1 = -1 => s
// 10 - 0 = 10 => d
// 0 - 10 = -10 => a
// -1 - 0 = -1 => s
// -2 - -1 = -1 => s
// -1 - -2 = 1 => w
// 정답: wsdawsdassw