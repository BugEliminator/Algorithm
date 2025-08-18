function solution(myString) {
    let result = []
    let arr = myString.split('x')
    for(let x of arr) result.push(x.length)
    return result
}