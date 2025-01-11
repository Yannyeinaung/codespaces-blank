// Get Tutor Registration Form and Parent Search Form
const tutorForm = document.getElementById('tutorRegistrationForm');
const parentForm = document.getElementById('parentSearchForm');
const resultsDiv = document.createElement('div'); // For displaying search results

// Store registered tutors
let tutors = [];

// Tutor Registration Logic
if (tutorForm) {
    tutorForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Collect data from the form
        const tutor = {
            name: document.getElementById('tutor-name').value,
            gender: document.getElementById('tutor-gender').value,
            age: document.getElementById('tutor-age').value,
            email: document.getElementById('tutor-email').value,
            phone: document.getElementById('tutor-phone').value,
            salary: parseFloat(document.getElementById('tutor-salary').value),
            time: document.getElementById('tutor-time').value,
            address: document.getElementById('tutor-address').value
        };

        // Add the tutor to the array
        tutors.push(tutor);

        // Alert the user and reset the form
        alert('Tutor registered successfully!');
        tutorForm.reset();
        console.log('Registered Tutors:', tutors); // Debugging
    });
}

// Parent Search Logic
if (parentForm) {
    parentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Collect data from the form
        const classInput = document.getElementById('class').value;
        const preferredTime = document.getElementById('time').value;
        const maxSalary = parseFloat(document.getElementById('salary').value);
        const mode = document.getElementById('mode').value;

        // Filter tutors based on parent's input
        const matchedTutors = tutors.filter((tutor) => {
            return tutor.salary <= maxSalary && tutor.time.includes(preferredTime);
        });

        // Display results
        const resultsSection = document.querySelector('main');
        resultsDiv.innerHTML = `<h2>Matching Tutors:</h2>`;

        if (matchedTutors.length > 0) {
            matchedTutors.forEach((tutor) => {
                resultsDiv.innerHTML += `
                    <div style="border: 1px solid #ddd; padding: 10px; margin: 10px;">
                        <p><strong>Name:</strong> ${tutor.name}</p>
                        <p><strong>Gender:</strong> ${tutor.gender}</p>
                        <p><strong>Email:</strong> ${tutor.email}</p>
                        <p><strong>Phone:</strong> ${tutor.phone}</p>
                        <p><strong>Salary:</strong> $${tutor.salary}/hour</p>
                        <p><strong>Available Time:</strong> ${tutor.time}</p>
                        <p><strong>Address:</strong> ${tutor.address}</p>
                    </div>
                `;
            });
        } else {
            resultsDiv.innerHTML += `<p>No tutors found matching your criteria.</p>`;
        }

        // Add the results to the page
        resultsSection.appendChild(resultsDiv);
    });
}
