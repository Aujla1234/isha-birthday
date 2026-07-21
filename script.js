/* =====================================================
   ISHA BIRTHDAY WEBSITE
   Isha.exe ❤️

   Made by Jot
===================================================== */


/* =====================================
   LOADING SCREEN
===================================== */


window.addEventListener("load",()=>{


const loader=document.getElementById("loader");


const status=document.getElementById("loadingStatus");


const messages=[

"Calculating cuteness...",

"Checking attitude levels...",

"Loading memories...",

"Installing bestie mode...",

"Friendship.exe ready ❤️"

];


let i=0;


const interval=setInterval(()=>{


status.innerHTML=messages[i];


i++;


if(i>=messages.length){


clearInterval(interval);


}



},700);




setTimeout(()=>{


loader.style.opacity="0";


loader.style.transition="1s";


setTimeout(()=>{


loader.style.display="none";


},1000);



},4500);



});







/* =====================================
   MUSIC PLAYER
===================================== */


const music=document.getElementById("music");


const musicButton=document.getElementById("musicButton");


let playing=false;



musicButton.addEventListener("click",()=>{


if(!playing){


music.play();


playing=true;


musicButton.innerHTML=

'<i class="fa-solid fa-pause"></i>';



}

else{


music.pause();


playing=false;


musicButton.innerHTML=

'<i class="fa-solid fa-music"></i>';



}



});








/* =====================================
   START STORY BUTTON
===================================== */


const startButton=

document.getElementById("startStory");



startButton.addEventListener("click",()=>{


document.querySelector(".chat-section")

.scrollIntoView({

behavior:"smooth"

});



});







/* =====================================
   HEIGHT METER 😂
===================================== */


const measureButton=

document.getElementById("measureButton");


const heightFill=

document.getElementById("heightFill");


const heightText=

document.getElementById("heightText");




measureButton.addEventListener("click",()=>{


heightFill.style.height="45%";



heightText.innerHTML=

"Calculating... 📏";



setTimeout(()=>{


heightFill.style.height="65%";


heightText.innerHTML=

"Almost there..."


},1500);




setTimeout(()=>{


heightFill.style.height="35%";


heightText.innerHTML=

"ERROR ❌<br>Height too small 😂<br>Heart too big ❤️";



confetti({

particleCount:150,

spread:100

});



},3000);



});








/* =====================================
   QUIZ SYSTEM
===================================== */


const answers=

document.querySelectorAll(".answer");


const quizResult=

document.getElementById("quizResult");




answers.forEach(button=>{


button.addEventListener("click",()=>{


const text=button.innerText;



if(text.includes("Isha")){


quizResult.innerHTML=

"Correct 😂 She wins this one ❤️";


}

else if(text.includes("Both")){


quizResult.innerHTML=

"Actually... yes 😂 You both are dramatic.";

}

else{


quizResult.innerHTML=

"Nice try Jot 😂";

}



confetti({

particleCount:80,

spread:70

});



});



});







/* =====================================
   ANGER METER
===================================== */


const angerSlider=

document.getElementById("angerSlider");


const angerText=

document.getElementById("angerText");



angerSlider.addEventListener("input",()=>{


let value=

angerSlider.value;



if(value<30){


angerText.innerHTML=

"Peaceful Isha 😇";


}



else if(value<70){


angerText.innerHTML=

"Warning ⚠️ Something happened 😂";


}



else{


angerText.innerHTML=

"RUN JOT RUN 😭😂";


}



});

/* =====================================
   FRIENDSHIP LEVEL
===================================== */


const friendshipProgress =

document.getElementById("friendshipProgress");


const levelText =

document.getElementById("levelText");



setTimeout(()=>{


friendshipProgress.style.width="100%";


let count=0;


const counter=setInterval(()=>{


count+=5;


levelText.innerHTML=

count+"%";



if(count>=999){


clearInterval(counter);


levelText.innerHTML=

"999% ❤️<br>FOREVER BESTIES UNLOCKED 🔓";


}



},50);



},2000);








/* =====================================
   SECRET MESSAGE
===================================== */


const secretButton=

document.getElementById("secretButton");


const secretBox=

document.getElementById("secretBox");



secretButton.addEventListener("click",()=>{


secretBox.classList.add("show");


secretButton.innerHTML=

"Okay okay, you found it 😂❤️";



confetti({

particleCount:200,

spread:120

});



});







/* =====================================
   FLOATING HEARTS
===================================== */


function createHeart(){


const heart=document.createElement("div");


heart.className="heart";


heart.innerHTML="❤️";


heart.style.left=

Math.random()*100+"vw";


heart.style.animationDuration=

(5+Math.random()*5)+"s";


heart.style.fontSize=

(15+Math.random()*25)+"px";



document.body.appendChild(heart);



setTimeout(()=>{


heart.remove();


},8000);



}



setInterval(createHeart,900);







/* =====================================
   POLAROID CLICK EFFECT
===================================== */


const photos=

document.querySelectorAll(".polaroid");



photos.forEach(photo=>{


photo.addEventListener("click",()=>{


photo.style.transform=

"scale(1.15) rotate(0deg)";


setTimeout(()=>{


photo.style.transform="";


},800);



});



});







/* =====================================
   LOVE BUBBLE RANDOM EFFECT
===================================== */


const bubbles=

document.querySelectorAll(".love-bubble");



bubbles.forEach(bubble=>{


bubble.addEventListener("click",()=>{


bubble.style.animation=

"none";


setTimeout(()=>{


bubble.style.animation=

"bounce .5s";


},10);



});



});






const bubbleStyle=document.createElement("style");


bubbleStyle.innerHTML=`

@keyframes bounce{

50%{

transform:scale(1.2);

}

}

`;


document.head.appendChild(bubbleStyle);







/* =====================================
   FINAL WISH FIREWORKS
===================================== */


const wishButton=

document.getElementById("wishButton");



wishButton.addEventListener("click",()=>{


wishButton.innerHTML=

"Happy Birthday Isha ❤️";


for(let i=0;i<8;i++){


setTimeout(()=>{


confetti({

particleCount:120,

spread:360,

origin:{

x:Math.random(),

y:Math.random()*.5

}


});



},i*300);



}



});







/* =====================================
   MOUSE PARALLAX EFFECT
===================================== */


document.addEventListener("mousemove",(e)=>{


const x=

(e.clientX/window.innerWidth-.5)*20;


const y=

(e.clientY/window.innerHeight-.5)*20;



document.querySelector(".hero-content")

.style.transform=

`translate(${x}px,${y}px)`;



});







/* =====================================
   CONSOLE MESSAGE
===================================== */


console.log(`

💙 Isha.exe Successfully Loaded 💙


Friendship Status:

1000000%


Made by Jot ❤️


`);






