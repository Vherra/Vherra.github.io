// Selecting elements from the DOM
var product1 = document.getElementById("product1");
var qty1 = document.getElementById("qty1");
var price1 = document.getElementById("price1");

var product2 = document.getElementById("product2");
var qty2 = document.getElementById("qty2");
var price2 = document.getElementById("price2");

var product3 = document.getElementById("product3");
var qty3 = document.getElementById("qty3");
var price3 = document.getElementById("price3");

var product4 = document.getElementById("product4");
var qty4 = document.getElementById("qty4");
var price4 = document.getElementById("price4");

var product5 = document.getElementById("product5");
var qty5 = document.getElementById("qty5");
var price5 = document.getElementById("price5");

var product6 = document.getElementById("product6");
var qty6 = document.getElementById("qty6");
var price6 = document.getElementById("price6");

var carts = document.getElementById("carts");
var total = document.getElementById("total");
var cash = document.getElementById("cash");
var change = document.getElementById("change");

// Function to add orders to the textarea and calculate total
function addOrder() {
  carts.textContent = ""; // Clear previous orders
  var totalPrice = 0;

  // Product 1
  if (parseFloat(qty1.value) > 0) {
    var order = qty1.value.toString() + ' pc/s x ' + price1.textContent + ' ----------- ' + product1.textContent + ' ------- php ' + (parseFloat(qty1.value) * parseFloat(price1.textContent)) + '\n';
    carts.textContent += order;
    totalPrice += parseFloat(qty1.value) * parseFloat(price1.textContent);
  }

  // Product 2
  if (parseFloat(qty2.value) > 0) {
    var order = qty2.value.toString() + ' pc/s x ' + price2.textContent + ' ----------- ' + product2.textContent + ' ------- php ' + (parseFloat(qty2.value) * parseFloat(price2.textContent)) + '\n';
    carts.textContent += order;
    totalPrice += parseFloat(qty2.value) * parseFloat(price2.textContent);
  }

  // Product 3
  if (parseFloat(qty3.value) > 0) {
    var order = qty3.value.toString() + ' pc/s x ' + price3.textContent + ' ----------- ' + product3.textContent + ' ------- php ' + (parseFloat(qty3.value) * parseFloat(price3.textContent)) + '\n';
    carts.textContent += order;
    totalPrice += parseFloat(qty3.value) * parseFloat(price3.textContent);
  }

  // Product 4
  if (parseFloat(qty4.value) > 0) {
    var order = qty4.value.toString() + ' pc/s x ' + price4.textContent + ' ----------- ' + product4.textContent + ' ------- php ' + (parseFloat(qty4.value) * parseFloat(price4.textContent)) + '\n';
    carts.textContent += order;
    totalPrice += parseFloat(qty4.value) * parseFloat(price4.textContent);
  }

  // Product 5
  if (parseFloat(qty5.value) > 0) {
    var order = qty5.value.toString() + ' pc/s x ' + price5.textContent + ' ----------- ' + product5.textContent + ' ------- php ' + (parseFloat(qty5.value) * parseFloat(price5.textContent)) + '\n';
    carts.textContent += order;
    totalPrice += parseFloat(qty5.value) * parseFloat(price5.textContent);
  }

  // Product 6
  if (parseFloat(qty6.value) > 0) {
    var order = qty6.value.toString() + ' pc/s x ' + price6.textContent + ' ----------- ' + product6.textContent + ' ------- php ' + (parseFloat(qty6.value) * parseFloat(price6.textContent)) + '\n';
    carts.textContent += order;
    totalPrice += parseFloat(qty6.value) * parseFloat(price6.textContent);
  }

  total.value = "Total: php " + totalPrice.toFixed(2); // Update total input field
}

// Function to calculate change when cash amount is entered
function calculateChange() {
  var totalPrice = 0;

  // Calculate total price
  if (parseFloat(qty1.value) > 0) {
    totalPrice += parseFloat(qty1.value) * parseFloat(price1.textContent);
  }
  if (parseFloat(qty2.value) > 0) {
    totalPrice += parseFloat(qty2.value) * parseFloat(price2.textContent);
  }
  if (parseFloat(qty3.value) > 0) {
    totalPrice += parseFloat(qty3.value) * parseFloat(price3.textContent);
  }
  if (parseFloat(qty4.value) > 0) {
    totalPrice += parseFloat(qty4.value) * parseFloat(price4.textContent);
  }
  if (parseFloat(qty5.value) > 0) {
    totalPrice += parseFloat(qty5.value) * parseFloat(price5.textContent);
  }
  if (parseFloat(qty6.value) > 0) {
    totalPrice += parseFloat(qty6.value) * parseFloat(price6.textContent);
  }

  // Calculate change
  var cashAmount = parseFloat(cash.value);
  var changeAmount = cashAmount - totalPrice;

  if (changeAmount >= 0) {
    change.value = "Change: php " + changeAmount.toFixed(2); // Update change input field
  } else {
    change.value = "Insufficient cash provided";
  }
}

// Event listeners for keyup events on quantity inputs and cash input
qty1.addEventListener("keyup", addOrder);
qty2.addEventListener("keyup", addOrder);
qty3.addEventListener("keyup", addOrder);
qty4.addEventListener("keyup", addOrder);
qty5.addEventListener("keyup", addOrder);
qty6.addEventListener("keyup", addOrder);
cash.addEventListener("keyup", calculateChange);
