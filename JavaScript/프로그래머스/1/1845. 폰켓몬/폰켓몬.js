function solution(nums) {
  var answer = 0;
  let result;
  let a = nums.length / 2; // 골라야 하는 수
  let b = [...new Set(nums)].length; // nums에서 중복지운값
  result = a > b ? (result = b) : (result = a);
  return result;
}

// [3', 1, 2, 3]

/*
3' 1
3' 2
3' 3
1 2
1 3
2 3

1번: 3   /   자리2
2번: 3   /   자리3
3번: 2   /   자리3
[1,2,2,2,3,3,5,5,7,7] 5   / 자리 10   답 5

*/
