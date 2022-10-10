/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/main.scss */ "./src/style/main.scss");


let email = document.querySelector('input.footer-right__email')
let submitBtn = document.querySelector('button.footer-right__submit-btn')
let form  = document.querySelector('form.footer-right__form')

let form2 = document.querySelector('form.donation__form')
let cost = document.querySelector('input.donation__input-money')
let radio1 = document.querySelector('input.donation__ragio-monthly')
let radio2 = document.querySelector('input.donation__ragio-once')

let isInvalid = false
let isInvalidCost = false

let priceList = document.querySelectorAll('.donation__dot')
let priceList2 = document.querySelectorAll('.donation__money-text')
let activeIndex = 5

email.onfocus = () => {
    if (!isInvalid) {
        email.classList.add('footer-right__email_active')
        submitBtn.classList.add('footer-right__submit-btn_active')
    }
}
email.onblur = () => {
    if (!isInvalid) {
        email.classList.remove('footer-right__email_active')
        submitBtn.classList.remove('footer-right__submit-btn_active')
    }
}
email.oninvalid = () => {
    isInvalid = true;
    email.classList.remove('footer-right__email_active')
    submitBtn.classList.remove('footer-right__submit-btn_active')
    email.classList.add('footer-right__email_mistake')
    submitBtn.classList.add('footer-right__submit-btn_mistake')
}
form.onsubmit = () => {
    isInvalid = false
    email.classList.remove('footer-right__email_active')
    submitBtn.classList.remove('footer-right__submit-btn_active')
    email.classList.remove('footer-right__email_mistake')
    submitBtn.classList.remove('footer-right__submit-btn_mistake')
    email.value = "";
    email.blur()
}

if(form2) {
    cost.onfocus = () => {
        if (!isInvalidCost) {
            cost.classList.add('donation__input-money_active')
        }
    }
    cost.onblur = () => {
        cost.classList.remove('donation__input-money_active')
    }
    cost.oninvalid = () => {
        cost.classList.remove('donation__input-money_active')
        cost.classList.add('donation__input-money_mistake')
        isInvalidCost = true
    }
    radio1.oninvalid = () => {
        cost.classList.remove('donation__input-money_active')
        cost.classList.add('donation__input-money_mistake')
        isInvalidCost = true
    }
    form2.onsubmit = () => {
        cost.classList.remove('donation__input-money_active')
        cost.classList.remove('donation__input-money_mistake')
        setTimeout(() => {
            cost.value = ""
            cost.blur()
            radio1.checked = false
            radio2.checked = true
            isInvalidCost = false
        }, 500)
    }

    //line
    activeIndex = 5

    for(let dot of priceList) {
        dot.onclick = e => onSelect(e)
    }
    for(let price of priceList2) {
        price.onclick = e => onSelect(e)
    }
    
    cost.addEventListener('keydown', e => {
        e.preventDefault()
        let digit = e.keyCode
        if(digit == 8 && cost.value.length > 0) {
            cost.value = cost.value.substr(0,cost.value.length - 1)
        } else {
            digit -= 48
            if (digit > -1 && digit < 10 && cost.value.length < 4) {
                cost.value += digit
            }
        }
        
        if(cost.value.length < 4) cost.value = cost.value.substr(0,4)
        setTimeout(() => {
            if(cost.value == '25') selectCircle(7) 
            else if(cost.value == '50') selectCircle(6) 
            else if(cost.value == '100') selectCircle(5)
            else if(cost.value == '250') selectCircle(4)
            else if(cost.value == '500') selectCircle(3)
            else if(cost.value == '1000') selectCircle(2)
            else if(cost.value == '2000') selectCircle(1)
            else if(cost.value == '5000') selectCircle(0)
            else selectCircle(-1)
        }, 0)
    })

    cost.onclick = (e) => {
        cost.focus()
        cost.selectionStart = cost.value.length
    }
};

function findIndex(list, text) {
    for(let i = 0; i < list.length; i++) {
        if ([...list[i].classList].filter(it => it == text)) {
            return i
        } 
    }
    return -1;
}

function findIndexByEl(list, el) {
    for(let i = 0; i < list.length; i++) {
        if (list[i] == el) {
            return i
        } 
    }
    return -1;
}

