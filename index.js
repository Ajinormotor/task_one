
//SLack Display Name
const slackDisplayName = document.querySelector(' [data-testid="slackDisplayName"]');
slackDisplayName.textContent = "Teitei Wisdom";


//Slack Day
const currentDay = document.querySelector('[data-testid="currentDay"]');
const options = { weekday: 'long' };
currentDay.textContent = new Date().toLocaleDateString('en-US', options);


//Slack Time
const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');

setInterval(() => {
    const utcString = new Date().toUTCString();
    const timePart = utcString.split(' ')[4]; // Extracts the "HH:MM:SS" part
    currentTimeUTC.textContent = timePart;
}, 1000);



// Slack Email
const slackEmail = document.querySelector('[data-testid="slackEmail"]')
slackEmail.textContent = "teiteiwisdom@gmail.com"


