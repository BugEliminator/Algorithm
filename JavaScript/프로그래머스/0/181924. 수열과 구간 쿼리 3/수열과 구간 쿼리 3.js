function solution(arr, queries) {
    for(let i = 0; i < queries.length; i++) {
        let lt = queries[i][0]  // 0
        let rt = queries[i][1]  // 3
        let temp = arr[lt]  // 0
        arr[lt] = arr[rt]
        arr[rt] = temp
        
    }
    return arr
}