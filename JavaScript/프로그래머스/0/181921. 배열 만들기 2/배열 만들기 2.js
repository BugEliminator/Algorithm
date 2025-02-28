function solution(l, r) {
    let result = []
    for(let i = l; i <= r; i++) {
        let box = i.toString().split("")
            if(box.every(num => num === "5" || num === "0")) {
                result.push(i)
            }
        }
    return result.length !== 0 ? result : [-1]
}