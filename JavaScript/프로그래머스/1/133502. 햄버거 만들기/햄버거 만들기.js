function solution(ingredient) {
  const stack = [];
  let cnt = 0;

  for (const x of ingredient) {
    stack.push(x);
    if (stack.slice(-4).join('') === '1231') {
      stack.splice(-4);
      cnt++;
    }
  }

  return cnt;
}

/*
    이 방법은 시간초과로 스택으로 해결함.
    1. join으로 ingredient를 합친다.
    2. while 반복문 돌린다(indexOf("1231")이 -1이 나올때까지)
        - 변수에 대해 slicec처리를 해줌. 
        - cnt++
        - 반복
    3. return cnt
*/