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

//Likebuttons
var likebuttons=document.querySelectorAll(".like-button")

likebuttons.forEach((btn)=>{
    btn.addEventListener("click",function(e){
        
        
        if(e.target.src.indexOf("blackheart")>0)
        {
            e.target.src="assets/redheart.png"
        }
        else{
            e.target.src="assets/blackheart.png"
        }
    })
})