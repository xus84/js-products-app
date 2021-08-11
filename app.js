import { Product } from "./Product.js";
import { UI } from "./UI.js";

document
    .getElementById("product-form")
    .addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value,
        price = document.getElementById("price").value,
        quantity = document.getElementById("quantity").value;

        const product = new Product(name, price, quantity);

        const ui = new UI();

        ui.addProduct(product);
        ui.resetForm();

        document.getElementById("product_list").addEventListener("click" , (e) => {
           const ui = new UI();
           ui.deleteProduct(e.target);
           e.preventDefault() 
        })
    })
   

