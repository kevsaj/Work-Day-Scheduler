var $currentDay = $("#currentDay");
var $timeBlocks = $(".time-block");
var $scheduleArea = $(".schedule");
var saveBtn = $("saveBtn");

var toDoItems = [];

var currentDate = moment().format("dddd, MMMM Do");
var currentHour = moment().format("H");

function initializeSchedule() {

}





function localStorage() {
    if (typeof(Storage) !== "undefined" ) {

        localStorage.setItem(currentHour, textInput1.value) 
   
}

saveBtn.addEventListener("click", localStorage)