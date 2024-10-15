function solution(n) {    
    for(let i = 0; true; i++ ) {
        if(i ** 2 === n) {
            return (i+1) ** 2
        } else if(i > n) {
            return -1
        }
    }
}

// 1. for반복문을 0부터 무한으로 돌린다.
// 2. 조건문 사용
//  2-1. i의 제곱이 n과 일치한 경우   => return (i+1)의 제곱
//  2-2. i의 제곱이 n과 일치하지 않아 i가 n보다 커진 경우 => return -1