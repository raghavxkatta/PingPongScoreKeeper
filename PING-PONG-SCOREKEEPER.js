let player1Score=0;
let player2Score=0;
let isGameOver=false;
let winningScore=parseInt(document.querySelector('#noOfPoints').value);
const p1Display= document.querySelector('.player1');
const p2Display= document.querySelector('.player2');
const p2Button= document.querySelector('.buttonPlayer2');
const p1Button= document.querySelector('.buttonPlayer1');
const resetButton=document.querySelector('.reset');
const scoreSelect=document.querySelector('#noOfPoints');
p1Button.addEventListener('click',function(){  
    if(!isGameOver){
        player1Score+=1;
        const winningScore=parseInt(document.querySelector('#noOfPoints').value);

    if(player1Score===winningScore){
   isGameOver=true;
    p1Display.classList.add('has-text-success');
    p2Display.classList.add('has-text-danger');
    p1Button.disabled=true;
    p2Button.disabled=true;

}
p1Display.textContent=player1Score;
}});
p2Button.addEventListener('click',function(){  
    if(!isGameOver){
        player2Score+=1;
        const winningScore=parseInt(document.querySelector('#noOfPoints').value);

    if(player2Score===winningScore){
   isGameOver=true;
   p2Display.classList.add('has-text-success');
   p1Display.classList.add('has-text-danger');
   p1Button.disabled=true;
   p2Button.disabled=true;

}
p2Display.textContent=player2Score;
}});

resetButton.addEventListener('click', reset);

scoreSelect.addEventListener('change',function(){
    winningScore=parseInt(this.value);
reset();
});
function reset(){
    isGameOver=false;
    p1Display.textContent=0;
    p2Display.textContent=0;
    player1Score=0;
    player2Score=0;
    p1Button.disabled=false;
    p2Button.disabled=false;

    p1Display.classList.remove('has-text-success','has-text-danger');
    p2Display.classList.remove('has-text-danger','has-text-success');
}