let images = [{
        count: 1,
        src: 'img/1.png'
    },
    {
        count: 2,
        src: 'img/2.png'
    },
    {
        count: 3,
        src: 'img/3.png'
    },
    {
        count: 4,
        src: 'img/4.png'
    },
    {
        count: 5,
        src: 'img/5.png'
    },
    {
        count: 6,
        src: 'img/6.png'
    }
];

let images1 = [{
        count: 1,
        src: 'img/1.png'
    },
    {
        count: 2,
        src: 'img/2.png'
    },
    {
        count: 3,
        src: 'img/3.png'
    },
    {
        count: 4,
        src: 'img/4.png'
    },
    {
        count: 5,
        src: 'img/5.png'
    },
    {
        count: 6,
        src: 'img/6.png'
    }
];

const randSort = (obj) => {
    obj.sort(() => 0.5 - Math.random());
    return obj
}

/* const randSort1 = () => {
    let num = Math.floor(Math.random() * 6);
    return num
} */

document.querySelector('button').addEventListener('click', () => {
    randSort(images)
    randSort(images1)

    document.querySelector('.left-img').setAttribute('src', images[0].src);
    document.querySelector('.rigth-img').setAttribute('src', images1[0].src);
    document.querySelector('h1').innerText = images[0].count + images1[0].count;


    /*     let rand = randSort1();
        let rand1 = randSort1()
        document.querySelector('.left-img').setAttribute('src', images[rand].src);
        document.querySelector('.rigth-img').setAttribute('src', images1[rand1].src);
        document.querySelector('h1').innerText = images[rand].count + images1[rand1].count; */
})