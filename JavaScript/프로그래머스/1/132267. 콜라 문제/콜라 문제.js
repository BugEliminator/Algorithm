function solution(a, b, n) {
    var answer = 0;
    
    while (n >= a) {
        let box = Math.floor(n / a) * b
        answer += box

        n = box + n % a
    }
    
    return answer;
}

// a = 콜라를 받기 위해 마트에게 줄 병 수
// b = 빈병 a개를 주면 마트가 주는 콜라 병 수
// c = 상빈이가 가진 빈 병의 수

// 10 + 5 + 2 + 

// 1. n개만큼 반복문을 돌린다. if 써서 나눈 값의 나머지가 없으면 패스 있으면 remain ++
// 2. answer += n / a * b 
// 2. n = n / a
// 3. n이 0과 같아지면 반복문을 끝낸다.
// 4. 마지막에 answer의 수와 remain에서 쌓인 수를 나눠서 소수점 땐 수를 더해준다.
    