function solution(rny_string) {
    let arrRny = rny_string.split("")
    for(let i = 0; i < arrRny.length; i++) {
        if(arrRny[i] === "m") arrRny[i] = "rn"
    }
    return arrRny.join("")
}