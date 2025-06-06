// function solution(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length - 1; j++) {
//       if (arr[i] + arr[j] === target) return true;
//     }
//   }
//   return false;
// }

function solution(arr, target) {
  let set = new Set();

  for (let x of arr) {
    if (set.has(target - x)) return true;
    set.add(x);
  }
  return false;
}

console.log(solution([1, 2, 3, 4, 8], 6)); // true
console.log(solution([2, 3, 5, 9], 10)); // false

/*

  * 메모장
  arr만큼 반복문 돌려서 새로운 box배열에 더한 수를 구함

  * 문제설명
  n개의 양의 정수로 이루어진 리스트 arr과 정수 target이 주어졌을 때 이 중에서
  합이 target인 두 수가 arr에 있는지 찾고, 있으면 true, 없으면 false를 반환하는
  solution() 함수를 작성하시오.

  * 제약조건
  n은 2이상 10,000이하의 자연수이다.
  arr의 각 원소는 1이상 10,000이하의 자연수이다.
  arr의 원소 중 중복되는 원소는 없다.
  target은 1이상 20,000이하의 자연수이다.

*/
