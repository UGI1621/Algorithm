function solution(i, j, k) {

    function range(start, end) {
        let array = [];
        for (let i = start; i <= end; ++i) {
            array.push(i);
            }
        return array;
        }

    let count = 0
    const arr = range(i,j);
    const new_arr = arr.join('').split('')
    for(i of new_arr){
        if(i == k){
            count += 1;
        }
    }
    return count;
}