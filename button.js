function okButton(){
  
  var earnMoney = parseFloat(document.getElementById("salary").value).toFixed(2);
 
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
    
  document.getElementById("salary").value = "";
  
  return(document.getElementById("money").innerHTML) = "You have " + moneyCoin + earnMoney; 
}

function exButton(){
   var earnMoney = parseInt(document.getElementById("salary").value);
  
   var moneyEarn = earnMoney
   
   var debtMoney = parseInt(document.getElementById("addexpense").value);
   
  document.getElementById("addexpense").value = "";
  
  var moneyDebt = debtMoney.toFixed(2);
  var listOfDebt = document.createElement("li");
  listOfDebt.textContent = moneyCoin + moneyDebt;
    
  document.getElementById("array").appendChild(listOfDebt);
}
