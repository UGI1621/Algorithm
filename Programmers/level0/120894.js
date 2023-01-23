function solution(numbers) {
    var answer = [];
    let temp = [] ;
    let check = {"zero" : 0, "one" : 1, "two" : 2, 
                 "three" : 3, "four" : 4, "five" : 5, 
                 "six" : 6, "seven" : 7, "eight" : 8, "nine" : 9 };
    const nums = numbers.split('')

    for(i of nums){
        temp.push(i)
        if(check.hasOwnProperty(temp.join(''))){
            answer.push(check[temp.join('')])
            temp = [];
        }
    }

    return Number(answer.join(''));
}