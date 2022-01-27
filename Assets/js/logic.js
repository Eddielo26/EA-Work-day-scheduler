
var workHours = ["8", "9", "10", "11", "12", "13", "14", "15", "16", ]
var hourEl = document.querySelectorAll(".hour");
var rowEl = document.querySelector(".row");
var eventEl = document.querySelectorAll("textarea")
var colHour = document.querySelector(".col");
var dateEl = document.getElementById("currentDay");
var btnEl = document.querySelectorAll(".saveBtn");


// Setup day date and year to display on screen
var nowDay = moment().format("ddd MMMM Do YY");  
    dateEl.textContent= nowDay

// Setup time for daily schedule
var currentTime = moment().format("h");

// function to display the correct time in each slot
function outputHours() {
    // loops through each element selected in hoursEL
    for (var i = 0; i < hourEl.length; i++) {
        if ( i < workHours.length) {
            // used parseInt to convert each time from string to a integer
            var hourDisplay = parseInt(workHours[i]);
            var amPm = " AM";
            if (hourDisplay >= 12) {
                amPm = " PM"
                // used to change military to standard time
                if (hourDisplay > 12) {
                    hourDisplay = hourDisplay - 12;
                }
            }

            hourEl[i].textContent = hourDisplay + amPm;

            if (parseInt(workHours[i])>parseInt(currentTime)) {
                eventEl[i].setAttribute("class", "future")
            } else if (workHours[i] === currentTime) {
                eventEl[i].setAttribute("class", "present")
            } else 
                eventEl[i].setAttribute("class", "past")
        }
    }
}
// call outputHOurs function
outputHours()

// Function to save each event to local storage



