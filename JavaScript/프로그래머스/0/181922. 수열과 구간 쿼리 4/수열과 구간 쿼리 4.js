function solution(arr, queries) {
    for(let i = 0; i < queries.length; i++) {
        let s = queries[i][0]
        let e = queries[i][1]
        let k = queries[i][2]
        
        for(let j = 0; j < arr.length; j++) {
            if(s <= j && j <= e && j % k === 0) {
                arr[j] = arr[j] + 1
            }   
            
        }

    }
    return arr
}

/*
s => 0
e => 4
k => 1


*/