function solution(my_string, alp) {
    return my_string
        .split("")
        .map((n) => n === alp ? n.toUpperCase() : n)
        .join("");
}