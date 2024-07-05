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

  // Helper function to add a product to the order
  function addProductOrder(product, qty, price) {
    if (parseFloat(qty.value) > 0) {
      var order = `${qty.value} pc/s x ${price.textContent} ----------- ${product.textContent} ------- php ${(parseFloat(qty.value) * parseFloat(price.textContent)).toFixed(2)}\n`;
      carts.textContent += order;
      totalPrice += parseFloat(qty.value) * parseFloat(price.textContent);
    }
  }

  // Add each product to the order
  addProductOrder(product1, qty1, price1);
  addProductOrder(product2, qty2, price2);
  addProductOrder(product3, qty3, price3);
  addProductOrder(product4, qty4, price4);
  addProductOrder(product5, qty5, price5);
  addProductOrder(product6, qty6, price6);

  total.value = `Total: php ${totalPrice.toFixed(2)}`; // Update total input field

  calculateChange(); // Calculate change after updating the total
}

// Function to calculate change when cash amount is entered
function calculateChange() {
  var totalPrice = parseFloat(total.value.replace('Total: php ', ''));
  var cashAmount = parseFloat(cash.value);

  if (!isNaN(totalPrice) && !isNaN(cashAmount)) {
    var changeAmount = cashAmount - totalPrice;

    if (changeAmount >= 0) {
      change.value = `Change: php ${changeAmount.toFixed(2)}`; // Update change input field
    } else {
      change.value = "Insufficient cash provided";
    }
  } else {
    change.value = ""; // Clear change field if inputs are not valid numbers
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
