function solution(myString, pat) {
    let newStr = ""
    myString.split("").map(str => str === "A" ? newStr += "B" : newStr += "A" )
    return newStr.includes(pat) ? 1 : 0
}