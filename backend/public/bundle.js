(()=>{"use strict";class e{constructor(e,t,n){this.name=e,this.price=t,this.quantity=n}}class t{addProduct(e){const t=document.getElementById("product_list");let n=document.getElementById("name");localStorage.setItem("name",n.value);const d=document.createElement("div");d.innerHTML=`\n            <div id="row_list">\n               <div class="container_product">\n                   <ul class="lines">\n                       <li><p>Product:</p>  ${e.name}</li>\n                       <li><p>Price:</p>  ${e.price} €</li>\n                       <li><p>Qty:</p>  ${e.quantity} uds</li>\n                   </ul>\n                   <div id="btn_delete">\n                    <a id="delete" type="button" name="delete">Delete</a>\n                    </div>\n               </div>\n            </div>`,t.appendChild(d)}resetForm(){document.getElementById("product-form").reset()}deleteProduct(e){"delete"===e.name&&e.parentElement.parentElement.remove()}}document.getElementById("product-form").addEventListener("submit",(function(n){n.preventDefault();const d=document.getElementById("name").value,l=document.getElementById("price").value,i=document.getElementById("quantity").value,c=new e(d,l,i),o=new t;o.addProduct(c),o.resetForm(),document.getElementById("product_list").addEventListener("click",(e=>{(new t).deleteProduct(e.target),e.preventDefault()}))})),document.getElementById("getJson").addEventListener("click",(function(){fetch("data.json").then((e=>e.json())).then((e=>{let t="<h3>Json List</h3>";e.forEach((e=>{t+=`\n                <ul style="list-style-type: none" >\n                    <li> name: ${e.name}</li>\n                    <li> price: ${e.price}</li>\n                </ul>`})),document.getElementById("showJson").innerHTML=t}))})),alert("works")})();