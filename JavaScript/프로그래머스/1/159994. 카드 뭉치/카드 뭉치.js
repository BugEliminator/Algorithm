function solution(cards1, cards2, goal) {
    for(let i = 0; i < goal.length; i++) {
        if(goal[i] === cards1[0]) {
            cards1.shift();
            continue;
        }
        if(goal[i] === cards2[0]) {
            cards2.shift();
            continue;
        }
        return "No";
    }
    return "Yes"
}

/*
1. goal 만큼 반복문을 돌린다.
2. goal[i]가 cards1[0] or cards2[0]에서 발견한다면? 찾은 곳 shift 해줌
3. 중간에 미스나면 "NO" 리턴하고 이상없으면 "YES" 리턴
*/