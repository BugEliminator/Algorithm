function solution(myString) {
    let arrMyString = myString.toLowerCase().split("")
    let result = arrMyString.map(n => n === "a" ? n.toUpperCase() : n)
    console.log(result.join(""))
    return result.join("")
}