/* dimentions du terrain */

let width = parseInt(window.innerWidth);
let height = parseInt(window.innerHeight);


/******************************************************************
GAME OVER
*******************************************************************/


let gameOver = document.querySelector(".game-over");
let gameON = true;

/******************************************************************
BALL
*******************************************************************/

let ball = document.querySelector("#ball");

let moveX = 1;
let moveY = 1;
let positionX = parseInt(ball.style.left);
let directionX = "right";
let positionY = parseInt(ball.style.top);
let directionY = "down";

/******************************************************************
POINTS COUNTS
*******************************************************************/
let score = 0;
let bestScore = 0;
let scoreDisplay = document.querySelector(".score");

function printScores(){
scoreDisplay.textContent = "Score: "+score+" Best score: "+bestScore;
}


/******************************************************************
TRY AGAIN & RESET
*******************************************************************/


let btnTry = document.querySelector(".btnTry");

btnTry.addEventListener("click", function() {
    document.querySelector(".game-over").classList.add("none");
    gameON = true;
    score = 0;
    moveY = 1;
});


/******************************************************************
BAR LEFT
*******************************************************************/

let bar = document.querySelector("#bar");

let bPositionX = 100;
let bPositionYT = 200;
let bPositionYB = 400;


let btnUp = document.querySelector(".up");
let btnDown = document.querySelector(".down");

// btnUp.addEventListener("click", function() {
//     bPositionYT = bPositionYT - 60;
//     bPositionYB = bPositionYB - 60;
//     document.querySelector("#bar").style.top = bPositionYT + "px";
// });

btnUp.addEventListener("click", function() {
    let i = 0;
    let t = 0;
    let barTimer = setInterval(function(){
        if (t < 60){
        i = 1;
        t = t + 1;
        bPositionYT = bPositionYT - i;
        bPositionYB = bPositionYB - i;
        document.querySelector("#bar").style.top = bPositionYT + "px";
        }
        else if (t > 60){clearInterval(barTimer);}
    },1)
});

btnDown.addEventListener("click", function() {
    let i = 0;
    let t = 0;
    let barTimer = setInterval(function(){
        if (t < 60){
        i = 1;
        t = t + 1;    
        bPositionYT = bPositionYT + i;
        bPositionYB = bPositionYB + i;
        document.querySelector("#bar").style.top = bPositionYT + "px";
        }
        else if (t > 60){clearInterval(barTimer);}
    },1)    
    
});

/******************************************************************
BAR RIGHT
*******************************************************************/

let barRight = document.querySelector("#barRight");

let RbPositionX = width - 100;
let RbPositionYT = 200;
let RbPositionYB = 400;


let RbtnUp = document.querySelector(".upRight");
let RbtnDown = document.querySelector(".downRight");

RbtnUp.addEventListener("click", function() {
    let i = 0;
    let t = 0;
    let barTimer = setInterval(function(){
        if (t < 60){
        i = 1;
        t = t + 1;
        RbPositionYT = RbPositionYT - i;
        RbPositionYB = RbPositionYB - i;
        document.querySelector("#barRight").style.top = RbPositionYT + "px";
        }
        else if (t > 60){clearInterval(barTimer);}
    },1)
});

RbtnDown.addEventListener("click", function() {
    let i = 0;
    let t = 0;
    let barTimer = setInterval(function(){
        if (t < 60){
        i = 1;
        t = t + 1;    
        RbPositionYT = RbPositionYT + i;
        RbPositionYB = RbPositionYB + i;
        document.querySelector("#barRight").style.top = RbPositionYT + "px";
        }
        else if (t > 60){clearInterval(barTimer);}
    },1)    
    
});




/******************************************************************
GAME RULES
*******************************************************************/

setInterval(function(){
    if (gameON === true) {
        scoreDisplay.textContent = "Score: "+score+" Best score: "+bestScore;
        if(score > bestScore){bestScore = score;}
        /* pour le déplacement horizontal */
        
        if (directionX === "right") {
            /* BALL */
            positionX = positionX + moveX;
            ball.style.left =  positionX + 'px';
            if (positionX === width - 40) {directionX = "left";}
            /* BAR RIGHT */
            if (positionX == RbPositionX - 60 && positionY >= RbPositionYT && positionY <= RbPositionYB)
                {directionX = "left"; score = score + 1;}
        }
        else if (directionX === "left") {
            positionX = positionX - moveX;
            ball.style.left =  positionX + 'px';
            if (positionX === 0) {directionX = "right";}
            if (positionX == bPositionX + 15 && positionY >= bPositionYT && positionY <= bPositionYB)
                /* score incrémentation */
                {directionX = "right"; score = score + 1;}
        }
        
                
                
        /* pour le déplacement vertical */
        
        if (directionY === "down") {
            positionY = positionY + moveY;
            ball.style.top =  positionY + 'px';
            if (positionY === height - 40) {directionY = "up";}
        }
        else if (directionY === "up") {
            positionY = positionY - moveY;
            ball.style.top =  positionY + 'px';
            if (positionY === 0) {directionY = "down";}
        }
        
        /* GAME OVER */
        if (positionX == 0 || positionX == width - 40) {
            positionX = 10;
            document.querySelector(".game-over").classList.remove("none");
            document.querySelector(".btnTry").classList.remove("none");
            gameON = false;
            score = 0;
            
            
            // document.write("<h2>GAME OVER</h2>")
        }
    }
   
}, 1);






