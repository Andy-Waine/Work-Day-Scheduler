/* Timeblock Array */
let hour9 = $("#9");
let hour10 = $("#10");
let hour11 = $("#11");
let hour12 = $("#12");
let hour1 = $("#13");
let hour2 = $("#14");
let hour3 = $("#15");
let hour4 = $("#16");
let hour5 = $("#17");
let time = moment();

/* Main Function */
function calendarMain() {

    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var schedule = localStorage.getItem(id);

        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);
        }
    });
}

calendarMain();
var saveBtn = $(".saveBtn");

saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();

    localStorage.setItem(time, schedule);
});


function timeRelative() {
    hour = time.hours();
    $(".time-block").each(function () {
        var thisHour = parseInt($(this).attr("id"));

        if (thisHour > hour) {
            $(this).addClass("future")
        }
        else if (thisHour === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
}

timeRelative();