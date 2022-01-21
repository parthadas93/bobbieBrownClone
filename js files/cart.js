
import { navbar, footer } from "/component/navbar.js"

var nav_container = document.getElementById("nav_container")

nav_container.innerHTML = navbar()
console.log(nav_container)

var cart = JSON.parse(localStorage.getItem("cartitems")) || []
console.log(cart)

window.addEventListener("load", (event)=>{
    displayfn(cart)
})

function  displayfn(cart){
    var cart = JSON.parse(localStorage.getItem("cartitems")) || [] 
    var show_item = document.getElementById("show_proucts_div")
    var item_image= document.getElementById("product_img")
    var item_name = document.getElementById("product_name")
    var item_price = document.getElementById("product_price")
    var sub_total = document.getElementById("sub_total_price")
    var estimated_value = document.getElementById("add_charge")

    // var saved_item_div = document.getElementById("saved_item_div")
    // var remove_item = document.getElementById("remove_div")

cart.forEach((element) => {
    var name = document.createElement("h1")
    name.textContent=element.name

    var image = document.createElement("img")
    image.src=element.image

    var price = document.createElement("h1")
    price.textContent = (element.price)
    
    var br = document.createElement("br")

    var remove = document.createElement("p")
    remove.innerText= "remove item"

    item_image.append(image)

    item_name.append(name)

    item_price.append(price)

    

    show_item.append(item_image, item_name, item_price,br)
    console.log(element)
    
});
    var totalamount=cart.reduce(function(acc,cv) {
    return acc+Number(cv.price);        
   },0)
    var estimated_total = ("$" + Number(50 + totalamount))
    console.log(estimated_total)
   sub_total.append(totalamount+""+'.00')
   estimated_value.append(estimated_total+""+'.00')
}



// var totalamount=cart.reduce(function(acc,cv) {
//     return acc+Number(cv.price);        
//    },0)