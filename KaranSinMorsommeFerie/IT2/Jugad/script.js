var ok = 1
    function playPause(){
        if(ok==1){
        document.getElementById("video1").play();
        ok=2;
        }else{
        document.getElementById("video1").pause();
        ok=1;
      }
    }

    function makeBig(){
    document.getElementById("video1").style="width:600px";
    }

    function makeSmall(){
    document.getElementById("video1").style="width:200px";
    }

    function makeNormal(){
    document.getElementById("video1").style="width:420px";

  }


  document.getElementById("topbutton");
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
  topbutton.style.display = "block";
} else {
  topbutton.style.display = "none";
}
}

  function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

  }

  var tekst = 1
  function MakeTekst(){
    if(tekst == 1){
  document.getElementById("button_1-tekst").innerHTML="Du er ikke kul";
  tekst = 0;
}else{
  document.getElementById("button_1-tekst").innerHTML="";
  tekst = 1;
}
  }

  var slideIndex = 0;
  showSlides();

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
  }

/*

  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('topbox').addClass('shrink')
    };
    else {
      ($('topbox').removeClass('shrink')
    }
});
*/
