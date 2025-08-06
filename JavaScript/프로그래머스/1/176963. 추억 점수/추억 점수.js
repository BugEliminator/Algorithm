function solution(name, yearning, photo) {
    let result = []
    let temp
    for(let i = 0; i < photo.length; i++) {
        temp = 0
        for(let j = 0; j < photo[i].length; j++) {
            let idx = name.indexOf(photo[i][j])
            if(idx !== -1) {
                temp += yearning[idx]
            }
        }
        result.push(temp)
    }
    return result
}
