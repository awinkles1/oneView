let date = new Date()
let rcList = []//array that holds all the RC object data
let pw = document.getElementById("pw")//password input
let user = document.getElementById("user")//username input
let login = document.getElementById("login")//submit button for password & id
let goHome = document.getElementById("goHome")//element that will always go to account info
let goHomeButton = document.getElementById("goHomeButton")
let logOut = document.getElementById("logOut")//element that logs you out
let logOutButton = document.getElementById("logOutButton")
let messageButton = document.getElementById("messageButton")
let notification =document.getElementById("notification")
let navButtons = document.getElementById("navButtons")
navButtons.style.display = "none"
//page 1 login page/intro
let clearMessages = document.getElementById("clearMessages")
let page1 = document.getElementById("page1")
let loginPage = document.getElementById("loginPage")
let introInfo = document.getElementById("introInfo")
let heading = document.getElementById("heading")
let oneView=document.getElementById("oneView")
loginPage.style.display = "block"
//page2 with RC info that is displayed when user logs in
let changePW = document.getElementById("changePW")//button to change pw
accountInfo.style.display = "none"
let medical = document.getElementById("medical")//medical button
let store = document.getElementById("store")//store button
let profile = document.getElementById("profile")//profile button
let pwChange = document.getElementById("pwChange")//input to put new password
let pwConfirm = document.getElementById("pwConfirm")//input to confirm new password
//change password modal info
let modalIntro = document.getElementById("modalIntro")
let changePassWord = document.getElementById("changePassWord")//button to pull up modal
let savePassWord = document.getElementById("savePassWord")// save button within modal
//medical page info
let medicalMenu = document.getElementById("medicalMenu")
medicalMenu.style.display = "none"
let userMedicalInfo = document.getElementById("userMedicalInfo")
let medicalChoice = document.getElementById("medicalChoice")//this is the select element for the menu
let doctorRequest = document.getElementById("doctorRequest")
let dentistRequest = document.getElementById("dentistRequest")
let medicationRequest = document.getElementById("medicationRequest")
let medicalChoiceSubmit = document.getElementById("medicalChoiceSubmit")//button that goes with the menu
let submitMedical = document.getElementById("submitMedical")//button that submits the info in docDent textarea
submitMedical.style.display = "none"
let medicalConfirmation = document.getElementById("medicalConfirmation")//hold the messages
medicalConfirmation.style.display = "none"
let confirmationNumber = 1//this is the confirmation counter
let savedMessages = document.getElementById("savedMessages")//holds the messages
//doctor or dentist request page
let doctorDentist = document.getElementById("doctorDentist")
doctorDentist.style.display = "none"
let doctorDentistText = document.getElementById("doctorDentistText")//text area for docDent page
//store page info
let storePage = document.getElementById("storePage")
storePage.style.display = "none"
let accountPage=document.getElementById("accountPage")
accountPage.style.display="none"
//profile page
let programPage = document.getElementById("programPage")
programPage.style.display = "none"
//object that holds all relevant RC information
class ReturningCit {
    constructor(lname, fname, id, building, birthdate, race, sex, balance, password) {
        this.lname = lname
        this.fname = fname
        this.id = id
        this.building = building
        this.birthdate = birthdate
        this.race = race
        this.sex = sex
        this.balance = balance.toFixed(2)
        this.password = password
        this.messages = []//this hold all messages for the user
        //all the budget info for/from graph
        this.notNum=0
        this.income=0
        this.leisure=0
        this.commisary=0
        this.media=0
        this.debt=0
        this.savings=0
        this.graph = []
        this.reserves = []
    }
    get age() {
        let milSec1 = Date.parse(this.birthdate)
        let milSec2 = Date.now()
        let diff = milSec2 - milSec1
        let sec = diff / 1000
        let min = sec / 60
        let hour = min / 60
        let day = hour / 24
        let age = Math.floor(day / 365.25)
        return age
    }
    notNumColor(){
        return this.notNum> 0? $("#notification").css("background","red").css("color","white"):$("#notification").css("background","white").css("color","blue")
    }
    get total() {//sum of all the expense info
        return this.leisure + this.commisary + this.media + this.debt + this.savings
    }
    get difference() {//what's left over after expenses
        return this.income - this.total
    }
    get excess() {//if they have allocated more money than they have
        return this.total - this.income
    }
    get leftOver(){//this is to find how much is needed to meet the 5% savings mark
        return this.income*0.05-(this.savings)
    }
    get tooMuch(){//this is to find the amount the user exceeded 10% in savings
        return this.savings-(this.income*0.10)
    }
    get fivePercent(){//this calculates 5% of the total income
        return this.income*0.05
    }
    get tenPercent(){//this calculates 10% of the total income
        return this.income*0.10
    }
    get twentyPercent(){//this calculates 20% of the total income
        return this.income*0.20
    }
    get fifteenPercent(){//this calculates 5% of the total income
        return this.income*0.15
    }
    get fiftyPercent(){//this calculates 5% of the total income
        return this.income*0.50
    }
    lowBalance(){
        if(this.balance<10){
            ++this.notNum
            this.messages.push(`Your balance is $${this.balance}. Call your mom.`)
        }
    }
    changePassWord() {
        this.password = pwChange.value
        return console.log(this.password)
    }
}

