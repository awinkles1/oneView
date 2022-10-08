let button=document.getElementById("calculate")
let saveBudget=document.getElementById("saveBudget")
saveBudget.disabled=true;
let budgetIntro = document.getElementById("budgetIntro")
budgetIntro.style.display = "none"
let quickBudget=document.getElementById("quickBudget")
let budget = document.getElementById("budget")//budget button
let budBtn = document.getElementById("budBtn")
let budgetPage = document.getElementById("gridContainer")//style for the budget page
budgetPage.style.display = "none"
let budgetAdvice=document.getElementById("b")
let expenseTotal =document.getElementById("e")
let leisureAdvice =document.getElementById("l")
let commisaryAdvice =document.getElementById("c")
let mediaAdvice =document.getElementById("p")
let debtAdvice =document.getElementById("d")
let savingsAdvice =document.getElementById("s")
let advice = [leisureAdvice,commisaryAdvice,mediaAdvice,debtAdvice,savingsAdvice]
let incomeInput =document.getElementById("income")
let leisureInput = document.getElementById("leisure")
let commisaryInput = document.getElementById("commisary")
let mediaInput = document.getElementById("media")
let debtInput = document.getElementById("debt")
let savingsInput = document.getElementById("savings")
let yValues;
let myChart = document.getElementById("myChart")
let graphicChart = document.getElementById("graphicChart")//this div holds the pie and is emptied when user logs out

function makeBudget(){
  
    let x = rcList.filter((a)=> heading.innerHTML.includes(a.id))//identifies user

    yValues = [debtInput.value, mediaInput.value, savingsInput.value, leisureInput.value, commisaryInput.value];
    
    x[0].graph = [...yValues]
    x[0].income = parseFloat(incomeInput.value)
    x[0].leisure = parseFloat(leisureInput.value)
    x[0].commisary = parseFloat(commisaryInput.value)
    x[0].media = parseFloat(mediaInput.value)
    x[0].debt = parseFloat(debtInput.value)
    x[0].savings = parseFloat(savingsInput.value)
    
    if(x[0].income > x[0].total){
         expenseTotal.innerHTML=x[0].fname+", Please allocate all of your funds. You have $"+x[0].difference.toFixed(2)+" dollars unaccounted for. A good budgeting strategy is to account for all income."
    }
    else if(x[0].income < x[0].total){
       expenseTotal.innerHTML=x[0].fname+",You have planned for more income than you currently have. Please reduce a category(s) by "+ x[0].excess.toFixed(2) + " dollars."
    }
    else if(x[0].savings< x[0].income*0.05 && x[0].income == x[0].total){
      expenseTotal.innerHTML= "Your savings are less than 5% of you total income. Please consider moving $" +x[0].leftOver.toFixed(2) +" from commissary/leisure to savings in order to have funds available for unforeseen expenses in the future."
    }
    else if(x[0].savings>x[0].income*0.10 && x[0].income == x[0].total){
      expenseTotal.innerHTML= x[0].fname+", your savings are greater than 10% of your total income. If you have any debt, consider decreasing savings by $"+x[0].tooMuch.toFixed(2)+" and use this extra income to pay off more debt instead."
    }
    else{
      expenseTotal.innerHTML=""
    }
    if(x[0].debt < x[0].income*0.05 && x[0].income == x[0].total){
      budgetAdvice.innerHTML="If you have debt "+ x[0].fname+ ", consider putting at least 5% ($"+x[0].fivePercent.toFixed(2)+") of your income toward reducing it"
    }
    else if(x[0].debt > x[0].income *0.15 && x[0].income == x[0].total){
      budgetAdvice.innerHTML="It's wonderful that you are reducing debt but be sure to leave enough funds to provide for basic neccessities."
    }
     else if (x[0].savings <= x[0].income*0.1 && x[0].savings >= x[0].income*0.05 && x[0].debt <= x[0].income*0.15 && x[0].debt >= x[0].income*0.05 && x[0].income == x[0].total && x[0].income !=0 && x[0].income == x[0].total && x[0].income <= 150){
        budgetAdvice.innerHTML="You have planned an awesome budget "+x[0].fname+". Go forth and prosper."
      }
      else if(x[0].income > 150){
        budgetAdvice.innerHTML=x[0].fname +", you have an amount of income that exceeds double the weekly spending amount for your facility. Consider spending between $20 - $100 a week and keep the rest for future expenses."
        expenseTotal.innerHTML=""
      }
      else{
        budgetAdvice.innerHTML=""
      }
      saveBudget.disabled=false 
    }
    
    //this the function for quick Budget button//

    function quicky(){
      let x = rcList.filter((a)=> heading.innerHTML.includes(a.id))//identifies user

      x[0].income = parseFloat(incomeInput.value);
     
      if(x[0].income < 1){
         budgetAdvice.innerHTML="Please enter an amount for income in order to generate a quick budget."
         expenseTotal.innerHTML=""
      }
      else if(x[0].income > 0 && x[0].income <= 150){
         budgetAdvice.innerHTML= `${x[0].fname}, Based on the income amount entered and your facility's spending max, oneView's conservative budget suggestion is to distribute your funds in the following manner:<br><br> SAVINGS: $${x[0].fivePercent.toFixed(2)}<br> DEBT: $${x[0].
         tenPercent.toFixed(2)} <br> COMMISSARY: $${x[0].fiftyPercent.toFixed(2)}<br>  MEDIA: $${x[0].twentyPercent.toFixed(2)}<br>  LEISURE: $${x[0].fifteenPercent.toFixed(2)}`
         expenseTotal.innerHTML=""
      }
      else if (x[0].income > 150){
        budgetAdvice.innerHTML= `${x[0].fname}, consider limiting your weekly expenses to $150 or less. Perhaps an Emergency Fund (3 month's worth of income) is something you can work toward with any "extra" income.`
      }
    }

    function myBudget(){
      programPage.style.display = "none"
        budgetPage.style.display = "block"
        budgetIntro.style.display = "block"
        let x = rcList.filter((a)=> heading.innerHTML.includes(a.id))
        incomeInput.value = x[0].income
        leisureInput.value = x[0].leisure
        commisaryInput.value = x[0].commisary
        mediaInput.value = x[0].media
        debtInput.value = x[0].debt
        savingsInput.value = x[0].savings  
        medicalConfirmation.innerHTML = ''
        accountInfo.style.display = "none"
        modalIntro.style.display = "block"
        page1.style.display = "none"
        loginPage.style.display = "none"
        medicalConfirmation.style.display = "none"
        medicalMenu.style.display = "none" 
        storePage.style.display = "none"
        budgetPage.style.display="grid"
     
        introInfo.style.display="none"
        navButtons.style.display="grid"
        makeBudget()
       
    }
   
    const saveBudgetFunc =()=>{
      let x =rcList.filter((a)=> heading.innerHTML.includes(a.id))

      x[0].messages.push(
        `Your current budget:\n
        Income: $${x[0].income.toFixed(2)},
        Leisure: $${x[0].leisure.toFixed(2)},
        Commisary: $${x[0].commisary.toFixed(2)},
        Media: $${x[0].media.toFixed(2)},
        Debt: $${x[0].debt.toFixed(2)},
        Savings: $${x[0].savings.toFixed(2)},
        You can update and adjust you budget at any time.`)
        notification.innerHTML= ++x[0].notNum
        x[0].notNumColor()

    }
    quickBudget.addEventListener("click",quicky)
    budget.addEventListener("click",myBudget)
    button.addEventListener("click", makeBudget)
    saveBudget.addEventListener("click",saveBudgetFunc)

    //this code keeps the budget input values at 0 if left empty//
    //for income input
    incomeInput.addEventListener("focus",function(){
      if(incomeInput.value==0){
        return incomeInput.value=""
      }
    })
    incomeInput.addEventListener("blur",function(){
      if(incomeInput.value !=true && incomeInput.value <1){
        return incomeInput.value =0
      }else{
        return incomeInput.value
      }
    })
