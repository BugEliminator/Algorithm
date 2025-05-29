function solution(s) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const rotated = s.slice(i) + s.slice(0, i); // 왼쪽으로 회전
    const stack = [];
    let isValid = true;

    for (let ch of rotated) {
      if (ch === "[" || ch === "{" || ch === "(") {
        stack.push(ch);
      } else {
        const top = stack[stack.length - 1];
        if (
          (ch === "]" && top === "[") ||
          (ch === "}" && top === "{") ||
          (ch === ")" && top === "(")
        ) {
          stack.pop();
        } else {
          isValid = false;
          break;
        }
      }
    }

    if (isValid && stack.length === 0) result++;
  }

  return result;
}


/*
    모든경우 생각하기
    [ 의경우 => 스택에 넣어줌 => else로 빼기
    { 의경우 => 스택에 넣어줌 => else로 빼기
    ( 의경우 => 스택에 넣어줌 => else로 빼기
    ---
    ] 의경우 => 스택의 마지막 값이 [ 여야함
        - 맞다면 스택의 마지막 값을 삭제
        - 그렇지 않다면 종료
    } 의경우 => 스택의 마지막 값이 { 여야함
        - 맞다면 스택의 마지막 값을 삭제
        - 그렇지 않다면 종료
    ) 의경우 => 스택의 마지막 값이 ( 여야함
        - 맞다면 스택의 마지막 값을 삭제
        - 그렇지 않다면 종료
    마지막까지 온거라면 현재 스택이 잘 마무리 되어 빈값이 된거니까 result++ 
*/