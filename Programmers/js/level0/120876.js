function solution(lines) {
    var answer = 0;
    let [x,y,z] = [...lines.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1]
        } else {
            return a[0] - b[0]
        }
        })]

    console.log(x,y,z)

    let head = Math.min(x[0],y[0],z[0])
    let tail = Math.max(x[1],y[1],z[1])
    let precount = 0
    let onetime = 1
    let box = 0

    if(x[1] == y[0] && y[1] == z[0]){
        return answer = 0;
    }

    for(i = head ; i <= tail ; i++){
        let count = 0
        if(i >= x[0] && i <= x[1]){
            count++
        }
        if(i >= y[0] && i <= y[1]){
            count++
        }
        if(i >= z[0] && i <= z[1]){
            count++
        }

        if(count >= 2){
            box++
        }

        if(precount == 3){
            if(count == 1){
                return box-1
            }
        }
        if(precount == 2){
            if(count == 1){
                answer += box-1
                box=0
            }else if(count == 2){
                if(x[1] + 1 == z[0]){
                    if(onetime == 1){
                        box -= 1
                        onetime = 0
                    }
                }
                if(y[1] + 1 == z[0]){
                    if(onetime == 1){
                        box -= 1
                        onetime = 0
                    }
                }
            }
        }

        precount = count
    }

    if(box > 1){
        answer += box -1
    }

    return answer;
}