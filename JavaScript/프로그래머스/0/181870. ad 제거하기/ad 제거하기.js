function solution(strArr) {
    let result = []
    for(let x of strArr) {
        if(!x.includes("ad")) result.push(x)
    }
    return result
}

/*
    strArr의 길이만큼 반복
    includes로 ad가 안나오면 결과배열에 저장
    결과 리턴
*/