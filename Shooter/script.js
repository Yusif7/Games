const gameBoard = () => {
    let targetShoot = 0;
    let targetCount = 0;
    for (let i = 0; i < 25; i++) {
        let area = document.createElement('div');
        area.classList.add('area')
        document.querySelector('.container').appendChild(area)
    }
    setInterval(() => {
        addTarget()
        targetCount++;
        document.querySelector('h2').innerText = `Cixan hedeflerin sayi : ${targetCount}`;
    }, 700);
    checkShoot(targetShoot)
}

const rand = () => {
    return Math.floor(Math.random() * 26);
}

const addTarget = () => {
    let random = rand()
    let target = document.querySelectorAll('.area')
    let img = document.createElement('img');
    img.setAttribute('src', '5-2-target-download-png.png')
    target[random].appendChild(img);
    img.setAttribute('data-target', 'target');
    setInterval(() => {
        img.style.display = 'none';
    }, 700);
}

const checkShoot = (count) => {
    document.querySelector('.container').addEventListener('click', (e) => {
        if (e.target.getAttribute('data-target') == 'target') {
            e.target.setAttribute('src', '2-2-target-transparent.png');
            count++
            document.querySelector('h1').innerText = `Degig vurulan hedef sayi : ${count}`;
        }
    })
}
gameBoard()