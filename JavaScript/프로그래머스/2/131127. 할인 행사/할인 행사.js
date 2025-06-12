function solution(want, number, discount) {
    let map = new Map()
    let result = 0
    for(let i = 0; i < want.length; i++) {
        map.set(want[i], number[i]);
    }
    
    for(let i = 0; i <= discount.length - 10; i++) {
        let tempMap = new Map(map); // 원본 복사
        for(let j = i; j < i + 10; j++) {
            if(tempMap.get(discount[j])) {
                tempMap.set(discount[j], tempMap.get(discount[j]) - 1)
            }
        }
        
        let isMatch = true
        for(let x of tempMap.values()) {
            if(x > 0) {
                isMatch = false
                break
            }
        }
        if(isMatch) result ++
    }
    return result
}

/*

풀이방법
1. 해시맵을 만들고 거기에 want와 number을 연결해서 객체화해줌.
2. 2중 포문을 만든다
    2-1. i는 0 ~ discount - 10 만큼 반복
    2-2. j는 0 ~ 10번 반복
3. 2번까지 한 map에서 반복으로 돌았을때 해시맵의 벨류값들이 모두 0이면 변수 result++
3. return result
    
*/