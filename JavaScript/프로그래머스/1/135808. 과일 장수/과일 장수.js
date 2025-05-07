function solution(k, m, score) {
    let sortScore = score.sort((a,b) => b - a)
    let appleBox = []
    let result = 0
    
    for(let i = 0; i < sortScore.length; i += m) {
        appleBox.push(sortScore.slice(i, i + m))
    }
    
    for(let j = 0; j < appleBox.length; j++) {
        if(appleBox[j].length === m) result += appleBox[j][appleBox[j].length - 1] * m
    }
    return result
}

/*
    1. sort를 통해 큰수부터 재정렬
    2. m의 크기에 맞게 배열을 생성해서 값을 보관함
    3. 각각 보관된 값의 제일작은 값은 length - 1 임으로 이걸 활용
    4. 배열의 길이가 m이여야하고 m * length - 1로 값 구해서 다 더하기
*/

/*  
    4 4 4 -> 4 * 3 = 12
    4 4 4 -> 4 * 3 = 12
    2 2 2 -> 2 * 3 = 6
    2 1 1 -> 1 * 3 = 3
*/

