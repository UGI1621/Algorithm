function solution(balls, share) {
    var answer = fact(balls) / (fact(balls-share) * fact(share));
    return Math.round(answer);
}

function fact(n){
    let temp = 1;
    for(i = 2 ; i <= n ; i++){
        temp = temp * i
    }
    return temp
}

/*
const 팩토리얼 = (num) => num === 0 ? 1 : num * 팩토리얼(num - 1)
WOW
*/