var slideshow=document.querySelector(".slideshow").children;
var prev=document.getElementById("prev");
var next=document.getElementById("next");
var count=0;
var timer=setInterval(auto,5000);

prev.addEventListener("click",function(){
   prevSlide();
   reset();
})

next.addEventListener("click",function(){
  nextSlide(); 
  reset();
})

function prevSlide(){
 if(count==0){
  slideshow[count].className= "slide";
  count=slideshow.length-1;
  slideshow[count].classList.add("current");
 }
 else{
  slideshow[count].className= "slide";
  count--;
  slideshow[count].classList.add("current");
 }
}

function nextSlide(){
  if(count==slideshow.length-1){
    slideshow[count].className= "slide";
    count=0;
    slideshow[count].classList.add("current");
  }
  else{
    slideshow[count].className= "slide";
    count++;
    slideshow[count].classList.add("current");
  }
}

function auto(){
  nextSlide();
}

function reset(){
  clearInterval(timer);
  timer=setInterval(auto,5000);
}

