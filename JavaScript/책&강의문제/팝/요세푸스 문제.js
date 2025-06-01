function solution(N, K) {
  let queue = []; // 1, 2, 3, 4, 5
  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }

  while (queue.length > 1) {
    for (let i = 0; i < K - 1; i++) {
      queue.push(queue.shift());
    }
    queue.shift();
  }
  return queue[0];
}

console.log(solution(5, 2));

/*
  * 메모장

*/

/*
  * 문제 설명
  N명의 사람이 원 형태로 서 있습니다. 각 사람은 1부터 N까지 번호표를 갖고 있다.
  그리고 임의의 숫자 K가 주어졌을 때 다음과 같이 사람을 없앤다.

  - 1번 번호표를 가진 사람을 기준으로 K번째 사람을 없앱니다.
  - 없앤 사람 다음 사람을 기준으로 하고 다시 K번째 사람을 없앱니다.

  * 제약조건
  N과 K는 1이상 1000이하의 자연수입니다.

  * 입출력 예시
  N = 5, K = 2 => result = 3

  N = 6, K = 5 => result = 6
  N = 7, K = 3 => result = 1
  N = 10, K = 4 => result = 9
*/
