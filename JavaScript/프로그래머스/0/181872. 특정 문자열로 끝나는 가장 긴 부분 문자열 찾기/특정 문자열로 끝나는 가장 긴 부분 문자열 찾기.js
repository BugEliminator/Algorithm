function solution(myString, pat) {
    let reverseMyString = myString.split("").reverse().join("") // GFEdCbA
    let reversePat = pat.split("").reverse().join("")   // Ed
    return reverseMyString.slice(reverseMyString.indexOf(reversePat)).split("").reverse().join("");
}