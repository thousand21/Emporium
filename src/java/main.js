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
body.style.color="white";
})
let btnBlanc=document.getElementsByClassName("blanc")[0];
btnBlanc.addEventListener("click",()=>{
    body.removeAttribute("style");
    body.style.backgroundColor="white";
    body.style.color="black";
    })

    ///////////////////////
    let pancarteGris=document.getElementsByClassName("grossePancarteGrise")[0];
    let divGris=document.getElementsByClassName("ensembleGris")[0];
    let btnConnexion=document.getElementsByClassName("connexion")[0];
    let formInscription=document.getElementsByClassName("inscription")[0];
    let formConnection=document.getElementsByClassName("formConnection")[0];
    let formCache=document.getElementsByClassName("formulaireCache")[0];
    btnConnexion.addEventListener("click",()=>{
       
        formCache.classList.remove("formulaireCache");
        
        formInscription.classList.remove("inscription");
       
        body.classList.toggle("opacity");
       
        
        pancarteGris.classList.toggle("opacity");
    })

    ///////////////////////////////////
    
    let btnformConnection=document.getElementsByClassName("btnFormConnection")[0];
    let btnInscription=document.getElementsByClassName("btnFormInscription")[0];
    btnformConnection.addEventListener("click",()=>{
        formInscription.classList.add("inscription");
        formConnection.classList.remove("formConnection");

    })
    btnInscription.addEventListener("click",()=>{
        formInscription.classList.remove("inscription");
        formConnection.classList.add("formConnection");
        console.log("8");
    })

    ///////////////////croix fermer formulaire
    let croix1=document.getElementsByTagName("i")[0];
    let croix2=document.getElementsByTagName("i")[5];
    croix1.addEventListener("click",()=>{
        formCache.classList.add("formulaireCache");
        formInscription.classList.add("inscription");
        formConnection.classList.add("formConnection");
        body.classList.remove("opacity");
       
        
        pancarteGris.classList.remove("opacity");
    })
    croix2.addEventListener("click",()=>{
        formCache.classList.add("formulaireCache");
        formInscription.classList.add("inscription");
        formConnection.classList.add("formConnection");
        body.classList.remove("opacity");
       
        
        pancarteGris.classList.remove("opacity");
    })