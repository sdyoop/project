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

// Progress bars
jQuery(document).ready(function(){
  
  jQuery('.progress-bar').each(function() {
    jQuery(this).find('.progress-content').animate({
      width:jQuery(this).attr('data-percentage')
    },2000);
    
    jQuery(this).find('.progress-number-mark').animate(
      {left:jQuery(this).attr('data-percentage')},
      {duration: 2000,
      step: function(now, fx) {
      var data = Math.round(now);
      jQuery(this).find('.percent')
      .html(data + '%');}
    });  
  });
});

