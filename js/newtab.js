function renderAge () {
    var span = document.getElementById('span');

    function ageInYears() {
        var current_date = new Date(); // Date time of now
        var birthday = new Date('July 17, 1987 09:10:00'); // date time of when i was born
        var diffTime = current_date - birthday; // The difference in milliseconds
        var years = ( diffTime / (1000 * 60 * 60 * 24 * 356) ) - 1; // The difference in years
        span.textContent = (years.toFixed(9));
    }

    setInterval(ageInYears, 10);
}

window.addEventListener('DOMContentLoaded', renderAge, false);
