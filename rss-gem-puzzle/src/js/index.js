import '../style/main.scss'
import {createNewElement, createNewElements} from '../js/mylittlefw.js'

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
    let gameDiv = createNewElement('.game-block')
    createButtonsBlock(gameDiv)
    createStateBlock(gameDiv)
    createMainBlock(gameDiv)
    createSizeBlock(gameDiv)
    createOtherSizesBlock(gameDiv)
    createEasyModeButton(gameDiv)
    createAutofillButton(gameDiv)
    root.appendChild(gameDiv)
}

function createEasyModeButton(_root) {
    let text = createNewElement('p.text-to-rev=Эта кнопочка для тестирования, если ее активировать, рандом будет менее злой и можно будет легко и быстро собрать пазл.<br>З.Ы.: Все для удобства ревьювера!')
    let button = createNewElement('button .up-button .easy-button =Easy mode (off)')
    _root.appendChild(text)
    button.onclick = () => {
        playButton()
        button.classList.toggle('easy-button_active')
        gameState.easyMode = !gameState.easyMode
        button.textContent = `Easy mode (${gameState.easyMode ? 'on' : 'off'})`
    }
    _root.appendChild(button)
}

function createAutofillButton(_root) {
    let text = createNewElement('p.text-to-rev=Ну и бонусом автосборщик, чтобы пазл точно собрался ;)<br>(собирает далеко не всегда, но прикольно пазлы крутит)')
    let button = createNewElement('button .up-button .easy-button =Auto-solution')
    _root.appendChild(text)
    button.onclick = () => {
        playButton()
        solution()
    }
    _root.appendChild(button)
}

