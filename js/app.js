'use strict';

const list = document.querySelector('.catalog');
const next = document.querySelector('.sliders__right');
const prev = document.querySelector('.sliders__left');
const card = document.querySelector('.catalog_item');
const cardWidth = card.offsetWidth;
const getprop = window.getComputedStyle(list, null).getPropertyValue('gap');
const prop = getprop.split('px');
const numProp = +prop[0];


window.onscroll = function getScrollPercent() {
    let scroll = document.querySelector('.scroll-green')

    var h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    scroll.style.width = `${(h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100}%`
    return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100
}

let position = 0;

function move(shift) {
    const count = list.children.length;

    position += shift;
    next.disabled = position >= count - 1;
    prev.disabled = position <= 0;
    position = position % count;

    if (getprop === 'normal') {
        list.style.transform = `translateX(${(-position * cardWidth)}px)`;
    }

    list.style.transform = `translateX(${(-position * (cardWidth + numProp))}px)`;
}

next.addEventListener('click', () => {
    move(1);
});

prev.addEventListener('click', () => {
    move(-1);
});


function dropDownFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.querySelector('.dropbtn').classList.toggle("show");
}

function popupFunction() {
    document.getElementById("mypopup").classList.toggle("showFlex");
    document.querySelector('.popupbtn').classList.toggle("showFlex");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }

    if (!event.target.matches('.popupbtn')) {
        let dropdowns = document.getElementsByClassName("popup-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('showFlex')) {
                openDropdown.classList.remove('showFlex');
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const textChangeElement = document.getElementById('textChange');
    const sections = document.querySelectorAll('.section');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: [0.3]
    };

    const callback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                switch (sectionId) {
                    case 'vorteile':
                        textChangeElement.textContent = 'Allgemeine Vorteile lorem ipsum dolor';
                        break;
                    case 'pharma':
                        textChangeElement.textContent = 'Eine perfekte Hülle für jede Pharma-Anwendung';
                        break;
                    case 'example':
                        textChangeElement.textContent = 'Aus bestem Hause: Beispielhafte BFS-Lösungen für die Pharmabranche';
                        break;
                    case 'probieren':
                        textChangeElement.textContent = 'Probieren geht über Studieren: Jetzt Testkit bestellen!';
                        break;
                    case 'onestop':
                        textChangeElement.textContent = 'One-Stop-Partner haben mehr zu bieten';
                        break;
                    case 'faq':
                        textChangeElement.textContent = 'FAQ lorem ipsum dolor';
                        break;
                    default:
                        textChangeElement.textContent = 'Allgemeine Vorteile lorem ipsum dolor';
                }
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});