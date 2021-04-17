const randomPosition = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const createBounce = () => {
    let count = 0;
    let randY = randomPosition(20, 450)
    let randX = randomPosition(20, 1300);
    let bounce = document.createElement('div');
    bounce.classList.add('bounce');
    bounce.style.top = `${randY}px`;
    bounce.style.left = `${randX}px`;
    document.querySelector('#game').appendChild(bounce);
    let time = setInterval(() => {
        document.querySelector('#game').removeChild(bounce)
        count++;
        if (count == 16) {
            clearInterval(time)
        }
    }, 1000);
}

const winPage = (count) => {
    document.querySelector('#game-page').style.display = 'none';
    document.querySelector('#win-page').style.display = 'block';
    document.querySelector('.win-score').innerText = count;
}

const losePage = (count) => {
    document.querySelector('#game-page').style.display = 'none';
    document.querySelector('#lose-page').style.display = 'block';
    document.querySelector('.lose-score').innerText = count;
}

document.querySelector('.start-button').addEventListener('click', (e) => {
    e.preventDefault();
    let count = 0;
    let selected = 0;
    document.querySelector('.start-page').style.display = 'none';
    document.querySelector('#game-page').style.display = 'block';
    document.querySelector('#game').addEventListener('click', (e) => {
        if (e.target.classList.contains('bounce')) {
            selected++
        }
    })
    let time = setInterval(() => {
        createBounce();
        count++;
        console.log(count);
        console.log(selected);
        if (count == 16) {
            clearInterval(time);
            if (selected == count) {
                winPage(selected);
            } else {
                losePage(selected);
            }
        }
    }, 1000);


})