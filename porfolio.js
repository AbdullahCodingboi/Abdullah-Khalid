// let p1=document.querySelector("#project1");
// fetch("clock.html")
// .then(response=> response.text)
// .then(data=>{
//     document.querySelector("#project1").innerHTML = data;
// })
function reloadIframe() {
    const iframe = document.getElementById('myIframe');
    iframe.src = iframe.src;  }