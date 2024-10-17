// You can use this in future to dynamically update the numbers
document.getElementById('total-reports').textContent = 123; // Placeholder for dynamic value
document.getElementById('total-incidents').textContent = 45; // Placeholder for dynamic value
document.getElementById('tasks').textContent = 10; // Placeholder for dynamic value
document.getElementById('health').textContent = '90%'; // Placeholder for dynamic value
document.getElementById('run-report-btn').addEventListener('click', function() {
    alert('Run Report button clicked!');
    // Add functionality for running reports
});

document.getElementById('create-memo-btn').addEventListener('click', function() {
        // Redirect to the memo creation page (memo.html)
        window.location.href = "memo.html";
});

document.getElementById('statistics-btn').addEventListener('click', function() {
    alert('Statistics button clicked!');
    // Add functionality for viewing statistics
});