//for leisure input//
    leisureInput.addEventListener("focus",function(){
      if(leisureInput.value==0){
        return leisureInput.value=""
      }
    })
    leisureInput.addEventListener("blur",function(){
      if(leisureInput.value !=true && leisureInput.value <1){
        return leisureInput.value =0
      }else{
        return leisureInput.value
      }
    })
    //for commissary input//
    commisaryInput.addEventListener("focus",function(){
      if(commisaryInput.value==0){
        return commisaryInput.value=""
      }
    })
    commisaryInput.addEventListener("blur",function(){
      if(commisaryInput.value !=true && commisaryInput.value <1){
        return commisaryInput.value =0
      }else{
        return commisaryInput.value
      }
    })
    //for media input
    mediaInput.addEventListener("focus",function(){
      if( mediaInput.value==0){
        return  mediaInput.value=""
      }
    })
    mediaInput.addEventListener("blur",function(){
      if( mediaInput.value !=true &&  mediaInput.value <1){
        return  mediaInput.value =0
      }else{
        return  mediaInput.value
      }
    })
    //for debt input//
    debtInput.addEventListener("focus",function(){
      if( debtInput.value==0){
        return   debtInput.value=""
      }
    })
    debtInput.addEventListener("blur",function(){
      if(  debtInput.value !=true && debtInput.value <1){
        return   debtInput.value =0
      }else{
        return   debtInput.value
      }
    })
    //for savings input
    savingsInput.addEventListener("focus",function(){
      if( savingsInput.value==0){
        return   savingsInput.value=""
      }
    })
    savingsInput.addEventListener("blur",function(){
      if(  savingsInput.value !=true &&  savingsInput.value <1){
        return   savingsInput.value =0
      }else{
        return   savingsInput.value
      }
    })
    ///////////////////////////////////////////////////

