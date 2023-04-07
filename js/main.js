let userScore=0;
let compScore=0;
let userScoreVal=document.querySelector("#userScoreVal");
let compScoreVal=document.querySelector("#compScoreVal");
let userResult=document.querySelector("#result-user-stat")
let finalResult=document.querySelector("#result-final-stat")
let btn1=document.querySelector("#r");
let btn2=document.querySelector("#p");
let btn3=document.querySelector("#s");

if(userScore<10 && compScore<10){
    function compChoice(){
        let choice=['rock','paper','scissor'];
        let choose=choice[Math.floor(Math.random()*3)];
        document.querySelector("#result-comp-stat").innerHTML="Computer: "+choose;
        return choose;
    }
    
    function check(){
        if(userScore==10){
            finalResult.innerHTML="Winner: User<br> Game Over";
         } else if(compScore==10){
             finalResult.innerHTML="Winner: Computer<br> Game Over";
         } 
    }
    
    btn1.addEventListener("click",()=>{
        let compResult=compChoice();
        userResult.innerHTML="User: "+"Rock"
        if(compResult=="paper"){
            compScoreVal.innerHTML=++compScore;
            }else if(compResult=="scissor"){
            userScoreVal.innerHTML=++userScore;
            }
        check();  
    });
    btn2.addEventListener("click",()=>{
        let compResult=compChoice();
        userResult.innerHTML="User: "+"Paper"
        if(compResult=="rock"){
            userScoreVal.innerHTML=++userScore;
            }else if(compResult=="scissor"){
                compScoreVal.innerHTML=++compScore;
            }
        check();      
    });
    btn3.addEventListener("click",()=>{
        let compResult=compChoice();
        userResult.innerHTML="User: "+"Scissor"
        if(compResult=="paper"){
            userScoreVal.innerHTML=++userScore;
            }else if(compResult=="rock"){
                compScoreVal.innerHTML=++compScore;
            }
         check();  
    });
}
   





