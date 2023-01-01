function solution(order) {
    var clap = 0;
    var answer = order.toString().split('');
    for(i of answer){
        if(i === "3" | i === "6" | i === "9"){
            clap++;
        }
    }
    return clap;
}