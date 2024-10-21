function solution(n, m) {
    let nMin = []
    let mMin= []
    let minBox = []
    
    let nMax= []
    let mMax= []
    let maxBox = []
    
    let ltAnswer = 0
    let rtAnswer = 0
    for(let i = 0; i <= n; i++) {
        if(n % i === 0) nMin.push(i)
    }
    for(let i = 0; i <= m; i++) {
        if(m % i === 0) mMin.push(i)
    }
    
    for(let i = 0; i <= nMin.length; i++) {
        if(mMin.includes(nMin[i])) minBox.push(nMin[i])
        ltAnswer = Math.max(...minBox)
    }
    // 이게 최대공약수 Math.max(...minBox)
    
    for(let i = 1; true; i++) {
        nMax.push(n * i)
        mMax.push(m * i)
        
        let a = nMax.filter(e => mMax.includes(e))
        if(a.length > 0) {
            rtAnswer = Number(a.join(""))
            return [ltAnswer, rtAnswer]
        }
    }
}

// 2개를 구하니까 각각 먼저 풀어서 한번에 푸시해주기
/*
최대공약수 로직
1. 각 수의 약수 구하기
    1-1. 필터 메서드 사용해서 나머지가 0인 수가 그 수의 약수
2. 구해진 약수에서 제일 큰 수가 정답
    2-1. n의 약수만큼 반복문 돌리고 n[i]가 m.includes()해서 먼저 걸리는 값을 변수에 보관

최소공배수 로직
1. 각 수의 배수 구하기
    1-1. for문 무한으로 돌리기, n이랑 m을 i만큼 곱하고 곱한 값들 변수에 각각 저장
    1-2. 그러고 나서 변수 2개에서 겹치는 수 생기면 그 수를 변수에 보관

*/

/*
1n 약수: 1, 3
1M 약수: 1, 3, 4, 12
1n 배수: 3, 6, 9, 12 
1m 배수: 12

최대공약수: 3
최소공배수: 12

2n 약수: 1, 2 
2n 약수: 1, 5
2n 배수: 2, 4, 6, 8, 10
2m 배수: 5, 10

최대공약수: 1
최소공배수: 10
*/