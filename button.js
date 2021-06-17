function okButton(){ //função do botão ok
  
  var earnMoney = parseInt(document.getElementById("salary").value); //valor numerico inserido no input
    
  var coinSel = document.getElementById("coin").value; //seleção de moeda
  
      if (coinSel === "euro"){ 
        moneyCoin = "€";
      } else if (coinSel === "realbr"){
        moneyCoin = "R$";
      } else if (coinSel === "dollar"){
        moneyCoin = "$"
      } else {
        alert("You have to select a coin!")
      }
    
  return(document.getElementById("money").innerHTML) = "You have " + moneyCoin + earnMoney; //frase abaixo de tudo "you have €1500"
}

function exButton(){ //função do botao add
   var earnMoney = parseInt(document.getElementById("salary").value); //valor numerico inserido no primeiro input
   var debtMoney = parseInt(document.getElementById("addexpense").value); //valor numerico inserido no segundo input
   
   var listOfDebt = document.createElement("li"); // cria o elemento lista
   listOfDebt.textContent = moneyCoin + parseInt(debtMoney); // classifica o textContent do elemento lista como a variavel debtMoney
   document.getElementById("array").appendChild(listOfDebt); // pega o elemento array (a lista no html) e tem como appendChild o elemento a cima

   //return(document.getElementById("money").innerHTML) = "You have" + " " + moneyCoin + theMoney
   
}
