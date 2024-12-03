const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const responseDiv = document.getElementById('response');

yesButton.addEventListener('click', () => {
    responseDiv.textContent = "Yay! 🎉 I'm so happy! Let's plan our wedding! 💕";
});

noButton.addEventListener('click', () => {
    responseDiv.textContent = "Oh no! 😢 But I will always cherish our moments!";
});

noButton.addEventListener('mouseover', () => {
    const container = document.querySelector('.container');
    
    const containerWidth = container.clientWidth - noButton.clientWidth;
    const containerHeight = container.clientHeight - noButton.clientHeight;

    const randomX = Math.random() * containerWidth;
    const randomY = Math.random() * containerHeight;

    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});