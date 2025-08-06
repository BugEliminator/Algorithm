function solution(arr1, arr2) {
    let result = []
    let temp
    for(let i = 0; i < arr1.length; i++) {
        temp = []
        for(let j = 0; j < arr2[0].length; j++) {
            temp.push(arr1[i][j] + arr2[i][j])
        }
        result.push(temp)
    }
    return result
}

/*

[[1,2],[2,3]]
[[3,4],[5,6]]

[[1],[2]]
[[3],[4]]
*/