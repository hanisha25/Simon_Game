let gameSeq=[];
let userSeq=[];
let buttons=["red","blue","yellow","green"];
let start=false;
let level=0;
let highestScore=-1;
let h3=document.querySelector("h3");
document.addEventListener("keypress",()=>{
    if(start==false)
    {
        // console.log("Game is Started");
        start=true;
        levelup();
        
    }

});
function levelup(){
    userSeq=[];
    level++;
    h3.innerText=`Level ${level}`;
    let idx=Math.floor(Math.random()*4);
    let randomBox=buttons[idx];
    let randBtn=document.querySelector(`.${randomBox}`);
    gameSeq.push(randomBox);
    btnFlash(randBtn);

}
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash")
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash")
    },250);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns)
{
    btn.addEventListener("click",btnPress);
}
function btnPress(){
    let btn=this;
    userFlash(btn);
    usercolor=btn.getAttribute("id");
    userSeq.push(usercolor);
    checkAns(userSeq.length-1);
}
function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length)
        {
            setTimeout(levelup,1000);
        }
    }
    else{
        let body=document.querySelector("body");
        highestScore=Math.max(highestScore,level-1);
        h3.innerText=`Game Over! Your Score : ${level-1} \n Highest Score : ${highestScore} \n Press any key to restart`;
        body.style.backgroundColor="red";
        setTimeout(function(){
            body.style.backgroundColor="white";
        },250);
        reset();
    }
}
function reset()
{
    start=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}