function onSelect(e) {
    let index = findIndexByEl(priceList, e.srcElement)
    if (index < 0) index = findIndexByEl(priceList2, e.srcElement)
    selectCircle(index)
}

function selectCircle(index) {
    if(activeIndex >= 0) {
        priceList[activeIndex].classList.remove('donation__dot_active')
        priceList2[activeIndex].classList.remove('donation__money-text_active')
    }
    if(index >= 0) {
        priceList[index].classList.add('donation__dot_active')
        priceList2[index].classList.add('donation__money-text_active')
    }
    activeIndex = index

    let digit = document.querySelector('.donation__digit')

    switch(activeIndex) {
        case 0: digit.textContent = 200
            cost.value = 5000
        break;
        case 1: digit.textContent = 80
            cost.value = 2000
        break;
        case 2: digit.textContent = 40
            cost.value = 1000
        break;
        case 3: digit.textContent = 20
            cost.value = 500
        break;
        case 4: digit.textContent = 10
            cost.value = 250
        break;
        case 5: digit.textContent = 4
            cost.value = 100
        break;
        case 6: digit.textContent = 2
            cost.value = 50
        break;
        case 7: digit.textContent = 1
            cost.value = 25
        default: digit.textContent = cost.value * 4 / 100
    }
}

// BURGER POPUP
const burgerButton = document.querySelector('.header__burger-menu')
const burgerMenu = document.querySelector('.popup');
const burgerMenuBack = document.querySelector('.popup-back');
const burgerMenuLinks = [...document.querySelectorAll('.popup a')];

const hideMenu = () => {
    burgerMenu.classList.add('invisible-block')
    setTimeout(() => {
        burgerMenu.classList.add('display-none')
    }, 500)
}

const showMenu = () => {
    burgerMenu.classList.remove('display-none')
    setTimeout(() => {
        burgerMenu.classList.remove('invisible-block')
    }, 1)
}

burgerMenuBack.onclick = hideMenu
burgerMenuLinks.forEach(it => it.onclick = hideMenu)
burgerButton.onclick = showMenu


//SLIDER
const timeoutValue = 800

const btnLeft = document.querySelectorAll('.left-button')
const btnRight = document.querySelectorAll('.right-button')
const cardsContainer = document.querySelector('.cards__slider-wrapper')
const cardsZeroClass = 'cards_zero';

function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
  }

const cardTemplate = (number, title, text, isBanana) => `<div class="cards__item">
<div class="cards__item-in">
    <div class="cards__picture card-picture-${number}"></div>
        <div class="cards__contet">
            <div class="cards__cntent-text">
                <h4 class="cards__tittle">${title}</h4>
                <p class="cards__text">${text}</p>
            </div>
            <div class="cards__icon icon-${isBanana ? 'banana' : 'meat'}"></div>
        </div>
    </div>
</div>`