let winkles = new ReturningCit("Winkles", "Andrew", "1001", "K-D", "02/23/1977", "White", "Male", 35, "metro")
rcList.push(winkles)

let towns = new ReturningCit("Towns", "Jatavius", "1002", "H-D", "06/27/1980", "Black", "Male", 41, "metro")
rcList.push(towns)

let joyner = new ReturningCit("Joyner", "Lou", "1003", "H-D", "09/15/1950", "Black", "Male", 104.45, "metro")
rcList.push(joyner)

let clarke = new ReturningCit("Clarke", "Calvin", "1004", "J-C", "04/09/1988", "Black", "Male", 102.2, "metro")
rcList.push(clarke)


//

const submit = () => {//takes input on homepage
    let x = user.value//takes value from user id input
    let y = rcList.filter((a) => a.id == x)//goes through array and finds id that matches
    let p = pw.value//takes value from password input
    if (y[0].password === p) {//checks password input against password linked to ID
        accountInfo.style.display = "grid"
        accountPage.style.display="block"
        storePage.style.display = "none"
        introInfo.innerText="Our goal is to provide you the means to properly persue your goals while making essential everyday tasks easier to complete."
        page1.style.display = "none"
        notification.innerHTML=y[0].notNum
        loginPage.style.display = "none"
        heading.innerHTML = ` ${'<img src="Assets/images/ovf1.webp"><br>'}Welcome ${y[0].fname} ${y[0].lname} ${y[0].id} to Metro ${'one<i><u>View</u></i>'}.`
        navButtons.style.display = "grid"
        budgetPage.style.display = "none"
        y[0].notNumColor()
    } else {
        user.value = ''
        pw.value = ''
        alert("Incorrect login information.")
    }
}

const newPassword = () => {//this checks the values of the new password and confirmation and either runs the changePassWord in the object or starts the process over
    let x = rcList.filter((a)=> heading.innerHTML.includes(a.id))
    if (pwChange.value === pwConfirm.value) {
        x[0].changePassWord()
        alert("Your new password has been saved.")
    } else {//cancels the inputs and directs user to start over
        pwChange.value = ''
        pwConfirm.value = ''
        alert("Password not confirmed. Please try again.")
    }
}

const medRequest = () => {//runs when the medical button is clicked
    medicalConfirmation.innerHTML = ''//clears the messages above the drop down
    savedMessages.innerHTML = ''//clears the info in the message modal
    introInfo.innerHTML="All request will be reponed to within 5 business days"
    accountInfo.style.display = "none"
    storePage.style.display = "none"
    medicalMenu.style.display = "block"
    medicalConfirmation.style.display = "block"
    let x = rcList.filter((a) => heading.innerHTML.includes(a.id))
    userMedicalInfo.innerHTML = `ID:<i>${x[0].id}</i><br> DOB:<i>${x[0].birthdate}</i><br> Age:<i>${x[0].age}</i><br> Race:<i>${x[0].race}  ${x[0].sex}</i>`
    for (let i = 0; i < x[0].messages.length; i++) {
        let y = document.createElement("li")
        let z = document.createTextNode(x[0].messages[i])
        y.appendChild(z)
        savedMessages.appendChild(y)//appends users messages
    }
}
const medicalOptions = () => {//runs when a dropdown item is selected and medicalChoiceSubmit is clicked
    doctorDentist.style.display = "block"
    submitMedical.style.display = "block"
    medicalMenu.style.display = "none"
}

