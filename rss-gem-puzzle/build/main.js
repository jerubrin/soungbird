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


/***/ }),

/***/ "./src/js/mylittlefw.js":
/*!******************************!*\
  !*** ./src/js/mylittlefw.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNewElement": () => (/* binding */ createNewElement),
/* harmony export */   "createNewElements": () => (/* binding */ createNewElements)
/* harmony export */ });
// Create new element with one string
// tag_name.class-name.another-class-name.how-many-that-you-need-classes=content
// For example:
// div.main-block.red-color.display-none=this is content inside block
function createNewElement(data){
    let vals = data.split("=")
    let htmlData = vals[0].split('.')
    let _contentData = vals.length > 1 ? vals.filter((_, i) => i != 0).join('=') : ''
    htmlData[0] = htmlData[0].split('').filter(ch => ch != ' ').join('')
    let _name = htmlData[0] == '' ? 'div' : htmlData[0];
    let _classList = htmlData.filter((_, i) => i != 0)
    let element = document.createElement(_name);
    _classList = _classList.map(it => 
        it.split('').filter(ch => ch != ' ').join('')
    )
    _classList.forEach(cls => {element.classList.add(cls)});
    element.innerHTML = _contentData
    return element
}
//The same, but you can use several args for creating element's array
function createNewElements() {
    if(arguments.length == 0) return createNewElement('')
    let args = arguments.length == 1 ? arguments[0] : [...arguments]
    let resArr = [];
    args.forEach(data => {
        resArr.push(
            createNewElement(data)
        )
    })
    return resArr.length == 1 ? resArr[0] : resArr
}

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/* harmony import */ var _js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/mylittlefw.js */ "./src/js/mylittlefw.js");



let gameState = {
    soundOn: true,
    easyMode: false,
    moves: 0,
    time: 0,
    isStarted: false,
    isFinished: true,
    gameArray: [],
    size: 4,
    zeroI: 3,
    zeroJ: 3,
    temporaryPause: false,

    movesNode: null,
    timeNode: null,
    sizeNode: null,

    setFields(moves, time, size) {
        this.movesNode = moves
        this.timeNode = time
        this.sizeNode = size
    },

    setMoves(val) {
        this.movesNode.innerHTML = val
        this.moves = val
    },
    setTime(time) {
        this.time = time
        let str = makeTimeStr(time)
        this.timeNode.innerHTML = str
    },
    start(setRandomPosition) {
        document.querySelector('.start-button').textContent = 'start'
        blureGame(false)
        playButton()
        if (this.isFinished) {
            this.setNewGameArray()
            setRandomPosition()
            this.setTime(0)
            this.setMoves(0)
            this.isStarted = true
            this.temporaryPause = false
            this.isFinished = false
        } else {
            this.isStarted = true
            this.temporaryPause = false
        }
    },
    stop() {
        playButton()
        this.isStarted = false
        if(!this.isFinished) {
            blureGame(true)
            document.querySelector('.start-button').textContent = 'resume'
        }
    },
    setSize(size, refNewSize) {
        playButton()
        this.sizeNode.innerHTML = `Frame size: ${size}x${size}`
        this.size = size
        this.zeroI = size - 1
        this.zeroJ = size - 1
        this.stop()
        this.setTime(0)
        this.setMoves(0)
        this.isFinished = true
        this.setNewGameArray()
        document.querySelector('.start-button').textContent = 'start'
        refNewSize()
    },
    setNewGameArray() {
        let num = 0
        this.gameArray = []
        for(let i = 0; i < this.size; i++){
            this.gameArray.push(new Array(this.size))
            for(let j = 0; j < this.size; j++) {
                num++
                this.gameArray[i][j] = num != this.size**2 ? num : 0
            }
        }
        this.zeroI = this.size - 1
        this.zeroJ = this.size - 1
    },

    sowStartMessage() {
        showMessage('Click "START" button before start moving tiles!')
    },

    moveUp(refreshCorrectBonsPosition, ignoreStart = false){
        if(!this.isStarted && !ignoreStart) {
            this.sowStartMessage()
            return false
        }
        if(this.zeroI == this.size - 1) return false
        playSwitchIt()
        let movingBone = this.gameArray[this.zeroI + 1][this.zeroJ]
        this.gameArray[this.zeroI][this.zeroJ] = movingBone
        this.zeroI++
        this.gameArray[this.zeroI][this.zeroJ] = 0
        if(gameState.isStarted) {this.setMoves(this.moves + 1)}
        refreshCorrectBonsPosition()
        refreshDrag()
        return true
    },
    moveDown(refreshCorrectBonsPosition, ignoreStart = false){
        if(!this.isStarted && !ignoreStart) {
            this.sowStartMessage()
            return false
        }
        if(this.zeroI == 0) return false
        playSwitchIt()
        let movingBone = this.gameArray[this.zeroI - 1][this.zeroJ]
        this.gameArray[this.zeroI][this.zeroJ] = movingBone
        this.zeroI--
        this.gameArray[this.zeroI][this.zeroJ] = 0
        if(gameState.isStarted) {this.setMoves(this.moves + 1)}
        refreshCorrectBonsPosition()
        refreshDrag()
        return true
    },
    moveLeft(refreshCorrectBonsPosition, ignoreStart = false){
        if(!this.isStarted && !ignoreStart) {
            this.sowStartMessage()
            return false
        }
        if(this.zeroJ == this.size - 1) return false
        playSwitchIt()
        let movingBone = this.gameArray[this.zeroI][this.zeroJ + 1]
        this.gameArray[this.zeroI][this.zeroJ] = movingBone
        this.zeroJ++
        this.gameArray[this.zeroI][this.zeroJ] = 0
        if(gameState.isStarted) {this.setMoves(this.moves + 1)}
        refreshCorrectBonsPosition()
        refreshDrag()
        return true
    },
    moveRight(refreshCorrectBonsPosition, ignoreStart = false){
        if(!this.isStarted && !ignoreStart) {
            this.sowStartMessage()
            return false
        }
        if(this.zeroJ == 0) return false
        playSwitchIt()
        let movingBone = this.gameArray[this.zeroI][this.zeroJ - 1]
        this.gameArray[this.zeroI][this.zeroJ] = movingBone
        this.zeroJ--
        this.gameArray[this.zeroI][this.zeroJ] = 0
        if(gameState.isStarted) {this.setMoves(this.moves + 1)}
        refreshCorrectBonsPosition()
        refreshDrag()
        return true
    },
}
gameState.setNewGameArray()

