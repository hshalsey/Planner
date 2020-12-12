
$(document).ready(function(){
    var currentDate = moment().format('MMMM Do YYYY');
    var currentTime = moment().format('h:mm:ss a');
      $("#displayMoment").append(currentDate + " " + currentTime);
    var currentHour = moment().format("h");

})

var eventTimeArr = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
 
