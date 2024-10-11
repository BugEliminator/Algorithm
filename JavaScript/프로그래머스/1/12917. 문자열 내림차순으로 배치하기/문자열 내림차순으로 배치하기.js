function solution(s) {
    let result = [];
    let ASCII_arr = []
    for(let i = 0; i < s.length; i++) {
        ASCII_arr.push(s.charCodeAt(i))
    }
    ASCII_arr.sort((a,b) => b - a)
    
    for(let j = 0; j < s.length; j++) {
        result.push(String.fromCharCode(ASCII_arr[j]))
    }
    
    return result.join("");
}


// 아스키코드를 활용해서 문제를 풀계획

// 1. 아스키로 변환한 값을 저장할 ASCII_arr배열을 만들어 준다.
// 2. 반복문for 돌려서 s값들 차례대로 넣어줌.
// 3. ASCII_arr에서 sort()돌려서 내림차순으로 변환해줌.
// 4. 다시 반복문for 돌려서 문자열로 변환해준다.
// 5. join()으로 배열깨주고 리턴