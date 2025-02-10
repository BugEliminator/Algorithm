function solution(num_list) {
    let odd = ""     // 홀수 
    let even = ""    // 짝수
    
    for (let i = 0; i < num_list.length; i++) {
        num_list[i] % 2 === 0 ? even += num_list[i] : odd += num_list[i]
    }
    return Number(even) + Number(odd)
}