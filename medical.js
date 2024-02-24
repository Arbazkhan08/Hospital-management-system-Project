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
    
    getStartedSection.style.display='none'
    // Hide the GetStartedsection initially
    // Event listener for the Get Started link
    getStartedLink.addEventListener('click', function (event) {
        event.preventDefault();
        // Show the GetStartedsection and hide the Home section
        homeSection.style.display = 'none';
        getStartedSection.style.display = 'block';
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const getStartedsection = document.getElementById('getStartedsection');
    const boxes = document.querySelectorAll(".boxes");
    const infoSections = document.querySelectorAll(".info-section");

    boxes.addEventListener("click", function (event) {
        event.preventDefault();

        getStartedsection.style.display = 'none';
        infoSections.style.display='block'
            // Show the corresponding info section
    });
});

function openReviewForm(tableRow) {
    const reviewForm = document.getElementById('review-form');
    reviewForm.style.display = 'block';

    const submitButton = document.querySelector('.review-form button');
    submitButton.onclick = function() {
        const patientName = document.getElementById('patient-name').value;
        const patientReview = document.getElementById('patient-review').value;

        // Update the review given column
        const reviewColumn = document.getElementById('review-' + tableRow);
        reviewColumn.innerHTML = `<strong>${patientName}</strong>: ${patientReview}`;

        // Hide the review form after submission
        reviewForm.style.display = 'none';

        // Clear form fields
        document.getElementById('patient-name').value = '';
        document.getElementById('patient-review').value = '';
    };
}


document.addEventListener("DOMContentLoaded", function() {
    const instantConsultationBox = document.getElementById('instantConsultationBox');
    const appointmentBox = document.getElementById('appointmentBox');
    const selfCheckupBox = document.getElementById('selfCheckupBox');
    const healthTipsBox = document.getElementById('healthTipsBox');

    const instantConsultationInfo = document.getElementById('instantConsultationInfo');
    const appointmentInfo = document.getElementById('appointmentInfo');
    const selfCheckupInfo = document.getElementById('selfCheckupInfo');
    const healthTipsInfo = document.getElementById('healthTipsInfo');

    instantConsultationBox.addEventListener('click', function() {
        showSection(instantConsultationInfo);
    });

    appointmentBox.addEventListener('click', function() {
        showSection(appointmentInfo);
    });

    selfCheckupBox.addEventListener('click', function() {
        showSection(selfCheckupInfo);
    });

    healthTipsBox.addEventListener('click', function() {
        showSection(healthTipsInfo);
    });

    function showSection(section) {
        // Hide all sections
        instantConsultationInfo.style.display = 'none';
        appointmentInfo.style.display = 'none';
        selfCheckupInfo.style.display = 'none';
        healthTipsInfo.style.display = 'none';

        // Show the clicked section
        section.style.display = 'block';
    }
});

// Sample data for specialties and doctors
const specialties = ['BHMS', 'Dentist', 'MBBS'];
const doctors = [{
    name: 'Dr. Suhana',
    specialty: 'BHMS',
    experience: '0 years',
    rating: '4.8'
},
{
    name: 'Dr. Sana',
    specialty: 'Dentist',
    experience: '0 years',
    rating: '4.8'
},
{
    name: 'Dr. khan',
    specialty: 'MBBS',
    experience: '0 years',
    rating: '4.9'
}
];

// Populate specialties list
const specialtiesList = document.getElementById('specialties-list');
specialties.forEach(specialty => {
    const option = document.createElement('div');
    option.className = 'specialty-option';
    option.innerText = specialty;
    option.addEventListener('click', () => showDoctors(specialty));
    specialtiesList.appendChild(option);
});

// Function to display doctors based on selected specialty
function showDoctors(specialty) {
    const doctorList = document.getElementById('doctor-list');
    doctorList.innerHTML = '';
    doctors.forEach(doctor => {
        if (doctor.specialty === specialty) {
            const doctorCard = document.createElement('div');
            doctorCard.className = 'doctor-card';
            doctorCard.innerHTML = `
                <h3>${doctor.name}</h3>
                <p>Specialty: ${doctor.specialty}</p>
                <p>Experience: ${doctor.experience}</p>
                <p>Rating: ${doctor.rating}</p>
                <button onclick="showAppointmentForm1('${doctor.name}', '${specialty}')">Book Appointment</button>
            `;
            doctorList.appendChild(doctorCard);
        }
    });
}

