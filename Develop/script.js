var timeBlocks = document.getElementById('timeblocks');


$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

var currTime = moment();

// timeblocks color change 

hour = parseInt(moment().format('H'));

function color() {
    $(".time-section").each(function() {
        var blockHour = parseInt($(this).attr("id"));
        console.log(blockHour);
        if (hour > blockHour) {
            $(this).addClass("past")
        } else if(hour < blockHour) {
            $(this).addClass("future")
        } else if(hour === blockHour) {
            $(this).addClass("present")
        }
    });
}
    
color();

$(".saveBtn").on("click", function() {
    var timeBlockId = $(this).parent().attr("id");
    var timeBlockInput = $(this).parent().find(".input").val();
console.log(timeBlockInput)
    localStorage.setItem(timeBlockId, timeBlockInput);
});

$("#9").children("textarea").val(localStorage.getItem("9"));

$("#10").children("textarea").val(localStorage.getItem("10"));

$("#11").children("textarea").val(localStorage.getItem("11"));

$("#12").children("textarea").val(localStorage.getItem("12"));

$("#13").children("textarea").val(localStorage.getItem("13"));

$("#14").children("textarea").val(localStorage.getItem("14"));

$("#15").children("textarea").val(localStorage.getItem("15"));

$("#16").children("textarea").val(localStorage.getItem("16"));

$("#17").children("textarea").val(localStorage.getItem("17"));