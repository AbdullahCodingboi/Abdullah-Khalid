let btn=document.querySelector("#menu");
let settings=document.querySelector("#settings");
let container=document.querySelector("#container")
let clicked=true;
btn.addEventListener("click",function(){
    
    if(clicked){
        settings.style.transform="translateX(-70px)"
        container.style.transform="translateX(60px)"
}
else{
    settings.style.transform="translateX(0px)"
    container.style.transform="translateX(0px)"
}
    clicked=!clicked;
})