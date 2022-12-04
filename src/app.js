const colors = ['green', 'red', 'rgba(133, 122, 200)', '#f15025'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

const getRandomNumber = () => Math.floor(Math.random() * colors.length);

btn.addEventListener('click', () => {
    // Get random number between 0 and color array length
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});
