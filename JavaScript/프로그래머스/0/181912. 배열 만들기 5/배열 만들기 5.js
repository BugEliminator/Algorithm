function solution(intStrs, k, s, l) {
    let result = []
    let box = ""
    for(let i = 0; i < intStrs.length; i++) {
        for(let j = 0; j < l; j++) {
            box += intStrs[i][s + j]
        }
        if(k < Number(box)) result.push(Number(box))
        box = ""
    }
    return result
}