let root = document.body
createGameElement()


//CREATE VISUAL
function createGameElement() {
    let gameDiv = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.game-block')
    createButtonsBlock(gameDiv)
    createStateBlock(gameDiv)
    createMainBlock(gameDiv)
    createSizeBlock(gameDiv)
    createOtherSizesBlock(gameDiv)
    createEasyModeButton(gameDiv)
    root.appendChild(gameDiv)
}

function createEasyModeButton(_root) {
    let text = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('p.text-to-rev=Эта кнопочка для тестирования, если ее активировать, рандом будет менее злой и можно будет легко и быстро собрать пазл.<br>З.Ы.: Все для удобства ревьювера!')
    let button = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('button .up-button .easy-button =Easy mode (off)')
    _root.appendChild(text)
    button.onclick = () => {
        playButton()
        button.classList.toggle('easy-button_active')
        gameState.easyMode = !gameState.easyMode
        button.textContent = `Easy mode (${gameState.easyMode ? 'on' : 'off'})`
    }
    _root.appendChild(button)
}

function createButtonsBlock(_root) {
    let _buttonsRoot = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.buttons-up-block')
    let buttons = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElements)(
        'button .up-button .start-button =Start',
        'button .up-button .stop-button =Pause',
        'button .up-button .save-button =Saves',
        'button .up-button .results-button =Result',
        'button .up-button .sound-button'
    )
    
    buttons.forEach(el => _buttonsRoot.appendChild(el))
    _root.appendChild(_buttonsRoot)
}

function createStateBlock(_root) {
    let _stateBlock = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.state-block')
    let _moves = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.moves-wrapper')
    let _restart = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('a.restart-icon')
    let _time = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.time-wrapper')
    ;(0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElements)('.moves-tittle=Moves:', '.moves-count=0').forEach(el => {
        _moves.appendChild(el)
    })
    ;(0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElements)('.time-tittle=Time:', '.time-count=00:00').forEach(el => {
        _time.appendChild(el)
    })
    _stateBlock.appendChild(_moves)
    _stateBlock.appendChild(_restart)
    _stateBlock.appendChild(_time)

    _root.appendChild(_stateBlock)
}

