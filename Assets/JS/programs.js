let programChecker = []

let barber = document.getElementById("barber")
programChecker.push(barber)
let laundry = document.getElementById("laundry")
programChecker.push(laundry)
let bMaint = document.getElementById("bMaint")
programChecker.push(bMaint)
let cMaint = document.getElementById("cMaint")
programChecker.push(cMaint)
let pPass = document.getElementById("pPass")
programChecker.push(pPass)
let doggy = document.getElementById("doggy")
programChecker.push(doggy)
let foody = document.getElementById("foody")
programChecker.push(foody)
let cGood = document.getElementById("cGood")
programChecker.push(cGood)
let ashU = document.getElementById("ashU")
programChecker.push(ashU)
let gedAbe = document.getElementById("gedAbe")
programChecker.push(gedAbe)
let weld = document.getElementById("weld")
programChecker.push(weld)
let eTruck = document.getElementById("eTruck")
programChecker.push(eTruck)
let persCode = document.getElementById("persCode")
programChecker.push(persCode)
let tyro = document.getElementById("tyro")
programChecker.push(tyro)
let tyroLead = document.getElementById("tyroLead")
programChecker.push(tyroLead)
let celeRecov = document.getElementById("celeRecov")
programChecker.push(celeRecov)
let tyroH = document.getElementById("tyroH")
programChecker.push(tyroH)
let uLeague = document.getElementById("uLeague")
programChecker.push(uLeague)
let aces = document.getElementById("aces")
programChecker.push(aces)
let regents = document.getElementById("regents")
programChecker.push(regents)
let finLit = document.getElementById("finLit")
programChecker.push(finLit)

let programSubmit = document.getElementById("programSubmit")
const programMessage = () => {
    let x = rcList.filter((a)=> heading.innerHTML.includes(a.id))
    let y = programChecker.filter((a)=> a.checked === true)
    let z = y.map((a)=> a.name)
    let q = z.map((a)=> `#${a}Label`)
    let p = q.map((a)=> $(a).text())
    console.log(p)
    x[0].messages.push(`Thanks for your interest in Metro's programs! Our beautiful OJT/Vocational Coordinator Ms. Brenda Williams can help you develop a plan including the following classes: ${p}. Success is here!`)
    ++confirmationNumber
    notification.innerHTML=++x[0].notNum
    x[0].notNumColor()
}


programSubmit.addEventListener("click", programMessage)