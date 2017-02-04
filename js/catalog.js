/**
 * Created by Aphel on 01.02.2017.
 */
function init () {
    // range slider on catalog page
    var minValue = document.querySelector("#price-min");
    var maxValue = document.querySelector("#price-max");

    minValue.addEventListener ('keydown', function (event) {
        if(event.keyCode === 13) {
            var valueString = minValue.value + "," + maxValue.value;
            $('.range-slider').jRange('setValue', valueString);
        }
    }, false);

    maxValue.addEventListener ('keydown', function (event) {
        if(event.keyCode === 13) {
            var valueString = minValue.value + "," + maxValue.value;
            $('.range-slider').jRange('setValue', valueString);
        }
    }, false);
    $('.range-slider').jRange({
        from: 0,
        to: 50000,
        step: 100,
        showLabels : false,
        showScale : false,
        width : "100%",
        theme : 'theme-green',
        scale: [1,25,50,75,100],
        isRange : true,
        onstatechange: function () {

            var values = this.getValue().split(',');
            minValue.value = Number(values[0]);
            maxValue.value = Number(values[1]);
        }
    });
// range slider on catalog page ENDS
}

window.addEventListener('load', init, false);