function createButtonsBlock(_root) {
    let _buttonsRoot = createNewElement('.buttons-up-block')
    let buttons = createNewElements(
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
    let _stateBlock = createNewElement('.state-block')
    let _moves = createNewElement('.moves-wrapper')
    let _restart = createNewElement('a.restart-icon')
    let _time = createNewElement('.time-wrapper')
    createNewElements('.moves-tittle=Moves:', '.moves-count=0').forEach(el => {
        _moves.appendChild(el)
    })
    createNewElements('.time-tittle=Time:', '.time-count=00:00').forEach(el => {
        _time.appendChild(el)
    })
    _stateBlock.appendChild(_moves)
    _stateBlock.appendChild(_restart)
    _stateBlock.appendChild(_time)

    _root.appendChild(_stateBlock)
}

function createMainBlock(_root) {
    let _game = createNewElement('.game-field')
    let _gameWrapper = createNewElement('.game-field__wrapper')
    let bouns = []
    for(let i = 0; i < gameState.size; i++){
        for(let j = 0; j < gameState.size; j++) {
            let str = `.game-field__boun .game-field__${gameState.gameArray[i][j]}=` +
                `${gameState.gameArray[i][j] != 0 ? gameState.gameArray[i][j] : ''}`
            bouns.push(str)
        }
    }
    createNewElements(bouns).forEach(elem => _game.appendChild(elem))
    _root.appendChild(_game)
}

function createSizeBlock(_root) {
    let _size = createNewElement('.current-size=Frame size: 4x4')
    _root.appendChild(_size)
}

function createOtherSizesBlock(_root) {
    let _othSize = createNewElement('.other-size-wrapper')
    let _content = createNewElements(
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
    const modalWin = createNewElement(`.win-modal.hiding`)
    if(hideBack) modalWin.classList.add('win-modal_clear')
    const winMessage = createNewElement(`.win-message=${message}`)
    modalWin.appendChild(winMessage)
    root.appendChild(modalWin)
    setTimeout(() => {modalWin.classList.remove('hiding')}, 10)
    setTimeout(() => {modalWin.classList.add('hiding')}, 3000)
    setTimeout(() => {
        if(modalWin) root.removeChild(modalWin)
        if(!hideBack) gameState.temporaryPause = false
    }, 3600)
}
function showDialogMessage(message, fun, hideBack = false) {
    gameState.temporaryPause = true
    const modalWin = createNewElement(`.win-modal.hiding`)
    if(hideBack) modalWin.classList.add('win-modal_clear')
    const winMessage = createNewElement(`.win-message=${message}`)

    const btnContainer = createNewElement('.win-buttons')
    const btnConfirm = createNewElement('button.win-button.up-button=yes')
    btnConfirm.onclick = () => {hide(fun)}
    const btnCancel = createNewElement('button.win-button.up-button=no')
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
    const modalScore = createNewElement(`.win-modal.hiding`)
    
    const scoreDiv = createNewElement('.score-block')
    const scoreClose = createNewElement('.score-block__close')
    scoreClose.onclick = closeScore
    const scoreWrapper = createNewElement('.score-block__wrapper')
    let titleStr = `RESULT ${curSize}x${curSize}`
    const scoreTitle = createNewElement('.score-block__title='+titleStr)
    const scoreGrid = createNewElement('.score-block__grid')
    const scoreLinks = createNewElement('.score-block__links')
    for(let i = 3; i <= 8; i++) {
        const scoreLink = createNewElement(`a.score-block__link=${i}x${i}`)
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
    createNewElements(
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
        createNewElements(
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
    const _popup = createNewElement('.saves-block')
    const _popupWrapper = createNewElement('.saves-block__wrapper')
    const _popupTitle = createNewElement('.saves-block__title=saves')
    
    const _popupSlotWrapper = createNewElement('.slots')
    createSlots(_popupSlotWrapper)
    const _popupClose = createNewElement('.saves-block__close')

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
    if(win) root.removeChild(win)
}
function createSlots(wrapper) {
    for(let num = 0; num < 4; num++) {
        const _slot = createNewElement('.slots__slot')
        let dataLS = localStorage.getItem("gameStr_"+num)
        if(dataLS) {
            let data = JSON.parse(dataLS)
            const _date = createNewElement('.slots__date='
                +data.date.split('').filter(ch => ch != ',').join('')
                )
            const _miniGrid = createMiniGrid(JSON.parse(data.gameArray))
            const _size = createNewElement(`.slots__size=${data.size}x${data.size}`)
            const _buttons = createNewElement('.slots__buttons')
            const _removeBtn = createNewElement('button.slots__remove')
            const _resaveBtn = createNewElement('button.slots__resave')
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
            const _empty = createNewElement('.slots__empty=empty')
            _slot.classList.add('slots__slot_empty')
            _slot.appendChild(_empty)
            _slot.onclick = () => {playButton(); saveToSlot(num); rerender(wrapper, createSlots)}
        }
        wrapper.appendChild(_slot)
    }
}
function createMiniGrid(arr) {
    const _grid = createNewElement('.mini-grid.mini-grid_size_'+arr.length)
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++) {
            const _item = arr[i][j] != 0 ? 
                createNewElement('.mini-grid__item='+(arr[i][j])) :
                createNewElement('.mini-grid__item_none')
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

//solution
const TOP = 'top'
const BOTTOM = 'bottom'
const LEFT = 'left'
const RIGHT = 'right'

const GAP_TOP = 1
const GAP_BOTTOM = 2
const GAP_LEFT = 3
const GAP_RIGHT = 4

let flatArr = []
let hasSteps = true
let countsIsFinish = false
let actions = []
let actionsLocal = []
let arr = []
let finalArr = []
//loadProgress(0)

// solution()
function solution() {
    countsIsFinish = false
    solStart()
}
var interval = setInterval(() => {
    if(!gameState.isStarted) actions = []
    if(countsIsFinish && gameState.isStarted) nextStep()
    //if(!hasSteps) clearInterval(interval);
}, 80);
function nextStep() {
    let comand = actions.shift()
    if(comand == LEFT) gameState.moveLeft(refreshCorrectBonsPosition)
    if(comand == RIGHT) gameState.moveRight(refreshCorrectBonsPosition)
    if(comand == TOP) gameState.moveUp(refreshCorrectBonsPosition)
    if(comand == BOTTOM) gameState.moveDown(refreshCorrectBonsPosition)
    if(actions.length <= 0) hasSteps = false;
}
document.querySelector('.moves-tittle').onclick = () => {solStartMini; _cursor++}
let _cursor = 0
function solStartMini() {
    console.log(_cursor)
    if(_cursor == 0) {
        arr = JSON.parse(JSON.stringify(gameState.gameArray)) 
        createRightPositions(gameState.size)
    }
    try{
        console.log(`>>>>> flatArr[${_cursor}]=${flatArr[_cursor].tile} <<<<<`)
        const obj = flatArr[_cursor]
        let [cI, cJ] = findTile(obj.tile)
        let [nI, nJ] = findTile(flatArr[_cursor+1].tile)
        let [_I, _J] = findGap()
        if(obj.$I == cI && obj.$J == cJ) {
            console.log('NICEEEE!!!')
        } else if(finalArr[cI][cJ] == arr[cI][cJ]
               && finalArr[nI][nJ] == arr[nI][nJ]
               && ((cI == arr.length - 1) || (cJ == arr.length - 1))
                ) {
            console.log('DOUBLE NICEEEE!!!')
            _cursor++
        } else {
            if(obj.dir == 0) {
                moveGapHoleHor(_J - cJ) //A 1 b
                moveGapHoleVer(_I - cI) //A 1 a
                moveToVer(obj) // A 2 a
                moveToHor(obj) // A 2 b
                moveToTop(1, obj)
                makeSteps();
            }
            if(obj.dir == 1) {
                moveGapHoleVer(_I - cI) //A 1 a
                moveGapHoleHor(_J - cJ) //A 1 b
                moveToHor(obj) // A 2 a
                moveToVer(obj) // A 2 b
                moveToLeft(1, obj)
                makeSteps();
            }
            makeSteps();
        }
        console.log(`${flatArr[_cursor + 1].tile} == ${arr[obj.$I][obj.$J+1]}`)
        if(obj.$J == arr.length - 2 && 
            flatArr[_cursor + 1].tile == arr[obj.$I][obj.$J+1]
        ) {
            console.log("newActive horizontal")
            let aJ = arr.length - 2
            let aI = flatArr[_cursor + 1].$I + 1
            let [_I, _J] = findGap()
            moveGapHoleHor(_J - aJ)
            moveGapHoleVer(_I - aI)
            let newActive = [LEFT,BOTTOM,RIGHT,TOP,TOP,LEFT,BOTTOM,RIGHT,BOTTOM,LEFT,TOP]
            actions = actions.concat(newActive)
            actionsLocal = actionsLocal.concat(newActive)
            makeSteps();
        }
        
        console.log(`${flatArr[_cursor + 1].tile} == ${arr[obj.$I+1][obj.$J]}`)
        if(obj.$I == arr.length - 2 && 
            flatArr[_cursor + 1].tile == arr[obj.$I+1][obj.$J]
        ) {
            console.log("newActive vertical")
            let newActive = [TOP,RIGHT,BOTTOM,LEFT,LEFT,TOP,RIGHT,BOTTOM,RIGHT,TOP,LEFT]
            actions = actions.concat(newActive)
            actionsLocal = actionsLocal.concat(newActive)
            makeSteps();
        }
        countsIsFinish = true
    } catch(e) {
        console.error(e.message)
    }
}
function solStart() {
    //перебор массива правильных позиций в порядке сбора
    //qwerty
    for(_cursor = 0; _cursor < flatArr.length - 3 || _cursor == 0; _cursor++){
        solStartMini()
    }
    finalSteps()
    countsIsFinish = true
}
document.querySelector('.time-tittle').onclick = () => finalSteps()
function finalSteps() {
    let size = gameState.size
    let saveCout = 0
    while(saveCout != 20) {
        let comand = ''
        if(arr[size-2][size-2] == 0) comand = LEFT
        if(arr[size-2][size-1] == 0) comand = TOP
        if(arr[size-1][size-2] == 0) comand = BOTTOM
        if(arr[size-1][size-1] == 0) comand = RIGHT
        if(comand != '') {
            actionsLocal.push(comand)
            actions.push(comand)
            makeSteps()
        }
        if( (arr[size-2][size-2] == size * size - size - 1) &&
            (arr[size-2][size-1] == size * size - size) &&
            (arr[size-1][size-2] == size * size - 1) &&
            (arr[size-1][size-1] == 0)
        ) {
            console.log("HORAY!!!")
            break
        }
        saveCout++
    }
}
function makeSteps() { //In local Array
    while(actionsLocal.length > 0) {
        let [_I, _J] = findGap()
        let comand = actionsLocal.shift()
        if(comand == TOP) {
            if(_I >= arr.length - 1) throw new Error('Выход за пределы игрового поля: ' + TOP)
            arr[_I][_J] = arr[_I+1][_J]
            arr[_I+1][_J] = 0
        }
        if(comand == BOTTOM) {
            if(_I <= 0) throw new Error(`Выход за пределы игрового поля _I=${_I} <= : ` + BOTTOM)
            arr[_I][_J] = arr[_I-1][_J]
            arr[_I-1][_J] = 0
        }
        if(comand == LEFT) {
            if(_J > arr.length) throw new Error('Выход за пределы игрового поля: ' + RIGHT)
            arr[_I][_J] = arr[_I][_J+1]
            arr[_I][_J+1] = 0
        }
        if(comand == RIGHT) {
            if(_J <= 0) throw new Error('Выход за пределы игрового поля: ' + LEFT)
            arr[_I][_J] = arr[_I][_J-1]
            arr[_I][_J-1] = 0
        }
    }
}
//SOL MOVED
function moveGapHoleVer(steps) {
    if(steps < 0) {
        for(let i = 0; i < Math.abs(steps); i++) {
            actions.push(TOP)
            actionsLocal.push(TOP)
        }
    }
    if(steps > 0) {
        for(let i = 0; i < Math.abs(steps); i++) {
            actions.push(BOTTOM)
            actionsLocal.push(BOTTOM)
        }
    }
    makeSteps()
}
function moveGapHoleHor(steps) {
    if(steps < 0) {
        for(let i = 0; i < Math.abs(steps); i++) {
            actions.push(LEFT)
            actionsLocal.push(LEFT)
        }
    }
    if(steps > 0) {
        for(let i = 0; i < Math.abs(steps); i++) {
            actions.push(RIGHT)
            actionsLocal.push(RIGHT)
        }
    }
    makeSteps()
}
//Horizont
function moveToVer(obj) {
    let [cI, cJ] = findTile(obj.tile)
    let [_I, _J] = findGap()
    let dir = obj.dir
    let $I = dir == 0 ? obj.$I + 1 : obj.$I
    let $J = dir == 1 ? obj.$J + 1 : obj.$J
    let steps = cI - $I
    if(steps > 0) moveToTop(steps, obj)
    if(steps < 0) moveToBottom(Math.abs(steps), obj)
}
function moveToTop(steps, obj) {
    while (steps > 0) {
        let [cI, cJ] = findTile(obj.tile)
        let [_I, _J] = findGap()
        const gPos = getGapPos(_I, _J, cI, cJ)
        let newAction = []
        if(gPos == GAP_LEFT && cI != arr.length -1 && cJ != arr.length -1 ) {
            newAction = [TOP,LEFT,LEFT,BOTTOM,BOTTOM,RIGHT,TOP]
        }
        if(gPos == GAP_LEFT && (cI == arr.length - 1 || cJ == arr.length - 1) ) { //!!!
            if(_cursor == 14) console.log('GAP_LEFT !!!')
            newAction = [BOTTOM,LEFT,TOP]
        }
        if(gPos == GAP_BOTTOM && cJ != arr.length - 1) {
            newAction = [LEFT,BOTTOM,BOTTOM,RIGHT,TOP]
        }
        if(gPos == GAP_BOTTOM && cJ == arr.length - 1) { //!!!
            newAction = [RIGHT,BOTTOM,BOTTOM,LEFT,TOP]
        }
        if(gPos == GAP_RIGHT) {
            newAction = [BOTTOM,RIGHT,TOP]
        }
        if(gPos == GAP_TOP) {
            newAction = [TOP]
        }
        actions = actions.concat(newAction)
        actionsLocal = actionsLocal.concat(newAction)
        steps -= 1
        makeSteps()
    }
}
function moveToBottom(steps, obj) {
    // throw new Error('moveToBottom are not implemented yet!')
    while (steps > 0) {
        let [cI, cJ] = findTile(obj.tile)
        let [_I, _J] = findGap()
        const gPos = getGapPos(_I, _J, cI, cJ)
        let newAction = []
        if(gPos == GAP_LEFT) {
            newAction = [TOP,LEFT,BOTTOM]
        }
        if(gPos == GAP_BOTTOM) {
            newAction = [BOTTOM]
        }
        if(gPos == GAP_RIGHT) {
            newAction = [TOP,RIGHT,BOTTOM]
        }
        if(gPos == GAP_TOP && cJ != arr.length - 1) {
            newAction = [LEFT,TOP,TOP,RIGHT,BOTTOM]
        }
        if(gPos == GAP_TOP && cJ == arr.length - 1) { // !!!
            newAction = [RIGHT,TOP,TOP,LEFT,BOTTOM]
        }
        actions = actions.concat(newAction)
        actionsLocal = actionsLocal.concat(newAction)
        steps -= 1
        makeSteps()
    }
}
//Vertical
function moveToHor(obj) {
    let [cI, cJ] = findTile(obj.tile)
    let [_I, _J] = findGap()
    let dir = obj.dir
    let $I = dir == 0 ? obj.$I + 1 : obj.$I
    let $J = dir == 1 ? obj.$J + 1 : obj.$J
    let steps = cJ - $J
    if(steps > 0) moveToLeft(steps, obj)
    if(steps < 0) moveToRight(Math.abs(steps), obj)
}
function moveToLeft(steps, obj) {
    while (steps > 0) {
        let [cI, cJ] = findTile(obj.tile)
        let [_I, _J] = findGap()
        const gPos = getGapPos(_I, _J, cI, cJ)
        let newAction = []
        if(gPos == GAP_TOP && obj.tile == 21) console.log(`gPos == GAP_TOP == ${gPos == GAP_TOP}`)
        if(gPos == GAP_TOP && cI != arr.length - 1 &&  cJ != arr.length - 1) {
            if(obj.tile == 21) console.log(`GAP_TOP 1`)
            newAction = [LEFT,TOP,TOP,RIGHT,RIGHT,BOTTOM,LEFT]
        }
        if(gPos == GAP_TOP && cI == arr.length - 1) { //!!!
            if(obj.tile == 21) console.log(`GAP_TOP 2`)
            newAction = [RIGHT,TOP,LEFT]
        }
        if(gPos == GAP_TOP && cJ == arr.length - 1) { //!!!
            if(obj.tile == 21) console.log(`GAP_TOP 3`)
            newAction = [RIGHT,TOP,LEFT]
        }
        if(gPos == GAP_RIGHT && cI != arr.length - 1) {
            if(obj.tile == 21) console.log(`GAP_RIGHT 1`)
            newAction = [TOP,RIGHT,RIGHT,BOTTOM,LEFT]
        }
        if(gPos == GAP_RIGHT && cI == arr.length - 1) { //!!!
            if(obj.tile == 21) console.log(`GAP_RIGHT 2`)
            newAction = [BOTTOM,RIGHT,RIGHT,TOP,LEFT]
        }
        if(gPos == GAP_BOTTOM) {
            if(obj.tile == 21) console.log(`GAP_BOTTOM`)
            newAction = [RIGHT,BOTTOM,LEFT]
        }
        if(gPos == GAP_LEFT) {
            if(obj.tile == 21) console.log(`GAP_LEFT`)
            newAction = [LEFT]
        }
        actions = actions.concat(newAction)
        actionsLocal = actionsLocal.concat(newAction)
        steps -= 1
        makeSteps()
    }
}
function moveToRight(steps, obj) {
    while (steps > 0) {
        let [cI, cJ] = findTile(obj.tile)
        let [_I, _J] = findGap()
        const gPos = getGapPos(_I, _J, cI, cJ)
        let newAction = []
        if(gPos == GAP_LEFT && cI != arr.length - 1) {
            newAction = [TOP,LEFT,LEFT,BOTTOM,RIGHT]
        }
        if(gPos == GAP_LEFT && cI == arr.length - 1) { //!!!
            newAction = [BOTTOM,LEFT,LEFT,TOP,RIGHT]
        }
        if(gPos == GAP_BOTTOM ) {
            newAction = [LEFT,BOTTOM,RIGHT]
        }
        if(gPos == GAP_TOP) {
            newAction = [LEFT,TOP,RIGHT]
        }
        if(gPos == GAP_RIGHT) {
            newAction = [RIGHT]
        }
        
        actions = actions.concat(newAction)
        actionsLocal = actionsLocal.concat(newAction)
        steps -= 1
        makeSteps()
    }
}

//solution additional
function getGapPos(_I, _J, cI, cJ) {
    if(_I == cI && ((_J - cJ) == 1)) return GAP_RIGHT
    if(_I == cI && ((_J - cJ) == -1)) return GAP_LEFT
    if(((_I - cI) == 1) && _J == cJ) return GAP_BOTTOM
    if(((_I - cI) == -1) && _J == cJ) return GAP_TOP
    throw new Error(`WRONG GAP POSITION: gapPos=[${_I}][${_J}] tilePos=[${cI}][${cJ}]`)
}
function createRightPositions(size) {
    let arr = []
    flatArr = []
    for(let i = 0; i < size; i++) {
        arr.push([])
        for(let j = 0; j < size; j++) {
            let num = i*size + j + 1
            arr[i].push(num < size*size ? num : 0)
        }
    }
    finalArr = arr
    for(let i = 0; i < size - 1; i++) {
        for(let j = i; j < size - 1; j++) {
            const obj = {
                tile: arr[i][j],
                $I: i,
                $J: j,
                dir: 0
            }
            if(obj.$J == size - 2) {
                const obj2 = {
                    tile: arr[i][j+1],
                    $I: i,
                    $J: j,
                    dir: 0
                }
                flatArr.push(obj2)
            }
            flatArr.push(obj)
        }
        for(let j = i+1; j < size - 1; j++) {
            const obj = {
                tile: arr[j][i],
                $I: j,
                $J: i,
                dir: 1
            }
            if(obj.$I == size - 2) {
                const obj2 = {
                    tile: arr[j+1][i],
                    $I: j,
                    $J: i,
                    dir: 1
                }
                flatArr.push(obj2)
            }
            flatArr.push(obj)
        }
    }
    const obj = {
        tile: arr[size-1][size-2],
        $i: size-1,
        $j: size-2,
        dir: 1
    }
    flatArr.push(obj)
}
function findTile(num) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] == num) return [i, j]
        }
    }
    return [-1, -1]
}
function findGap() {
    return findTile(0)
}

function strfy(arr) {
    let str = ''
    for(let i = 0; i < arr.length; i++) {
        str += JSON.stringify(arr[i]) + '\n'
    }
    return str
}