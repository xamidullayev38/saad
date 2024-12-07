async function fetchStatuses() {
    const response = await fetch('all.json');
    const data = await response.json();
    return data;
}

function getRandomStatus(statuses) {
    const randomIndex = Math.floor(Math.random() * statuses.length);
    return statuses[randomIndex];
}

async function displayRandomStatus() {
    const statuses = await fetchStatuses(); 
    const randomStatus = getRandomStatus(statuses);

    document.getElementById("random-status").innerText = `${randomStatus.status}`;
    document.getElementById("author-name").innerHTML = `<i>${randomStatus.author} (${randomStatus.book || 'Unknown'})</i>`;
}

document.addEventListener("DOMContentLoaded", () => {
    displayRandomStatus(); 

    setInterval(displayRandomStatus, 10000);
});
