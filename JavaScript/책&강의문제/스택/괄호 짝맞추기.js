function solution(s) {
  let stack = [];
  for (let x of s) {
    if (x === "(") {
      stack.push(x);
    } else if (x === ")") {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return stack.length === 0;
}
console.log(solution("(())()"));
console.log(solution("((())()"));

/*
  * 제약 조건
  열린 괄호는 자신과 가장 가까운 닫힌 괄호를 만나면 상쇄된다.
  상쇄 조건은 열린 괄호가 먼저 와야 하고, 열린 괄호와 닫힌 괄호 사이에 아무것도 없어야 한다.
  더 상쇄할 괄호가 없을 때까지 상쇄를 반복합니다.

  * 입출력 예시
  s = "(())()" => true
  s = "((())()" => false
  */
