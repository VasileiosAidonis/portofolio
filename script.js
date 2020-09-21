var progressMeter = document.querySelectorAll(".progressbar span");
    var progressNumber = document.querySelectorAll('.progressbar span.bar_html .progressbar span.bar_css .progressbar span.bar_javascript .progressbar span.bar_php');
    var progressNumberWidths = [84,75,62,68];
    var moveTimers = [];
    var width = 0;

    /**
    * AddEventListener at specific point
    */
    var runOnce = true;
    $(window).scroll(function (){
        if (($(window).scrollTop() >= 1500 && $(window).scrollTop() < 2100) && runOnce){
            window.addEventListener("scroll",progressNumberAdd);
            runOnce = false;
        }
    });

    function progressNumberAdd() {
        if (window.pageYOffset > (progressMeter[0].offsetTop - 600)){
            window.removeEventListener("scroll", progressNumberAdd);
            initProgressBar();
        }
    }


    function initProgressBar() {
      for(var i = 0; i < progressMeter.length; i++){
        x(i);
      }
    }

    function x(i) {
        moveTimers[i] = setInterval(numberAddCheker, 70, i);
    }


    function numberAddCheker(i) {
        if(width >= progressNumberWidths[i]) {
            clearInterval(moveTimers[i])
        } else {
            width++;
            progressMeter[i].style.width = width + "%";

            document.getElementById('html-value-html').innerHTML = width + "%";
            if (width <= progressNumberWidths[1]) {
               document.getElementById('html-value-css').innerHTML = width + "%";
            }
            if (width <= progressNumberWidths[2]) {
               document.getElementById('html-value-javascript').innerHTML = width + "%";
            }
            if (width <= progressNumberWidths[3]) {
               document.getElementById('html-value-php').innerHTML = width + "%";
            }
        }
    }
