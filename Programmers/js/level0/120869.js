function splitarr(arr, n) {
    const result = [];
  
    while(arr.length > 0) {
      let tempArray;
      tempArray = arr.splice(0, n);
      result.push(tempArray);
    }
  
    return result;
  }
  
  
  function solution(spell, dic) {
      var answer = 0;
      let temp = [];
      for(dicItem of dic){
          for(c of spell){
              if(dicItem.includes(c)){
                  temp.push(1);
              }else{
                  temp.push(2);
              }
          }
      }
  
      const resultarr = splitarr(temp,spell.length).sort()
      if(resultarr[0].includes(2)){
          answer = 2
      }else{
          answer = 1
      }
  
      return answer;
  }