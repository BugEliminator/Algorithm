function solution(num_list) {
    let result = 0
    for(let x of num_list) {
        while(x !== 1) {
            if(x % 2 === 0) {
                x = x / 2
                result++
            } else if(x % 2 !== 0) {
                x = (x - 1) / 2
                result++
            }
        }
    }
    return result
}

/*
    12 6 3 1 -> 3
    4 2 1 -> 2
    15 7 3 1 -> 3
    1 -> 0
    14 7 3 1 -> 3
*/