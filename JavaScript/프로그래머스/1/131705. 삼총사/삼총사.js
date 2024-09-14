function solution(number) {
    let answer = 0;
    
    // for (let i = 0; i < number.length; i++) {
    //     for (let j = 0; j < number.length; j++) {
    //         for (let y = 0; y < number.length; y++) {
    //             if (i !== j && i !== y && j !== y && number[i] + number[j] + number[y] === 0) {
    //                 answer ++
    //             }
    //         }
    //     }
    // }
    
    
    for (let lt = 0; lt < number.length; lt++) {
        for (let rt = lt+1; rt < number.length; rt++) {
            for (let x = rt+1; x < number.length; x++) {
                if(lt !== rt && lt !== x && number[lt] + number[rt] + number[x] === 0) {
                    answer++
                }
            }
        }

    }
    
    
    return answer;
}

// -2, 3, 0, 2, -5

// 복잡도 생각안하고 진짜 간단하게 푼다면 for문 3번 중첩하면되긴함.