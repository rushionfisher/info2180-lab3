window.onload= function(){
    const game = document.getElementById("game");
    const gameboard = document.getElementById("board");
    const stat = document.getElementById("status");
    const buttons = document.getElementsByClassName("btn")[0];
    const controls= document.getElementsByClassName("controls");
    const el = gameboard.querySelectorAll('div');
    let play='X';
    let plist = ['', '', '', '', '', '', '', '', ''];
    const winningCond = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for(let e=0; e<=8; e++){
        el[e].setAttribute("class","square");
    
    }
    el.forEach( (ele, ind) => {
        ele.addEventListener('click', () => userAction(ele, ind));
        ele.addEventListener('mouseover', function(){
            ele.classList.add('hover');
        });
        ele.addEventListener('mouseout', function(){
            ele.classList.remove('hover');
        });
    });

    function winStat(){
        for(let x=0; x<=7; x++){
            const win = winningCond[x];
 
            const p1= plist[win[0]];
            const p2 = plist[win[1]];
            const p3 = plist[win[2]];
            if (p1 === ''|| p2 === ''|| p3===''){
                continue;
            }  
            if (p1=== p2 && p2 === p3){
                stat.innerHTML= 'Congratulations! ' + p1 +' is the winner';
                stat.classList.add('you-won');
                break;
            }     
        }
    }
    const userAction= (ele,ind) =>{
        console.log(ele.innerText)
        if(ele.innerText !== 'X' || ele.innerText !== 'O'){
            ele.innerText= play;
            ele.classList.add(play);
            plist[ind]=play;
            console.log(plist);
            winStat();
            if(play === 'X'){
                play='O';

            }else{
                play='X';
            }
        }

    }

    buttons.addEventListener('click', ()=>{
        plist=['', '', '', '', '', '', '', '', ''];
        stat.innerHTML= 'Move your mouse over a square and click to play an X or an O.'
        stat.classList.remove('you-won');
        el.forEach(ele =>{
            ele.innerText ='';
            ele.classList.remove('X');
            ele.classList.remove('O');
        });
    });
}

