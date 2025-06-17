function solution(record) {
    let result = []
    let hash = new Map()
    
    for(let i = 0; i < record.length; i++) {
        if (record[i].includes("Enter") || record[i].includes("Change")) {
            const [action, uid, nickname] = record[i].split(" ");
            hash.set(uid, nickname);
        }
    }
    
    for(let i = 0; i < record.length; i++) {
        if(record[i].includes("Enter")) {
            const [action, uid, nickname] = record[i].split(" ");
            result.push(`${hash.get(uid)}님이 들어왔습니다.`)
        } else if(record[i].includes("Leave")) {
            const [action, uid, nickname] = record[i].split(" ");
            result.push(`${hash.get(uid)}님이 나갔습니다.`)
        }
    }
    return result
}

/*
    풀이법
    1단계
    해시하나 만들고 반복문 돌림
        record[i] === Enter가 나온다면? || record[i] === Change가 나온다면?
            - 해당아이디(키값): 해당이름(벨류값)으로 하나 만들어줌

    2단계
    record 반복문 돌림
        record[i] === Enter가 나온다면?
            - uid값을 통해 벨류값 알아두고
            - result에 "(벨류값)님이 들어왔습니다." 추가
        record[i] === Leave가 나온다면?
            - uid값을 통해 벨류값 알아두고
            - result에 "(벨류값)님이 나갔습니다" 추가
*/