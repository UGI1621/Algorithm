function solution(chicken) {
    var answer = 0;
    let coupon = chicken

    while(1){
        answer += parseInt(coupon/10)
        coupon = parseInt(coupon/10) + parseInt(coupon%10)
        if(coupon < 10){
            break
        }
        console.log(answer,coupon)

    }
    return answer;
}