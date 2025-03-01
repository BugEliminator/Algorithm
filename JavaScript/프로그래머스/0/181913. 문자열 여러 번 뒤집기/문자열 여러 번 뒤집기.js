function solution(my_string, queries) {
    let arr_string = my_string.split(""); // 문자열을 배열로 변환

    for (let i = 0; i < queries.length; i++) {
        let start = queries[i][0];  // 2
        let end = queries[i][1];    // 3

        // 부분 문자열을 추출한 후 뒤집기
        let mix_arr_string = arr_string.slice(start, end + 1).reverse().join("");

        // 기존 문자열에서 해당 부분 삭제 후, 뒤집은 문자열 삽입
        arr_string.splice(start, end - start + 1, ...mix_arr_string.split(""));
    }

    return arr_string.join(""); // 배열을 다시 문자열로 변환
}