// Function to display appointment form
function showAppointmentForm1(doctorName, specialty) {
    const appointmentForm1 = document.getElementById('appointment-form1');
    appointmentForm1.innerHTML = `
        <h2>Book an Appointment</h2>
        <form id="input-form" onsubmit="bookAppointment1(event, '${doctorName}', '${specialty}')">
            <label for="patient-name">Patient Name:</label>
            <input type="text" id="patient-name" required><br>
            <label for="phone-number">Phone Number:</label>
            <input type="tel" id="phone-number" required><br>
            <label for="appointment-date">Date:</label>
            <input type="date" id="appointment-date" required><br>
            <label for="time-slot">Time Slot:</label>
            <select id="time-slot" required>
                <option value="9:00 AM">9:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="2:00 PM">2:00 PM</option>
            </select><br><br>
            <button type="submit">Book Now</button>
        </form>
        <div id="notification"></div>
        <button onclick="cancelInput()">Cancel</button>
        
    `;
}


// Function to book an appointment
function bookAppointment1(event, doctorName, specialty) {
    event.preventDefault();
    const patientName = document.getElementById('patient-name').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const appointmentDate = document.getElementById('appointment-date').value;
    const timeSlot = document.getElementById('time-slot').value;

    // Logic to store appointment data (can be sent to the server in a real application)
    
    // Display notification
    const notification = document.getElementById('notification');

    notification.innerHTML = `
        <div class="success-message">
            <p>Appointment booked successfully!</p>
            <p>Doctor: ${doctorName}</p>
            <p>Specialty: ${specialty}</p>
            <p>Date: ${appointmentDate}</p>
            <p>Time: ${timeSlot}</p>
            <p>Patient: ${patientName}</p>
            <p>Phone Number: ${phoneNumber}</p>
        </div>
    `;
}

function cancelInput() {
    const appointmentDetails1Div = document.getElementById('notification');
    appointmentDetails1Div.innerHTML = '';
    const inputForm = document.getElementById('input-Form');
    inputForm.reset();
}

function showAppointmentForm(name, field, experience, rating) {
    const form = document.getElementById('appointmentForm');
    form.style.display = 'block';

    // Fill the form with doctor's information
    document.getElementById('patientName').placeholder = `Enter your name for Dr. ${name}`;
    document.getElementById('appointmentDetails').innerHTML = `
        <h3>Appointment Details</h3>
        <p>Doctor: ${name}</p>
        <p>Field: ${field}</p>
        <p>Experience: ${experience}</p>
        <p>Rating: ${rating}</p>
        <p>Date: <span id="displayDate"></span></p>
        <p>Time: <span id="displayTime"></span></p>
    `;

}

function submitForm(event) {
    event.preventDefault();
    const appointmentDate = document.getElementById('appointmentDate').value;
    const appointmentTime = document.getElementById('appointmentTime').value;

    // Display appointment details
    document.getElementById('displayDate').textContent = appointmentDate;
    document.getElementById('displayTime').textContent = appointmentTime;
    document.getElementById('appointmentDetails').style.display = 'block';
}

function cancelAppointment() {
    document.getElementById('appointmentForm').style.display = 'none';
    document.getElementById('appointmentDetails').style.display = 'none';
    alert('Appointment canceled. Notify the user here if necessary.');
}


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

    function showHomeSection() {
        homeSection.style.display = 'block';
        appointmentsSection.style.display = 'none';
        healthBlogSection.style.display = 'none';
        reviewsSection.style.display = 'none';
    }

    // Call the function to show the home section when the program runs
    showHomeSection();
});

const specialties1 = ['BHMS', 'Dentist', 'MBBS'];
const doctors1 = [{
    name: 'Dr. Suhana',
    specialty: 'BHMS',
    experience: '0 years',
    rating: '4.8'
},
{
    name: 'Dr. Sana',
    specialty: 'Dentist',
    experience: '0 years',
    rating: '4.8'
},
{
    name: 'Dr. khan',
    specialty: 'MBBS',
    experience: '12 years',
    rating: '4.9'
}
];

// Populate specialties list
const specialtiesList1 = document.getElementById('specialties-list1');
specialties.forEach(specialty => {
    const option = document.createElement('div');
    option.className = 'specialty-option';
    option.innerText = specialty;
    option.addEventListener('click', () => showDoctors1(specialty));
    specialtiesList1.appendChild(option);
});

