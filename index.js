// Ensure the DOM content is fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function() {
  // Selecting elements from the DOM
  var qty1 = document.getElementById("qty1");
  var qty2 = document.getElementById("qty2");
  var price1 = document.getElementById("price1");
  var price2 = document.getElementById("price2");
  var total = document.getElementById("total");
  var cash = document.getElementById("cash");
  var change = document.getElementById("change");

  // Function to update total and display orders
  function updateOrder() {
    var qty1Val = parseFloat(qty1.value);
    var qty2Val = parseFloat(qty2.value);
    var price1Val = parseFloat(price1.textContent);
    var price2Val = parseFloat(price2.textContent);

    // Calculate total
    var totalPrice = (qty1Val * price1Val) + (qty2Val * price2Val);
    total.value = "Total: php " + totalPrice.toFixed(2);

    // Calculate change if cash is provided
    if (!isNaN(qty1Val) && !isNaN(qty2Val) && !isNaN(price1Val) && !isNaN(price2Val)) {
      var cashAmount = parseFloat(cash.value);
      var changeAmount = cashAmount - totalPrice;
      change.value = "Change: php " + changeAmount.toFixed(2);
    } else {
      change.value = "Enter valid quantities and cash amount";
    }
  }

  // Event listeners for input changes
  qty1.addEventListener("keyup", updateOrder);
  qty2.addEventListener("keyup", updateOrder);
  cash.addEventListener("keyup", updateOrder);
});
