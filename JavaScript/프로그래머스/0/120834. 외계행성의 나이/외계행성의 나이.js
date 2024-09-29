function solution(age) {
    var answer = '';
    let object = {}
    
    for (let i = 0; i < 26; i++) {
        let spelling = String.fromCharCode(97 + i)  // 'a' = 97
        object[i] = spelling        // 0: 'a', 1: 'b'... 25: 'z'
    }

    for (let i = 0; i < String(age).length; i++) {
           answer += object[Number(String(age)[i])];
 
    }
    return answer    
}


// 스펠링을 아스키코드로 변환해서 숫자를 0부터 순서대로 객체화한다.