var score_1 = 0;
var score_2 = 0;
var p1 = true;
var game_run = true;

function roll() {

    if(game_run == true) {
        var dice1=Math.floor(Math.random()*6)+1;
        var dice2=Math.floor(Math.random()*6)+1;

        const FirstDiceImage = 'dice_'+dice1+'.png';
        const SecondDiceImage = 'dice_'+dice2+'.png';

        document.querySelectorAll('img')[0].setAttribute('src',FirstDiceImage);
        document.querySelectorAll('img')[1].setAttribute('src',SecondDiceImage);

        if(p1==true) {
            if(dice1==dice2 && dice1!=1) {
                score_1 = score_1+dice1+dice2;
            }

            else if(dice1== dice2==1) {
                score_1=0;
                p1=false;
            }

            else {
                score_1 = score_1+dice1+dice2;
                p1=false;
            }

            document.getElementById("score-1").innerHTML = score_1;

            if(score_1>=100) {
                game_run=false;
                document.querySelector("h2").innerHTML = "PLAYER 1 is the Winner...";
                document.querySelector("h1").innerHTML = "GAME OVER..";

            }
        }
        else {
            if(dice1==dice2 && dice1!=1) {
                score_2 = score_2+ dice1 + dice2 +dice3;
            }

            else if(dice1 == dice2 ==1) {
                score_2=0;
                p1=true;
            }
            else {
                score_2=score_2+dice1+dice2;
                p1=true;
            }

            document.getElementById("score-2").innerHTML=score_2;

            if(score_2>=100) {
                game_run=false;
                document.querySelector("h2").innerHTML = "PLAYER 2 is the Winner...";
                document.querySelector("h1").innerHTML = "GAME OVER..";
            }

        }
    }
}
