import '../style/main.scss'
import {createNewElement, createNewElements} from '../js/mylittlefw.js'


let gameState = {
    movies: 0,
    time: 0,
    isStarted: false,
    gameArray: [],
    size: 4,
    zeroI: 3,
    zeroJ: 3,

    moviesNode: null,
    timeNode: null,
    sizeNode: null,

    setFields(movies, time, size) {
        this.moviesNode = movies
        this.timeNode = time
        this.sizeNode = size
    },

    setMovies(val) {
        this.moviesNode.innerHTML = val
        this.movies = val
    },
    setTime(time) {
        this.time = time
        let m = Math.trunc(time / 60)
        let s = Math.trunc(time % 60)
        let str = '' + (m > 9 ? m : '0' + m) + ':' + (s > 9 ? s : '0' + s)
        this.timeNode.innerHTML = str
    },
    start() {
        this.isStarted = true
        setRandomPosition()
        this.setTime(0)
        this.setMovies(0)
    },
    stop() {
        this.isStarted = false
    },
    setSize(size, refNewSize) {
        this.size = size
        this.zeroI = size - 1
        this.zeroJ = size - 1
        this.setNewGameArray()
        refNewSize()
    },
    setNewGameArray() {
        let num = 0
        for(let i = 0; i < this.size; i++){
            this.gameArray.push(new Array(this.size))
            for(let j = 0; j < this.size; j++) {
                num++
                this.gameArray[i][j] = num != this.size**2 ? num : 0
            }
        }
    },

    moveUp(refreshCorrectBonsPosition){
        if(!this.isStarted) return
        if(this.zeroI == this.size - 1) return
        let movingBone = this.gameArray[this.zeroI + 1][this.zeroJ]
        this.gameArray[this.zeroI][this.zeroJ] = movingBone
        this.zeroI++
        this.gameArray[this.zeroI][this.zeroJ] = 0
        if(gameState.isStarted) {this.setMovies(this.movies + 1)}
        refreshCorrectBonsPosition()
    },
    moveDown(refreshCorrectBonsPosition){
        if(!this.isStarted) return
        if(this.zeroI == 0) return
        let movingBone = this.gameArray[this.zeroI - 1][this.zeroJ]
        this.gameArray[this.zeroI][this.zeroJ] = movingBone
        this.zeroI--
        this.gameArray[this.zeroI][this.zeroJ] = 0
        if(gameState.isStarted) {this.setMovies(this.movies + 1)}
        refreshCorrectBonsPosition()
    },
    moveLeft(refreshCorrectBonsPosition){
        if(!this.isStarted) return
        if(this.zeroJ == this.size - 1) return
        let movingBone = this.gameArray[this.zeroI][this.zeroJ + 1]
        this.gameArray[this.zeroI][this.zeroJ] = movingBone
        this.zeroJ++
        this.gameArray[this.zeroI][this.zeroJ] = 0
        if(gameState.isStarted) {this.setMovies(this.movies + 1)}
        refreshCorrectBonsPosition()
    },
    moveRight(refreshCorrectBonsPosition){
        if(!this.isStarted) return
        if(this.zeroJ == 0) return
        let movingBone = this.gameArray[this.zeroI][this.zeroJ - 1]
        this.gameArray[this.zeroI][this.zeroJ] = movingBone
        this.zeroJ--
        this.gameArray[this.zeroI][this.zeroJ] = 0
        if(gameState.isStarted) {this.setMovies(this.movies + 1)}
        refreshCorrectBonsPosition()
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
    root.appendChild(gameDiv)
}

function createButtonsBlock(_root) {
    let _buttonsRoot = createNewElement('.buttons-up-block')
    let buttons = createNewElements(
        'button .up-button .start-button =Start',
        'button .up-button .stop-button =Stop',
        'button .up-button .save-button =Save',
        'button .up-button .results-button =Result'
    )
    
    buttons.forEach(el => _buttonsRoot.appendChild(el))
    _root.appendChild(_buttonsRoot)
}

function createStateBlock(_root) {
    let _stateBlock = createNewElement('.state-block')
    let _movies = createNewElement('.movies-wrapper')
    let _time = createNewElement('.time-wrapper')
    createNewElements('.movies-tittle=Movies:', '.movies-count=0').forEach(el => {
        _movies.appendChild(el)
    })
    createNewElements('.time-tittle=Time:', '.time-count=00:00').forEach(el => {
        _time.appendChild(el)
    })
    _stateBlock.appendChild(_movies)
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
    document.querySelector('.movies-count'),
    document.querySelector('.time-count'),
    document.querySelector('.current-size')
)

//STYLE
function setBonsStyle() {
    let style = document.createElement('style')
    // style.type = 'text/css'
    let stylesMain = ''
    let stylesTablet = '@media screen and (max-width: 640px) {'
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
        }
    }
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
    style.innerHTML = stylesMain + "\n" + stylesTablet
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
    //const rndSteps = Math.trunc(Math.random()*50+50) * gameState.size
    const rndSteps = 4 //RANDOM TEST
    for(let k = 0; k < rndSteps; k++){
        const rngDirection = Math.trunc(Math.random()*4+1)
        if(rngDirection === 1) gameState.moveUp(refreshCorrectBonsPosition)
        if(rngDirection === 2) gameState.moveDown(refreshCorrectBonsPosition)
        if(rngDirection === 3) gameState.moveLeft(refreshCorrectBonsPosition)
        if(rngDirection === 4) gameState.moveRight(refreshCorrectBonsPosition)
    }
}
document.querySelector('.start-button').onclick = () => gameState.start(setRandomPosition)
document.querySelector('.stop-button').onclick = () => gameState.stop()
// document.querySelector('.save-button').onclick //TODO

