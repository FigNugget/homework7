console.log("Hello World!");

function showGreeting() {
    var name = prompt("Sign in:\nWhat is your name?");
    alert("Hello " + name + ", my name is Alexia! Welcome to my portfolio!");
}


document.getElementById("button").addEventListener("click", resumeDownload);

function resumeDownload() {
    alert("Resume downloaded successfully!");
}

function daysUntilDeadline() {
    const deadlineDay = new Date("2025-04-20");
    const currentDay = new Date();
    const subtractDays = deadlineDay - currentDay;
    const daysLeft = Math.ceil(subtractDays / (1000 * 60 * 60 *24));
    console.log("There are " + daysLeft + " days until April 20th, 2025.");
}

