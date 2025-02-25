function solution(arr) {
    let stk = [];

    for (let i = 0; i < arr.length; ) { // ❌ `i++`은 조건에 따라 직접 증가해야 함
        if (stk.length === 0) { // stk이 비어있으면 추가
            stk.push(arr[i]);
            i++;
        } else if (stk[stk.length - 1] < arr[i]) { // stk의 마지막 값보다 arr[i]가 크면 추가
            stk.push(arr[i]);
            i++;
        } else { // stk의 마지막 값이 arr[i]보다 크거나 같으면 pop (i 증가 X)
            stk.pop();
        }
    }

    return stk;
}