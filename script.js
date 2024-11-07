
// Sticky navbar
window.onscroll = function() {StickFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function StickFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}



// Shirts 
let count_shirt1 = 0;
let count_shirt2 = 0;
let count_shirt3 = 0;
let count_total = 0;

// Shirt1 
function AddFunctionShirt1() {
  count_shirt1+=1;
  count_total+=1;
  document.getElementById("counter_shirt1").innerHTML = count_shirt1;
  document.getElementById("counter").innerHTML = count_total;
}

function DecreaseFunctionShirt1() {
  count_shirt1-=1;
  count_total-=1;
    if (count_shirt1 < 0){ // Prevent negative integers  
      count_shirt1 = 0;
    }
    if (count_total < 0){ // Prevent negative integers 
      count_total = 0;
    }
  document.getElementById("counter_shirt1").innerHTML = count_shirt1;
  document.getElementById("counter").innerHTML = count_total;
}

// Shirt2
function AddFunctionShirt2() {
  count_shirt2+=1;
  count_total+=1;
  document.getElementById("counter_shirt2").innerHTML = count_shirt2;
  document.getElementById("counter").innerHTML = count_total;
}
  
function DecreaseFunctionShirt2() {
  count_shirt2-=1;
  count_total-=1;
    if (count_shirt2 < 0){ // Prevent negative integers 
      count_shirt2 = 0;
    }
    if (count_total < 0){ // Prevent negative integers 
      count_total = 0;
    }
  document.getElementById("counter_shirt2").innerHTML = count_shirt2;
  document.getElementById("counter").innerHTML = count_total;
}

// Shirt3 
function AddFunctionShirt3() {
  count_shirt3+=1;
  count_total+=1;
  document.getElementById("counter_shirt3").innerHTML = count_shirt3;
  document.getElementById("counter").innerHTML = count_total;
}
  
function DecreaseFunctionShirt3() {
  count_shirt3-=1;
  count_total-=1;
    if (count_shirt3 < 0){ // Prevent negative integers 
      count_shirt3 = 0;
    }
    if (count_total < 0){ // Prevent negative integers 
      count_total = 0;
    }
  document.getElementById("counter_shirt3").innerHTML = count_shirt3;
  document.getElementById("counter").innerHTML = count_total;
}



// Phones 
let count_phone1 = 0;
let count_phone2 = 0;
let count_phone3 = 0;
let count_phone4 = 0;
let count_phone5 = 0;
let count_phone6 = 0;

// Phone1
function AddFunctionPhone1() {
  count_phone1+=1;
  count_total+=1;
  document.getElementById("counter_phone1").innerHTML = count_phone1;
  document.getElementById("counter").innerHTML = count_total;
}
  
function DecreaseFunctionPhone1() {
  count_phone1-=1;
  count_total-=1;
    if (count_phone1 < 0){ // Prevent negative integers
      count_phone1 = 0;
    }
    if (count_total < 0){ // Prevent negative integers 
      count_total = 0;
    }
  document.getElementById("counter_phone1").innerHTML = count_phone1;
  document.getElementById("counter").innerHTML = count_total;
}

// Phone2 
function AddFunctionPhone2() {
  count_phone2+=1;
  count_total+=1;
  document.getElementById("counter_phone2").innerHTML = count_phone2;
  document.getElementById("counter").innerHTML = count_total;
}
  
function DecreaseFunctionPhone2() {
  count_phone2-=1;
  count_total-=1;
    if (count_phone2 < 0){ // Prevent negative integers 
      count_phone2 = 0;
    }
    if (count_total < 0){ // Prevent negative integers 
      count_total = 0;
    }
  document.getElementById("counter_phone2").innerHTML = count_phone2;
  document.getElementById("counter").innerHTML = count_total;
}

// Phone3 
function AddFunctionPhone3() {
  count_phone3+=1;
  count_total+=1;
  document.getElementById("counter_phone3").innerHTML = count_phone3;
  document.getElementById("counter").innerHTML = count_total;
}
  
function DecreaseFunctionPhone3() {
  count_phone3-=1;
  count_total-=1;
    if (count_phone3 < 0){ // Prevent negative integers 
      count_phone3 = 0;
    }
    if (count_total < 0){ // Prevent negative integers
      count_total = 0;
    }
  document.getElementById("counter_phone3").innerHTML = count_phone3;
  document.getElementById("counter").innerHTML = count_total;
}

// Phone4 
function AddFunctionPhone4() {
  count_phone4+=1;
  count_total+=1;
  document.getElementById("counter_phone4").innerHTML = count_phone4;
  document.getElementById("counter").innerHTML = count_total;
}
  
function DecreaseFunctionPhone4() {
  count_phone4-=1;
  count_total-=1;
    if (count_phone4 < 0){ // Prevent negative integers 
      count_phone4 = 0;
    }
    if (count_total < 0){ // Prevent negative integers
      count_total = 0;
    }
  document.getElementById("counter_phone4").innerHTML = count_phone4;
  document.getElementById("counter").innerHTML = count_total;
}

// Phone5 
function AddFunctionPhone5() {
  count_phone5+=1;
  count_total+=1;
  document.getElementById("counter_phone5").innerHTML = count_phone5;
  document.getElementById("counter").innerHTML = count_total;
}
  
