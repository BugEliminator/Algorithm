function solution(decimal) {
  let stack = [];

  while (decimal > 0) {
    stack.push(decimal % 2);
    decimal = Math.floor(decimal / 2);
  }
  return stack.reverse().join(""); // 가장 앞자리부터 출력
}

console.log(solution(10));
console.log(solution(27));
console.log(solution(12345));

/*
  * 메모장
  2진수계산 32 16 8 4 2 1 이런식으로 높아짐
  - while을 통해 매개변수가 0이 될때까지 반복
  - 배열에 매개변수 % 2를 해주고 
  - 소수점 때고 /2로 업데이트해줌.
  - 마지막에 반대로 돌려주고 배열깨주면 완성

*/

/*
  * 문제 설명
  10진수를 입력받아 2진수로 변환해 반환하는 solution()함수를 구현해라.

  * 제약조건
  decimal은 1이상 10억 미만의 자연수

  * 입출력 예시
  decimal = 10       => 1010
  decimal = 27       => 11011
  decimal = 12345    => 11000000111001
*/
