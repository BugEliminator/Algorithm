function solution(k, score) {
    let box = []    // 점수 비교하는 명예의 전당 박스
    let result = [] // 발표 점수를 나타내는 결과값
    for(let x of score) {
        box.push(x)
        box.sort((a,b) => b - a)    // 갈수록 작아지도록

        if(box.length > k) box.pop()
        result.push(box[box.length - 1])
    }
    return result
}


// score 만큼의 반복문을 돌림, 점수를 비교하는 box 배열을 하나 생성함.
// 반복문을 돌리면서 box에 하나씩 넣어주고 sort로 크기를 정렬함.
// 만약 box의 길이가 k보다 크게 된다면 box의 마지막을 지워버림
// 결과 배열에 box의 마지막 값을 넣어줌.