import {products} from "./products.js";

// offerbar

var offerBar=document.querySelector(".ad__bar")
document.getElementById("offer-close").addEventListener("click",function(){
    offerBar.style.display="none"
})

// Sidebar

var sideMenu=document.getElementById("side-navbar-activate")
var sideNavbar=document.querySelector(".side-navbar")
var sideNavbarclose=document.getElementById("side-navbar-close")
sideMenu.addEventListener("click",function(){
    sideNavbar.style.marginLeft="0px"
})
sideNavbarclose.addEventListener("click",function(){
    sideNavbar.style.marginLeft="-60%"
})

    
   



var container=document.querySelector(".products")
products.forEach((product)=>{
    var createItem = document.createElement("div")
    createItem.classList.add("product")
    createItem.innerHTML=` <img style="width: 20vw;" src="assets/${product.src}">
    <h1>${product.name}</h1>
    <p>$${product.price}</p>
    <tags style="visibility:hidden;">${product.tags}</tags>`

    container.append(createItem)
})

var filterList =[]
var tags = document.getElementsByName("tags")
console.log(tags)

tags.forEach((tag)=>{
    tag.addEventListener("change",(e)=>{

        if(e.target.checked)
        {
        filterList.push(e.target.value)
        console.log(filterList)
        update()
        
        }
        else{
            filterList = filterList.filter(item => item !== e.target.value);
            update()

        }

        
       
    })
})



function update()
{

    var productList = document.querySelectorAll(".product")
    for(var i=0;i<productList.length;i++){
        var check = false
        var product=productList[i]
        console.log(product)
        var temp=product.querySelector("tags").innerHTML
       
        console.log("elemen"+temp)
        

        const tempFilterArray = temp.split(',');
        
        console.log("tempfilterarray"+tempFilterArray)
        console.log("filterlist"+filterList)
       
            filterList.forEach((j)=>{
                tempFilterArray.forEach((i)=>{
                if(j==i)
                {
                    check=true
                }
            })
        })


        if(!check && filterList.length>0)
        {
            product.style.display="none"
        }
        else{
            product.style.display="block"
        }

        
    };


}