const confirmMedical = () => {
    
    doctorDentist.style.display = "none"
    medicalMenu.style.display = "block"
    let x = document.createElement("li")
    let y = document.createTextNode(`Your message "${doctorDentistText.value}" has been sent to medical on ${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}.  Your confirmation number is med00${confirmationNumber}.`)
    x.appendChild(y)
    let z = rcList.filter((a) => heading.innerHTML.includes(a.id))
    medicalConfirmation.appendChild(x)
    z[0].messages.push(`Your message "${doctorDentistText.value}" has been sent to medical on ${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}.  Your confirmation number is med00${confirmationNumber}.`)
    doctorDentistText.value = ''
    submitMedical.style.display = "none"
    ++confirmationNumber
    notification.innerHTML=++z[0].notNum
    z[0].notNumColor()
}
const showMessages = () => {//pulls up ret citizen's messages
    savedMessages.innerHTML = ''//clears out modal info
    let x = rcList.filter((a) => heading.innerHTML.includes(a.fname))//finds user logged in
    if (localStorage.getItem("tempStorage") !== null){
        let y = JSON.parse(localStorage.getItem("tempStorage"))
        x[0].messages.push(`Thanks for taking our profile survey! Set up an appointment with the beautiful Mrs. Williams to discuss enrolling in: ${y}.`)}
        
    for (let i = 0; i < x[0].messages.length; i++) {//loops through all messages in object
        let y = document.createElement("li")
        let z = document.createTextNode(x[0].messages[i])
        y.appendChild(z)
        savedMessages.appendChild(y)//appends messages inside message modal
    }localStorage.removeItem("tempStorage")
}

const showProfile = () => {
    accountInfo.style.display = "none"
    programPage.style.display = "grid"
    introInfo.innerText = "Here at Metro Re-entry, our goal is to provide you with the means to properly pursue your goals. Listed below are a few of the many programs we are proud to offer to you, our valued Returning Citizens. Feel free to select all the choices that peak your interests and we will have our dedicated OJT/Vocational coordinator, Ms. Brenda Williams, put together a solid program syllabus based upon those interests. We are a team, so let's work together to ensure your successful return to society!!"
}
const home = () => {
    budgetIntro.style.display = "none"
    medicalConfirmation.innerHTML = ''
    accountInfo.style.display = "grid"
    modalIntro.style.display = "block"
    page1.style.display = "none"
    loginPage.style.display = "none"
    medicalConfirmation.style.display = "none"
    medicalMenu.style.display = "none"
    storePage.style.display = "none"
    storeConfirm.innerHTML = ''
    budgetPage.style.display = "none"
    programPage.style.display = "none"
   
    dumpStore()
    storePurchase.disabled = false
}
const logMeOut = () => {
    user.value = ""
    pw.value = ""
    heading.innerHTML = ` ${'<img src="Assets/images/ovf1.webp"><br>'}`
    accountInfo.style.display = "none"
    accountPage.style.display="none"
    loginPage.style.display = "block"
    page1.style.display = "block"
    medicalConfirmation.innerHTML = ''
    savedMessages.innerHTML = ''
    medicalMenu.style.display = "none"
    navButtons.style.display = "none"
    storePage.style.display = "none"
    storeConfirm.innerHTML = ''
    budgetPage.style.display = "none"
    budgetIntro.style.display = "none"
    programPage.style.display = "none"
    // introInfo.style.display = "block"
    introInfo.innerText = 'Please enter your GDC number and your password to gain access to the services provided at Metro Reentry Facility. All request will be responed to within 5 business days.'
    
    dumpStore()

}

login.addEventListener("click", submit)
savePassWord.addEventListener("click", newPassword)
medical.addEventListener("click", medRequest)
medicalChoiceSubmit.addEventListener("click", medicalOptions)
submitMedical.addEventListener("click", confirmMedical)
goHomeButton.addEventListener("click", home)
logOutButton.addEventListener("click", logMeOut)
profile.addEventListener("click", showProfile)
messageButton.addEventListener("click", showMessages)
messageButton.addEventListener('click',function(){

    let x=rcList.filter((a)=> heading.innerHTML.includes(a.id))
    x[0].notNum="0"
    x[0].notNumColor()
    notification.innerHTML=x[0].notNum
})
clearMessages.addEventListener("click", function(){//empties the rc's message array
    let x = rcList.filter((a)=> heading.innerHTML.includes(a.id))
    x[0].messages = []
})