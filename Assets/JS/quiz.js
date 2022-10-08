//sets a counter for quiz and score
let loopy = 0
let score = 0
let finalScore;

//this is the intro variable
let intro = document.getElementById("introduction")

//this is the directions variable
let directions = document.getElementById("directions")

//this is the quiz variable
let quizPage = document.getElementById("quizPage")
quizPage.style.display = "none"

//this is the score variable
let scorePage = document.getElementById("scorePage")
scorePage.style.display = "none"

//this is the begin button
document.getElementById("beginQuiz")

//this info feeds the timer
let timer = document.getElementById("timer")
let defaultTime = 100000
timer.innerHTML = defaultTime
timer.style.display = "none"

//array that holds all the questions created using TestQuestion
let questionBank = []

//progress variable
let progress = document.getElementById("progress")
progress.style.display = "none"

//html variable for question
let questionLocation = document.getElementById("javaQuestion")

//submit button
let submitQ = document.getElementById("submit")

//score output
let scoreOutput = document.getElementById("scoreOutput")
scoreOutput.style.color = "#black"
//take again button
let takeAgain = document.getElementById("takeAgain")

//html variables for answer choices
let oneQ = document.getElementById("javaAnswer1")
let twoQ = document.getElementById("javaAnswer2")
let threeQ = document.getElementById("javaAnswer3")
let fourQ = document.getElementById("javaAnswer4")

//variables for radio buttons
let oneAns = document.getElementById("oneAns")
let twoAns = document.getElementById("twoAns")
let threeAns = document.getElementById("threeAns")
let fourAns = document.getElementById("fourAns")
let allAns = [oneAns, twoAns, threeAns, fourAns]
//checker array holding true and false values
let checked = []

// Program Classifications
let programList =document.getElementById("ProgList")
// programList.style.display = "none"

//username input
let userName = document.getElementById("userName")
userName.style.color = "black"
userName.style.padding = "1%"
userName.style.display="none"

//score submission
let submitScore = document.getElementById("submitScore")
submitScore.style.display="none"

//study more button
let studyMore = document.getElementById("studyMore")
studyMore.style.display="none"



let details = document.getElementsByTagName("details")
let programs = []
//variables for OJT inputs
let weld = document.getElementById("weld")
programs.push(weld)
let eTruck = document.getElementById("eTruck")
programs.push(eTruck)
let persC = document.getElementById("persC")
programs.push(persC)
let common = document.getElementById("common")
programs.push(common)
let ashland = document.getElementById("ashland")
programs.push(ashland)
let gedAbe = document.getElementById("gedAbe")
programs.push(gedAbe)
let barber = document.getElementById("barber")
programs.push(barber)
let laundry = document.getElementById("laundry")
programs.push(laundry)
let bMaintenance = document.getElementById("bMaintenance")
programs.push(bMaintenance)
let cMaintenance = document.getElementById("cMaintenance")
programs.push(cMaintenance)
let pPass = document.getElementById("pPass")
programs.push(pPass)
let dogPro = document.getElementById("dogPro")
programs.push(dogPro)
let foodServ = document.getElementById("foodServ")
programs.push(foodServ)
let tyro = document.getElementById("tyro")
programs.push(tyro)
let tyroLead = document.getElementById("tyroLead")
programs.push(tyroLead)
let celRecovery = document.getElementById("celRecovery")
programs.push(celRecovery)
let urbLeague = document.getElementById("urbLeague")
programs.push(urbLeague)
let ace = document.getElementById("ace")
programs.push(ace)
let rBank = document.getElementById("rBank")
programs.push(rBank)
let finLiteracy = document.getElementById("finLiteracy")
programs.push(finLiteracy)

let submitProg = document.getElementById("submitProg")//button that sends message to user
// functions for switching arrow direction once program category is clicked
function newArrow(){
    document.getElementById("arrow").innerHTML="▼"
 
}

