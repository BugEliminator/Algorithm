function solution(s) {
    let stack = []
    for(let i = 0; i < s.length; i++) {
        if(stack.length === 0) {
            stack.push(s[i])
        } else {
            if(stack[stack.length - 1] === s[i]) {
                stack.pop()
            } else {
                stack.push(s[i])
            }            
        }

    }
    return stack.length === 0 ? 1 : 0
}

/*
해결방안
문자열을 왼쪽부터 하나씩 읽는다.
스택에 문자가 없으면 push.
스택의 top과 지금 문자가 같으면 pop.
아니면 push.
문자열을 끝까지 다 보면:
스택이 비어 있으면 1 (모두 제거 성공)
비어 있지 않으면 0 (제거 못 하고 남음)
*/