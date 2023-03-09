// creation de Variables constantes 
const restartBtn = document.getElementById("restart");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const trueBtn = document.getElementById("True");
const falseBtn = document.getElementById("False");
const userScore = document.getElementById("user-score");
const totalScore = document.getElementById("total-score");
const questionText = document.getElementById("question-text")
// variable personnalisé pour les question score et option
let currentQuestion = 0;
let score = 0;

let questions = [
   {
       question: "A quel année Macky Sall a été elu president de la republique du Senegal?",
       answers: [
           {option: "2012", answer: true},
           {option: "2000", answer: false},
       ]
   },
   {
       question: "Le Mali fait parti de quel continent?",
       answers: [
           {option: "Asie", answer: false},
           {option: "Afrique", answer: true},
       ]
   },
   {

       question: "Completez cette phrase: le capital du senegal est: .",
       answers: [
           {option: "louga", answer: false},
           {option: "Dakar", answer: true},
       ]
   },
   {

    question: "le senegal comprend combien de region: .",
    answers: [
        {option: "12", answer: false},
        {option: "14", answer: true},
    ]
},
{

    question: "lat dior est le :",
    answers: [
        {option: "roi du sine", answer: false},
        {option: "damel du cayor", answer: true},
    ]
},
{

    question: "sadio Mané est un  :",
    answers: [
        {option: "lutteur", answer: false},
        {option: "footballeur", answer: true},
    ]
},
]
//evenement onclick bouton
restartBtn.addEventListener("click", restart);
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click",next);
submitBtn.addEventListener("click",submit);
//debut quiz
function beginQuiz() {
    currentQuestion = 0;
    totalScore.innerHTML = questions.length;
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 6) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 5) {
            next();
        }
    }
 
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 6) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 5) {
            next();
        }
    }
 
    prevBtn.classList.add("hide");
 }
 
 beginQuiz();
 // redemarrage
 function restart() {
    currentQuestion = 0;
    prevBtn.classList.remove("hide");
    nextBtn.classList.remove("hide");
    submitBtn.classList.remove("hide");
    trueBtn.classList.remove("hide");
    falseBtn.classList.remove("hide");
    score = 0;
    userScore.innerHTML = score;
    beginQuiz();
 }
 //passer a la question suivante
 function next() {
    currentQuestion++;
    if(currentQuestion >= 5) {
        nextBtn.classList.add("hide");
        prevBtn.classList.remove("hide");
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 6) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 5) {
            next();
        }
    }
 
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 6) {
                score++;
            }
 
        }
        userScore.innerHTML = score;
        if(currentQuestion < 5) {
            next();
        }
    }
 
    prevBtn.classList.remove("hide");
 }
 // boutton precedant
 function prev() {
    currentQuestion--;
    if(currentQuestion <= 0) {
        nextBtn.classList.remove("hide");
        prevBtn.classList.add("hide");
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 6) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 5) {
            next();
        }
    }
 
 
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 6) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 5) {
            next();
        }
    }
 
    nextBtn.classList.remove("hide");
 }
 //bouton d'envoi
 function submit() {
    prevBtn.classList.add("hide");
    nextBtn.classList.add("hide");
    submitBtn.classList.add("hide");
    trueBtn.classList.add("hide");
    falseBtn.classList.add("hide");   
    questionText.innerHTML ="Felicitation vous venez de soumettre votre Quiz!"
 }