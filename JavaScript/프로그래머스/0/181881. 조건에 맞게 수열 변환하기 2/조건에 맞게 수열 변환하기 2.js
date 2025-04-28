function solution(arr) {
    let count = 0;
    
    while (true) {
        let prev = [...arr];
        
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= 50 && arr[i] % 2 === 0) arr[i] /= 2;
            else if (arr[i] < 50 && arr[i] % 2 !== 0) arr[i] = arr[i] * 2 + 1;
        }
        // console.log(`STEP ${count}: ${arr}`); // 디버깅용
        
        if (prev.every((v, i) => v === arr[i])) break;
        
        count++;
    }    
    return count;
}