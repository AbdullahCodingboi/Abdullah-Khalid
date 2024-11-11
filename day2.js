let line1=document.querySelector("#line-one");
let line2=document.querySelector("#line-two");
let line3=document.querySelector("#line-three");
let button=document.querySelector("#btn");
let clicked=true
button.addEventListener("click",function(){
    if(clicked){
   
    line1.style.transform='translateY(10px) rotate(45deg)'
    
    line1.style.transition = 'transform 1s ease';
   

    line3.style.transform='translateY(-30px) rotate(-45deg)'
   
    line3.style.transition = 'transform 1s ease';


    line2.style.width = '0';  
    line2.style.opacity = '0'; 
}
else{
    line1.style.transform='translateY(0px) rotate(0deg)'
    line1.style.transition = 'transform 1s ease';
    line3.style.transform='translateY(0px) rotate(0deg)'
    line3.style.transition = 'transform 1s ease';
    line2.style.width = '100px';  
    line2.style.opacity = '1'; 
}
clicked = !clicked; 
})
