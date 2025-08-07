function solution(n,a,b) {
    let cnt = 0
    while (a !== b) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        cnt++;
    }
    return cnt
}

/*

8명참가, 4번참가자, 경쟁자 7번


1 2 3 4 5 6 7 8 

1 4 5 7

4 7

4 / 2, 7 / 2
2 / 2, 4 / 2
1 / 2, 2 / 2
1 1

4 / 2, 5 / 2
2 / 2, 3 / 2
1 / 2, 2 / 2
1 1

*/