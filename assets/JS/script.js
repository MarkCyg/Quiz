alert("Welcome to digital Quiz!");


//Variables and whatnot
 const startButton = document.getElementById('strtbtn');
 const answerA = document.getElementById('Abtn');
 const answerB = document.getElementById('Bbtn');
 const answerC = document.getElementById('Cbtn');
 const answerT = document.getElementById('Tbtn');
 const answerF = document.getElementById('Fbtn');

 //Starting the game
 let counter = 180;
 let timerHTMLText = document.getElementById('timer');
 var beginCountdown;

 startButton.addEventListener('click', () => {
   alert('Welcome to THUNDER DOME!!!')
   alert('The  rules are simple! YOU DO NOT TALK ABOUT FIGHT CLUB!!! You are being timed... 3 minutes. If the time runs out before you are finished, you lose those points. You will be docked 20 seconds for any inccorect answer. If this is your first time here... You have to fight.')
   startGame();
   startTimer();
 });

 function startGame() {
   startButton.textContent = "Let's Roll";

 }