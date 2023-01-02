function solution(n) {
    const answer = []
    //팩토리얼 계산 함수
    function Factorial(n){
        let result = 1;
        for(let i = 1 ; i <= n ; i++){
            result = result * i;
        }
        return result;
    }

    for(let i = 1 ; i <= 10 ; i++){
        if(Factorial(i) <= n){
            answer.push(i)
        }
    }

    return answer.pop()
}