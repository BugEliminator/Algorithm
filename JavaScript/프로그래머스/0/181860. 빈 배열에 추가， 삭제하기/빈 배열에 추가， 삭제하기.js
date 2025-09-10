function solution(arr, flag) {
    let result = []
    let num
    for(let i = 0; i < arr.length; i++) {
        if(flag[i] === true) {
            num = 0
            while(arr[i] * 2 > num) {
                result.push(arr[i])
                num++
            }
        } else {
            num = 0
            while(arr[i] > num) {
                result.pop()
                num++
            }
        }
    }
    return result
}