function solution(s) {
    let copyS = []
    let result = []
    for(let i = 0; i < s.length; i++) {
        if(copyS.indexOf(s[i]) === -1) {
            result.push(-1)
        } else {
            result.push(copyS.indexOf(s[i]) + 1)
        }
        copyS.unshift(s[i])
    }
    return result
}

/*
s문자열을 역순으로 카피할 copyS, 결과값을 저장할 result 생성

s의 길이만큼 반복하고 만약 copyS에서 s[i]를 찾으면 그자리의 + 1 값을 저장하고 그게 아니라면 -1을 저장
unshift로 넣어주는 이유는 s[i]와 제일 가까이 있는걸 찾지 못하고 0번부터 가까이 있는걸 인지하기 때문
*/