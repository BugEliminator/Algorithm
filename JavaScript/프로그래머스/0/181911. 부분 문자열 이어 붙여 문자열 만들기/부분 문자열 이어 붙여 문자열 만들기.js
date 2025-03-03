function solution(my_strings, parts) {
    let result = ""
    for(let i = 0; i < parts.length; i++) {
        for(let j = parts[i][0]; j <= parts[i][1]; j++) {
            result += my_strings[i][j]
        }
    }
    return result
}