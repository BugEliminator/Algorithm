function solution(arr1, arr2) {
    let result = []
    for(let i = 0; i < arr1.length; i++) {
        result[i] = []
        for(let j = 0; j < arr2[0].length; j++) {
            let sum = 0
            for(let k = 0; k < arr1[0].length; k++) {
                sum += arr1[i][k] * arr2[k][j]
            }
            result[i][j] = sum
        }
    }
    return result
}

/*  10 6 6 , 8 12 2, 6 3 2

    2 3 2       1 4
    4 2 4       3 2
    3 1 4       4 1
    
    5 4 3       3 3
    2 4 1       3 3
    3 1 1
*/