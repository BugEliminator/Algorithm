function solution(n, m, section) {
    let result = 0
    let paintedEnd = 0;
    let nArray = Array(n).fill(0).map((_, i) => i + 1);
    for (let i = 0; i < section.length; i++) {
        if (section[i] > paintedEnd) {
            result++;              // 새로 칠해야 하니까 횟수++
            paintedEnd = section[i] + m - 1; // 이번에 칠한 끝 위치 업데이트
        }
    }
    return result
}


/*
    1. n개만큼의 new Array를 1부터 fill 한다.
    2. 반복문이 한번 진행할때마다 m개를 앞서나가게 됨.
        2-1. 만약 section에 m개보다 더 높은 수가 남아있다면 result++ 하고 반복
        2-2. 만약 section에 m개보다 더 높은 수가 남아있지 않다면 result++ 하고 리턴해줌
*/