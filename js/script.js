/**
 * Created by Aphel on 23.01.2017.
 */
function init () {
    var writeButton = document.querySelector(".map_writeUsButton");
    var closeButton = document.querySelector(".send-form__btn-reset");
    closeButton.addEventListener("click", closeSendForm, false);
    writeButton.addEventListener("click", showSendForm, false);
    window.addEventListener("keydown", closeSendFormByESC, false);
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
    // slider autochanger ends
}

function showSendForm(event) {
    event.preventDefault();
    var sendForm = document.querySelector(".send-form");
    var firstField = sendForm.querySelector("#name");
    sendForm.classList.add("send-form_visible");
    firstField.focus();
}

function closeSendForm() {
    var sendForm = document.querySelector(".send-form");
    sendForm.classList.add("send-form_fadeout");
    setTimeout(function() {sendForm.classList.remove("send-form_visible"); sendForm.classList.remove("send-form_fadeout")}, 300);

}

function closeSendFormByESC (event) {
    var sendForm = document.querySelector(".send-form");
    if(event.keyCode === 27 && sendForm.classList.contains("send-form_visible")) {
        sendForm.classList.remove("send-form_visible");
    }
}

window.addEventListener("load", init, false);