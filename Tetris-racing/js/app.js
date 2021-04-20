const addEvent = (selector, event, func) => {
    const elements = document.querySelectorAll(selector);

    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(event, func)
    }

    return elements;
}

const random = () => {
    return Math.floor(Math.random() * (1 - 0 + 1)) + 0;
}


const config = {
    car: {
        w: 100,
        pos: {
            left: true
        }
    },
    carComp: {
        pos: {
            left: true
        }
    }
}

const carComp = document.querySelector('.car-comp');


let fromTop = 0;
let n = 0; // 7-de toqqusur
let timeout = 300;
document.querySelector('button').addEventListener('click', () => {
    let level = prompt('Select your level :');
    if (level < 0) {
        alert('Enter number more than zero ....');
    } else {
        timeout = Number(level);
    }
})


const move = setInterval(() => {
    fromTop += 50;
    n++;
    if (carComp.classList.contains('right-start')) {
        config.carComp.pos.left = false;
    } else {
        config.carComp.pos.left = true;
    }
    carComp.style.top = `${fromTop}px`;
    // toqqusmani yoxla)
    console.log(config.car.pos.left)
    console.log(config.carComp.pos.left)
    if (fromTop > 300 && config.car.pos.left == config.carComp.pos.left) {
        console.log(config.car.pos.left)
        console.log(config.carComp.pos.left)
        clearInterval(move);
        document.querySelector('.end').style.opacity = 1;
        return false;
    }

    if (fromTop > 450) {
        fromTop = -100;
        carComp.classList.remove('animate');
        let randNum = random();
        if (randNum == 1) {
            carComp.classList.add('right-start');
        } else {
            carComp.classList.remove('right-start');
        }
    }
}, timeout);


addEvent('body', 'keydown', e => {
    car.style.transform = 'rotate(0deg)'
    if (e.keyCode === 39) { // right
        car.style.left = config.car.w + 10 + 'px';
        car.style.transform = 'rotate(45deg)';
        config.car.pos.left = false;

    } else if (e.keyCode === 37) { // left
        car.style.left = 0;
        car.style.transform = 'rotate(-45deg)'
        config.car.pos.left = true;
    }
});