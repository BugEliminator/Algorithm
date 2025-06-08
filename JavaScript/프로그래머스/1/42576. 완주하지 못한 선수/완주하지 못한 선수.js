function solution(participant, completion) {
    let map = new Map()
    // map에 참여자 저장
    for(let x of participant) {
        if(map.has(x)) {
            let cnt = map.get(x)
            map.set(x,cnt + 1)
        } else {
            map.set(x, 1)
        }
    }
    // map에 완주자 제거
    for(let x of completion) {
        map.set(x, map.get(x) - 1)
    }
    // map에서 value가 1이상인 key 리턴
    for (let [key, value] of map) {
        if (value > 0) return key;
    }
}

/*
    map을 선언하고 map에 참여자는 저장함
        - 참여자 저장
        반복문 돌려서 해당 키 값을 가진 참여자를 조회함.
            해당 참여자가 발견되면? - 그 참여자의 벨류 값을 +1
            해당 참여자가 없다면? - 그 참여자의 벨류를 1로 해줌
            
        - 완주자 삭제
        반복문 돌려서 해당 키 값을 가진 완주자를 조회함.
            해당 완주자가 발견되면? - 완주자의 벨류 값을 -1
        
        - 남은사람 리턴
        정상적으로 됬다면 1명을 뺀 모두의 벨류는 0일꺼임.
        반복문 돌려서 벨류값이 1이상인 키 값을 리턴해줌.
*/