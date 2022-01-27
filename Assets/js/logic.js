
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
            } else if (parseInt(workHours[i]) === currentTime) {
                eventEl[i].setAttribute("class", "present")
            } else 
                eventEl[i].setAttribute("class", "past")
        }
    }
}
// call outputHours function
outputHours()

// Function to save each event to local storage

function saveEvent () {
    // if the text box is not empty, than we store the content in local storage
    if (eventEl[0].value!=="") {
        localStorage.setItem("8 AM", eventEl[0].value);
    }
    if (eventEl[1].value!=="") {
        localStorage.setItem("9 AM", eventEl[1].value);
    }
    if (eventEl[2].value!=="") {
        localStorage.setItem("10 AM", eventEl[2].value);
    }
    if (eventEl[3].value!=="") {
        localStorage.setItem("11 AM", eventEl[3].value);
    }
    if (eventEl[4].value!=="") {
        localStorage.setItem("12 AM", eventEl[4].value);
    }
    if (eventEl[5].value!=="") {
        localStorage.setItem("1 PM", eventEl[5].value);
    }
    if (eventEl[6].value!=="") {
        localStorage.setItem("2 PM", eventEl[6].value);
    }
    if (eventEl[7].value!=="") {
        localStorage.setItem("3 PM", eventEl[7].value);
    }
    if (eventEl[8].value!=="") {
        localStorage.setItem("4 PM", eventEl[8].value);
    }
}

// create function to reload save entries from local storage

function reloadLastsave()  {
    // using getItem to retrieve from local storage
    lastSaved = localStorage.getItem("8 AM");
    eventEl[0].value = lastSaved
    lastSaved = localStorage.getItem("9 AM");
    eventEl[1].value = lastSaved
    lastSaved = localStorage.getItem("10 AM");
    eventEl[2].value = lastSaved
    lastSaved = localStorage.getItem("11 AM");
    eventEl[3].value = lastSaved
    lastSaved = localStorage.getItem("12 PM");
    eventEl[4].value = lastSaved
    lastSaved = localStorage.getItem("1 PM");
    eventEl[5].value = lastSaved
    lastSaved = localStorage.getItem("2 PM");
    eventEl[6].value = lastSaved
    lastSaved = localStorage.getItem("3 PM");
    eventEl[7].value = lastSaved
    lastSaved = localStorage.getItem("4 PM");
    eventEl[8].value = lastSaved
}

// call function to retrieve event on planner after refresh
reloadLastsave();

// create var for save btn
var btnEl = document.querySelectorAll(".saveBtn");
// add eventlistenr to save the events into local storage
btnEl.forEach(function(event) {
    event.addEventListener("click", saveEvent)
});
