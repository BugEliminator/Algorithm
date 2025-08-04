function preOrder(nodes, index, result = []) {
  if (index >= nodes.length) return;

  // console.log(nodes[index]);
  result.push(nodes[index]);

  preOrder(nodes, index * 2 + 1, result);
  preOrder(nodes, index * 2 + 2, result);
}

function inOrder(nodes, index, result = []) {
  if (index >= nodes.length) return;

  inOrder(nodes, index * 2 + 1, result);
  result.push(nodes[index]);
  inOrder(nodes, index * 2 + 2, result);
}

function postOrder(nodes, index, result = []) {
  if (index >= nodes.length) return;

  postOrder(nodes, index * 2 + 1, result);
  postOrder(nodes, index * 2 + 2, result);
  result.push(nodes[index]);
}

function solution(nodes) {
  let pre = [];
  let inOrd = [];
  let post = [];

  preOrder(nodes, 0, pre);
  inOrder(nodes, 0, inOrd);
  postOrder(nodes, 0, post);

  return [pre.join(" "), inOrd.join(" "), post.join(" ")];
}

console.log(solution([1, 2, 3, 4, 5, 6, 7])); // ['1 2 4 5 3 6 7', '4 2 5 1 6 3 7', '4 5 2 6 7 3 1']
/*

  * 메모장


  * 문제 설명
  이진 트리를 표현한 배열 nodes를 인자로 받습니다. 예를들어서 nodes가 [1, 2, 3, 4, 5, 6, 7]이면
  다음과 같은 트리를 표현한 것입니다. 해당 이진 트리에 대하여 전위 순회, 중위 순회, 후위 순회 결과를 반환하는
  solution() 함수를 구현하시오.

  * 제약조건
  - 입력 노드값의 개수는 1개 이상 1.000개 이하이다.
  - 노드값은 저수형이며, 중복되지 않는다.
*/
