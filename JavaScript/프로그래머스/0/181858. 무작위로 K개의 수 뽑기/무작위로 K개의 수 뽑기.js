function solution(arr, k) {
    let set = new Set(arr);
    let setArr = [...set];
    let result = [];
    
    const limit = Math.min(setArr.length, k);

    for(let i = 0; i < limit; i++) result.push(setArr[i]); 

    while(result.length < k) result.push(-1);
    
    return result;
}