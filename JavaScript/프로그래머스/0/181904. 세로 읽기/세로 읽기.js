function solution(my_string, m, c) {
    let result = ""
    let mCount = 0
    for(let i = 0; i < my_string.length; i++) {
        mCount++
        if(mCount === c) result += my_string[i]
        if(mCount === m) mCount = 0
    }
    return result
}