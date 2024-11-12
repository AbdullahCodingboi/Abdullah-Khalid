let hour_hand=document.querySelector("#hour")
let minute_hand=document.querySelector("#minute")
let second_hand=document.querySelector("#second")
function ChangeTime(){
    let Time= new Date();
    let seconds=Time.getSeconds()
    let minutes=Time.getMinutes()
    let hours=Time.getHours()

    let secondsDeg=((seconds*6))
    let minutesDeg=((minutes*6))
    let hoursDeg=30 * (hours % 12) + 0.5 * minutes

    hour_hand.style.transform=` rotate(${hoursDeg}deg)`
    minute_hand.style.transform=`rotate(${minutesDeg}deg)`
    second_hand.style.transform=`rotate(${secondsDeg}deg)`
}
setInterval(ChangeTime,1000)
ChangeTime()