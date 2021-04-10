/* Blocklarin yaradilmasi */
let mainBlock = document.createElement('div')
let xWin = document.createElement('div')
let winnerText = document.createElement('h1')

/* Classlar teyin olunur */
xWin.classList.add('xWin')
winnerText.classList.add('winnerText')

/* Icleri doldurulur */
xWin.appendChild(winnerText)
document.querySelector('body').appendChild(xWin)
mainBlock.setAttribute('class', 'mainBlock')
for (let i = 0; i < 9; i++) {
    let miniBlock = document.createElement('div')
    miniBlock.setAttribute('class', 'miniBlock')
    mainBlock.appendChild(miniBlock)
}
document.querySelector('body').appendChild(mainBlock)
    /* Gedislerin teyin olunmasi */
let step = 0
mainBlock.addEventListener('click', (e) => {
    if (step % 2 === 0) {
        e.target.innerHTML = 'x'
    } else {
        e.target.innerHTML = 'o'
    }
    step++
    checkWinner()
})

/* Qazanani tapmaq */
const checkWinner = () => {
    let allBlocks = document.querySelector('.mainBlock').children;
    let arr = []
    if (
        (allBlocks[0].textContent === 'x' && allBlocks[1].textContent === 'x' && allBlocks[2].textContent === 'x') ||
        (allBlocks[3].textContent === 'x' && allBlocks[4].textContent === 'x' && allBlocks[5].textContent === 'x') ||
        (allBlocks[6].textContent === 'x' && allBlocks[7].textContent === 'x' && allBlocks[8].textContent === 'x') ||
        (allBlocks[0].textContent === 'x' && allBlocks[3].textContent === 'x' && allBlocks[6].textContent === 'x') ||
        (allBlocks[1].textContent === 'x' && allBlocks[4].textContent === 'x' && allBlocks[7].textContent === 'x') ||
        (allBlocks[2].textContent === 'x' && allBlocks[5].textContent === 'x' && allBlocks[8].textContent === 'x') ||
        (allBlocks[0].textContent === 'x' && allBlocks[4].textContent === 'x' && allBlocks[8].textContent === 'x') ||
        (allBlocks[2].textContent === 'x' && allBlocks[4].textContent === 'x' && allBlocks[6].textContent === 'x')
    ) {
        arr = [...allBlocks]
        winnerText.innerHTML = `Congratulation!!! X is win...`
        xWin.setAttribute('style', 'transform:scale(1);')
        arr.forEach(e => {
            e.innerHTML = 'X'
        });
    } else if (
        (allBlocks[0].textContent === 'o' && allBlocks[1].textContent === 'o' && allBlocks[2].textContent === 'o') ||
        (allBlocks[3].textContent === 'o' && allBlocks[4].textContent === 'o' && allBlocks[5].textContent === 'o') ||
        (allBlocks[6].textContent === 'o' && allBlocks[7].textContent === 'o' && allBlocks[8].textContent === 'o') ||
        (allBlocks[0].textContent === 'o' && allBlocks[3].textContent === 'o' && allBlocks[6].textContent === 'o') ||
        (allBlocks[1].textContent === 'o' && allBlocks[4].textContent === 'o' && allBlocks[7].textContent === 'o') ||
        (allBlocks[2].textContent === 'o' && allBlocks[5].textContent === 'o' && allBlocks[8].textContent === 'o') ||
        (allBlocks[0].textContent === 'o' && allBlocks[4].textContent === 'o' && allBlocks[8].textContent === 'o') ||
        (allBlocks[2].textContent === 'o' && allBlocks[4].textContent === 'o' && allBlocks[6].textContent === 'o')
    ) {
        arr = [...allBlocks]
        winnerText.innerHTML = `Congratulation!!! O is win...`
        xWin.setAttribute('style', 'transform:scale(1);')
        arr.forEach(e => {
            e.innerHTML = 'o'
        });
    }
}