"use strict";

(function () {

    function Product(name, price, expirationYear) {
        this.id = function () {
            return String((Math.round((99999 - 1) * Math.random() + 1))).padStart(5, '0');  //String() and .padStart(5, "0") function serves to change number to string and then use padStart to add leading zeros if a number has less than 5 digits
        };
        this.name = name;
        this.price = price.toFixed(2);
        this.expirationYear = expirationYear;
        this.getInfo = function () {
            var short = "";
            short = (this.name[0] + this.name.charAt(this.name.length - 1)).toUpperCase();
            return short + this.id() + ", " + this.name + ", " + this.price;
        }
    }

    function ShoppingBag() {

        this.date = new Date();

        this.currentYear = this.date.getFullYear();
        this.listOfProducts = [];

        this.addProduct = function (product) {
            if (this.currentYear <= product.expirationYear) {
                this.listOfProducts.push(product);
            }
            return this.listOfProducts;
        }

        this.getTotalPrice = function () {
            var sum = 0;
            this.listOfProducts.forEach(function (element) {
                sum += parseFloat(element.price);
            });
            return sum.toFixed(2);
        }

        this.getAveragePrice = function () {
            return (this.getTotalPrice() / this.listOfProducts.length).toFixed(3);
        }

        this.getMostExpensive = function () {
            var mostExpensivePrice = 0;
            var mostExpensiveProduct;

            this.listOfProducts.forEach(function (element) {
                if (parseFloat(element.price) > mostExpensivePrice) {
                    mostExpensivePrice = parseFloat(element.price);
                    mostExpensiveProduct = element.name;
                }
            })
            return "The most expensive product is: " + mostExpensiveProduct + ", and its price is: " + mostExpensivePrice;
        }
        //or like this vvv
        /* this.getMostExpensive = function () {
            var highestPrice = Math.max.apply(null, this.listOfProducts.map(element => element.price));
            var mostExpensiveProduct = this.listOfProducts.find(element => element.price == highestPrice);
            return mostExpensiveProduct;
        } */

    };

    function PaymentCard(accountBallance, status, validity) {
        this.accountBallance = accountBallance.toFixed(2);
        this.status = status;
        this.validity = validity;
    }

    function checkoutAndBuy(shoppingBag, paymentCard) {
        if (shoppingBag.getTotalPrice() <= parseFloat(paymentCard.accountBallance)) {   //we have to parseFloat this because it sees it as STRING
            return "Purchase is successful";
        } else {
            return "There is not enough money. The missing ammount is: " + (shoppingBag.getTotalPrice() - paymentCard.accountBallance);
        }
    }


    try {

        var shoppingBag1 = new ShoppingBag();

        var product1 = new Product("Bannana", 130, "2022.");
        var product2 = new Product("Apple", 230, "2024.");
        var product3 = new Product("Pear", 330, "2023.");
        var paymentCard1 = new PaymentCard(3000, "active", "valid");

        shoppingBag1.addProduct(product1);
        shoppingBag1.addProduct(product2);
        shoppingBag1.addProduct(product3);

        console.log(shoppingBag1.listOfProducts);
        console.log(shoppingBag1.listOfProducts[0].price);
        console.log(shoppingBag1.getTotalPrice());
        console.log(shoppingBag1.getAveragePrice());
        console.log(shoppingBag1.getMostExpensive());

        console.log(checkoutAndBuy(shoppingBag1, paymentCard1));

    } catch (error) {
        console.log("Error message: " + error.message);
    }

})();

/*
        Assignment Shopping List

        In your IDE of choice, create a new JavaScript file named shopping.js and make it so that all
code written in the file follows strict mode.
Create an anonymous immediately-invoking function that will hold the main execution of all
program calls. Writing a simple command console.log(“Hi”) inside this function and running
the code should output “Hi“ in the console.
Create constructor functions with properties representing the following “things”:
● Product - product id (random number of 5 digits generated on every product creation),
name, price (with 2 decimal places), expiration date
● ShoppingBag - a list of products (initially empty; function constructor does not have any
input parameters)
Add getInfo method to Product. It should return a formatted string containing product code
(the first and last letter of the name together with the product id), name and price.
"Banana" -> BA32784, Banana, 129.31
Add addProduct method to ShoppingBag. It should receive a Product and add it to the
product list. You can add a product to the list only if it has a valid expiration date.
Add a method to ShoppingBag that calculates the average product price of products in your
product list and prints out this value with the precision of three decimals.
Add getMostExpensive method that finds the most expensive product and prints out its info.
Add calculateTotalPrice method to ShoppingBag that calculates the total price of products
in the shopping bag list.
Create a constructor function with properties representing the following:
● PaymentCard - account balance (number with 2 decimal places), active or inactive status,
valid until date
Create checkoutAndBuy function which receives shopping bag and payment card and prints if
the purchase is successful or not. Purchase is successful only if the amount on the card is greater
or equal to the total price of products in the shopping bag. If there is not enough money, print out
the amount that is missing to complete the purchase.
*/