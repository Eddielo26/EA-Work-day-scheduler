// Setup day date and year to display on screen
var nowDay = moment().format("ddd MMMM Do YY");  

var currentDay = document.getElementById("currentDay");
    currentDay.textContent= nowDay

