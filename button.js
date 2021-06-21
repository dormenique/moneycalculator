function okButton(){
  var earnMoney = Number(document.getElementById("salary").value).toFixed(2);
  var theMoney = document.getElementById("money");
  
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
    
      if(earnMoney.length > 0){
        theMoney.textContent = "You have " + moneyCoin + earnMoney;
      }
  
  document.getElementById("salary").value = "";
  
  //document.getElementById("money").innerHTML = "You have " + moneyCoin + earnMoney; 
}

function addButton(){
  var debtMoney = Number(document.getElementById("addexpense").value).toFixed(2);
   
  document.getElementById("addexpense").value = "";
  
  var listOfDebt = document.createElement("li");
  listOfDebt.textContent = moneyCoin + debtMoney;    
  var debtList = document.getElementById("expenselist").appendChild(listOfDebt);

  var totalMoney = earnMoney - debtMoney
  
  document.getElementById("money").innerHTML = "You have " + moneyCoin + totalMoney;
    
}
