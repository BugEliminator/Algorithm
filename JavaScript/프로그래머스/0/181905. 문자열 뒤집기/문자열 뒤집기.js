function solution(my_string, s, e) {
    let front = ""  // Progra
    let middle = "" // 21Sremm
    let back = ""   // 3
    for(let i = 0; i < s; i++) front += my_string[i] // 앞자리 구하기
    for(let j = e + 1; j < my_string.length; j++) back += my_string[j]  // 뒷자리 구하기
    for(let n = s; n < e + 1; n++) middle += my_string[n]   // 중간자리 구하기
    return front + middle.split("").reverse().join("") + back
}