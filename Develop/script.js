const momentEl = moment().format('dddd, MMMM Do, YYYY -- hh:mm:ss A');
const currentDateAndTimeEl = document.getElementById('currentDay');

let textInput;
let hour;

//Display the current date and time in the Header
function showDateAndTime(currentDateAndTime) {
  currentDateAndTimeEl.innerText = momentEl;
}

// lets you know it is safe to run javascript 
$(document).ready(function () {
  changeColor();
  saveText();
  //update clock every second.
  function clock() {
    $("#currentDay").html(moment().format('dddd, MMMM Do YYYY, h:mm:ss A'));
  }
  setInterval(clock, 1000);

});

// set class attributes to time blocks based on the current time 
function changeColor() {

  let realTime = moment().hours();
  console.log("Current Time" + realTime);

  $(".input").each(function () {
    var timeTest = parseInt($(this).attr("id"));
    console.log(timeTest);

    if (realTime > timeTest) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (realTime < timeTest) {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    } else {
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");
    }
  });
}

//save button funtion for the time blocks
$(".saveBtn").click(function () {
  textInput = $(this).siblings(".input").val();
  console.log(textInput);
  hour = $(this).siblings(".hour").text();
  console.log(hour);
  localStorage.setItem(hour, JSON.stringify(textInput));

  changeColor();
  saveText();
})

// function to save the inputted text in the time blocks
function saveText() {
  let saveText9 = JSON.parse(localStorage.getItem("9:00 am"));
  $("#9").val("");
  $("#9").val(saveText9);

  let saveText10 = JSON.parse(localStorage.getItem("10:00 am"));
  $("#10").val("");
  $("#10").val(saveText10);

  let saveText11 = JSON.parse(localStorage.getItem("11:00 am"));
  $("#11").val("");
  $("#11").val(saveText11);

  let saveText12 = JSON.parse(localStorage.getItem("12:00 pm"));
  $("#12").val("");
  $("#12").val(saveText12);

  let saveText1 = JSON.parse(localStorage.getItem("1:00 pm"));
  $("#13").val("");
  $("#13").val(saveText1);

  let saveText2 = JSON.parse(localStorage.getItem("2:00 pm"));
  $("#14").val("");
  $("#14").val(saveText2);

  let saveText3 = JSON.parse(localStorage.getItem("3:00 pm"));
  $("#15").val("");
  $("#15").val(saveText3);

  let saveText4 = JSON.parse(localStorage.getItem("4:00 pm"));
  $("#16").val("");
  $("#16").val(saveText4);

  let saveText5 = JSON.parse(localStorage.getItem("5:00 pm"));
  $("#17").val("");
  $("#17").val(saveText5);
}

showDateAndTime();