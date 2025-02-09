function solution(code) {
    let mode = 0
    let result = ""
    for(let i = 0; i < code.length; i++) {
        if(code[i] === "1" && mode === 0) {
            mode = 1
            continue
        } else if(code[i] === "1" && mode === 1) {
            mode = 0
            continue
        }
            
        if(mode === 0 && i % 2 === 0) result += code[i]
        if(mode === 1 && i % 2 !== 0) result += code[i]
    }
    return result === "" ? "EMPTY" : result
}

