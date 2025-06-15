function solution(myString, pat) {
    let result = 0
    for(let i = 0; i <= myString.length - pat.length; i++) {
        let box = ""
        for(let j = 0; j < pat.length; j++) {
            box += myString[j+ i]
        }
        if(pat === box) result++
    }
    return result
}
