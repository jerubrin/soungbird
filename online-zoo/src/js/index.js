import '../style/main.scss'

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
let activeIndex = null

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
    activeIndex = 2
    console.log("activeIndex=", activeIndex)
    console.log("priceList=", priceList)

    for(let dot of priceList) {
        dot.onclick = e => onSelect(e)
    }
    for(let price of priceList2) {
        price.onclick = e => onSelect(e)
    }
    
}

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
    console.log(e.srcElement)
    let index = findIndexByEl(priceList, e.srcElement)
    if (index < 0) index = findIndexByEl(priceList2, e.srcElement)

    priceList[activeIndex].classList.remove('donation__dot_active')
    priceList2[activeIndex].classList.remove('donation__money-text_active')
    priceList[index].classList.add('donation__dot_active')
    priceList2[index].classList.add('donation__money-text_active')
    activeIndex = index

    let digit = document.querySelector('.donation__digit')

    switch(activeIndex) {
        case 0: digit.textContent = 20 
        break;
        case 1: digit.textContent = 8
        break;
        case 2: digit.textContent = 4
        break;
        case 3: digit.textContent = 2
        break;
        case 4: digit.textContent = 1
        break;
        case 5: digit.textContent = 0.5
        break;
        case 6: digit.textContent = 0.25
        break;
        default: digit.textContent = 0
    }
}