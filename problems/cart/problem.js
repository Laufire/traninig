// ---------------------------

// Problem 1 - Print the total price for the following items.
// ---------------------------

// Break-up
// Compute final price for an item
  // Get unit price
  // Compute item discount
  // Compute tax on item
  // Compute final price

// Compute the price for a lineItem. Note: Every purchase will have a lineItem in the bill.

// Sum the final price of all the lineItems.

/* Data */
var rates = {
  Carrot: 10,
  Apple: 200,
  Guava: 50,
};

var discounts = {
  // values are in percentages.
  Apple: 10,
};

var taxes = {
  // values are in percentages.
  Carrot: 5,
  Guava: 10,
};

var purchases = [
  {
    item: 'Carrot',
    units: 20,
  },
  {
    item: 'Apple',
    units: 2,
  },
  {
    item: 'Guava',
    units: 1,
  },
];

/* Functions */
var getDiscountPercent = function (productName) {
  
};

var getTaxPercent = function (productName) {
 
};

var getUnitPrice = function (itemName) {
  
};

var getLineItemPrice = function (lineItem) {
  
};

var getSum = function () {
  
};

// Do not change below this line.
/* Main Function */
var main = function main() {
  console.log(getSum());
}

main();