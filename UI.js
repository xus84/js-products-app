export class UI {
    addProduct(product) {
        const productList = document.getElementById("product-form");
        const element = document.createElement('div'); 
        element.innerHTML = `
            <div id="row_list">
               <div class="container_product">
                   <ul class="lines">
                       <li>Product:${product.name}</li>
                       <li>Price:${product.price}€</li>
                       <li>Qty:${product.quantity}uds</li>
                   </ul>
               </div>
            </div>`;
        productList.appendChild(element);
        
    }

}


 
        
