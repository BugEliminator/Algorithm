function solution(myStr) {
    let result = []
    myStr = myStr.split(/[abc]/)
    
    for(let x of myStr) {
        if(x !== "") result.push(x)
    }
    
    if(result.length === 0) return ["EMPTY"]
    
    return result
}