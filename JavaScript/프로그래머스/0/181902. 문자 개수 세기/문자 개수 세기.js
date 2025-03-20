function solution(my_string) {
    let result = new Array(52).fill(0);
    for(let x of my_string) {
        let index = x.charCodeAt(0) - "A".charCodeAt(0) // x - 65
        if(index < 26) {    // index가 대문자일 경우
            result[index]++
        } else {    // index가 소문자일 경우
            result[index - 6]++
        }
    }
    return result
}


// console.log("A".charCodeAt(0)); // ✅ 65
// console.log("Z".charCodeAt(0)); // ✅ 90
// console.log("a".charCodeAt(0)); // ✅ 97
// console.log("z".charCodeAt(0)); // ✅ 122

/*
result의 배열을 0이 52개가 생기게 만들어 둠.
A를 0으로 기준을 잡고 아스키 코드로 변환
그러면 for문을 돌면서 만약에 B가 걸린다면?
    해당하는 index ++
    소문자가 걸린다면? 
        해당하는 index에 -6을 하고 ++한다
        (그 이유는 대문자 아스키와 소문자 아스키사이에는 6개의 특수기호가 들어가 있어서 -6을 하고 그 인덱스를 더해줘야 문제가 생기지 않는다.)
*/