function createMainBlock(_root) {
    let _game = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.game-field')
    let _gameWrapper = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.game-field__wrapper')
    let bouns = []
    for(let i = 0; i < gameState.size; i++){
        for(let j = 0; j < gameState.size; j++) {
            let str = `.game-field__boun .game-field__${gameState.gameArray[i][j]}=` +
                `${gameState.gameArray[i][j] != 0 ? gameState.gameArray[i][j] : ''}`
            bouns.push(str)
        }
    }
    (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElements)(bouns).forEach(elem => _game.appendChild(elem))
    _root.appendChild(_game)
}

function createSizeBlock(_root) {
    let _size = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.current-size=Frame size: 4x4')
    _root.appendChild(_size)
}

function createOtherSizesBlock(_root) {
    let _othSize = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.other-size-wrapper')
    let _content = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElements)(
        '.other-size-title=Other sizes: ',
        'a.other-size-3=3x3',
        'a.other-size-4=4x4',
        'a.other-size-5=5x5',
        'a.other-size-6=6x6',
        'a.other-size-7=7x7',
        'a.other-size-8=8x8'
    )
    _content.forEach(el => _othSize.appendChild(el))
    _root.appendChild(_othSize)
}

gameState.setFields(
    document.querySelector('.moves-count'),
    document.querySelector('.time-count'),
    document.querySelector('.current-size')
)

//STYLE
function setBonsStyle() {
    let style = document.createElement('style')
    // style.type = 'text/css'
    let steleHD = '@media screen and (min-width: 1280px) {'
    let stylesMain = ''
    let stylesTablet = '@media screen and (max-width: 768px) {'
    let stylePhone = '@media screen and (max-width: 480px) {'
    for(let i = 0; i < gameState.size; i++){
        for(let j = 0; j < gameState.size; j++) {
            stylesMain += 
            `.game-field__pos-${i+1}-${j+1}{
                top: ${i*65 + 5}px; 
                left: ${j*65 + 5}px;
            } `
            stylesTablet += 
            `.game-field__pos-${i+1}-${j+1}{
                top: ${i*45 + 5}px;
                left: ${j*45 + 5}px;
            } `
            stylePhone +=
            `.game-field__pos-${i+1}-${j+1}{
                top: ${i*35 + 5}px;
                left: ${j*35 + 5}px;
            } `
            steleHD +=
            `.game-field__pos-${i+1}-${j+1}{
                top: ${i*80 + 5}px;
                left: ${j*80 + 5}px;
            } `
        }
    }
    steleHD += `.game-field{
            height: calc(80px * ${gameState.size} + 5px);
            width: calc(80px * ${gameState.size} + 5px);
        }
    }`
    stylesMain += `.game-field{
        height: calc(65px * ${gameState.size} + 5px);
        width: calc(65px * ${gameState.size} + 5px);
    }`
    stylesTablet += `
        .game-field{
            height: calc(45px * ${gameState.size} + 5px);
            width: calc(45px * ${gameState.size} + 5px);
        }
    }`
    stylePhone += `
    .game-field{
        height: calc(35px * ${gameState.size} + 5px);
        width: calc(35px * ${gameState.size} + 5px);
    }
}`
    style.innerHTML = stylesMain + "\n" + steleHD + "\n" + stylesTablet + "\n" + stylePhone
    document.getElementsByTagName('head')[0].appendChild(style);
}
setBonsStyle()


//LOGIC
//clicks
document.querySelector('.other-size-3').onclick = () => {
    gameState.setSize(3, refNewSize)
}
document.querySelector('.other-size-4').onclick = () => {
    gameState.setSize(4, refNewSize)
}
document.querySelector('.other-size-5').onclick = () => {
    gameState.setSize(5, refNewSize)
}
document.querySelector('.other-size-6').onclick = () => {
    gameState.setSize(6, refNewSize)
}
document.querySelector('.other-size-7').onclick = () => {
    gameState.setSize(7, refNewSize)
}
document.querySelector('.other-size-8').onclick = () => {
    gameState.setSize(8, refNewSize)
}