// Function to display doctors based on selected specialty
function showDoctors1(specialty) {
    const doctorList1 = document.getElementById('doctor-list1');
    doctorList1.innerHTML = '';
    doctors.forEach(doctor => {
        if (doctor.specialty === specialty) {
            const doctorCard = document.createElement('div');
            doctorCard.className = 'doctor-card';
            doctorCard.innerHTML = `
                <h3>${doctor.name}</h3>
                <p>Specialty: ${doctor.specialty}</p>
                <p>Experience: ${doctor.experience}</p>
                <p>Rating: ${doctor.rating}</p>
                <button onclick="showAppointmentForm2('${doctor.name}', '${specialty}')">Book Appointment</button>
            `;
            doctorList1.appendChild(doctorCard);
        }
    });
}

// Function to display appointment form
function showAppointmentForm2(doctorName, specialty) {
    const appointmentForm2 = document.getElementById('appointment-form2');
    appointmentForm2.innerHTML = `
        <h2>Book an Appointment</h2>
        <form id="input-form1" onsubmit="bookAppointment2(event, '${doctorName}', '${specialty}')">
            <label for="patient-name">Patient Name:</label>
            <input type="text" id="patient-name" required><br><br>
            <label for="phone-number">Phone Number:</label>
            <input type="tel" id="phone-number" required><br><br>
            <label for="appointment-date">Date:</label>
            <input type="date" id="appointment-date" required><br><br>
            <label for="time-slot">Time Slot:</label>
            <select id="time-slot" required>
                <option value="9:00 AM">9:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="2:00 PM">2:00 PM</option>
            </select><br><br>
            <button type="submit">Book Now</button>
        </form>
        <div id="notification1"></div>
        <button onclick="cancelInput1()">Cancel</button>
        
    `;
}


// header appointments
function bookAppointment2(event, doctorName, specialty) {
    event.preventDefault();
    const patientName = document.getElementById('patient-name').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const appointmentDate = document.getElementById('appointment-date').value;
    const timeSlot = document.getElementById('time-slot').value;

    // Logic to store appointment data (can be sent to the server in a real application)
    
    // Display notification
    const notification1 = document.getElementById('notification1');

    notification1.innerHTML = `
        <div class="success-message">
            <p>Appointment booked successfully!</p>
            <p>Doctor: ${doctorName}</p>
            <p>Specialty: ${specialty}</p>
            <p>Date: ${appointmentDate}</p>
            <p>Time: ${timeSlot}</p>
            <p>Patient: ${patientName}</p>
            <p>Phone Number: ${phoneNumber}</p>
        </div>
    `;
}

function cancelInput1() {
    const appointmentDetails2Div = document.getElementById('notification1');
    appointmentDetails2Div.innerHTML = '';
    const inputForm1 = document.getElementById('input-Form1');
    inputForm1.reset();
}



const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('myModal');
const submitPostBtn = document.getElementById('submitPostBtn');
const blogTitleInput = document.getElementById('blogTitle');
const blogContentInput = document.getElementById('blogContent');
const blogPostsContainer = document.getElementById('blogPosts');

openModalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

submitPostBtn.addEventListener('click', function() {
    const title = blogTitleInput.value;
    const content = blogContentInput.value;

    if (title && content) {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
        blogPostsContainer.appendChild(postDiv);

        // Clear input fields and close modal
        blogTitleInput.value = '';
        blogContentInput.value = '';
        modal.style.display = 'none';
    } else {
        alert('Both title and content are required.');
    }
});

// Close the modal if the user clicks outside of it
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Get the modal elements
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');

// Get the button that opens the modals
const loginBtn = document.getElementById('loginbtn');
const signupBtn = document.getElementById('signupbtn');
const closeLoginModalBtn = document.getElementById('closeLoginModalBtn');
const closeSignupModalBtn = document.getElementById('closeSignupModalBtn');

// Function to open login modal
function openLoginModal() {
    loginModal.style.display = 'block';
}

// Function to close login modal
function closeLoginModal() {
    loginModal.style.display = 'none';
}

// Function to open signup modal
function openSignupModal() {
    signupModal.style.display = 'block';
}

// Function to close signup modal
function closeSignupModal() {
    signupModal.style.display = 'none';
}

// Event listeners for login and signup buttons
loginBtn.addEventListener('click', openLoginModal);
signupBtn.addEventListener('click', openSignupModal);
closeLoginModalBtn.addEventListener('click', closeLoginModal);
closeSignupModalBtn.addEventListener('click', closeSignupModal);

// Function to handle login form submission
document.getElementById('loginFormContent').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle login logic here
});

// Function to handle signup form submission
document.getElementById('signupFormContent').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle signup logic here
});
