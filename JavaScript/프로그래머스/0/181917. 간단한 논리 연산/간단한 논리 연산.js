function solution(x1, x2, x3, x4) {
    let result = []
    if(x1 === true && x2 === true) result.push(true)
    if(x1 === true && x2 === false) result.push(true)
    if(x1 === false && x2 === true) result.push(true)
    if(x1 === false && x2 === false) result.push(false)
    
    if(x3 === true && x4 === true) result.push(true)
    if(x3 === true && x4 === false) result.push(true)
    if(x3 === false && x4 === true) result.push(true)
    if(x3 === false && x4 === false) result.push(false)
    
    if(result[0] === true && result[1] === true) return true
    return false
}