function refreshCorrectBonsPosition() {
    for(let i = 0; i < gameState.size; i++){
        for(let j = 0; j < gameState.size; j++) {
            const className = `.game-field__${gameState.gameArray[i][j]}`
            const boneNode = document.querySelector(className)
            boneNode.classList.value = boneNode.classList.value
                .split(' ')
                .filter(cls => !cls.includes('__pos'))
                .join(' ')
            boneNode.classList.add(`game-field__pos-${i+1}-${j+1}`)
            boneNode.onclick = null
            if(i == gameState.zeroI + 1 && j == gameState.zeroJ) {
                boneNode.onclick = (e) => gameState.moveUp(refreshCorrectBonsPosition)
            }
            if(i == gameState.zeroI - 1 && j == gameState.zeroJ) {
                boneNode.onclick = (e) => gameState.moveDown(refreshCorrectBonsPosition)
            }
            if(i == gameState.zeroI && j == gameState.zeroJ + 1) {
                boneNode.onclick = (e) => gameState.moveLeft(refreshCorrectBonsPosition)
            }
            if(i == gameState.zeroI && j == gameState.zeroJ - 1) {
                boneNode.onclick = (e) => gameState.moveRight(refreshCorrectBonsPosition)
            }
        }
    }
    isFinishedGame()
}

function refNewSize() {
    const gameField = document.querySelector('.game-field')
    gameField.innerHTML = ''
    setBonsStyle()
    createMainBlock(gameField)
    refreshCorrectBonsPosition()
}

refreshCorrectBonsPosition()

function setRandomPosition(){
    playShufle()
    const rndSteps = gameState.easyMode ? 6 //RANDOM TEST
        : Math.trunc(Math.random()*100+200) * gameState.size
    for(let k = 0; k < rndSteps; k++){
        const rngDirection = Math.trunc(Math.random()*4+1)
        if(rngDirection === 1) gameState.moveUp(refreshCorrectBonsPosition, true)
        if(rngDirection === 2) gameState.moveDown(refreshCorrectBonsPosition, true)
        if(rngDirection === 3) gameState.moveLeft(refreshCorrectBonsPosition, true)
        if(rngDirection === 4) gameState.moveRight(refreshCorrectBonsPosition, true)
    }
    if(getFinishedArray()) {setRandomPosition()}
}
document.querySelector('.start-button').onclick = () => gameState.start(setRandomPosition)
document.querySelector('.stop-button').onclick = () => gameState.stop()

//TIMERs
setInterval(() => {
    if(gameState.isStarted && !gameState.temporaryPause) {
        gameState.setTime(gameState.time + 1)
    }
}, 1000)



function showMessage(message, hideBack = false) {
    gameState.temporaryPause = true
    const modalWin = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)(`.win-modal.hiding`)
    if(hideBack) modalWin.classList.add('win-modal_clear')
    const winMessage = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)(`.win-message=${message}`)
    modalWin.appendChild(winMessage)
    root.appendChild(modalWin)
    setTimeout(() => {modalWin.classList.remove('hiding')}, 10)
    setTimeout(() => {modalWin.classList.add('hiding')}, 3000)
    setTimeout(() => {
        root.removeChild(modalWin)
        if(!hideBack) gameState.temporaryPause = false
    }, 3600)
}
function showDialogMessage(message, fun, hideBack = false) {
    gameState.temporaryPause = true
    const modalWin = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)(`.win-modal.hiding`)
    if(hideBack) modalWin.classList.add('win-modal_clear')
    const winMessage = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)(`.win-message=${message}`)

    const btnContainer = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.win-buttons')
    const btnConfirm = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('button.win-button.up-button=yes')
    btnConfirm.onclick = () => {hide(fun)}
    const btnCancel = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('button.win-button.up-button=no')
    btnCancel.onclick = hide

    btnContainer.append(btnCancel, btnConfirm)
    winMessage.appendChild(btnContainer)

    modalWin.appendChild(winMessage)
    root.appendChild(modalWin)
    setTimeout(() => {modalWin.classList.remove('hiding')}, 10)

    function hide(fun) {
        playButton()
        modalWin.classList.add('hiding')
        setTimeout(() => {
            root.removeChild(modalWin)
            if(fun) fun()
            if(!hideBack) gameState.temporaryPause = false
        }, 600)
    }
}

