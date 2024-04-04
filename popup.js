// Get current date and time
const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();

// Update HTML with current date and time
document.getElementById('current-date').textContent = currentDate;
document.getElementById('current-time').textContent = currentTime;
