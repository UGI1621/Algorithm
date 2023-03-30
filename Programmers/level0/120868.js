function solution(sides) {
    var answer = [];
    const long = sides.reduce((a,b) => a > b ? a : b)
    const short = sides.reduce((a,b) => a > b ? b : a)
    //long
    for(i = 0 ; i <= long ; i++){
        if(i+short > long)
        answer.push(i)
    }

    //long + short
    for(j = 0 ; j < short+long ; j++){
        if(j > long && j < short+long){
            answer.push(j)
        }
    }
    return answer.length;
}

/*
function solution(sides) {
    return Math.min(...sides)*2-1
}
//wow
*/