function isFinishedGame() {
    if(!gameState.isStarted) return
    const isFinish = getFinishedArray()
    if(isFinish) {
        playVictory()
        localStorage.removeItem('gameStr')
        const winStr = `Hooray! You solved the puzzle in ${makeTimeStr(gameState.time)} and ${gameState.moves} moves!`
        showMessage(winStr)
        addNewScore(createScore(gameState.size, gameState.moves, gameState.time))
        gameState.isFinished = true
        gameState.stop()
    }
}

function getFinishedArray() {
    return gameState.gameArray.flat().reduce((w, c, i) => w && ((c == i + 1) || (c == 0 && i == (gameState.size**2 - 1))), true)
}


//SCORE
// let score = getScore()
function createScore(size, moves, time) {
    const date = new Date()
    return {
        date: date.toLocaleDateString() + ' ' + date.toLocaleTimeString(),
        size: size, 
        moves: moves,
        time: time,
    }
}

function getScore() {
    const resScore = localStorage.getItem('score')
    return resScore ? JSON.parse(resScore) : []
}

function addNewScore(newScore) {
    let score = getScore()
    score.push(newScore)
    localStorage.setItem('score', JSON.stringify(score))
}

document.querySelector('.results-button').onclick = () => displayScore(getScore, gameState.size)

function displayScore(getScore, curSize) {
    if(!gameState.isFinished) {
        blureGame(true)
        gameState.temporaryPause = true
    }
    playButton()
    const modalScore = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)(`.win-modal.hiding`)
    
    const scoreDiv = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.score-block')
    const scoreClose = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.score-block__close')
    scoreClose.onclick = closeScore
    const scoreWrapper = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.score-block__wrapper')
    let titleStr = `RESULT ${curSize}x${curSize}`
    const scoreTitle = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.score-block__title='+titleStr)
    const scoreGrid = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.score-block__grid')
    const scoreLinks = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.score-block__links')
    for(let i = 3; i <= 8; i++) {
        const scoreLink = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)(`a.score-block__link=${i}x${i}`)
        if(curSize == i) {
            scoreLink.classList.add('score-block__link_active')
        } else {
            scoreLink.onclick = () => {
                root.removeChild(modalScore)
                displayScore(getScore, i)
            }
        }
        scoreLinks.appendChild(scoreLink)
    }

    createScoreGrid(scoreGrid, getScore, curSize)
    
    scoreDiv.appendChild(scoreClose)
    scoreDiv.appendChild(scoreTitle)
    scoreWrapper.appendChild(scoreGrid)
    scoreDiv.appendChild(scoreWrapper)
    scoreDiv.appendChild(scoreLinks)
    modalScore.appendChild(scoreDiv)
    root.appendChild(modalScore)
    setTimeout(() => {modalScore.classList.remove('hiding')}, 10)

    //close score
    modalScore.onclick = closeScore
    function closeScore(e) {
        playButton()
        if(e.srcElement == modalScore || e.srcElement == scoreClose) {
            setTimeout(() => {modalScore.classList.add('hiding')}, 30)
            setTimeout(() => {
                root.removeChild(modalScore)
                if(gameState.isStarted && !gameState.isFinished) blureGame(false)
                gameState.temporaryPause = false
            }, 430)
        }
    }
}

function createScoreGrid(_root, getScore, curSize) {
    (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElements)(
        '.grid-header',
        '.grid-header=DATE',
        '.grid-header=SIZE',
        '.grid-header=TIME',
        '.grid-header=MOVES',
    ).forEach(header => _root.appendChild(header))
    let localScore = getScore()
    localScore = localScore.sort((a, b) => a.time - b.time).filter(it => it.size == curSize).filter((_, i) => i < 10)
    localScore.forEach((scoreItem, i) => {
        const timeStr = makeTimeStr(scoreItem.time)
        ;(0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElements)(
            `.grid-element=${i + 1}`,
            `.grid-element=${scoreItem.date}`,
            `.grid-element=${scoreItem.size}x${scoreItem.size}`,
            `.grid-element=${timeStr}`,
            `.grid-element=${scoreItem.moves}`,
        ).forEach(elem => _root.appendChild(elem))
    })
}

function makeTimeStr(time) {
    const m = Math.trunc(time / 60)
    const s = Math.trunc(time % 60)
    return '' + (m > 9 ? m : '0' + m) + ':' + (s > 9 ? s : '0' + s)
}

