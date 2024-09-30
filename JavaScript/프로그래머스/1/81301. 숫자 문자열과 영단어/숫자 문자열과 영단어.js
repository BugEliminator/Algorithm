function solution(s) {
    var answer = 0;
    let list = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    
    for(let i = 0; i < list.length; i++) {
        let item = new RegExp(list[i], "g")
        s = s.replace(item, i)
    }
    
    return Number(s);
}


// 1. s에서는 숫자와문자가 섞여있음.
// 2. 문자를 탐색하기 위해 includes()를 활용할 예정.
//  2-1. if 탐색이 걸린다면 해당 문자를 숫자로 변환
//  2-2. 걸리지 않는다면 숫자이므로 넘어감
// 3. answer 리턴




// 14:30