const cardArray = [{
            name: 'emoji',
            img: 'img/emoji.png'
        },
        {
            name: 'emoji',
            img: 'img/emoji.png'
        },
        {
            name: 'emoji1',
            img: 'img/emoji1.png'
        },
        {
            name: 'emoji1',
            img: 'img/emoji1.png'
        },
        {
            name: 'emoji2',
            img: 'img/emoji2.png'
        },
        {
            name: 'emoji2',
            img: 'img/emoji2.png'
        },
        {
            name: 'emoji3',
            img: 'img/emoji3.png'
        },
        {
            name: 'emoji3',
            img: 'img/emoji3.png'
        },
        {
            name: 'emoji4',
            img: 'img/emoji4.png'
        },
        {
            name: 'emoji4',
            img: 'img/emoji4.png'
        },
        {
            name: 'emoji5',
            img: 'img/emoji5.png'
        },
        {
            name: 'emoji5',
            img: 'img/emoji5.png'
        },
    ]
    // Sdelat randomniy spsiok
cardArray.sort(() => 0.5 - Math.random())
    //create Game Board
const grid = document.querySelector('.grid')
const result = document.querySelector('#result')
    //Massiv pobeditela
let cardsWon = []
    // Vibrannay kartina
let cardChosen = []
    // Data-id kartinki
let cardChosenId = []
const createBoard = () => {
    for (let i = 0; i < cardArray.length; i++) {
        //Sozdayem tag img
        let card = document.createElement('img')
            //Prisvaivaem etomu tegu attribut src
        card.setAttribute('src', 'img/start.png')
            // Zatem prisvaivaem attribut data-id i ego znaceniye
        card.setAttribute('data-id', i)
            //
        card.addEventListener('click', function() {
                // Berem znaceniye attrubita data-id u img na kotoruyu kliknuli 
                let cardId = this.getAttribute('data-id')
                    // Dobavlayem v massiv vibrannuyu kartu cardArray[znaceniye data-id].ima ukazanniye v obyekte cardArray
                cardChosen.push(cardArray[cardId].name)
                    //Dobavlayem znaceniye data-id v massiv
                cardChosenId.push(cardId)
                    // Dyem elementu na kotoriy kliknuli scr="url img ukazannoy v obyekte cardArray"
                this.setAttribute('src', cardArray[cardId].img)
                    // Esli vibrani 2 karti s zaderjkoy v .5s vizivayetsa funkciya
                if (cardChosen.length === 2) {
                    setTimeout(checkForMatch, 500)
                }
            })
            // Sozdanniye kartinki dobavlayutsa v blok s klassom grid
        grid.appendChild(card)
    }
}
const checkForMatch = () => {
    // Vibirayutsa vse elementi
    let cards = document.querySelectorAll('img')
        // Znaceniye data-id pervogo vibrannogo prisvaivayetsa optionOneId
    const optionOneId = cardChosenId[0]
    const optionOneTwo = cardChosenId[1]
        //Esli znaceniye ravni
    if (cardChosen[0] === cardChosen[1]) {
        alert('Iki eyni sekil tapildi')
            //To elementam prisvaivayet uje drugoy url wtobi otmetit wto ona uje vibranna
        cards[optionOneId].setAttribute('src', 'img/checked.png')
        cards[optionOneTwo].setAttribute('src', 'img/checked.png')
            // V massiv dobavlayetsa ima vibrannoy karti
        cardsWon.push(cardChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'img/start.png')
        cards[optionOneTwo].setAttribute('src', 'img/start.png')
        alert('Sekiller uygun deyil. devam...')
    }
    // Srazu obnulayem massivi dla sleduyuwego xoda
    cardChosen = []
    cardChosenId = []
        //Vnutri span tega dobavlayem tekst ukazivayuwiy na dlinu massiva s dvuma kartami
    result.textContent = cardsWon.length
        // Esli dlina massiva cardswon ravana polovine cardarray to znacit igra okoncena
    if (cardsWon.length === cardArray.length / 2) {
        result.textContent = 'Tebrikler! Butun sekiller tapildi'
    }
}
createBoard()