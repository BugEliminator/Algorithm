function solution(x) {
    let answer = 0;
    
    let box = String(x).split("")
    
    for(let i = 0; i < box.length; i++) {
        
        if(true) {
            answer += Number(box[i])
        }
        
        
        
    }
    return x % answer === 0  ? true : false;
}