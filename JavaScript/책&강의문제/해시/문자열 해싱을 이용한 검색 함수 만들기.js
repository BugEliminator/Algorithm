function solution(stringList, queryList) {
  let set = new Set(stringList);
  let result = [];
  for (let x of queryList) {
    if (!set.has(x)) {
      result.push(false);
    } else {
      result.push(true);
    }
  }
  return result;
}

console.log(
  solution(["apple", "banana", "cherry"], ["banana", "kiwi", "melon", "apple"])
);

/*

  * 메모장
    stringList를 set에 모두 넣어줌.
    stringList을 하나씩 까면서 queryList안에 값이 있는지 하나씩 검사
    끝까지 가면 true
    중간에 막히면 false

  * 문제 설명
  문자열 리스트 stringList와 쿼리 리스트 queryList가 있을 때 각 쿼리 리스트에 있는 문자열이 stringList의 문자열 리스트에
  있는지 여부를 확인해야 한다. 문자열이 있으면 true, 없으면 false가 된다. 각 문자열에 대해서 문자열의 존재 여부를 리스트 형태로
  반환하는 solution() 함수를 작성하시오.

  * 제약조건
  - 입력 문자열은 영어 소문자로만 이뤄져있음.
  - 문자열의 최대 길이는 10⁶이다.
  - 해시 충돌은 없다.
  - 아래와 같은 문자열 해싱 방법을 활용해서 해싱 함수를 구현하시오.
  - 다음 식에서 p는 31, m은 1,000,000,007로 합니다
*/
