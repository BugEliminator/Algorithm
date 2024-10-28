function solution(a, b) {
    var answer = 0;
    
    if(Number(String(a) + String(b)) > Number(String(b) + String(a))) {
        return Number(String(a) + String(b))
    } else {
        return Number(String(b) + String(a))
    }
    
    ;
}