
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
    const now = new Date();
    const hours = now.getUTCHours();
    const minutes = now.getUTCMinutes();
    const seconds = now.getUTCSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12; // Convert to 12-hour format

    const timePart = `${hours12.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
    currentTimeUTC.textContent = timePart;
}, 1000);


// Slack Email
const slackEmail = document.querySelector('[data-testid="slackEmail"]')
slackEmail.textContent = "teiteiwisdom@gmail.com"


