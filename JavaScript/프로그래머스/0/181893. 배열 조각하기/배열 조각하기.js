function solution(arr, query) {
    for (let i = 0; i < query.length; i++) {
        if (i % 2 === 0) { // 짝수 인덱스 → 뒤 자르기
            arr = arr.slice(0, query[i] + 1);
        } else {           // 홀수 인덱스 → 앞 자르기
            arr = arr.slice(query[i]);
        }
    }
    return arr;
}