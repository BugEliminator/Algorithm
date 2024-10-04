function solution(arr) {
    if (arr.length === 1) return [-1];

    let minNum = Math.min(...arr); 

    arr.splice(arr.indexOf(minNum), 1);

    // 수정된 배열 반환
    return arr;
}


// sort()를 써서 arr의 인덱스를 섞어버리면 안되는 문제 같음.

// 1. 만약 length === 1이면 무조건 -1리턴
// 2. 정수부터니까 minNum = 0으로 초기설정하고 반복돌려서 제일 작은 숫자를 minNum으로 박아두고,
// 3. indexOf 메서드로 그 자리의 인덱스 번호를 찾아서 splice 처리한다.