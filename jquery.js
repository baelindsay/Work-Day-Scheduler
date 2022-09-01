// Demonstration of today's date, day, & current time
var Today = moment().format("ddd MMM Do, YYYY, hh:mm");
$('#currentDay').text(Today);


$(document).ready(function () {
    // savePaw on click listener 
    $(".savePaw").on("click", function () {
        // Retrieve closeby data of the elucidation section in JQuery
        var text = $(this).siblings(".elucidation").val();
        var time = $(this).parent().attr("id");
        // save text data in local storage !
        localStorage.setItem(time,text);
    })


    function trackTime() {
        // obtain current number of hours
        var presentTime = moment().hour();

        // loop the time chunks consisely with jQuery .each() function
        $(".time_chunk").each(function () {
            var chunkTime = parseInt($(this).attr("id").split("hour")[1]);

            // block of code to be executed if the condition is true
            if (chunkTime < presentTime) {
                // JQuery attributes set calculate "if chunkTime is less then present time the data given is in the past" 
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (chunkTime === presentTime) {
                // unless if chunkTime is equal to presentTime the data given is in the present
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                // however if chunkTime is not equal to nor less then presentTime the data given is in the future
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
             }
         })
    }


    // Obtain data from local storage if data exists
    $("#hour9 .elucidation").val(localStorage.getItem("hour9"));
    $("#hour10 .elucidation").val(localStorage.getItem("hour10"));
    $("#hour11 .elucidation").val(localStorage.getItem("hour11"));
    $("#hour12 .elucidation").val(localStorage.getItem("hour12"));
    $("#hour13 .elucidation").val(localStorage.getItem("hour13"));
    $("#hour14 .elucidation").val(localStorage.getItem("hour14"));
    $("#hour15 .elucidation").val(localStorage.getItem("hour15"));
    $("#hour16 .elucidation").val(localStorage.getItem("hour16"));
    $("#hour17 .elucidation").val(localStorage.getItem("hour17"));

    trackTime();
})   