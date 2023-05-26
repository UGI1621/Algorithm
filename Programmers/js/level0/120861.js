function solution(keyinput, board) {
    const key = ["up", "down", "left" , "right"]
    const xmax = (board[0]-1)/2
    const ymax = (board[1]-1)/2
    let x = 0;
    let y = 0;

    //move
    for(i of keyinput){
        if(i == key[0]){
            y++

            if(y > ymax){
                y = ymax
            }else if(y < -ymax){
                 y = -ymax
            }

        }else if(i == key[1]){
            y--

            if(y > ymax){
                y = ymax
            }else if(y < -ymax){
                 y = -ymax
            }

        }else if(i == key[2]){
            x--

            if(x > xmax){
                x = xmax
            }else if(x < -xmax){
                x = -xmax
            }

        }else if(i == key[3]){
            x++

            if(x > xmax){
                x = xmax
            }else if(x < -xmax){
                x = -xmax
            }
        }
    }
    var answer = [x,y];
    return answer;
}

/*
function solution(keyinput, board) {
    let res = [0,0];
    for (let p of keyinput) {
        switch(p){
            case 'left': if (-res[0] < board[0]/2-1) res[0]--; break;
            case 'right': if (res[0] < board[0]/2-1) res[0]++; break;
            case 'up': if (res[1] < board[1]/2-1) res[1]++; break;
            case 'down': if (-res[1] < board[1]/2-1) res[1]--; break;
        }
    }
    return res;
}
*/