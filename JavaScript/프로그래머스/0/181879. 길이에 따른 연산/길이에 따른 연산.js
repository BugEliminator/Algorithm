function solution(num_list) {
    let result = 1
    if(num_list.length >= 11) {
        for(let x of num_list) result += x
        result--
    } else {
        for(let x of num_list) result *= x
    }
    return result
}