function okButton() {
  const yourMoney = Number(document.getElementById("salary").value).toFixed(2);

  let coinSelected = document.getElementById("coin").value;

  if (coinSelected === "euro") {
    moneyCoin = "€";
  } else if (coinSelected === "realbr") {
    moneyCoin = "R$";
  } else if (coinSelected === "dollar") {
    moneyCoin = "$";
  } else {
    alert("You have to select a coin!");
  }

  let money = document.getElementById("money");
  money.textContent = "You have " + moneyCoin + yourMoney;

  document.getElementById("salary").value = "";
}

function addButton() {
  const debtMoney = Number(document.getElementById("addexpense").value).toFixed(
    2
  );

  document.getElementById("addexpense").value = "";

  let exCategory = document.getElementById("categories").value;

  switch (exCategory) {
    case "home":
      exCategory = "Home";
      break;
    case "food":
      exCategory = "Food";
      break;
    case "fun":
      exCategory = "Fun";
      break;
    case "shopping":
      exCategory = "Shooping";
      break;
    case "transport":
      exCategory = "Transport";
      break;
    default:
      exCategory = "Other";
      break;
  }

  const listOfDebt = document.createElement("li");
  listOfDebt.textContent = moneyCoin + debtMoney + " with " + exCategory;
  const debtList = document
    .getElementById("expenselist")
    .appendChild(listOfDebt);

  document.getElementById("money").innerHTML = "You have " + moneyCoin;
}