const cardsArray = [
    cardTemplate(1, 'giant Pandas', 'Native to Southwest China', true),
    cardTemplate(2, 'Eagles', 'Native to South America', false),
    cardTemplate(3, 'Gorillas', 'Native to Congo', true),
    cardTemplate(4, 'Two-toed Sloth', 'Mesoamerica, South America', true),
    cardTemplate(5, 'cheetahs', 'Native to Africa', false),
    cardTemplate(6, 'Penguins', 'Native to Antarctica', false),
    cardTemplate(7, 'Alligators', 'Native to Southeastern U.S.', false),
    cardTemplate(8, 'Gorillas', 'Native to Congo', true),
    cardTemplate(9, 'Caucasian Wolf', 'Native to Caucasian', false),
    cardTemplate(10, 'Kangaroo', 'Native to Australia', true),
    cardTemplate(11, 'Macaque', 'Native to Thailand', true),
    cardTemplate(12, 'Wildebeest', 'Native to Africa', true),
    cardTemplate(13, 'Zebra', 'Native to Africa', true),
    cardTemplate(14, 'Indian elephant', 'Native to India', true),
    cardTemplate(15, 'Brown Bear', 'Native to Siberia', false),
    cardTemplate(16, 'Lion', 'Native to Africa', false),
    cardTemplate(17, 'Grizzly', 'Native to North America', false),
    cardTemplate(18, 'Siberian Tiger', 'Native to Siberia', false),
    cardTemplate(19, 'Fox', 'Native to Tundra', false),
    cardTemplate(20, 'African elephant', 'Native to Africa', true),
    cardTemplate(21, 'Giraffe', 'Native to Africa', true),
    cardTemplate(22, 'Koala', 'Native to Australia', true),
    cardTemplate(23, 'Lemur', 'Native to Madagascar', true),
    cardTemplate(24, 'Porcupine', 'Native to North America', true),
    cardTemplate(25, 'Ant-eater', 'Native to South America', true),
    cardTemplate(26, 'Tasmanian Devil', 'Native to Australia', false),
//    cardTemplate(27, 'Panda', 'Native to China', true),
    cardTemplate(28, 'Meerkat', 'Native to South Africa', true),
    cardTemplate(29, 'Mountain Goat', 'Native to North America', true),
    cardTemplate(30, 'Camel', 'Native to Asia', true),
    cardTemplate(31, 'Saiga', 'Native to Asia', true),
    cardTemplate(32, 'Lama', 'Native to South America', true),
    cardTemplate(33, 'Arctic Fox', 'Native to Arctic', false),
    cardTemplate(34, 'Reindeer', 'Native to Russia', true),
    cardTemplate(35, 'Elk', 'Native to North Hemisphere', true),
    cardTemplate(36, 'Polar Bear', 'Native to Arctic', false),
    cardTemplate(37, 'Rhinoceros', 'Native to Africa', true),
    cardTemplate(38, 'Skunk', 'Native to North America', true),
    cardTemplate(39, 'Raccoon', 'Native to North America', true),
    cardTemplate(40, 'Armadillo', 'Native to South America', false),
]

for (let i = 0; i < 3; i++) {
    let cardsHolder = cardsArray
        .sort((a, b) => Math.random()*10 - 5)
        .sort((a, b) => Math.random()*10 - 5)
        .sort((a, b) => Math.random()*10 - 5)
        .slice(0, 6)

    let cardsStr = ''
    cardsHolder.forEach(it => cardsStr += it +'\n')
    cardsContainer.innerHTML += '<div class="cards">' + cardsStr + '</div>\n'
    refreshHDSD(cardsContainer)
}

function refreshHDSD(cardsContainer) {
    for (let it of cardsContainer.children) {
        it.children[4].classList.add('sd-hd-only');
        it.children[5].classList.add('sd-hd-only');
    }
}

let readyToAdd = true
let lockMovingCards = false;

function turnRight() {
    if (lockMovingCards) return
        lockMovingCards = true
    if(readyToAdd) {
        for (let i = 0; i < 2; i++) {
            let cardsStr = ''
            let cardsHolder = cardsArray
                .sort((a, b) => Math.random()*10 - 5)
                .sort((a, b) => Math.random()*10 - 5)
                .sort((a, b) => Math.random()*10 - 5)
                .slice(0, 6)
            
            cardsHolder.forEach(it => cardsStr += it +'\n')
            cardsContainer.appendChild(
                createElementFromHTML(`<div class="cards ${cardsZeroClass}">` + cardsStr + '</div>\n')
            )
            cardsContainer.children[0].children[4].classList.add('sd-hd-only')
            cardsContainer.children[0].children[5].classList.add('sd-hd-only')
            readyToAdd = false
        }
        setTimeout(() => {
            document.querySelectorAll('.'+cardsZeroClass)
                .forEach(it => it.classList.remove(cardsZeroClass))
        }, 5)
        readyToAdd = false;
    } else {
        cardsContainer.children[0].classList.add(cardsZeroClass)
        cardsContainer.children[1].classList.add(cardsZeroClass)
        setTimeout(() => {
            let firstChild = cardsContainer.children[0]
            let secondChild = cardsContainer.children[1]
            cardsContainer.removeChild(firstChild)
            cardsContainer.removeChild(secondChild)
            lockMovingCards = false
        }, timeoutValue + 5);
        readyToAdd = true;
    }

    refreshHDSD(cardsContainer)
    setTimeout(() => {
        lockMovingCards = false
    }, timeoutValue + 5);
}

