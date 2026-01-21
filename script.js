let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


AOS.init();
AOS.init({
  offset: 200,
  duration: 600,
  easing: 'ease-in-sine',
  delay: 100,
});





// const dismissBtn = document.getElementById("dismissBtn");
const changeBtn = document.getElementById("chnageBtn");

// function locateDiv(){
//   if 
// }

document.getElementById("dismissBtn").addEventListener("click", locateDiv);

function locateDiv(){
  style.display = "none"
  document.getElementById("p2").style.color = "blue";
}
document.getElementById("dismissBtn").style.display = "none"




  // document.getElementById(id).style.property= new style
  // document.getElementById(id).style.property= new style


dismissBtn.addEventListener("click", function hideDiv (){

  const dismissBtn = document.getElementById ("dismissBtn")
  // const divToHide = document.getElementById('myDiv');
            
            // Set the CSS display property to 'none' to hide it
            dismissBtn.style.display = 'none';

})