//DRAG AND DROP
refreshDrag()
function refreshDrag() {
    document.querySelectorAll('.game-field__boun').forEach(el => {
        el.setAttribute('draggable', false)
    })
    const zi = gameState.zeroI + 1
    const zj = gameState.zeroJ + 1
    const zero = document.querySelector(`.game-field__pos-${zi}-${zj}`)
    const top = document.querySelector(`.game-field__pos-${zi-1}-${zj}`)
    const bottom = document.querySelector(`.game-field__pos-${zi+1}-${zj}`)
    const left = document.querySelector(`.game-field__pos-${zi}-${zj-1}`)
    const right = document.querySelector(`.game-field__pos-${zi}-${zj+1}`)

    let dropMove = 0;
    
    zero.ondrop = drop
    function drop(e) {
        if(dropMove === 1) {gameState.moveDown(refreshCorrectBonsPosition)}
        if(dropMove === 2) {gameState.moveUp(refreshCorrectBonsPosition)}
        if(dropMove === 3) {gameState.moveRight(refreshCorrectBonsPosition)}
        if(dropMove === 4) {gameState.moveLeft(refreshCorrectBonsPosition)}
    }
    zero.ondragover = (e) => { e.preventDefault() }

    new Array(top, bottom, left, right).forEach((el, i) => {
        if(el) {
            el.setAttribute('draggable', true)
            el.ondragstart = (e) => {
                dropMove = i + 1
                setTimeout(() => {
                    el.classList.add('display-none')
                }, 1);
            }
            el.ondrag = (e) => { e.preventDefault() }
            el.ondragend = (e) => {
                setTimeout(() => {
                    el.classList.remove('display-none')
                    dropMove = 0
                }, 10);
            }
        }
    })
}

//SOUND

const soundButton = new Audio('src/assets/sound/button.mp3')
const soundMessage = new Audio('src/assets/sound/message.mp3')
const soundShufle = new Audio('src/assets/sound/shufle.mp3')
const soundSwitch1 = new Audio('src/assets/sound/switch-1.mp3')
const soundSwitch2 = new Audio('src/assets/sound/switch-2.mp3')
const soundVictory = new Audio('src/assets/sound/victory.mp3')

let curSwitch = true
function playButton() {
    if(!gameState.soundOn) return
    soundButton.currentTime = 0
    try{soundButton.play()}catch(e){return}
}
function playMessage() {
    if(!gameState.soundOn) return
    soundMessage.currentTime = 0
    try{soundMessage.play()}catch(e){return}
}
function playShufle() {
    if(!gameState.soundOn) return
    soundButton.currentTime = 0
    try{soundShufle.play()}catch(e){return}
}
function playSwitchIt() {
    if(!gameState.soundOn) return
    try{curSwitch ? soundSwitch1.play() : soundSwitch2.play()}catch(e){return}
    curSwitch = !curSwitch
}
function playVictory() {
    if(!gameState.soundOn) return
    soundButton.currentTime = 0
    try{soundVictory.play()}catch(e){return}
}

document.querySelector('.sound-button').onclick = function(e) {
    this.classList.toggle('sound-button_off')
    gameState.soundOn = !gameState.soundOn
    playButton()
    localStorage.setItem('soundOn', gameState.soundOn)
}
gameState.soundOn = localStorage.getItem('soundOn') == 'true'
if(!gameState.soundOn) document.querySelector('.sound-button').classList.toggle('sound-button_off')

//save func
document.querySelector('.save-button').onclick = savePopup

