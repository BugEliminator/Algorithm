function solution(prices) {
    let result = []
    
    for(let i = 0; i < prices.length; i++) {
        let cnt = 0
        for(let j = i + 1; j < prices.length ; j++) {
            cnt++
            if(prices[i] > prices[j]) { // 떨어짐 감지 
                break
            }
        }
        result.push(cnt)
    }
    return result
}
/*
    for 반복문 사용 prices개수대로
    - 이중 for문 사용 prices개수 - 1
    - 만약 prices[i]이후 떨어진 값이 발견되면?
        - 끝
        - 발견되지 않으면 카운트 센걸 배열에 넣어둠.
*/