const turnLeft = () => {
    if (lockMovingCards) return
        lockMovingCards = true
    if(readyToAdd) {
        for (let i = 0; i < 2; i++) {
            let cardsStr = ''
            let cardsHolder = cardsArray
                .sort((a, b) => Math.random()*10 - 5)
                .sort((a, b) => Math.random()*10 - 5)
                .sort((a, b) => Math.random()*10 - 5)
                .slice(0, 6)
            
            cardsHolder.forEach(it => cardsStr += it +'\n')
            cardsContainer.prepend(
                createElementFromHTML(`<div class="cards ${cardsZeroClass}">` + cardsStr + '</div>\n')
            )
            cardsContainer.children[0].children[4].classList.add('sd-hd-only')
            cardsContainer.children[0].children[5].classList.add('sd-hd-only')
            readyToAdd = false
        }
        setTimeout(() => {
            document.querySelectorAll('.'+cardsZeroClass)
                .forEach(it => it.classList.remove(cardsZeroClass))
        }, 5)
        readyToAdd = false;
    } else {
        cardsContainer.children[3].classList.add(cardsZeroClass)
        cardsContainer.children[4].classList.add(cardsZeroClass)
        setTimeout(() => {
            let firstChild = cardsContainer.children[4]
            let secondChild = cardsContainer.children[3]
            cardsContainer.removeChild(firstChild)
            cardsContainer.removeChild(secondChild)
            lockMovingCards = false
        }, timeoutValue + 5);
        readyToAdd = true;
    }

    refreshHDSD(cardsContainer)
    setTimeout(() => {
        lockMovingCards = false
    }, timeoutValue + 5);
}

btnLeft.forEach(it => it.onclick = turnLeft)
btnRight.forEach(it => it.onclick = turnRight)


//FEEDBACKS
let feedbacksWrapper = document.querySelector('.testimonials__feedbacks-wrapper')
let sliderInput = document.querySelector('input.progress-input')

const feedbackTemplate = (number, name, loacation, date, text) => `<div class="feedbacks__card-back">
    <div class="feedbacks__card">
        <div class="feedbacks__top-card">
            <div class="feedbacks__avatar avatar-${number}"></div>
            <div class="feedbacks__name-and-local">
                <div class="feedbacks__user-name">${name}</div>
                <div class="feedbacks__location">
                    <span>${loacation}</span>
                    <span class="feedbacks__dot">•</span>
                    <span>${date}</span>
                </div>
            </div>
        </div>
        <div class="feedbacks__text-card">
            ${text}
        </div>
    </div>
</div>`

const textsLorem = [
    `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat illum suscipit dolore! Delectus repellat obcaecati ex doloremque iusto, est autem deserunt, molestiae consequuntur distinctio laborum blanditiis dolores exercitationem recusandae expedita.`,
    `Quod, vero. Temporibus molestiae, voluptatem itaque quia omnis iusto aperiam nulla suscipit doloremque inventore porro repellendus, soluta ut delectus iure, quas voluptate.`,
    `Eos eius hic eaque, inventore eum pariatur nihil architecto accusamus alias dolores. Aut, at. Ut cumque quibusdam veritatis voluptas, sunt ipsam provident!`,
    `Dignissimos quod iure fuga nobis adipisci in voluptatum architecto, odit excepturi repellat qui quam possimus, esse laborum soluta perspiciatis velit optio numquam.`,
    `Non asperiores quos distinctio quia autem, voluptatem cupiditate magnam sed corrupti, consectetur vel id saepe earum. Repudiandae cum minima dignissimos doloribus mollitia.`,
    `Odit velit amet, vitae numquam, quis sapiente minima, eligendi incidunt dolorum nobis accusamus impedit nesciunt earum excepturi perspiciatis iure ipsa ab vel!`,
    `Nam voluptas aperiam veniam architecto, assumenda totam quam sunt debitis sapiente quis? Suscipit consectetur natus sit facilis non accusantium veritatis, aliquam mollitia!`,
    `Veritatis vel optio molestias commodi repellendus blanditiis, dicta esse ipsam sunt. Quas, temporibus perferendis velit omnis culpa tempore iusto odit? Dolorem, ratione!`,
    `Nobis, rem repudiandae! Voluptates repellat odit, eius illo eveniet reiciendis error aliquam asperiores, accusantium autem culpa corporis, nisi assumenda voluptas voluptatem magni!`,
    `Porro, hic. Dolor exercitationem ratione, fugit eos iusto dolorum repellat eligendi quod tenetur a quis molestiae ullam, quisquam aliquid doloremque esse at!`,
    `Ab soluta est laboriosam odit maiores libero quos ullam commodi! Placeat alias vel ratione at labore sint asperiores pariatur voluptates mollitia magnam.`,
]

