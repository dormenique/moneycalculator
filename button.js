function okButton(){
    var earnMoney = Number(document.getElementById("salary").value).toFixed(2);
    console.log(earnMoney)
    var coinSel = document.getElementById("coin").value;
  
       if (coinSel === "euro"){ 
        moneyCoin = "€";
      } else if (coinSel === "realbr"){
        moneyCoin = "R$";
      } else if (coinSel === "dollar"){
        moneyCoin = "$"
      } else {
        alert("You have to select a coin!")
      }
  
     var theMoney = document.getElementById("money");
     theMoney.textContent = "You have " + moneyCoin + earnMoney;
  
  document.getElementById("salary").value = "";
}

function addButton(){
  var debtMoney = Number(document.getElementById("addexpense").value).toFixed(2);
   
  document.getElementById("addexpense").value = "";
  
   var exCategory = document.getElementById("categories").value;
  
       if (exCategory === "home"){ 
        expenseCat = "Home";
      } else if (exCategory === "food"){
        expenseCat = "Food";
      } else if (exCategory === "fun"){
        expenseCat = "Fun";
      } else if (exCategory === "shopping"){
        expenseCat = "Shopping";
      } else if (exCategory === "transport"){
        expenseCat = "Transport";
      } else {
        expenseCat = "Other";
      }
  
  var listOfDebt = document.createElement("li");
  listOfDebt.textContent = moneyCoin + debtMoney + " with " + expenseCat;    
  var debtList = document.getElementById("expenselist").appendChild(listOfDebt);

 // var totalMoney = earnMoney - debtMoney;
  //console.log(totalMoney);
  
  document.getElementById("money").innerHTML = "You have " + moneyCoin //+ totalMoney;
    
}
