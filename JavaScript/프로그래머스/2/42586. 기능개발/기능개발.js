function solution(progresses, speeds) {
    let result = []
    let days = []   // [7,3,9]
    for(let i = 0; i < progresses.length; i++) {
       days.push(Math.ceil((100 - progresses[i]) / speeds[i]))
    }
    
    while(days.length > 0) {
        let current = days.shift(); // 7
        let cnt = 1
        while( current >= days[0]) {
            days.shift()
            cnt++
        }
        result.push(cnt)
    }
    
    return result
}


/*

풀이법
 days = Math.ceil((100 - progresses[i]) / speeds[i])로 현재까지 남은 일수 계산
 
 queue의 길이가 0이될때까지 while 반복 실행
 안에 for문 하나 만들어서 i와 i+1의 상태를 봄 i가 더 크면 그 다음까지 계속 i가 더 작은 시점까지 빼줌.
5 10 1 1 20 1

3 
*/