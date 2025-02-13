const messages = [
    "Нет",
    "Думай лучше ",
    "Офигела?",
    "Ахуела?",
    "100%?",
    "Последний шанс",
    "Ну это ни в какие ворота ",
    "А если я тоже буду твоей дурой?",
    "А если буду школьником?",
    "Скажи да, пожалуйста! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}