function newArrow1(){
    document.getElementById("arrow1").innerHTML="▼"
    
}
function newArrow2(){
    document.getElementById("arrow2").innerHTML="▼"
    
}
function newArrow3(){
    document.getElementById("arrow3").innerHTML="▼"
    
}
function newArrow4(){
    document.getElementById("arrow4").innerHTML="▼"
    
}
function newArrow5(){
    document.getElementById("arrow5").innerHTML="▼"
    
}


//list of winners info
let winner = document.getElementById("winner")

//class constructor for questions, answers, and methods
class TestQuestion {
    constructor(question, answers, index) {
        this.question = question,//the question being asked
            this.answers = answers//an array with the answers
        this.index = index//the index of the correct answer
    }
    addToDoc() {
        questionLocation.innerHTML = this.question
        oneQ.innerHTML = this.answers[0]
        twoQ.innerHTML = this.answers[1]
        threeQ.innerHTML = this.answers[2]
       
    //This statement hides the 3rd or 4th answer option when not needed
    if(this.answers.length == 2){
        threeQ.style.display="none"
        threeAns.style.display="none"
        fourQ.style.display="none"
        fourAns.style.display="none"    
    
    } else {
        threeQ.style.display= "inline"
        threeAns.style.display="inline"
        fourQ.style.display="none"
        fourAns.style.display="none"
    }
        
        
        
    }
}

//question variables added to class
let question1 = new TestQuestion("What do You See Yourself as?", ["Benefit", "Liability",], 0)
questionBank.push(question1)

let question2 = new TestQuestion("Upon your release, will you have a stable living arrangement in place?", ["Yes", "No", "Unsure"], 0)
questionBank.push(question2)

let question3 = new TestQuestion("Upon your release, do you have a plan for obtaining legitimate and gainful employment?", ["Yes", "No", "Unsure"], 0)
questionBank.push(question3)

let question4 = new TestQuestion("Do you have a basic education (High School Diploma/ GED)?", ["Yes", "No",], 0)
questionBank.push(question4)

let question5 = new TestQuestion("If you have a basic education, would you be interested in pursuing a college degree?", ["Yes", "No",], 0)
questionBank.push(question5)

let question6 = new TestQuestion("Have you ever, or do you currently, struggle with substance abuse or addiction?",["Yes","No",], 1)
questionBank.push(question6)

let question7 = new TestQuestion("Do you consider yourself to be financially literate?", ["Yes", "No", "Unsure"] , 0)
questionBank.push(question7)

let question8 = new TestQuestion("Are you a father that would like to work towards being a better parent?", ["Yes","No",] ,0)
questionBank.push(question8)

let question9 = new TestQuestion("Do you like dogs?", ["Yes","No"], 0)
questionBank.push(question9)

let question10 = new TestQuestion("Are you open to change?",["Yes","No", "Unsure"], 0)
questionBank.push(question10)

//directions on intro page that contain test info
let introPage = document.getElementById("introPage")
introPage.innerHTML = `In this brief survey we will try to help you discover not only what your interests are, but how they may align with the resources we offer here at the Metro Re-Entry Facility. It is our hope that upon completion of the survey, you will have discovered one or multiple programs that can assist you in your journey towards a positive and meaningful re-entry into society.
`

//this function controls the timer on the pages containing questions
function startTimer() {
    let x = loopy
    let y = finalScore
    let seconds = parseInt(timer.innerHTML)
    //this part makes sure that the id timerDisplay is always one less than before while the function is running
    timer.innerHTML = --seconds
    //this part of function makes sure that the seconds are updated each second
    if (seconds) {
        setTimeout(function () {
            startTimer();
        }, 1000);
    } if (seconds < 11) {//alerts user 10 seconds remaining in quiz
        timer.style.backgroundColor = "red"
    } if (seconds === 0 && loopy < questionBank.length){//records score and stops quiz if time runs out
        alert("Time expired")
        submitScore.disabled = true
        quizPage.style.display = "none"
        scorePage.style.display = "block"
        finalScore = ((100 / questionBank.length) * score).toFixed(1)//calculates score to a percent
        if (finalScore >= 80){
            scoreOutput.innerHTML = `Great job! You got ${finalScore}% correct`
        }else scoreOutput.innerHTML = `You got ${finalScore}% correct.  Really?`
    }
}

