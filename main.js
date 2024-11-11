let typewriter=document.querySelector(".typewriter");
const phrases=["Awesome Websites","Sleek Designs","Aesthetic pages"];
let currentIndex=0;
function CycleText(){
    typewriter.innerHTML = '';

  // Create a new span element for the current text
  const textSpan = document.createElement('span');
  textSpan.textContent ="I can make " +phrases[currentIndex];
  
  // Add the span to the typewriter element
  typewriter.appendChild(textSpan);

  // Reset the typing animation by clearing and re-applying
  textSpan.style.animation = 'none'; // Reset animation
  textSpan.offsetHeight; // Trigger reflow to reset the animation
  textSpan.style.animation = 'typing 3s steps(' + phrases[currentIndex].length + ') 1 forwards, deleting 3s steps(' + phrases[currentIndex].length + ') 6s forwards';  // Timing adjustments

  // Update the index for the next phrase
  currentIndex = (currentIndex + 1) % phrases.length;

  // Set timeout for cycling text
  setTimeout(CycleText, 8000); // Adjust time interval for each cycle
}
CycleText();

window.onscroll=function(){
  var button=document.querySelector('.scroll-to-top');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}