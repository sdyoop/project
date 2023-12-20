var swiper = new Swiper(".mySwiper", {
  speed: 600,
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function openDs(evt, dsName) {
  var i, dstabcontent, dstablinks;
  dstabcontent = document.getElementsByClassName("dstabcontent");
  for (i = 0; i < dstabcontent.length; i++) {
    dstabcontent[i].style.display = "none";
  }
  dstablinks = document.getElementsByClassName("dstablinks");
  for (i = 0; i < dstablinks.length; i++) {
    dstablinks[i].className = dstablinks[i].className.replace(" active", "");
  }
  document.getElementById(dsName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// project//
function openPj(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("htabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("htablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

(function( $ ) {
  "use strict";
  $(function() {
      function animated_contents() {
          $(".zt-skill-bar > div ").each(function (i) {
              var $this  = $(this),
                  skills = $this.data('width');

              $this.css({'width' : skills + '%'});

          });
      }
      
      if(jQuery().appear) {
          $('.zt-skill-bar').appear().on('appear', function() {
              animated_contents();
          });
      } else {
          animated_contents();
      }
  });
}(jQuery));