//function to save score and leave output
const saveScore = () => {   
    submitScore.disabled = true
    let x = userName.value//user input
    const newUser = document.createElement("li")//new list element
    const newLine = document.createTextNode(`${x}  ${finalScore}%`)//text to go inside the new list element
    newUser.appendChild(newLine)//adding the text to the element
    const newOutput = winner//accessing the id winner
    newOutput.appendChild(newUser)//adding the list element to the list
    newUser.appendChild(newLine)//adding the text to the element
}
//function that runs when submit is pressed
const checker = () => {
    checked = []
    for (let i = 0; i < allAns.length; i++) {//creates an array of true/false values
        checked.push(allAns[i].checked === true)
    }//the index of true is matched to the index declared in the constructor
    
    if (checked.indexOf(true) === questionBank[loopy].index) {//checks value of radio buttons and adjusts score accordingly
        score = score + 1
    }
    oneAns.checked = false//resets all radio buttons to false so the previous answer isn't checked
    twoAns.checked = false
    threeAns.checked = false
    fourAns.checked = false

    ++loopy//adds one to the quiz loop
    if (loopy === questionBank.length) {//check to see if questions are completed and sends user to score page
        intro.innerHTML="Thank You!!!"
        finalScore = ((100 / questionBank.length) * score).toFixed(1)//calculates % correct
        quizPage.style.display = "none"
        scorePage.style.display = "block"
        if (finalScore >= 65){
            scoreOutput.innerHTML = `Thank You for taking the time to complete our survey. It seems like you've made a good plan for your return to society. You should be proud of yourself, because we are! Still, feel free to scroll down to check out the broad list of programs offered here. We hope that you find something that suits your interests. `
        }else scoreOutput.innerHTML = `Thank you for taking our survey and believing in yourself enough to take a step in the right direction towards positive re-entry and self empowerment. Now, It appears that you may be a little unsure of what to do next but please, dont be discouraged. Below, you'll find a list of the various programs offered here that may guide and assist you in your positive transition.`
        if (userName.innerHTML === ''){
            submitScore.disabled = true
        }
    } else//if there are more questions the quiz continues
        quiz()
}
//function that runs when quiz page is loaded
const quiz = () => {
    directions.style.display = "none"//loses the directions page
    scorePage.style.display = "none"
    quizPage.style.display = "block"//displays quiz info
    questionBank[loopy].addToDoc()//uses test class to load questions according to value of loopy
    progress.innerHTML = `${loopy + 1}/${questionBank.length}`
    
}
const again = () => {
    submitScore.disabled = false//disables the submit button
    timer.style.backgroundColor = "white"//changes timers color from red to white
    userName.value = null//empties the username input
    loopy = 0
    score = 0
    finalScore = 0
    if (timer.innerHTML == 0) {
        timer.innerHTML = defaultTime
        startTimer()
        quiz()
    }else 
    timer.innerHTML = defaultTime
    quiz()
    
}
const enableScore = () => {//makes sure nothing can be submitted to page without a username
    let x = event.key
    if (x !== ''){
        submitScore.disabled = false
    }
}

const ojtMessage = () => {
    
    let x = programs.filter((a)=> a.checked === true)
    let y = x.map((a)=> a.value)
    let z = JSON.stringify(y)
    localStorage.setItem("tempStorage",z)
    window.close()
    
}

//event listeners for buttons
submitQ.addEventListener("click", checker)
beginQuiz.addEventListener("click", quiz)
beginQuiz.addEventListener("click", startTimer)
submitScore.addEventListener("click", saveScore)
takeAgain.addEventListener("click", again)
userName.addEventListener("keydown", enableScore)
// details.addEventListener("toggle")
submitProg.addEventListener("click", ojtMessage)

//On the score page take out the heading that say What intersest you  and also that div and just place the paragraph you have written on the score page in that area on the page.
//The list of Programs should show once you have clicked on the Program list button.

