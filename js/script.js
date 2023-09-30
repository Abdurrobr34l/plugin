// javascript

//  wow animation
new WOW().init();

wow = new WOW(
    {
        boxClass: 'wow',      // default
        animateClass: 'animated', // default
        offset: 10,          // default
        mobile: false,       // default
        live: true        // default
    }
)
wow.init();

// aos animation
AOS.init();


// jquery
$(document).ready(function () {

    // counter-up plugin
    $('.counter').counterUp({
        delay: 10,
        time: 10000
    });

    // scroll number
    var scrollNumber0 = new gScrollNumber(".scroll-number-0", {
        width: 50,
        color: "white",
        fontSize: 60,
        autoSizeContainerWidth: true
    });
    var scrollNumber1 = new gScrollNumber(".scroll-number-1", {
        width: 50,
        color: "white",
        fontSize: 60,
        autoSizeContainerWidth: true
    });
    var value0, value1;
    value0 = 0;
    value1 = 0;
    setInterval(function () {
        scrollNumber0.run(value0++);
        scrollNumber1.run(value1 += 1);
    }, 1000);

    //  counter-2
    // $(selector).countMe(delay,speed) it ex the below code
    $("#counter").countMe(40, 65);

    window.onload = () => {
        // $(selector).countMe(delay,speed)
        $("#num1").countMe(40, 65);
        $("#num2").countMe(30, 30);
        $("#num3").countMe(40, 50);
        $("#num4").countMe(100, 200);
    }


})