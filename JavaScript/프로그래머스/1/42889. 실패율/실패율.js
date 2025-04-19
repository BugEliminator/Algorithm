function solution(N, stages) {
    let result = [];
    let totalPlayers = stages.length;

    for (let i = 1; i <= N; i++) {
        // i번 스테이지에 도달했지만 클리어 못한 유저 수
        let fail = stages.filter(stage => stage === i).length;

        // 실패율 계산: 도달한 사람 중 아직 못 깬 사람
        let failRate = fail / totalPlayers;

        // 결과에 스테이지 번호와 실패율 저장
        result.push({ stage: i, failRate: failRate });

        // 다음 스테이지 계산을 위해 도달 인원 줄이기
        totalPlayers -= fail;
    }

    // 실패율 기준 내림차순 정렬 → 같으면 스테이지 번호 오름차순
    result.sort((a, b) => {
        if (b.failRate === a.failRate) return a.stage - b.stage;
        return b.failRate - a.failRate;
    });

    // 스테이지 번호만 추출해서 반환
    return result.map(el => el.stage);
}

/*
    1. N(전체 스테이지의 수)을 기준으로 반복문 실행
    2. stages배열에서 i가 몇개 들어 있는지 찾고 나온 개수 만큼 객체에 저장함. 
        2-1. 키값은 i, 벨류값은 i개수 / stagesLength
    3. 끝까지 하면 객체에는 스테이지 수만큼의 키값이 들어있을꺼고, 벨류값을 기준으로 sort를 사용해 내림차순을 기준으로 배열을 수정하고 리턴함.
*/