function solution(array) {
    array.sort((a, b) => a - b)
    return array [Math.trunc(array.length / 2)]
}


// 1. 배열 순서대로 나열
// 2. 배열의 길이 중 가운데에 있는 값 출력
// 2-1. 가운데 값을 출력하기 위해서는 배열의 갯수를 나오게 함
// 2-2. 배열 갯수의 값을 2로 나눈다 ex) 5/2 = 2.5, 3/2 = 1.5
// 2-3. 2로 나눈 값에서 소수점을 때고 출력하라고 지시하면 출력됨. ex) 2.5 => 2 => array[2]


