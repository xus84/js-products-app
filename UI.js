import { product } from "./Product";

const addProduct = ( ) => {
    
        const productList = document.getElementById("product_list");
        const element = document.createElement('div'); 
        element.innerHTML = `
            <div id="row_list">
               <div class="container_product">
                   <ul class="lines">
                       <li><p>Product:</p>  ${product.name}</li>
                       <li><p>Price:</p>  ${product.price} €</li>
                       <li><p>Qty:</p>  ${product.quantity} uds</li>
                   </ul>
                   <div id="btn_delete">
                    <a id="delete" type="button" name="delete">Delete</a>
                    </div>
               </div>
            </div>`;
        productList.appendChild(element);


}

export default addProduct;


 
        
