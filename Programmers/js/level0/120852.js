function solution(n) {
    var answer = [];

    
    function isPrime(num) {
      if(num === 2) {
        return true;
      }

      for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
        if(num % i === 0){
          return false; 
        }
      }
      return true; 
    } //소수 판별

    for(i = 2 ; i <= n ; i++){
        if(n%i == 0){
            answer.push(i)
            n = n/i
        }
    }

    const set = new Set(answer)
    return [...set].sort((a,b) => a-b).filter(c => isPrime(c));
}