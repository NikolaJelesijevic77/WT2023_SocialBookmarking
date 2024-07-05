let nextDom = document.getElementById('sled');
let prevDom = document.getElementById('pret');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick = function() {
    pokaziSadrzaj('sled');
}
prevDom.onclick = function() {
    pokaziSadrzaj('pret');
}

let timeRunning = 3000;
let runTimeOut;
let timeAutoNext = 7000;

function autoRun() {
    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
        nextDom.click();
        autoRun(); // Restart the auto run
    }, timeAutoNext);
}

// Start the auto run initially
let runAutoRun = setTimeout(() => {
    nextDom.click();
    autoRun();
}, timeAutoNext);

function pokaziSadrzaj(type) {
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if(type === 'sled') {
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('sled');
    } else {
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('pret');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('sled');
        carouselDom.classList.remove('pret');
    }, timeRunning);

    clearTimeout(runAutoRun);
    autoRun(); // Restart the auto run whenever the user manually changes the slide
}
