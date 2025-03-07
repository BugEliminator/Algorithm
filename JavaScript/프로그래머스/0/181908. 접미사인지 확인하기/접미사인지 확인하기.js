function solution(my_string, is_suffix) {
    let result = [my_string]
    for(let i = 1; i < my_string.length; i++) {
        result.push(my_string.slice(i))
        result.reverse()
    }
    return result.includes(is_suffix) ? 1 : 0
}