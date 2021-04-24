const findLetter = (elem) => {
    let columnCount = -1;
    elem.forEach(item => {
        item.addEventListener('click', () => {
            if (document.querySelector('.current-letter').innerText == '') {
                alert('First think a letter ...')
                return 0;
            } else {
                document.querySelector('.letter').innerText = item.innerText;
                //checkFall(columnCount)
                if (document.querySelector('.letter').innerText == document.querySelector('.current-letter').innerText) {
                    document.querySelector('.text span').innerText = '=';
                    document.querySelector('.overlay img').setAttribute('src', '/Hangman/you-win-neon-text-sign_118419-1005.jpg')
                    document.querySelector('.overlay').style.display = 'block';
                } else {
                    document.querySelector('.text span').innerText = '≠';
                    columnCount++;
                    if (columnCount == 0) {
                        alert('yaxsi fikirles yoxsa basin dagilacaq :)')
                    }
                    document.querySelectorAll('.helpers span')[0].addEventListener('click', () => {
                        document.querySelector('.current-letter').setAttribute('style', 'display: block !important;')
                    })

                    document.querySelector('.container').removeChild(document.querySelectorAll('.column')[0])

                    if (document.querySelectorAll('.column').length == 0) {
                        document.querySelector('.rock').setAttribute('style', 'animation:none; bottom:27%;')
                        setTimeout(() => {
                            document.querySelector('.overlay').style.display = 'block';
                        }, 800);
                    }
                }
            }
        })
    })
}

const helpers = () => {
    document.querySelectorAll('.helpers span').forEach(elem => {
        elem.addEventListener('click', () => {
            if (elem.innerText == 'Show Letter') {

            } else if (elem.innerText == 'Always true') {
                if (document.querySelector('.letter').innerText !== document.querySelector('.current-letter').innerText) {
                    columnCount == 0;
                }
            }
        })
    })
}

document.querySelector('.think').addEventListener('click', () => {
    let a = prompt('Enter your secret letter...');
    let letters = document.querySelectorAll('.letters span');
    if ((a >= 'a' && a <= 'z') || (a >= 'A' && a <= 'Z')) {
        document.querySelector('.current-letter').innerText = a.toUpperCase();
    } else {
        alert('Enter the letter...');
    }
    findLetter(letters);

})

helpers()