var product1 = document.getElementById("product1");
var qty1 = document.getElementById("qty1");
var price1 = document.getElementById("price1");

var product2 = document.getElementById("product2");
var qty2 = document.getElementById("qty2");
var price2 = document.getElementById("price2");

var carts = document.getElementById("carts");
var total = document.getElementById("total");
var cash = document.getElementById("cash");
var change = document.getElementById("change");

function addOrder() {
  carts.textContent = "";
  var totalPrice = 0;

  if (parseFloat(qty1.value) > 0) {
    var order = qty1.value.toString() + ' pc/s x ' + price1.textContent + ' ----------- ' + product1.textContent + ' ------- php ' + (parseFloat(qty1.value) * parseFloat(price1.textContent)) + '\n';
    carts.textContent += order;
    totalPrice += parseFloat(qty1.value) * parseFloat(price1.textContent);
  }

  if (parseFloat(qty2.value) > 0) {
    var order = qty2.value.toString() + ' pc/s x ' + price2.textContent + ' ----------- ' + product2.textContent + ' ------- php ' + (parseFloat(qty2.value) * parseFloat(price2.textContent)) + '\n';
    carts.textContent += order;
    totalPrice += parseFloat(qty2.value) * parseFloat(price2.textContent);
  }

  total.textContent = "Total: php " + totalPrice.toFixed(2);
}

function calculateChange() {
  var totalPrice = 0;

  if (parseFloat(qty1.value) > 0) {
    totalPrice += parseFloat(qty1.value) * parseFloat(price1.textContent);
  }

  if (parseFloat(qty2.value) > 0) {
    totalPrice += parseFloat(qty2.value) * parseFloat(price2.textContent);
  }

  var cashAmount = parseFloat(cash.value);
  var changeAmount = cashAmount - totalPrice;

  if (changeAmount >= 0) {
    change.textContent = "Change: php " + changeAmount.toFixed(2);
  } else {
    change.textContent = "Insufficient cash provided";
  }
}

qty1.addEventListener("keyup", addOrder);
qty2.addEventListener("keyup", addOrder);
cash.addEventListener("keyup", calculateChange);