function savePopup() {
    playButton()
    if(!gameState.isFinished) {
        blureGame(true)
        gameState.temporaryPause = true
    }
    const _popup = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.saves-block')
    const _popupWrapper = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.saves-block__wrapper')
    const _popupTitle = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.saves-block__title=saves')
    
    const _popupSlotWrapper = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.slots')
    createSlots(_popupSlotWrapper)
    const _popupClose = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.saves-block__close')

    _popupWrapper.appendChild(_popupClose)
    _popupWrapper.appendChild(_popupTitle)
    _popupWrapper.appendChild(_popupSlotWrapper)
    _popup.appendChild(_popupWrapper)
    _popup.onclick = (e) => {if(e.target == _popup) closeWindow(_popup)}
    _popupClose.onclick = () => {closeWindow(_popup)}
    root.append(_popup)
}
function closeWindow(win) {
    if(gameState.isStarted && !gameState.isFinished) blureGame(false)
    gameState.temporaryPause = false
    playButton()
    root.removeChild(win)
}
function createSlots(wrapper) {
    for(let num = 0; num < 4; num++) {
        const _slot = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.slots__slot')
        let dataLS = localStorage.getItem("gameStr_"+num)
        if(dataLS) {
            let data = JSON.parse(dataLS)
            const _date = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.slots__date='
                +data.date.split('').filter(ch => ch != ',').join('')
                )
            const _miniGrid = createMiniGrid(JSON.parse(data.gameArray))
            const _size = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)(`.slots__size=${data.size}x${data.size}`)
            const _buttons = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.slots__buttons')
            const _removeBtn = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('button.slots__remove')
            const _resaveBtn = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('button.slots__resave')
            _buttons.append(_removeBtn, _resaveBtn)
            _slot.append(_date, _miniGrid, _size, _buttons)
            _slot.onclick = (e) => {
                playButton()
                if (e.target == _removeBtn) {
                    removeSlot(num, wrapper, createSlots);
                    return
                }
                if (e.target == _resaveBtn) {
                    resaveToSlot(num, wrapper, createSlots);
                    return
                }
                loadProgress(num)
            }
        } else {
            const _empty = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.slots__empty=empty')
            _slot.classList.add('slots__slot_empty')
            _slot.appendChild(_empty)
            _slot.onclick = () => {playButton(); saveToSlot(num); rerender(wrapper, createSlots)}
        }
        wrapper.appendChild(_slot)
    }
}
function createMiniGrid(arr) {
    const _grid = (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.mini-grid.mini-grid_size_'+arr.length)
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++) {
            const _item = arr[i][j] != 0 ? 
                (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.mini-grid__item='+(arr[i][j])) :
                (0,_js_mylittlefw_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.mini-grid__item_none')
            _grid.append(_item)
        }
    }

    return _grid
}
function rerender(wrapper, func) {
    wrapper.innerHTML = ''
    func(wrapper)
}
function removeSlot(num, wrapper, func) {
    showDialogMessage(
        'Are you realy want to delete this save?', 
        () => {
            localStorage.removeItem("gameStr_"+num)
            rerender(wrapper, func)
        },
        true
    )
}
function resaveToSlot(num, wrapper, func) {
    showDialogMessage(
        'Are you want to rewrite this slot with current game?', 
        () => {
            saveToSlot(num)
            rerender(wrapper, func)
        },
        true
    )
}
function saveToSlot(num) {
    let gameStr = JSON.stringify(
        {
            soundOn: gameState.soundOn,
            isFinished: gameState.isFinished,
            moves: gameState.moves,
            time: gameState.time,
            size: gameState.size,
            gameArray: JSON.stringify(gameState.gameArray),
            zeroI: gameState.zeroI,
            zeroJ: gameState.zeroJ,
            isStarted: gameState.isStarted,
            date: new Date().toLocaleString()
        }
    )
    localStorage.setItem("gameStr_"+num, gameStr)
    showMessage(`Progress saved to slot #${num+1}!`, true)
    playMessage()
}

function loadProgress(num) {
    let res = localStorage.getItem("gameStr_"+num)
    if(res) {
        const newGameState = JSON.parse(res)
        gameState.setSize (newGameState.size, refNewSize)
        gameState.soundOn = newGameState.soundOn
        gameState.isFinished = newGameState.isFinished
        gameState.setMoves(newGameState.moves)
        gameState.setTime(newGameState.time)
        gameState.gameArray = JSON.parse(newGameState.gameArray)
        gameState.zeroI = newGameState.zeroI
        gameState.zeroJ = newGameState.zeroJ
        if(newGameState.isStarted) gameState.start(() => {})
        refreshCorrectBonsPosition()
        refreshDrag()
        closeWindow(root.children[1])
        showMessage("Game progress has been loading...")
        playMessage()
    }
}

setRandomPosition()

//Restart
document.querySelector('.restart-icon').onclick = () => {
    gameState.stop()
    gameState.isFinished = true
    gameState.setNewGameArray()
    gameState.start(setRandomPosition)
}

//blure
function blureGame(isBlure) {
    document.querySelectorAll('.game-field__boun').forEach(elem => {
        isBlure ? 
        elem.classList.add('game-field__blure') :
        elem.classList.remove('game-field__blure')
    })
}
})();

/******/ })()
;
//# sourceMappingURL=main.js.map