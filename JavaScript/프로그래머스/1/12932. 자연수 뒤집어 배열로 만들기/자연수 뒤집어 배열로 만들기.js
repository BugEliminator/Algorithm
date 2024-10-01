function solution(n) {    
    let num = String(n).split("").reverse()
    
    return num.map((el) => Number(el));
}

// 1. split으로 각각 분리하여 사용할 예정인데 split메서드는 문자열에만 적용됨.
// 2. String으로 감싸서 분리된 값을 배열에 넣고 reverse로 뒤집어줌.
// 3. 각 요소들이 문자열이기 때문에 맵으로 각각 요소에 Number처리를 해줬다.