function solution(my_string, n) {
    let result = [...my_string]
    let minusString = my_string.length - n  //  3
    for(let i = 0; i < minusString; i++) {
        result.shift()
    }
    return result.join("")
}