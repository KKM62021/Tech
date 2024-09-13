document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('appointmentForm');
    const notificationList = document.getElementById('notificationList');
    const phoneInput = document.getElementById('phone');
    const countryCodeSelect = document.getElementById('countryCode');

    // Format phone number input
    phoneInput.addEventListener('input', function(event) {
        const value = event.target.value;
        // Remove non-numeric characters
        const numericValue = value.replace(/\D/g, '');
        // Update the input field with numeric value only
        event.target.value = numericValue;
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const countryCode = document.getElementById('countryCode').value;
        const date = document.getElementById('date').value;

        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `<strong>Appointment Booked:</strong> ${name} (${email}) - ${countryCode} ${phone} on ${date}`;
        
        notificationList.appendChild(notification);

        // Clear the form
        form.reset();
        countryCodeSelect.value = '+91'; // Reset to default country code
    });
});
// Calendar View
document.addEventListener('DOMContentLoaded', () => {
    const calendarEl = document.getElementById('calendar');

    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        editable: true,
        events: [
            // Example events
            { title: 'Appointment with Dr. Smith', start: '2024-09-15T10:00:00' },
            { title: 'Check-up', start: '2024-09-17T14:00:00' }
        ],
        eventClick: function(info) {
            alert('Event: ' + info.event.title);
        }
    });

    calendar.render();
});
// Medication Management
document.addEventListener('DOMContentLoaded', () => {
    const medicationForm = document.getElementById('medicationForm');

    medicationForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const medicationName = document.getElementById('medicationName').value;
        const dose = document.getElementById('dose').value;
        const schedule = document.getElementById('schedule').value;

        // Display medication details - replace this with actual medication management logic
        const medicationNotification = document.createElement('div');
        medicationNotification.className = 'notification';
        medicationNotification.innerHTML = `<strong>Medication Scheduled:</strong> ${medicationName} - ${dose} - ${schedule}`;
        
        document.querySelector('.medication').appendChild(medicationNotification);

        // Clear the form
        medicationForm.reset();
    });
});
// Feedback Form Handling
document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedbackForm');

    feedbackForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const feedbackText = document.getElementById('feedbackText').value;

        // Display feedback - replace this with actual feedback handling logic
        const feedbackNotification = document.createElement('div');
        feedbackNotification.className = 'notification';
        feedbackNotification.innerHTML = `<strong>Feedback Received:</strong> ${feedbackText}`;
        
        document.querySelector('.feedback').appendChild(feedbackNotification);

        // Clear the form
        feedbackForm.reset();
    });
});
// Chat Support Handling
document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chatForm');
    const chatMessages = document.getElementById('chatMessages');

    chatForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const message = document.getElementById('chatMessage').value;

        // Display chat message - replace this with actual chat logic
        const messageElement = document.createElement('div');
        messageElement.className = 'chat-message';
        messageElement.textContent = `User: ${message}`;
        
        chatMessages.appendChild(messageElement);

        // Clear the form
        chatForm.reset();
    });
});
