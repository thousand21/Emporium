$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


////////////////////////
let allDiv3=document.getElementsByClassName("div3");
let tabAllDiv3=Array.from(allDiv3);
let tripleCarte=document.getElementsByClassName("tripleCarte")[0];

tripleCarte.addEventListener("click",(e)=>{
    console.log(e.target);
    if(e.target.getAttribute("class")==("div3")||("silver")){
        e.target.style.backgroundColor="  rgb(221, 69, 69)";
        e.target.style.color="white";
    }
})
///////////////////////////////////bouton noir et blanc
let body=document.getElementsByTagName("body")[0];
let btnNoir=document.getElementsByClassName("noir")[0];
btnNoir.addEventListener("click",()=>{
body.removeAttribute("style");
body.style.backgroundColor="black";
})
let btnBlanc=document.getElementsByClassName("blanc")[0];
btnBlanc.addEventListener("click",()=>{
    body.removeAttribute("style");
    body.style.backgroundColor="white";
    })