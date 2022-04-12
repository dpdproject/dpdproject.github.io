$(document).ready(function(){

    $("a").on('click', function(event) {

      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  });

function displayTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();

    document.getElementById('time').innerHTML = time;
}

const clock = setInterval(displayTime, 1000);