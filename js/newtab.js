function renderAge () {
    var span = document.getElementById('span');

    function ageInYears() {
        var current_date = new Date(); // Date time of now
        var birthday = new Date('July 17, 1987 09:10:00'); // date time of when i was born
        var diffTime = current_date - birthday; // The difference in milliseconds
        var years = diffTime / (1000 * 60 * 60 * 24 * 365.25); // The difference in years
        span.textContent = years.toFixed(9);
    }

    setInterval(ageInYears, 10);
}
function renderBlox() {
    fetch('https://blox.weareblox.com/api/prices').then((response) => {
        response.json().then((data) => {
            var own = document.getElementById('btcIOwn');
            var worth = document.getElementById('worth');
            var profit = document.getElementById('profit');
            //console.log(data);
            btcIOwn = 0.00020469;
            btcEuroInvested = 10;
            btcWorth = data[0]['sellPrice'] * btcIOwn;
            btcProfit = btcWorth - btcEuroInvested;

            own.textContent = btcIOwn;
            worth.textContent = btcWorth.toFixed(2);
            profit.textContent = btcProfit.toFixed(2);
            //console.log(btcWorth);
        });
    });
}

window.addEventListener('DOMContentLoaded', renderAge, false);
window.addEventListener('DOMContentLoaded', renderBlox, false);