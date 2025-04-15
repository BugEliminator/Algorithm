function solution(num_list) {
    let jac = 0
    let hol = 0
    for(let i = 0; i < num_list.length; i++) {
        if(i % 2 === 0) {
            jac += num_list[i]
        } else {
            hol += num_list[i]
        }
    }
    return jac > hol ? jac : hol
}