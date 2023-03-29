function solution(my_string) {
    const arr = my_string.split(' ')
    var answer = parseInt(arr[0]);
    for(i = 1 ; i <= arr.length ; i++){
        if(arr[i] == '+'){
            answer += parseInt(arr[i+1])
        }else if(arr[i] == '-'){
            answer -= parseInt(arr[i+1])
        }
    }
    console.log(arr)
    return answer;
}