function solution(s) {
    let samePoint = 0   // 같은 단어일 경우 올라가는 점수
    let anotherPoint = 0    // 다른 단어일 경우 올라가는 점수
    let samesp = "" // 첫 글자
    let result = 0  // 결과값
    for(let i = 0; i < s.length; i++) {
        if(samePoint === 0) samesp = s[i]
        if(samesp === s[i]) {
            samePoint ++
        } else {
            anotherPoint ++
        }
        if(samePoint === anotherPoint) {
            result++
            samePoint = 0
            anotherPoint = 0
            samesp = ""
        }
    }
    if(samePoint > 0) result++
    return result
}