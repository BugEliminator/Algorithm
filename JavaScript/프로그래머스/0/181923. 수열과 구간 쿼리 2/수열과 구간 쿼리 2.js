function solution(arr, queries) {
    let result = [];

    for (let i = 0; i < queries.length; i++) {
        let s = queries[i][0];  // 0
        let e = queries[i][1];  // 4
        let k = queries[i][2];  // 2

        let minValue = Infinity;    // 최솟값을 우선 제일 큰 값으로 지정

        for (let j = s; j <= e; j++) {
            if (arr[j] > k && arr[j] < minValue) {
                minValue = arr[j]; // 최소값 갱신
            }
        }

        // 최솟값이 갱신되지 않았다면 -1 저장
        result.push(minValue === Infinity ? -1 : minValue);
    }

    return result;
}

// 

// s -> 0,  e -> 4, k -> 2      => 3
// s -> 0,  e -> 3, k -> 2      => 
// s -> 0,  e -> 2, k -> 2      => -1

// arr = 0 1 2 4 3
// 0 1 2 3 4 
// 0 1 2 4
// 0 1 2 