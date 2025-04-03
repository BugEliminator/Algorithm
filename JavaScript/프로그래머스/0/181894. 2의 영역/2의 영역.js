function solution(arr) {
    let lt = ""
    let rt = ""
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if(lt === "" && arr[i] === 2) lt = i
        if(arr[i] === 2) rt = i
    }
    for (let i = lt; i <= rt; i++) result.push(arr[i])
    return rt === "" ? [-1] : result
}