function solution(a, d, included) {
    let sum = a     // 초기값
    let box = []    // 등차수열해서 높아지는 값
    let result = 0  // 결과값
    
    for (let i = 0; i < included.length; i++) {
        box.push(sum)
        sum += d
        if(included[i]) {
            result += box[i]
        }
    }
    return result
}