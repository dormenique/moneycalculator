function okButton() {
  var yourMoney = Number(document.getElementById("salary").value).toFixed(2);
  console.log(yourMoney);
  var coinSelected = document.getElementById("coin").value;

  if (coinSelected === "euro") {
    moneyCoin = "€";
  } else if (coinSelected === "realbr") {
    moneyCoin = "R$";
  } else if (coinSelected === "dollar") {
    moneyCoin = "$";
  } else {
    alert("You have to select a coin!");
  }

  var theMoney = document.getElementById("money");
  theMoney.textContent = "You have " + moneyCoin + yourMoney;

  document.getElementById("salary").value = "";
}

function addButton() {
  var debtMoney = Number(document.getElementById("addexpense").value).toFixed(
    2
  );

  document.getElementById("addexpense").value = "";

  var exCategory = document.getElementById("categories").value;

  if (exCategory === "home") {
    expenseCategory = "Home";
  } else if (exCategory === "food") {
    expenseCategory = "Food";
  } else if (exCategory === "fun") {
    expenseCategory = "Fun";
  } else if (exCategory === "shopping") {
    expenseCategory = "Shopping";
  } else if (exCategory === "transport") {
    expenseCategory = "Transport";
  } else {
    expenseCategory = "Other";
  }

  var listOfDebt = document.createElement("li");
  listOfDebt.textContent = moneyCoin + debtMoney + " with " + expenseCategory;
  var debtList = document.getElementById("expenselist").appendChild(listOfDebt);

  var totalMoney = yourMoney - debtMoney;
  console.log(totalMoney);

  document.getElementById("money").innerHTML = "You have " + moneyCoin; //+ totalMoney;
}
