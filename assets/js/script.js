import { productsData } from "data.js";

let sectionHtml=``
let targetedObject=[]


'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}



/**
 * add active class on header when scrolled 200px from top
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 200 ? header.classList.add("active")
    : header.classList.remove("active");
})


/*adding html content to shop page*/

/*
document.addEventListener('click', function(e){
  if(e.target.dataset.click){
     handleClick(e.target.dataset.click) 
  }})
  */

/*image click function*/
/*
  function handleClick(clickId){
     const targetProductObj = productData.filter(function(clickId){
       return  products.productCode === clickId
   })[0*/
 


/*call pop-up product window function here*/

/*
  function getFeedHtml(){
  
 setSectionHtml += ` <section id=${id}>

                     <h2 class="h2 section-title">${Title}</h2>

                     <ul class="product-list">
                     ${setProductHtml}
                     </ul>
                     </section>`





 setProductHtml=
               `<li>
               <div class="product-card">

                 <figure class="card-banner" data-click = "${selectedProduct.productId}">

                   <a href="#">
                     <img src=${productImg} alt=${productAlt} loading="lazy" width="800"
                       height="1034" class="w-100">
                   </a>
                 </figure>

                 <div class="card-content">
                  <h3 class="h4 card-title" data-click = "${selectedProduct.productCode}">
                    <a href="#">${productTitle}</a>
                   </h3>
               </div>
             </li>`
  
              return feedHtml
  }




function render(){
  document.getElementById('test').innerHTML = `<p>test paragraph from js file</p>`
}

render()*/



document.addEventListener('click', function(element){
     
    if(element.target.dataset.click){
          handleClick(element.target.dataset.click) 
          /*adding html content to shop page*/
          document.getElementById('javaScript').innerHTML=`
                  <div class="window-container">
                  <button class="close-btn" id="close-btn" data-close='close-button'> x </button>
                     <div id="product-window">
                         <img class="window-img"  src=${targetedObject.productImg}>
                         <div class="">
                             <h3 id="window-product-title">${targetedObject.productTitle}</h3>
                             <h5 id="window-product-code">Product Code: ${targetedObject.productCode}</h5>
                             <p id="window-product-description"></p>
                         </div>
                     </div>
                   </div>`
    }
  else if(element.target.dataset.close){
      render()
  }})


  
  /*image click function*/
  
    function handleClick(clickId){

        for(let i=0 ; i < productsData.length ; i++)
        {
          let TragetedArray = productsData[i].Products
              for(let j=0 ; j < TragetedArray.length ; j++)
              { 
                if(TragetedArray[j].productCode === clickId){
                  targetedObject = TragetedArray[j] 
                  }
                
              }
        }}
        



  
  function getFeedHtml(){
    let feedHtml=``
    for(let i=0 ; i < productsData.length ; i++)
        {
          feedHtml += ` <section id=${productsData[i].id}>
                            <h2 class="h2 section-title">${productsData[i].Title}</h2>
      
                            <ul class="product-list">
                                ${setProductHtml(productsData[i].Products)}
                            </ul>
                        </section>`
        }


function setProductHtml(CurrentProduct) 
          {
            let productHtml=``
            for(let j=0 ; j < CurrentProduct.length ; j++ ) 
                {
                  productHtml+=
                   `<li>
                      <div class="product-card">

                        <figure class="card-banner">

                          <a href="#">
                              <img  data-click = "${CurrentProduct[j].productCode}"   src=${CurrentProduct[j].productImg} alt=${CurrentProduct[j].productAlt} loading="lazy" width="800"
                              height="1034" class="w-100">
                          </a>
                        </figure>

                        <div class="card-content">
                          <h3 class="h4 card-title">
                            <a href="#"  data-click = "${CurrentProduct[j].productCode}">${CurrentProduct[j].productTitle}</a>
                          </h3>
                        </div>
                      </div>
                    </li>`
                }
                return productHtml
          }

return feedHtml
}



function render()

{ 
  document.getElementById('javaScript').innerHTML = getFeedHtml()
}
render()
