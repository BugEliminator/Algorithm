function solution(my_string, overwrite_string, s) {
    let result = ""
    // 1
    for (let i = 0; i < s; i++) {
        result += my_string[i]
    }
    // 2
    result += overwrite_string
    // 3
    // result.length === 9
    // my_string === 10
    while(result.length < my_string.length) {
        let resultNum = result.length
        result += my_string[resultNum]
    }
    return result
}


// 1. my_string에서 s번까지 뽑아서 result에 저장해둠.
    // 현재상황: He
// 2. overwrite_string에 들어있는 문자열을 result에 더해줌.
    // 현재상황: HelloWorl
// 3. my_string의 길이와 overwrite_string의 길이를 비교함. 
    // 만약 overwrite_string의 길이가 더 크다면? result를 리턴
    // 만약 my_string의 길이가 더 크다면? overwrite_string 이후 번호 부터 뽑아서 my_string[이후번호]해주고 반복
    // 현재상황: HelloWorld