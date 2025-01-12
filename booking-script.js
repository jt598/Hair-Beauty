var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        content.classList.toggle("show");
    });
}



// Handle tabs navigation
let currentTab = 0;

function showTab(tabIndex) {
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach((tab, index) => {
        tab.style.display = (index === tabIndex) ? "block" : "none";
    });
}

function nextTab(step) {
    const tabs = document.querySelectorAll(".tab");
    const totalTabs = tabs.length;

     // If on last tab, submit the form
     if (currentTab === totalTabs - 1) {
        submitBooking();
        return;
    }

    // Ensure we're not out of bounds
    if (currentTab + step >= 0 && currentTab + step < totalTabs) {
        currentTab += step;
    }

    showTab(currentTab);

    // Enable/Disable navigation buttons
    document.getElementById("prevBtn").disabled = currentTab === 0;
    document.getElementById("nextBtn").innerText = currentTab === totalTabs - 1 ? "Submit" : "Next";

    if (currentTab === totalTabs - 1) {
        updateConfirmation();
    }
}

function updateConfirmation() {
    const services = document.querySelector('input[name="serivce"]:checked')?.value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    if (services && date && time && name && email && phone) {
        const conformMessage = `Hello ${name}, your appointment is confirmed for ${services} on ${date} at ${time}. 
        We will contact you at ${phone} or ${email}.`;
        document.getElementById("conformMessage").innerText = conformMessage;
    }
}

function submitBooking() {
    alert("Your appointment has been booked successfully!");
    // Here you can send the form data to a server for processing.
}

// Initially show the first tab
showTab(currentTab);
