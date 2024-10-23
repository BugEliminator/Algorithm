function solution(d, budget) {
    let sortD = d.sort((a, b) => a - b)
    let box = 0
    let cnt = 0
    
    for(let i = 0; i < d.length; i++) {
        if(box + sortD[i] <= budget) {  // 2-1 경우
            box += sortD[i]
            cnt++
        } else { // 2-2 경우
            return i 
        }
    }
    return cnt
}
        // 2+2+3
/*
1. d를 오름차순으로 정리해준다.
2. box 변수를 만들어줄꺼고, for 돌린다.
    2-1. box변수가 budget보다 작으면 i를 더해주고, cnt++ 반복
    2-2. box변수가 budget보다 크거나 같다면 cnt 즉시 리턴한다.
    2-3. sortD배열을 다 돌아 for문을 빠져나온다면 마지막에 cnt리턴
*/