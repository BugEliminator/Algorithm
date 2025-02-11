function solution(num_list) {
    let a = num_list[num_list.length - 1]   // 마지막 번호      => 6
    let b = num_list[num_list.length - 2]   // 마지막 전 번호    => 1
    if(a > b) {
        num_list.push(a - b)
    } else {
        num_list.push(a * 2)
    }
    return num_list
}