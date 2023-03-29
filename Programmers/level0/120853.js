function solution(s) {
    const arr = s.split(' ')
    let tem = 0
    for(i in arr){
        if(arr[i] == 'Z'){
            tem = tem - parseInt(arr[i-1])
        }else{
            tem = tem + parseInt(arr[i])
        }
    }
    var answer = tem;
    return answer;
}