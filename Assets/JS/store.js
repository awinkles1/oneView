//ids for categories in store
let accountBalance = document.getElementById("accountBalance")
let chips = document.getElementById("chips")
let drinks = document.getElementById("drinks")
let hygiene = document.getElementById("hygiene")
let otc = document.getElementById("otc")
let pastry = document.getElementById("pastry")
let storeConfirm = document.getElementById("storeConfirm")
let storeItems = []//array that holds all the storegoods objects

let storePurchase = document.getElementById("storePurchase")//button to submit store order
let storeIDs = []//this holds all the id's of the store items

class StoreGoods {
    constructor(type, item, cost) {
        this.type = type.toLowerCase()//hygiene,otc,drink,soup,pastry,chips
        this.item = item
        this.cost = cost

    }
    update() {
        let a = document.createElement("input")//input for quantity
        a.style.float="right"
        a.type = "number"
        a.min = 0
        a.style.lineHeight="0.5"
        a.style.maxWidth="50px"
        a.setAttribute("id", `#${this.item}`)
        this.id = `#${this.item}`
        let x = document.createElement("li")//creates a new list element
        x.style.lineHeight="2"
        let y = document.createTextNode(`${this.item}---$${this.cost.toFixed(2)}`)//info that goes into list element
        let z = `#${this.type}`//creates a variable that is usable with jQuery below
        x.appendChild(y)
        x.appendChild(a)
        $(z).append(x)
    }
}

let colgate = new StoreGoods("hygiene", "colgateToothpaste", 3.55)
storeItems.push(colgate)
let advil = new StoreGoods("otc", "advil", 1.85)
storeItems.push(advil)
let oriental = new StoreGoods("soup", "oriental", .46)
storeItems.push(oriental)
let chicken = new StoreGoods("soup", "chicken", .46)
storeItems.push(chicken)
let glazed = new StoreGoods("pastry", "glazedBun", 1.40)
storeItems.push(glazed)
let buffalo = new StoreGoods("chips", "buffaloblueCheese", .67)
storeItems.push(buffalo)
let trailMix = new StoreGoods("chips", "trailMix", 1.25)
storeItems.push(trailMix)
let doritos = new StoreGoods("chips", "doritos", .99)
storeItems.push(doritos)
let dove = new StoreGoods("hygiene", "doveSoap", 1.9)
storeItems.push(dove)
let iced = new StoreGoods("pastry", "icedBun", 1.4)
storeItems.push(iced)
let starCrunch = new StoreGoods("pastry", "starCrunch", 2.19)
storeItems.push(starCrunch)
let grape = new StoreGoods("drinks", "grapeSoda", 1.41)
storeItems.push(grape)
let peach = new StoreGoods("drinks", "peachSoda", 1.41)
storeItems.push(peach)
let columbian = new StoreGoods("drinks", "columbian coffee", 4.6)
storeItems.push(columbian)
const dumpStore = () => {//empties all values from store once purchase is made
    $("#hygiene").empty()
    $("#otc").empty()
    $("#drinks").empty()
    $("#soup").empty()
    $("#pastry").empty()
    $("#chips").empty()
}

const addToStore = () => {//maps through the list of store goods and calls the update method for each storegood
    let x = rcList.filter((a) => heading.innerHTML.includes(a.id))
    accountBalance.innerHTML = `Metro Commisary balance: $${x[0].balance}`
    storePurchase.disabled = false
    storePage.style.display = "block"
    accountInfo.style.display = "none"
    budgetPage.style.display = "none"
    introInfo.style.display="none"
    storeItems.map((a) => a.update())
}
const purchase = () => {
    let runningCost = []//holds the values as the user adds to cart
    let a = rcList.filter((a) => heading.innerHTML.includes(a.id))
    storePurchase.disabled = true//disable the purchase button so it can only be hit once
    let x = storeItems.map((a) => a.id)//creates array of item id's
    let y = storeItems.map((a) => a.cost)//creates array of item costs
    for (let i = 0; i < x.length; i++) {//creates array with item cost times quanity
        runningCost.push(parseFloat(document.getElementById(x[i]).value * y[i]).toFixed(2))
    } let z = runningCost.map((a) => parseFloat(a))//creates array that floats all the values above
    console.log(x)
    console.log(y)
    console.log(z)
    console.log(runningCost)
    let total = z.reduce((a, b) => a + b).toFixed(2)//sums up values in array above
    console.log(total)
    a[0].balance = (a[0].balance - total).toFixed(2)//subtracts purchase amount from account balance 
    console.log(a[0].balance)

    if (a[0].balance >= 0) {
        storeConfirm.innerHTML = `Your order has been submitted on ${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} in the amount of $${total}. Your confirmation number is com00${confirmationNumber}.`

        a[0].messages.push(storeConfirm.innerHTML + ` Your current balance is $${a[0].balance}`)//sends message to rc object

        accountBalance.innerHTML = `Metro Commisary balance: $${a[0].balance}`//displays new balance at top
        confirmationNumber++
        a[0].lowBalance()
        notification.innerHTML=++a[0].notNum
        a[0].notNumColor()
    }

    else {
        storeConfirm.innerHTML = "You currently do not have enough in your account.  Please review your order."
        a[0].balance = (parseFloat(total)+ parseFloat(a[0].balance)).toFixed(2)
        accountBalance.innerHTML = `Metro Commisary balance: $${a[0].balance}`//displays new balance at top
        dumpStore()
        addToStore()
    }


}
store.addEventListener("click", addToStore)
storePurchase.addEventListener("click", purchase)

