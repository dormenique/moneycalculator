function okButton(){
  
  var earnMoney = parseInt(document.getElementById("salary").value);
    
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
   var debtMoney = parseInt(document.getElementById("addexpense").value);
  
  document.getElementById("addexpense").value = "";
  
   var listOfDebt = document.createElement("li");
   listOfDebt.textContent = moneyCoin + parseInt(debtMoney);
   document.getElementById("array").appendChild(listOfDebt);
  
 //return(document.getElementById("money").innerHTML) = "You have" + " " + moneyCoin + theMoney
   
}
