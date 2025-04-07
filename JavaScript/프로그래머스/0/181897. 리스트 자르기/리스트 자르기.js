function solution(n, slicer, num_list) {
    let result = []
    if(n === 1) {
        for(let i = 0; i <= slicer[1]; i++) {
            result.push(num_list[i])
        }
        return result
    }
    if(n === 2) {
        for(let i = slicer[0]; i < num_list.length; i++) {
            result.push(num_list[i])
        }
        return result
    }
    if(n === 3) {
        for(let i = slicer[0]; i <= slicer[1]; i++) {
            result.push(num_list[i])
        }
        return result
    }
    if(n === 4) {
        let item = slicer[2] - 1    // 2 - 1
        for(let i = slicer[0]; i <= slicer[1]; i++) {
            item++  // 2
            if(slicer[2] === item) {
                result.push(num_list[i])
                item = 0
            }
            
        }
        return result
    }
    
}