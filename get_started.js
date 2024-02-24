document.addEventListener("DOMContentLoaded", function () {
    
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            sections.forEach(section => {
                section.style.display = "none";
            });

            document.getElementById(targetId).style.display = "block";


        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const homeSection = document.getElementById('Home');
    const getStartedLink = document.getElementById('getStartedLink');
    const getStartedSection = document.getElementById('GetStartedsection');

    // Hide the GetStartedsection initially
    getStartedSection.style.display = 'none';

    // Event listener for the Get Started link
    getStartedLink.addEventListener('click', function (event) {
        event.preventDefault();
        // Show the GetStartedsection and hide the Home section
        homeSection.style.display = 'none';
        getStartedSection.style.display = 'block';
    });
});

function saveAppointment() {
    const patientName = document.getElementById('patientName').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const doctor = document.getElementById('doctor').value;
    const appointmentDate = document.getElementById('appointmentDate').value;

    const appointmentInfo = {
        patientName,
        mobileNumber,
        doctor,
        appointmentDate
    };

    // Save the appointment information to localStorage or a database
    // For demonstration, we'll store it in localStorage
    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.push(appointmentInfo);
    localStorage.setItem('appointments', JSON.stringify(appointments));

    // Clear form fields after saving appointment
    document.getElementById('patientName').value = '';
    document.getElementById('mobileNumber').value = '';
    document.getElementById('doctor').value = '';
    document.getElementById('appointmentDate').value = '';

    // Update the appointment list
    displayAppointments();
}

function displayAppointments() {
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    const appointmentList = document.getElementById('appointmentList');

    // Clear the existing list items
    appointmentList.innerHTML = '';

    // Display each appointment as a list item with a delete button
    appointments.forEach((appointment, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Patient: ${appointment.patientName}, Doctor: ${appointment.doctor}, Date: ${appointment.appointmentDate}`;
        
        const deleteButton = document.createElement('span');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';
        deleteButton.onclick = function() {
            // Delete the appointment from the list and update localStorage
            appointments.splice(index, 1);
            localStorage.setItem('appointments', JSON.stringify(appointments));
            // Re-display appointments after deletion
            displayAppointments();
        };

        listItem.appendChild(deleteButton);
        appointmentList.appendChild(listItem);
    });
}

// Initial display of appointments when the page loads
window.onload = displayAppointments;



document.addEventListener("DOMContentLoaded", function () {
    const homeSection = document.getElementById('Home');
    const getStartedLink = document.getElementById('getStartedLink');
    const appointmentsSection = document.getElementById('appointments');
    const healthBlogSection = document.getElementById('Health blog');
    const reviewsSection = document.getElementById('Reviews');

    // Hide all sections except the home section
    appointmentsSection.style.display = 'none';
    healthBlogSection.style.display = 'none';
    reviewsSection.style.display = 'none';

    getStartedLink.addEventListener('click', function (event) {
        event.preventDefault();
        // Code to handle click on Get Started link, if needed
    });

    // Event listeners for login and signup buttons, if needed

    // Function to show home section and hide other sections
    function showHomeSection() {
        homeSection.style.display = 'block';
        appointmentsSection.style.display = 'none';
        healthBlogSection.style.display = 'none';
        reviewsSection.style.display = 'none';
    }

    // Call the function to show the home section when the program runs
    showHomeSection();
});


// JavaScript code to show the GetStartedSection when the Get Started link is clicked
// JavaScript code for handling form submission and displaying appointments



document.addEventListener("DOMContentLoaded", function () {
    const instantConsultationBox = document.getElementById('instantConsultationBox');
    const appointmentBox = document.getElementById('appointmentBox');
    const selfCheckupBox = document.getElementById('selfCheckupBox');
    const healthTipsBox = document.getElementById('healthTipsBox');

    const instantConsultationInfo = document.getElementById('instantConsultationInfo');
    const appointmentInfo = document.getElementById('appointmentInfo');
    const selfCheckupInfo = document.getElementById('selfCheckupInfo');
    const healthTipsInfo = document.getElementById('healthTipsInfo');

    instantConsultationBox.addEventListener('click', function () {
        showInfoSection(instantConsultationInfo);
    });

    appointmentBox.addEventListener('click', function () {
        showInfoSection(appointmentInfo);
    });

    selfCheckupBox.addEventListener('click', function () {
        showInfoSection(selfCheckupInfo);
    });

    healthTipsBox.addEventListener('click', function () {
        showInfoSection(healthTipsInfo);
    });

    function showInfoSection(section) {
        // Hide all info sections
        instantConsultationInfo.style.display = 'none';
        appointmentInfo.style.display = 'none';
        selfCheckupInfo.style.display = 'none';
        healthTipsInfo.style.display = 'none';

        // Show the clicked info section
        section.style.display = 'block';
    }
});




document.addEventListener("DOMContentLoaded", function () {
    const getStartedSection = document.getElementById('getStarted'); 
    const instantConsultationBox = document.getElementById('instantConsultationBox');
    const instantConsultationInfo = document.getElementById('instantConsultationInfo');

    instantConsultationInfo.style.display = 'none';

    instantConsultationBox.addEventListener('click', function (event) {
        event.preventDefault();

        getStartedSection.style.display='none';
        instantConsultationInfo.style.display='block';
    });
});
