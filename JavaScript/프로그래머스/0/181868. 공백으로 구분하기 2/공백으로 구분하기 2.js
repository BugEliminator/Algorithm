function solution(my_string) {
    let result = []
    let box = my_string.split(" ")
    
    for(let x of box) {
        if(x !== "") result.push(x)
    }
    
    return result
}