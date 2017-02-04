/**
 * Created by Aphel on 23.01.2017.
 */
function init () {

    // slider autochanger
    var radioInputs = document.querySelectorAll(".slider input[type=radio]");
    var radioInputsCount = radioInputs.length;
    var counter = 1;
    setInterval(function(){
        if (counter % radioInputsCount == 0)
        {
            counter = 0;
        }
        radioInputs.item(counter).click();
        counter++;
    }, 10000);
    // slider autochanger ENDS

    // smooth scroll
    $(function() {
        var $page = $('html, body');
        $('a[href*="#"]').click(function() {
            $page.animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);
            return false;
        });
    });
    // smooth scroll ENDS
}

window.addEventListener("load", init, false);