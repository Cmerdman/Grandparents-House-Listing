var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//thumbnail imgae controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("slides");
   if (n > slides.length) {slideIndex = 1}
   if (n < 1) {slideIndex = slides.length}
   for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
   }
   slides[slideIndex-1].style.display = "block";
} 





//google maps
// Initialize and add the map
function initMap() {
    // The location of Uluru
    const house = { lat: 40.802815, lng: -77.679779 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("maps"), {
      zoom: 17,
      center: house,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: house,
      map: map,
    });
  }
  

    
    