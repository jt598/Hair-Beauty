var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        content.classList.toggle("show");
    });
}

let currentTab = 0; //current tab is set to be the first tab(0)
showTab(currentTab);//display the current tab

function showTab(n){
   // This function will display the specified tab of the form and fix the Previous/Next buttons:
    const tabs = document.getElementsByClassName("tab");
    tabs[n].style.display = "block";// Display the current tab
    if (n === 0){
        document.getElementsById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n === (tabs.length - 1)){
        document.getElementById("nextBtn").innerHTML = "Book";
    } else{
        document.getElementById("nextBtn").innerHTML = "Next";
    }
     // Run a function that displays the correct step indicator:
     fixStepIndicator(n);
}
    


function nextPrev(n){
       // This function will figure out which tab to display:
       const tabs = document.getElementsByClassName("tab");
        // Exit the function if any field in the current tab is invalid:
        if (n === 1 && !validateForm()) return false;
        // Hide the current tab:
        tabs[currentTab].style.display = "none";
        // Increase or decrease the current tab by 1:
        currentTab = currentTab + n;
         // If you have reached the end of the form, submit it:
        if (currentTab >= tabs.length){
            document.getElementById("regForm").submit();
            return false;
        }
         // Otherwise, display the correct tab:
        showTab(currentTab);
}

function validateForm(){
   // This function deals with form validation
    let valid =true;
    const tabs = document.getElementsByClassName("tab");
    const inputs = tabs[currentTab].getElementsByTagName("input");
        // A loop that checks every input field in the current tab:
    for (i = 0; i < i.length; i++) {
      if (inputs[i].value === "") {
      // add an "invalid" class to the field:
          inputs[i].className += " invalid";
      // and set the current valid status to false
          valid = false;
        }
      }
  // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  const steps = document.getElementsByClassName("step");
  for (i = 0; i < steps.length; i++) {
    steps[i].className = steps[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  steps[n].className += " active";
}

//calendar
document.addEventListener('DOMContentLoaded', function(){
  const calendarEl = document.getElementById('calendar');
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    selectable: true,
    dateClick: function(info){
      showTimeSlots(info.dataStr);
    }
  });
  calendar.render();
});

function showTimeSlots(date) {
  const timeSlotsContainer = document.getElementById('available-slots');
  timeSlotsContainer.innerHTML = ''; // Clear previous time slots

  // Example time slots (these could come from a database or API)
  const availableTimeSlots = [
      "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
  ];

  // Display each time slot as a selectable button
  availableTimeSlots.forEach(slot => {
      const slotButton = document.createElement('button');
      slotButton.className = 'time-slot';
      slotButton.textContent = slot;
      slotButton.onclick = function() {
          selectTimeSlot(date, slot);
      };
      timeSlotsContainer.appendChild(slotButton);
  });
}

let selectedDate = '';
let selectedTimeSlot = '';

function selectTimeSlot(date, slot) {
  selectedDate = date;
  selectedTimeSlot = slot;
    
  document.getElementById('selectedDate').value = selectedDate;
  document.getElementById('selectedTimeSlot').value = selectedTimeSlot;

  alert(`You selected ${date} at ${slot}`);
}