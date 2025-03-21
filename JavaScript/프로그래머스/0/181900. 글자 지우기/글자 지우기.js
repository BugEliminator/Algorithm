function solution(my_string, indices) {
    let arr_string = my_string.split("")
    let sortIndices = indices.sort((a,b) => b - a)
    
    for(let i = 0; i < sortIndices.length; i++) {
        arr_string.splice(sortIndices[i], 1)
    }
    
    return arr_string.join("");
}

/*  
    indices를 sort해서 내림차순으로 바꿈 
        -> 이유는 splice()메서드로 자를껀데 앞부터 자르면 밀려서 인덱스가 꼬여서 뒤부터 자르려고 함
    my_string만큼 반복문 돌림
    
*/