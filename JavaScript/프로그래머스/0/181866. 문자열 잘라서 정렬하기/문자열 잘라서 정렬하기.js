function solution(myString) {
    let result = []
    let arr = myString.split("x").sort().filter(text => text !== "")
    return arr
}