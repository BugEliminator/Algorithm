function solution(my_string, index_list) {
    let result = ""
    for(let i = 0; i < index_list.length; i++) {
        result += my_string[index_list[i]]
    }
    return result
}

/*
    1. index_list만큼 반복문 돌리기
    2. result에 my_string[index_list] 해주면 될듯
*/