function DecreaseFunctionPhone5() {
  count_phone5-=1;
  count_total-=1;
    if (count_phone5 < 0){ // Prevent negative integers 
      count_phone5 = 0;
    }
    if (count_total < 0){ // Prevent negative integers 
      count_total = 0;
    }
  document.getElementById("counter_phone5").innerHTML = count_phone5;
  document.getElementById("counter").innerHTML = count_total;
}

// Phone6
function AddFunctionPhone6() {
  count_phone6+=1;
  count_total+=1;
  document.getElementById("counter_phone6").innerHTML = count_phone6;
  document.getElementById("counter").innerHTML = count_total;
}
  
function DecreaseFunctionPhone6() {
  count_phone6-=1;
  count_total-=1;
    if (count_phone6 < 0){ // Prevent negative integers 
      count_phone6 = 0;
    }
    if (count_total < 0){ // Prevent negative integers
      count_total = 0;
    }
  document.getElementById("counter_phone6").innerHTML = count_phone6;
  document.getElementById("counter").innerHTML = count_total;
}



// Watches 
let count_watch1 = 0;
let count_watch2 = 0;
let count_watch3 = 0;
let count_watch4 = 0;
let count_watch5 = 0;
let count_watch6 = 0;

// Watch1 
function AddFunctionWatch1() {
  count_watch1+=1;
  count_total+=1;
  document.getElementById("counter_watch1").innerHTML = count_watch1;
  document.getElementById("counter").innerHTML = count_total;
}
  
function DecreaseFunctionWatch1() {
  count_watch1-=1;
  count_total-=1;
    if (count_watch1 < 0){ // Prevent negative integers 
      count_watch1 = 0;
    }
    if (count_total < 0){ // Prevent negative integers 
      count_total = 0;
    }
  document.getElementById("counter_watch1").innerHTML = count_watch1;
  document.getElementById("counter").innerHTML = count_total;
}

// Watch2 
function AddFunctionWatch2() {
  count_watch2+=1;
  count_total+=1;
  document.getElementById("counter_watch2").innerHTML = count_watch2;
  document.getElementById("counter").innerHTML = count_total;
}
  
function DecreaseFunctionWatch2() {
  count_watch2-=1;
  count_total-=1;
    if (count_watch2 < 0){ // Prevent negative integers 
      count_watch2 = 0;
    }
    if (count_total < 0){ // Prevent negative integers 
      count_total = 0;
    }
  document.getElementById("counter_watch2").innerHTML = count_watch2;
  document.getElementById("counter").innerHTML = count_total;
}

// Watch3 
function AddFunctionWatch3() {
  count_watch3+=1;
  count_total+=1;
  document.getElementById("counter_watch3").innerHTML = count_watch3;
  document.getElementById("counter").innerHTML = count_total;
}
  
function DecreaseFunctionWatch3() {
  count_watch3-=1;
  count_total-=1;
    if (count_watch3 < 0){ // Prevent negative integers 
      count_watch3 = 0;
    }
    if (count_total < 0){ // Prevent negative integers
      count_total = 0;
    }
  document.getElementById("counter_watch3").innerHTML = count_watch3;
  document.getElementById("counter").innerHTML = count_total;
}

// Watch4 
function AddFunctionWatch4() {
  count_watch4+=1;
  count_total+=1;
  document.getElementById("counter_watch4").innerHTML = count_watch4;
  document.getElementById("counter").innerHTML = count_total;
}
  
function DecreaseFunctionWatch4() {
  count_watch4-=1;
  count_total-=1;
    if (count_watch4 < 0){ // Prevent negative integers 
      count_watch4 = 0;
    }
    if (count_total < 0){ // Prevent negative integers 
      count_total = 0;
    }
  document.getElementById("counter_watch4").innerHTML = count_watch4;
  document.getElementById("counter").innerHTML = count_total;
}

// Watch5 
function AddFunctionWatch5() {
  count_watch5+=1;
  count_total+=1;
  document.getElementById("counter_watch5").innerHTML = count_watch5;
  document.getElementById("counter").innerHTML = count_total;
}
  
function DecreaseFunctionWatch5() {
  count_watch5-=1;
  count_total-=1;
    if (count_watch5 < 0){ // Prevent negative integers 
      count_watch5 = 0;
    }
    if (count_total < 0){ // Prevent negative integers
      count_total = 0;
    }
  document.getElementById("counter_watch5").innerHTML = count_watch5;
  document.getElementById("counter").innerHTML = count_total;
}

// Watch6 
function AddFunctionWatch6() {
  count_watch6+=1;
  count_total+=1;
  document.getElementById("counter_watch6").innerHTML = count_watch6;
  document.getElementById("counter").innerHTML = count_total;
}
  
function DecreaseFunctionWatch6() {
  count_watch6-=1;
  count_total-=1;
    if (count_watch6 < 0){ // Prevent negative integers
      count_watch6 = 0;
    }
    if (count_total < 0){ // Prevent negative integers
      count_total = 0;
    }
  document.getElementById("counter_watch6").innerHTML = count_watch6;
  document.getElementById("counter").innerHTML = count_total;
}



// Slides 
let slideIndex = 1;
showSlides(slideIndex);

// Next / previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("demo");
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