//TIMERs
setInterval(() => {
    if(gameState.isStarted) {
        gameState.setTime(gameState.time + 1)
    }
}, 1000)



function youWin(message) {
    const modalWin = createNewElement(`.win-modal.hiding`)
    const winMessage = createNewElement(`.win-message=${message}`)
    modalWin.appendChild(winMessage)
    root.appendChild(modalWin)
    setTimeout(() => {modalWin.classList.remove('hiding')}, 10)
    setTimeout(() => {modalWin.classList.add('hiding')}, 3000)
    setTimeout(() => {root.removeChild(modalWin)}, 3600)
}

function isFinishedGame() {
    if(!gameState.isStarted) return
    const isFinish = gameState.gameArray.flat().reduce((w, c, i) => c == i + 1 || (c == 0 && i == (gameState.size**2 - 1)), true)
    if(isFinish) {
        youWin("YOU WIN!!!")
        addNewScore(createScore(gameState.size, gameState.movies, gameState.time))
        gameState.stop()
        //TODO: save results
    }
}


//SCORE
let score = getScore()
function createScore(size, movies, time) {
    const date = new Date()
    return {
        date: date.toLocaleDateString() + ' ' + date.toLocaleTimeString(),
        size: size, 
        movies: movies,
        time: time,
    }
}

function getScore() {
    const resScore = localStorage.getItem('score')
    return resScore ? JSON.parse(resScore) : []
}

function addNewScore(newScore) {
    score.push(newScore)
    localStorage.setItem('score', JSON.stringify(score))
}

document.querySelector('.results-button').onclick = () => displayScore(root, getScore)

function displayScore(_root, getScore) {
    let _scoreBlock = createNewElement('')
    const modalScore = createNewElement(`.win-modal.hiding`)
    
    const scoreDiv = createNewElement('.score-block')
    const scoreTitle = createNewElement('.score-block__title=SCORE')
    const scoreGrid = createNewElement('.score-block__grid')

    createScoreGrid(scoreGrid, getScore)
    
    scoreDiv.appendChild(scoreTitle)
    scoreDiv.appendChild(scoreGrid)
    modalScore.appendChild(scoreDiv)
    root.appendChild(modalScore)
    setTimeout(() => {modalScore.classList.remove('hiding')}, 10)

    //close score
    modalScore.onclick = () => {
        setTimeout(() => {modalScore.classList.add('hiding')}, 30)
        setTimeout(() => {root.removeChild(modalScore)}, 630)
    }
}

function createScoreGrid(_root, getScore) {
    createNewElements(
        '.grid-header=DATE',
        '.grid-header=SIZE',
        '.grid-header=TIME',
        '.grid-header=MOVIES',
    ).forEach(header => _root.appendChild(header))
    let localScore = getScore()
    localScore.forEach(scoreItem => {
        console.log(scoreItem)
        const m = Math.trunc(scoreItem.time / 60)
        const s = Math.trunc(scoreItem.time % 60)
        const timeStr = '' + (m > 9 ? m : '0' + m) + ':' + (s > 9 ? s : '0' + s)
        createNewElements(
            `.grid-element=${scoreItem.date}`,
            `.grid-element=${scoreItem.size}x${scoreItem.size}`,
            `.grid-element=${timeStr}`,
            `.grid-element=${scoreItem.movies}`,
        ).forEach(elem => _root.appendChild(elem))
    })
}