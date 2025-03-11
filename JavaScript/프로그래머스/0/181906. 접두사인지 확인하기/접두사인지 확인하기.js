function solution(my_string, is_prefix) {
    let result = ""
    for(let i = 0; i < my_string.length; i++) {
        result += my_string[i]
        if(result === is_prefix) return 1
    }
    return 0
}