const minusDay = days => {
    let date = new Date()
    date.setDate(date.getDate() - days)
    return date.toLocaleDateString()
}

const dateList = [
    "Today",
    "Yesterday",
    minusDay(2),
    minusDay(3),
    minusDay(4),
    minusDay(5),
]

const getRandomText = () => textsLorem[Math.trunc(Math.random()*10)]+'<br>'+textsLorem[Math.trunc(Math.random()*10)]+'<br>'+textsLorem[Math.trunc(Math.random()*10)]+'<br>'+textsLorem[Math.trunc(Math.random()*10)]
const getRandomDate = () => dateList[Math.trunc(Math.random()*5)]

const feedbacksList = [
    feedbackTemplate(1, "Michael John", "Austria", getRandomDate(), getRandomText()),
    feedbackTemplate(2, "Oska Samborsky", "Russia", getRandomDate(), getRandomText()),
    feedbackTemplate(3, "Fredericka Michelin", "UK", getRandomDate(), getRandomText()),
    feedbackTemplate(4, "Mila Riksha", "USA", getRandomDate(), getRandomText()),
    feedbackTemplate(5, "Yona Orli", "Israel", getRandomDate(), getRandomText()),
    feedbackTemplate(6, "Iokaste Pontus", "Greece", getRandomDate(), getRandomText()),
    feedbackTemplate(7, "Nihal Firuze", "Turkey", getRandomDate(), getRandomText()),
    feedbackTemplate(8, "Johannes Laila", "Denmark", getRandomDate(), getRandomText()),
    feedbackTemplate(9, "Madeleine Pontus", "Sweden", getRandomDate(), getRandomText()),
    feedbackTemplate(10, "Gbemisola Wekesa", "South Africa", getRandomDate(), getRandomText()),
    feedbackTemplate(11, "Ayaan Kyō", "Japan", getRandomDate(), getRandomText()),
].sort((a, b) => Math.random()*10 - 5)
    .sort((a, b) => Math.random()*10 - 5)
    .sort((a, b) => Math.random()*10 - 5)
    .join('\n');

feedbacksWrapper.innerHTML = feedbacksList;

//sliderInput.
sliderInput.addEventListener('input', function () {
    const classTemplate = "feedbacks__wrapper_margin_"
    const className = classTemplate + sliderInput.value
    for (let i = 0; i < 9; i++) {
        feedbacksWrapper.classList.remove(classTemplate+i)
    }
    feedbacksWrapper.classList.add(className)
}, false);

console.log(feedbacksWrapper.children)

let isFeedbackOpened = false

for (let it of feedbacksWrapper.children) {
    it.onclick = e => {
        console.log(it)
        const number = it.querySelector('.feedbacks__avatar').classList[1]
        const name = it.querySelector('.feedbacks__user-name').textContent
        const loacation = it.querySelector('.feedbacks__location').children[0].textContent
        const date = it.querySelector('.feedbacks__location').children[2].textContent
        const text = it.querySelector('.feedbacks__text-card').innerHTML

        let newCart = `
            <div class="popup-feedback__top-card">
                <div class="popup-feedback__avatar ${number}"></div>
                <div class="popup-feedback__name-and-local">
                    <div class="popup-feedback__user-name">${name}</div>
                    <div class="popup-feedback__location">
                        <span>${loacation}</span>
                        <span class="popup-feedback__dot">•</span>
                        <span>${date}</span>
                    </div>
                </div>
            </div>
            <div class="popup-feedback__text-card">
                ${text}
            </div>`
        document.querySelector('.popup-feedback__card').innerHTML = newCart
        document.querySelector('.popup-feedback').classList.remove('display-none')
        setTimeout(() => isFeedbackOpened = true, 1)
    }
}

const closeFeedback = e => {
    if(!isFeedbackOpened) return
    document.querySelector('.popup-feedback').classList.add('display-none')
    isFeedbackOpened = false
}

document.querySelector('.popup-feedback .popup-back').onclick = closeFeedback
document.querySelector('.popup-feedback__close').onclick = closeFeedback
})();

/******/ })()
;
//# sourceMappingURL=main.js.map