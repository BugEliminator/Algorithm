function solution(dirs) {
    let coorStorage = new Set();
    let coor = [0, 0];

    for (let x of dirs) {
        let [x1, y1] = coor; // 이동 전 좌표 복사

        if (x === "U" && y1 < 5) {
            coor[1]++;
        } else if (x === "D" && y1 > -5) {
            coor[1]--;
        } else if (x === "R" && x1 < 5) {
            coor[0]++;
        } else if (x === "L" && x1 > -5) {
            coor[0]--;
        } else {
            continue; // 이동 못했으면 넘어가
        }

        let [x2, y2] = coor; // 이동 후 좌표

        // 출발-도착 쌍을 문자열로 정리 (양방향 같게 만들기 위해 정렬)
        let path = [x1, y1, x2, y2].join(",");
        let reversePath = [x2, y2, x1, y1].join(",");

        // 둘 중 작은 문자열을 저장
        coorStorage.add(x1 < x2 || (x1 === x2 && y1 < y2) ? path : reversePath);
    }

    return coorStorage.size;
}
