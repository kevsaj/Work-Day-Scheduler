var $currentDay = $("#currentDay");
var $timeBlocks = $(".time-block");
var $scheduleArea = $(".schedule");
var saveBtn = $("saveBtn");

var toDoItems = [];

var currentDate = moment().format("dddd, MMMM Do");
var currentHour = moment().format("H");

function initializeSchedule() {
    $timeBlocks.each(function () {
        var $thisBlock = $(this);
        var thisBlockHr = parseInt($thisBlock.attr("data-hour"));

        var todoObj = {
            hour: thisBlockHr,
            text: "",
        }

        toDoItems.push(todoObj);
    });

    localStorage.setItem("todos", JSON.stringify(currentHour, textInput1.value));

}

function setUpTimeBlocks() {
    $timeBlocks.each(function () {
        var $thisBlock = $(this);
        var thisBlockHr = parseInt($thisBlock.attr("data-hour"));

        if (thisBlockHr == currentHour) {
            $thisBlock.addClass("present").removeClass("past future");
        }
        if (thisBlockHr < currentHour) {
            $thisBlock.addClass("past").removeClass("present future");
        }
        if (thisBlockHr > currentHour) {
            $thisBlock.addClass("future").removeClass("past present");
        }
    });
}



function localStorage() {
    if (typeof (Storage) !== "undefined") {

        localStorage.setItem(currentHour, textInput1.value)

    }
}

saveBtn.addEventListener("click", localStorage)