function solution(array) {
    var answer = 0;
    let myMap = new Map();
    let temp =[];
    let count = 0;

    for(i of array){
        if(myMap.has(i)){
            myMap.set(i,myMap.get(i)+1)
        }else{
            myMap.set(i,1)
        }
    }

    answer = [...myMap.entries()]
    const arr = Array.from(myMap.values())
    const max = Math.max(...arr)

    console.log(answer)

    for(i in arr){
        if(answer[i][1] == max){
            temp = answer[i][0]
            count++
        }
    }

    if(count > 1){
        temp = -1
    }

    return temp;
}