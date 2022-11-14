/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/footer/style.scss":
/*!******************************************!*\
  !*** ./src/components/footer/style.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/header/style.scss":
/*!******************************************!*\
  !*** ./src/components/header/style.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/finish-page/style.scss":
/*!******************************************!*\
  !*** ./src/pages/finish-page/style.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/game-page/style.scss":
/*!****************************************!*\
  !*** ./src/pages/game-page/style.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/start-page/style.scss":
/*!*****************************************!*\
  !*** ./src/pages/start-page/style.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/footer/index.js":
/*!****************************************!*\
  !*** ./src/components/footer/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFooter": () => (/* binding */ createFooter)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .//style.scss */ "./src/components/footer/style.scss");
/* harmony import */ var _module_my_little_fw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../module/my-little-fw */ "./src/module/my-little-fw.js");



const createFooter = (root) => {
  const _footer = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('footer.footer')
  const _footer__year = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.footer__year=2022')
  const _footer__github = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('a.footer__github')
  const _footer__githubIcon = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.footer__github-icon')
  const _footer__githubText = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.footer__github-text=jerubrin')
  const _footer__rs = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('a.footer__rs')

  _footer__github.setAttribute('href', 'https://github.com/jerubrin/')
  _footer__github.setAttribute('target', '_blank')
  _footer__rs.setAttribute('href', 'https://rs.school/js/')
  _footer__rs.setAttribute('target', '_blank')

  _footer__github.append(_footer__githubIcon, _footer__githubText)
  _footer.append(_footer__year, _footer__github, _footer__rs)
  root.append(_footer)
}

/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeader": () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .//style.scss */ "./src/components/header/style.scss");
/* harmony import */ var _module_my_little_fw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../module/my-little-fw */ "./src/module/my-little-fw.js");
/* harmony import */ var _module_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../module/settings */ "./src/module/settings.js");
/* harmony import */ var _module_commands__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../module/commands */ "./src/module/commands.js");





const createHeader = (root, routerNum) => {
  const _header = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('header.header')
  
  const _logo = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.logo')
  const _logo__img = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.logo__img')
  const _logo__text = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.logo__text=songbird')

  const linkNames = (0,_module_settings__WEBPACK_IMPORTED_MODULE_2__.getTextByKey)("links");
  const _nav = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.nav');
  const _nav__ul = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('ul.nav__ul');
  [1, 2, 3].map((it, i) => {return [
    'li.nav__li.nav__li_' + it, 
    'a.nav__link.nav__link_' + it 
      + `=${linkNames[i]}`
  ]}).forEach((it, i) => {
    const _nav__li = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_1__.createNewElement)(it[0]);
    const _nav__a = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_1__.createNewElement)(it[1]);
    _nav__li.append(_nav__a);
    _nav__a.onclick = () => _module_commands__WEBPACK_IMPORTED_MODULE_3__.router[i]()
    _nav__ul.append(_nav__li)
  });
  _nav.append(_nav__ul);

  const _langs = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.langs')
  const _langs__link_ru = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('a.langs__link=ru')
  const _langs__split = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.langs__split=|')
  const _langs__link_en = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('a.langs__link=en')
  setLangs(_langs__link_ru, _langs__link_en, routerNum)
  
  const _score = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.score')
  const _score__text = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.score__text')
  const _score__number = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('.score__number')

  _langs.append(_langs__link_en, _langs__split, _langs__link_ru)
  _logo.append(_logo__img, _logo__text)
  _score.append(_score__text, _score__number)
  _header.append(_logo, _nav, _langs, _score)
  root.append(_header)
  return [_score__text, _score__number]
}

const setLangs = (_langs__link_ru, _langs__link_en, routerNum) => {
  const lang = (0,_module_settings__WEBPACK_IMPORTED_MODULE_2__.getLang)()
  if(lang == _module_settings__WEBPACK_IMPORTED_MODULE_2__.langs.SB_LANG_RU) {
    _langs__link_ru.classList.add('langs__link_active')
    _langs__link_en.onclick = () => {
      ;(0,_module_settings__WEBPACK_IMPORTED_MODULE_2__.setLang)(_module_settings__WEBPACK_IMPORTED_MODULE_2__.langs.SB_LANG_EN)
      _module_commands__WEBPACK_IMPORTED_MODULE_3__.router[routerNum]()
    }
  }
  if(lang == _module_settings__WEBPACK_IMPORTED_MODULE_2__.langs.SB_LANG_EN) {
    _langs__link_en.classList.add('langs__link_active')
    _langs__link_ru.onclick = () => {
      ;(0,_module_settings__WEBPACK_IMPORTED_MODULE_2__.setLang)(_module_settings__WEBPACK_IMPORTED_MODULE_2__.langs.SB_LANG_RU)
      _module_commands__WEBPACK_IMPORTED_MODULE_3__.router[routerNum]()
    }
  }
}

/***/ }),

/***/ "./src/module/commands.js":
/*!********************************!*\
  !*** ./src/module/commands.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VOLUME_ADDITIONAL": () => (/* binding */ VOLUME_ADDITIONAL),
/* harmony export */   "VOLUME_MAIN": () => (/* binding */ VOLUME_MAIN),
/* harmony export */   "clearView": () => (/* binding */ clearView),
/* harmony export */   "gameStatus": () => (/* binding */ gameStatus),
/* harmony export */   "getFormatedTime": () => (/* binding */ getFormatedTime),
/* harmony export */   "getVolume": () => (/* binding */ getVolume),
/* harmony export */   "players": () => (/* binding */ players),
/* harmony export */   "router": () => (/* binding */ router),
/* harmony export */   "useClassState": () => (/* binding */ useClassState),
/* harmony export */   "useImageState": () => (/* binding */ useImageState),
/* harmony export */   "usePlayerState": () => (/* binding */ usePlayerState),
/* harmony export */   "useState": () => (/* binding */ useState)
/* harmony export */ });
/* harmony import */ var _pages_finish_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/finish-page */ "./src/pages/finish-page/index.js");
/* harmony import */ var _pages_game_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/game-page */ "./src/pages/game-page/index.js");
/* harmony import */ var _pages_start_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/start-page */ "./src/pages/start-page/index.js");




const clearView = root => root.innerHTML = '';

const router = [
  () => {
    (0,_pages_start_page__WEBPACK_IMPORTED_MODULE_2__["default"])(document.body)
    players.forEach(player => player.stop())
  },
  () => {
    (0,_pages_game_page__WEBPACK_IMPORTED_MODULE_1__["default"])(document.body)
    players.forEach(player => player.stop())
  },
  () => {
    
  },
  () => {
    (0,_pages_finish_page__WEBPACK_IMPORTED_MODULE_0__["default"])(document.body)
    players.forEach(player => player.stop())
  },
]

const gameStatus = {
  isStarted: false,
  chousedCorrectBird: false,
  score: 0,
  curScore: 5,
  level: -1,
  missCh: [],
  correctBird: -1,
  current: -1,
  lastChoise: -1
}

class useState {
  constructor (initVal, _block) {
    this.block = _block
    this.setVal(initVal)
  }
  setVal(newVal) {
    this.val = newVal
    this.block.textContent = this.val
  }
}

class useImageState {
  constructor (initVal, _block) {
    this.block = _block
    this.url = initVal
    this.setVal(this.url)
  }
  setVal(newVal) {
    this.url = newVal
    if(this.url != '') {
      this.block.setAttribute('style', `background-image: url(${this.url})`);
    } else {
      this.block.removeAttribute('style');
    }
  }
}

class useClassState {
  constructor (initVal, _block) {
    this.block = _block
    this.className = initVal
    this.setVal(false)
  }
  setVal(newVal) {
    newVal ? 
      this.block.classList.add(this.className) :
      this.block.classList.remove(this.className)
  }
}

const MUTED_CLASS = 'player__volume-btn_mute'

const players = []
function usePlayerState(_block, type) {
  let audio = null
  let isPlaying = false
  const _wrapper = _block.firstChild
  const _playButton = _block.firstChild.children[0]
  const _timeline = _block.firstChild.children[1].firstChild
  const _curTime = _block.firstChild.children[1].children[1].firstChild
  const _durTime = _block.firstChild.children[1].children[1].children[1]

  const _volumeButton = _block.firstChild.children[2]
  const _volLine = _block.firstChild.children[3]

  const _loading = _block.children[1]

  const loadingState = new useClassState(_pages_game_page__WEBPACK_IMPORTED_MODULE_1__.DISPLAY_NONE, _loading)
  loadingState.setVal(false)
  const playerDisplayState = new useClassState(_pages_game_page__WEBPACK_IMPORTED_MODULE_1__.DISPLAY_NONE, _wrapper);
  playerDisplayState.setVal(true)
  const volumeButtonState = new useClassState(MUTED_CLASS, _volumeButton)

  let isMoving = false
  setInterval(() => {
    if(!audio || isMoving) return
    _curTime.textContent = getFormatedTime(audio.currentTime)
    _timeline.valueAsNumber = audio.currentTime
    const t = {
      style: _timeline.style,
      value: audio.currentTime,
      min: 0,
      max: audio.duration
    }
    setStyleForTimeline(t)
    if(audio && audio.currentTime == audio.duration) {
      _playButton.classList.remove('player__play-btn_pause')
      audio.currentTime = 0;
      isPlaying = false;
    }
  }, 100);

  _playButton.onclick = () => {
    if(audio && isPlaying) {
      stop()
    } else if(audio && !isPlaying) {
      play()
    }
  }

  function setAudio(url) {
    loadingState.setVal(false)
    playerDisplayState.setVal(true)
    audio = new Audio(url)
    _timeline.valueAsNumber = 0;
    _volLine.value = getVolume(type);
    volumeButtonState.setVal(_volLine.value == 0)
    audio.volume = _volLine.value / 100
    const t = {
      style: _volLine.style,
      value: _volLine.value,
      min: 0,
      max: 100
    }
    setStyleForTimeline(t)
    audio.onloadedmetadata = () => {
      _timeline.max = audio.duration;
      _durTime.textContent = getFormatedTime(audio.duration)
    }
    audio.onloadeddata = () => {
      loadingState.setVal(true)
      playerDisplayState.setVal(false)
    }
  }
  
  _timeline.oninput = e => {
    setStyleForTimeline(e.target)
    _curTime.textContent = getFormatedTime(e.target.value)
    isMoving = true
  }
  _timeline.onchange = function(e) {
    setStyleForTimeline(e.target)
    audio.currentTime = this.valueAsNumber;
    isMoving = false;
  }

  _volLine.oninput = function(e) {
    audio.volume = e.target.valueAsNumber / 100;
    volumeButtonState.setVal(e.target.valueAsNumber == 0)
    setStyleForTimeline(e.target)
  }
  _volLine.onchange = function(e) {
    setVolume(e.target.value, type)
  }

  _volumeButton.onclick = function(e) {
    if(_volLine.valueAsNumber == 0) {
      const vol = getWasVolume(type)
      setVolume(vol, type)
      _volLine.value = vol
      audio.volume = vol / 100
    } else {
      setWasVolume(_volLine.valueAsNumber, type);
      setVolume(0, type)
      _volLine.value = 0
      audio.volume = 0
    }
    volumeButtonState.setVal(_volLine.valueAsNumber == 0)
    const t = {
      style: _volLine.style,
      value: _volLine.value,
      min: 0,
      max: 100
    }
    setStyleForTimeline(t)
  }

  function setStyleForTimeline(t) {
    t.style.backgroundSize =
      (t.value - t.min) * 100 / (t.max - t.min) + '% 100%'
  }

  function play() {
    if(!audio) return
    players.forEach(player => player.stop())
    audio.play();
    _playButton.classList.add('player__play-btn_pause');
    isPlaying = true;
  }

  function stop() {
    if(!audio) return
    audio.pause();
    _playButton.classList.remove('player__play-btn_pause')
    isPlaying = false;
  }

  const player = {
    setAudio,
    play,
    stop() { stop() }
  }
  players.push(player)
  return player
}

const VOLUME_MAIN = 'VOLUME_MAIN';
const VOLUME_ADDITIONAL = 'VOLUME_ADDITIONAL';

function setVolume(vol, type){
  localStorage.setItem(type, vol)
}
function getVolume(type){
  const vol = localStorage.getItem(type);
  return vol ? vol : 100
}

function setWasVolume(vol, type){
  localStorage.setItem(type + "_WAS", vol)
}

function getWasVolume(type){
  const vol = localStorage.getItem(type + "_WAS");
  return vol ? vol : 100
}

function getFormatedTime(time) {
  const m = Math.trunc(time / 60)
  const s = Math.trunc(time % 60)
  return ((m < 10) ? ('0' + m) : (m)) + ':' +
         ((s < 10) ? ('0' + s) : (s));
}

/***/ }),

/***/ "./src/module/my-little-fw.js":
/*!************************************!*\
  !*** ./src/module/my-little-fw.js ***!
  \************************************/
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

/***/ }),

/***/ "./src/module/player.js":
/*!******************************!*\
  !*** ./src/module/player.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playCorrect": () => (/* binding */ playCorrect),
/* harmony export */   "playEnd": () => (/* binding */ playEnd),
/* harmony export */   "playWrong": () => (/* binding */ playWrong)
/* harmony export */ });
/* harmony import */ var _assets_audio_correct_wav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/audio/correct.wav */ "./src/assets/audio/correct.wav");
/* harmony import */ var _assets_audio_lose_wav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/audio/lose.wav */ "./src/assets/audio/lose.wav");
/* harmony import */ var _assets_audio_end_game_wav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/audio/end-game.wav */ "./src/assets/audio/end-game.wav");
/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commands */ "./src/module/commands.js");





const playCorrect = () => {
  const correctAudio = new Audio(_assets_audio_correct_wav__WEBPACK_IMPORTED_MODULE_0__)
  correctAudio.volume = (0,_commands__WEBPACK_IMPORTED_MODULE_3__.getVolume)(_commands__WEBPACK_IMPORTED_MODULE_3__.VOLUME_MAIN) / 100
  correctAudio.play()
}

const playWrong = () => {
  const wrongAudio = new Audio(_assets_audio_lose_wav__WEBPACK_IMPORTED_MODULE_1__)
  wrongAudio.volume = (0,_commands__WEBPACK_IMPORTED_MODULE_3__.getVolume)(_commands__WEBPACK_IMPORTED_MODULE_3__.VOLUME_MAIN) / 100
  wrongAudio.play()
}

const playEnd = () => {
  const endGameAudio = new Audio(_assets_audio_end_game_wav__WEBPACK_IMPORTED_MODULE_2__)
  endGameAudio.volume = (0,_commands__WEBPACK_IMPORTED_MODULE_3__.getVolume)(_commands__WEBPACK_IMPORTED_MODULE_3__.VOLUME_MAIN) / 100
  endGameAudio.play()
}

/***/ }),

/***/ "./src/module/settings.js":
/*!********************************!*\
  !*** ./src/module/settings.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBirdByLevelAndNumber": () => (/* binding */ getBirdByLevelAndNumber),
/* harmony export */   "getLang": () => (/* binding */ getLang),
/* harmony export */   "getScore": () => (/* binding */ getScore),
/* harmony export */   "getTextByKey": () => (/* binding */ getTextByKey),
/* harmony export */   "langs": () => (/* binding */ langs),
/* harmony export */   "setLang": () => (/* binding */ setLang),
/* harmony export */   "setScore": () => (/* binding */ setScore)
/* harmony export */ });
/* harmony import */ var _entities_main_ru_ru_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/main-ru-ru.json */ "./src/entities/main-ru-ru.json");
/* harmony import */ var _entities_main_en_us_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities/main-en-us.json */ "./src/entities/main-en-us.json");
/* harmony import */ var _entities_birds_ru_ru_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entities/birds-ru-ru.json */ "./src/entities/birds-ru-ru.json");
/* harmony import */ var _entities_birds_en_us_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entities/birds-en-us.json */ "./src/entities/birds-en-us.json");





//localStorage keys
const SB_LANG = 'SB_LANG';
const SB_SCORE = 'SB_SCORE';

const langs = {
  SB_LANG_RU: 'ru-ru',
  SB_LANG_EN: 'en-us'
}
const allLengs = [langs.SB_LANG_EN, langs.SB_LANG_RU]

const getLang = () => {
  let lang = localStorage.getItem(SB_LANG)
  return lang ? lang : langs.SB_LANG_RU
}

const setLang = (lang) => {
  if(new Set(allLengs).has(lang)){
    localStorage.setItem(SB_LANG, lang)
  } else {
    localStorage.setItem(SB_LANG, langs.SB_LANG_RU)
  }
}

const getTextByKey = (key) => {
  const data = getLang() == langs.SB_LANG_RU 
    ? _entities_main_ru_ru_json__WEBPACK_IMPORTED_MODULE_0__ 
    : _entities_main_en_us_json__WEBPACK_IMPORTED_MODULE_1__
  return data[key] ? data[key] : '{text}'
}

const getBirdByLevelAndNumber = (level, number) => {
  const birds = getLang() == langs.SB_LANG_RU 
    ? _entities_birds_ru_ru_json__WEBPACK_IMPORTED_MODULE_2__ 
    : _entities_birds_en_us_json__WEBPACK_IMPORTED_MODULE_3__
  return birds[level][number] ? birds[level][number] : {name: '{text}'}
}

const setScore = (score) => {
  if(score > getScore()) {
    localStorage.setItem(SB_SCORE, score)
  }
}

const getScore = () => {
  const score = localStorage.getItem(SB_SCORE)
  return score ? Number(score) : 0
}

/***/ }),

/***/ "./src/pages/finish-page/index.js":
/*!****************************************!*\
  !*** ./src/pages/finish-page/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ openFinishPage)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .//style.scss */ "./src/pages/finish-page/style.scss");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/footer */ "./src/components/footer/index.js");
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/header/header */ "./src/components/header/header.js");
/* harmony import */ var _module_commands__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../module/commands */ "./src/module/commands.js");
/* harmony import */ var _module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../module/my-little-fw */ "./src/module/my-little-fw.js");
/* harmony import */ var _module_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../module/settings */ "./src/module/settings.js");
/* harmony import */ var _module_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../module/player */ "./src/module/player.js");









const MAX_SCORE = 30;

function openFinishPage(root) {
  (0,_module_player__WEBPACK_IMPORTED_MODULE_6__.playEnd)()
  ;(0,_module_settings__WEBPACK_IMPORTED_MODULE_5__.setScore)(_module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.score)
  ;(0,_module_commands__WEBPACK_IMPORTED_MODULE_3__.clearView)(root)
  root.appendChild((0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)('.body-back'))
  const [_scoreText, _score] = (0,_components_header_header__WEBPACK_IMPORTED_MODULE_2__.createHeader)(root, 3)
  _scoreText.textContent = (0,_module_settings__WEBPACK_IMPORTED_MODULE_5__.getTextByKey)('score')
  _score.textContent = _module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.score;

  const {_main, _finish__button} = createView(root, _score)
  ;(0,_components_footer__WEBPACK_IMPORTED_MODULE_1__.createFooter)(_main)
  
  _finish__button.onclick = 
    _module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.score == MAX_SCORE ? _module_commands__WEBPACK_IMPORTED_MODULE_3__.router[0] : _module_commands__WEBPACK_IMPORTED_MODULE_3__.router[1];
  _module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.score = 0;
  _module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.missCh = [];
}

const createView = (root) => {
  const _downWrapper = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)('.down-wrapper')

  const _main = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)('main.main')
  const _container = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)('.container')

  const _finish = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)('.finish')
  const textTitle = (0,_module_settings__WEBPACK_IMPORTED_MODULE_5__.getTextByKey)("congratulations");
  const _finish__title = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)(`.finish__title=${textTitle}`)
  const text = 
    (0,_module_settings__WEBPACK_IMPORTED_MODULE_5__.getTextByKey)('youPassed') + ' ' +
    _module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.score + ' ' +
    (0,_module_settings__WEBPACK_IMPORTED_MODULE_5__.getTextByKey)('outOf') + ' ' +
    MAX_SCORE + ' ' +
    (0,_module_settings__WEBPACK_IMPORTED_MODULE_5__.getTextByKey)('possiblePoints');
  const _finish__text = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)(`.finish__text.text=${text}`)
  const btnText = _module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.score == MAX_SCORE ?
    (0,_module_settings__WEBPACK_IMPORTED_MODULE_5__.getTextByKey)('toStart') :
    (0,_module_settings__WEBPACK_IMPORTED_MODULE_5__.getTextByKey)('tryAgain');
  const _finish__button = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)(`.finish__button.button=${btnText}`)

  _finish.append(_finish__title, _finish__text, _finish__button)
  _container.append(_finish)
  _main.append(_container)
  _downWrapper.append(_main)
  root.append(_downWrapper)

  return {_main: _downWrapper, _finish__button}
}


/***/ }),

/***/ "./src/pages/game-page/index.js":
/*!**************************************!*\
  !*** ./src/pages/game-page/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DISPLAY_NONE": () => (/* binding */ DISPLAY_NONE),
/* harmony export */   "default": () => (/* binding */ openGamePage)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .//style.scss */ "./src/pages/game-page/style.scss");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/footer */ "./src/components/footer/index.js");
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/header/header */ "./src/components/header/header.js");
/* harmony import */ var _module_commands__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../module/commands */ "./src/module/commands.js");
/* harmony import */ var _module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../module/my-little-fw */ "./src/module/my-little-fw.js");
/* harmony import */ var _module_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../module/settings */ "./src/module/settings.js");
/* harmony import */ var _module_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../module/player */ "./src/module/player.js");








const DISPLAY_NONE = 'display-none';

function openGamePage(root) {
  (0,_module_commands__WEBPACK_IMPORTED_MODULE_3__.clearView)(root)
  root.appendChild((0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)('.body-back'))
  const [_scoreText, _score] = (0,_components_header_header__WEBPACK_IMPORTED_MODULE_2__.createHeader)(root, 1)
  _scoreText.textContent = (0,_module_settings__WEBPACK_IMPORTED_MODULE_5__.getTextByKey)('score')
  
  const blocksBundle = createView(root, _score)
  ;(0,_components_footer__WEBPACK_IMPORTED_MODULE_1__.createFooter)(blocksBundle.main)
  
  startGame(blocksBundle)
}

const createView = (root, _score) => {
  const _downWrapper = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)('.down-wrapper')
  const _main =  (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)('main.main');
  const _container = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)('.container');

  const _game = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)('.game');

  const _game__levelList = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)('.game__level-list');
  (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElements)(
    [1, 2, 3, 4, 5, 6].map(it => 'button.game__level.game__level_'+it)
  ).forEach((element, index) => {
    _game__levelList.append(element);
    element.textContent = (0,_module_settings__WEBPACK_IMPORTED_MODULE_5__.getTextByKey)('sections')[index]
  });

  const _game__main = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)('.game__main');
  const _game__birdImg = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)('.game__bird-img');
  const _game__mainRight = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)('.game__main-right');
  const _game__name = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)('.game__name=***');
  const _game__player = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)('.game__player.player');
  createPlayer(_game__player, _module_commands__WEBPACK_IMPORTED_MODULE_3__.VOLUME_MAIN);
  _game__mainRight.append(_game__name, _game__player);
  _game__main.append(_game__birdImg, _game__mainRight);
  
  const _game__bottom = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)('.game__bottom')

  const _game__select = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)('.game__select.select')
  ;(0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElements)(
    [1, 2, 3, 4, 5, 6].map(it => 'button.select__btn.button.select__btn_'+it)
  ).forEach(element => _game__select.append(element));
  
  const _game__aditional = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)('.game__aditional.aditional')
  const _aditional__top = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)('.aditional__top')
  const _aditional__img = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)('.aditional__img')
  const _aditional__left = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)('.aditional__left')
  const _aditional__name = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)('.aditional__name')
  const _aditional__nameLatin = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)('.aditional__name-latin')
  const _aditional__player = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)('.aditional__player.player')
  createPlayer(_aditional__player, _module_commands__WEBPACK_IMPORTED_MODULE_3__.VOLUME_ADDITIONAL);
  const _aditional__text = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)('.aditional__text')

  _aditional__left.append(_aditional__name, _aditional__nameLatin, _aditional__player)
  _aditional__top.append(_aditional__img, _aditional__left)
  _game__aditional.append(_aditional__top, _aditional__text)

  const _game__nextBtn = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)(`.game__next-btn.button=${(0,_module_settings__WEBPACK_IMPORTED_MODULE_5__.getTextByKey)('next')}`)

  _game__bottom.append(_game__select, _game__aditional)
  _game.append(_game__levelList, _game__main, _game__bottom, _game__nextBtn)
  _container.append(_game)
  _main.append(_container)
  _downWrapper.append(_main)
  root.append(_downWrapper)

  return {
    main: _downWrapper,
    name: _game__name,
    img: _game__birdImg,
    player: _game__player,
    selects: _game__select,
    score: _score,
    selector: _game__select,
    topLevels: _game__levelList,
    aditional: {
      container: _aditional__top,
      name: _aditional__name,
      latin: _aditional__nameLatin,
      img: _aditional__img,
      player: _aditional__player,
      text: _aditional__text
    },
    next: _game__nextBtn
  }
}

const createPlayer = (_player, type) => {
  const _player__wrapper = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)('.player__wrapper')
  const _player__playBtn = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)('.player__play-btn');
  const _player__timelineWrapper = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)('.player__timeline-wrapper')
  const _player__timeline = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)('input.player__timeline');
  _player__timeline.setAttribute('type', 'range');
  _player__timeline.setAttribute('step', 0.1);
  _player__timeline.value = 0;

  const _player__volumeBtn = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)('.player__volume-btn')
  const _player__volume = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)('input.player__volume');
  _player__volume.setAttribute('type', 'range');
  _player__volume.max = 100;

  const _player__loading = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)('.player__loading')
  const _a = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)('.player__loading.a')
  _a.setAttribute('style', '--n: 10')
  for(let i = 0; i < 10; i++) {
    const _dot = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)('.dot')
    _dot.setAttribute('style', '--i: '+i)
    _a.append(_dot)
  }
  _player__loading.append(_a);

  const _player__time = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)('.player__time');
  const _player__timeCur = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)(`.player__time-cur=00:00`);
  const _player__timeDur = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_4__.createNewElement)(`.player__time-dur=00:00`);
  _player__time.append(_player__timeCur, _player__timeDur)
  
  _player__timelineWrapper.append(_player__timeline, _player__time)
  _player__wrapper.append(_player__playBtn, _player__timelineWrapper, _player__volumeBtn, _player__volume)
  _player.append(_player__wrapper, _player__loading)
  return _player
}

function startGame(blocksBundle) {
  const states = {
    nameState: new _module_commands__WEBPACK_IMPORTED_MODULE_3__.useState('', blocksBundle.name),
    imgState: new _module_commands__WEBPACK_IMPORTED_MODULE_3__.useImageState('', blocksBundle.img),
    player: new _module_commands__WEBPACK_IMPORTED_MODULE_3__.usePlayerState(blocksBundle.player, _module_commands__WEBPACK_IMPORTED_MODULE_3__.VOLUME_MAIN),
    scoreState: new _module_commands__WEBPACK_IMPORTED_MODULE_3__.useState(0, blocksBundle.score),
    aditionalStates: {
      displayState: new _module_commands__WEBPACK_IMPORTED_MODULE_3__.useClassState(DISPLAY_NONE, blocksBundle.aditional.container),
      nameState: new _module_commands__WEBPACK_IMPORTED_MODULE_3__.useState('', blocksBundle.aditional.name),
      latinState: new _module_commands__WEBPACK_IMPORTED_MODULE_3__.useState('', blocksBundle.aditional.latin),
      imgState: new _module_commands__WEBPACK_IMPORTED_MODULE_3__.useImageState('', blocksBundle.aditional.img),
      player: new _module_commands__WEBPACK_IMPORTED_MODULE_3__.usePlayerState(blocksBundle.aditional.player, _module_commands__WEBPACK_IMPORTED_MODULE_3__.VOLUME_ADDITIONAL),
      textState: new _module_commands__WEBPACK_IMPORTED_MODULE_3__.useState('', blocksBundle.aditional.text),
    },
    nextState: new _module_commands__WEBPACK_IMPORTED_MODULE_3__.useClassState('game__next-btn_disabled', blocksBundle.next)
  }

  if(!_module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.isStarted) {
    _module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.isStarted = true;
    states.nameState.setVal('* * *');
    states.imgState.setVal('');
    states.scoreState.setVal(0);
    _module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.curScore = 0;
    states.aditionalStates.displayState.setVal(true);
    states.aditionalStates.nameState.setVal('');
    states.aditionalStates.imgState.setVal('');
    states.aditionalStates.textState.setVal(
      (0,_module_settings__WEBPACK_IMPORTED_MODULE_5__.getTextByKey)("message")
    )
    states.aditionalStates.latinState.setVal('');
    states.nextState.setVal(true)
    setRandomBird(0)
  } else {
    const bird = (0,_module_settings__WEBPACK_IMPORTED_MODULE_5__.getBirdByLevelAndNumber)(_module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.level, _module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.correctBird)
    if (_module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.chousedCorrectBird) {
      states.nameState.setVal(bird.name);
      states.imgState.setVal(bird.image);
      states.aditionalStates.displayState.setVal(false);

      const aditionalBird = (0,_module_settings__WEBPACK_IMPORTED_MODULE_5__.getBirdByLevelAndNumber)(
        _module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.level,
        _module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.lastChoise
      ) 
      states.aditionalStates.nameState.setVal(aditionalBird.name);
      states.aditionalStates.imgState.setVal(aditionalBird.image);
      states.scoreState.setVal(_module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.score);
      states.aditionalStates.player.setAudio(aditionalBird.audio)
      states.aditionalStates.latinState.setVal(aditionalBird.species);
      states.aditionalStates.textState.setVal(aditionalBird.description);
      setBird()
      const button = blocksBundle.selector.children[_module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.correctBird];
      button.textContent = "✔ " +button.textContent
      button.classList.add('select__btn_correct')
      states.nextState.setVal(false)
    } else {
      states.nameState.setVal('* * *');
      states.imgState.setVal('');
      states.aditionalStates.displayState.setVal(true);
      states.aditionalStates.nameState.setVal('');
      states.aditionalStates.imgState.setVal('');
      states.scoreState.setVal(_module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.score);
      states.aditionalStates.textState.setVal(
        (0,_module_settings__WEBPACK_IMPORTED_MODULE_5__.getTextByKey)("message")
      )
      states.aditionalStates.latinState.setVal('');
      setBird()
      states.nextState.setVal(true);
    }
    _module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.missCh.forEach(num => {
      const button = blocksBundle.selector.children[num];
      button.textContent = "✘ " +button.textContent;
      button.classList.add('select__btn_wrong');
    })
  }

  blocksBundle.next.onclick = nextLevel;


  function setRandomBird(level) {
    _module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.level = level
    _module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.correctBird = Math.trunc(Math.random()*60) % 6;
    states.imgState.setVal('');

    setBird()
  }

  function setBird() {
    [...blocksBundle.selector.children].forEach((sel, i) => {
      sel.textContent = (0,_module_settings__WEBPACK_IMPORTED_MODULE_5__.getBirdByLevelAndNumber)(_module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.level, i).name
    })

    for(let i = 0; i < _module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.level; i++) {
      blocksBundle.topLevels.children[i].classList.add(
        "game__level_done"
      )
    }
    blocksBundle.topLevels.children[_module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.level].classList.add(
      "game__level_current"
    )

    const bird = (0,_module_settings__WEBPACK_IMPORTED_MODULE_5__.getBirdByLevelAndNumber)(_module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.level, _module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.correctBird)
    states.aditionalStates.player.stop()
    states.player.stop()
    states.player.setAudio(bird.audio)
    
    blocksBundle.selector.addEventListener('click', e => {
      const children = [...blocksBundle.selector.children]
      if(e.target == children[_module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.correctBird]) {
        userChouseCorrectBird(e.target)
      }
      children.forEach((button, i) => {
        if(e.target == button) {
          _module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.lastChoise = i
          showBirgsInfo(i)
          if(e.target != children[_module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.correctBird]) {
            userChouseWrongBird(e.target, i)
          }
        }
      })
    })
  }

  function userChouseCorrectBird(button) {
    if(_module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.chousedCorrectBird) return
    _module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.chousedCorrectBird = true
    states.player.stop();
    button.textContent = "✔ " +button.textContent
    button.classList.add('select__btn_correct')
    ;(0,_module_player__WEBPACK_IMPORTED_MODULE_6__.playCorrect)();
    
    const points = _module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.score + 5 - _module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.missCh.length;
    states.scoreState.setVal(points)
    _module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.score = points

    const bird = (0,_module_settings__WEBPACK_IMPORTED_MODULE_5__.getBirdByLevelAndNumber)(_module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.level, _module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.correctBird)
    states.nameState.setVal(bird.name);
    states.imgState.setVal(bird.image);
    states.nextState.setVal(false);
  }

  function userChouseWrongBird(button, i) {
    if(_module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.chousedCorrectBird) return
    if(_module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.missCh.has(i)) return
    _module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.missCh.push(i)
    button.textContent = "✘ " +button.textContent
    button.classList.add('select__btn_wrong')
    ;(0,_module_player__WEBPACK_IMPORTED_MODULE_6__.playWrong)();
  }

  function showBirgsInfo(number) {
    const bird = (0,_module_settings__WEBPACK_IMPORTED_MODULE_5__.getBirdByLevelAndNumber)(_module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.level, number)
    states.aditionalStates.displayState.setVal(false);
    states.aditionalStates.imgState.setVal(bird.image);
    states.aditionalStates.nameState.setVal(bird.name);
    states.aditionalStates.latinState.setVal(bird.species);
    states.aditionalStates.textState.setVal(bird.description);
    states.aditionalStates.player.stop()
    states.aditionalStates.player.setAudio(bird.audio)
  }

  function nextLevel() {
    if(!_module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.chousedCorrectBird) return;
    if(_module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.level == 5) {
      _module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.isStarted = false;
      _module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.chousedCorrectBird = false;
      _module_commands__WEBPACK_IMPORTED_MODULE_3__.router[3]();
    } else {
      _module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.level = _module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.level + 1
      _module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.chousedCorrectBird = false;
      _module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.missCh = []
      states.nameState.setVal('* * *');
      states.imgState.setVal('');
      states.aditionalStates.displayState.setVal(true);
      states.aditionalStates.nameState.setVal('');
      states.aditionalStates.imgState.setVal('');
      states.aditionalStates.textState.setVal(
        (0,_module_settings__WEBPACK_IMPORTED_MODULE_5__.getTextByKey)("message")
      )
      states.aditionalStates.latinState.setVal('');
      states.nextState.setVal(true);
      setRandomBird(_module_commands__WEBPACK_IMPORTED_MODULE_3__.gameStatus.level);
      _module_commands__WEBPACK_IMPORTED_MODULE_3__.router[1]();
    }
  }
}

Array.prototype.has = function(elem) {
  return new Set(this).has(elem)
}

/***/ }),

/***/ "./src/pages/start-page/index.js":
/*!***************************************!*\
  !*** ./src/pages/start-page/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ openStartPage)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .//style.scss */ "./src/pages/start-page/style.scss");
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/header/header */ "./src/components/header/header.js");
/* harmony import */ var _module_my_little_fw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../module/my-little-fw */ "./src/module/my-little-fw.js");
/* harmony import */ var _module_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../module/settings */ "./src/module/settings.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/footer */ "./src/components/footer/index.js");
/* harmony import */ var _module_commands__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../module/commands */ "./src/module/commands.js");







function openStartPage(root) {
  (0,_module_commands__WEBPACK_IMPORTED_MODULE_5__.clearView)(root)
  root.appendChild((0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_2__.createNewElement)('.body-back'))
  const [_scoreText, _score] = (0,_components_header_header__WEBPACK_IMPORTED_MODULE_1__.createHeader)(root, 0)
  _scoreText.textContent = (0,_module_settings__WEBPACK_IMPORTED_MODULE_3__.getTextByKey)('scoreStart')
  _score.textContent = (0,_module_settings__WEBPACK_IMPORTED_MODULE_3__.getScore)()
  const [startButton, galeryButton] = createView(root)
  createButtonEvents(startButton, galeryButton, root, _module_commands__WEBPACK_IMPORTED_MODULE_5__.router)
  ;(0,_components_footer__WEBPACK_IMPORTED_MODULE_4__.createFooter)(root)
}

const createView = (root) => {
  const _main =  (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_2__.createNewElement)('main.main');
  const _container =  (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_2__.createNewElement)('.container');
  const _startScreen =  (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_2__.createNewElement)('.start-screen');
  const _startScreen__welcomeText =  (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_2__.createNewElement)(`.start-screen__welcome-text=${(0,_module_settings__WEBPACK_IMPORTED_MODULE_3__.getTextByKey)("welcomeText")}`);
  const _startScreen__startButton =  (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_2__.createNewElement)(`button.start-screen__start-button.button=${(0,_module_settings__WEBPACK_IMPORTED_MODULE_3__.getTextByKey)("startBtn")}`);
  const _startScreen__galeryButton =  (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_2__.createNewElement)(`button.start-screen__start-button.button=${(0,_module_settings__WEBPACK_IMPORTED_MODULE_3__.getTextByKey)("galeryBtn")}`);
  const _main__bird1 = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_2__.createNewElement)('.main__bird-1')
  const _main__bird2 = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_2__.createNewElement)('.main__bird-2')
  const _main__bird3 = (0,_module_my_little_fw__WEBPACK_IMPORTED_MODULE_2__.createNewElement)('.main__bird-3')
  
  _startScreen.append(_startScreen__welcomeText, _startScreen__startButton, _startScreen__galeryButton)
  _container.append(_startScreen)
  _main.append(_container, _main__bird1, _main__bird2, _main__bird3)
  root.append(_main)

  return [_startScreen__startButton, _startScreen__galeryButton]
}

const createButtonEvents = (startButton, galeryButton, root, router) => {
  startButton.onclick = () => {
    _module_commands__WEBPACK_IMPORTED_MODULE_5__.gameStatus.isStarted = false;
    _module_commands__WEBPACK_IMPORTED_MODULE_5__.gameStatus.missCh = [];
    _module_commands__WEBPACK_IMPORTED_MODULE_5__.gameStatus.chousedCorrectBird = false;
    _module_commands__WEBPACK_IMPORTED_MODULE_5__.gameStatus.lastChoise = -1;
    _module_commands__WEBPACK_IMPORTED_MODULE_5__.gameStatus.score = 0;
    router[1](root);
  }
}

/***/ }),

/***/ "./src/assets/audio/correct.wav":
/*!**************************************!*\
  !*** ./src/assets/audio/correct.wav ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fe95e484c435a6154d9c.wav";

/***/ }),

/***/ "./src/assets/audio/end-game.wav":
/*!***************************************!*\
  !*** ./src/assets/audio/end-game.wav ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "57fe6abc78a419553ee3.wav";

/***/ }),

/***/ "./src/assets/audio/lose.wav":
/*!***********************************!*\
  !*** ./src/assets/audio/lose.wav ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d3dbac7640a1b4e7a2f5.wav";

/***/ }),

/***/ "./src/entities/birds-en-us.json":
/*!***************************************!*\
  !*** ./src/entities/birds-en-us.json ***!
  \***************************************/
/***/ ((module) => {

module.exports = JSON.parse('[[{"id":1,"name":"Raven","species":"Corvus corax","description":"Raven is a large bird. The body length reaches 70 centimeters, the wingspan is up to one and a half meters. Ravens inhabit the vicinity of the Tower. There is a belief in England that the day the black crows fly away from the Tower, the monarchy will collapse.","image":"https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3"},{"id":2,"name":"Shadoof","species":"Grus grus","description":"The sounds made by the shadoof are similar to the voiced «kur-ly - kur-ly». Cranes most often sing in a duet - one bird begins the song with the syllable «kur», and the second picks up «ly». If a bird sings alone, then it makes only the sound of «chickens».","image":"https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3"},{"id":3,"name":"Swallow","species":"Delichon urbicum","description":"Swallows are characterized by a low chirping. The songs of the swallows do not stop throughout the summer. Researchers distinguish up to 6 chirping sounds in birds: “vit”, “vi-vit”, “chivit”, “chirivit”, etc. Swallows love to sing a duet.","image":"https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3"},{"id":4,"name":"Nightjar","species":"Caprimulgus europaeus","description":"Nightjar is an inconspicuous bird known for its voice. The song of the nightjar sounds like a monotonous trill similar to the rattling of a motorcycle. Such rattling is heard from dusk to dawn, its tonality, frequency and volume change.","image":"https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3"},{"id":5,"name":"Cuckoo","species":"Cuculus canorus","description":"The cuckoo was named so because of the peculiarities of its songs. The voiced “cuckoo” cannot be confused with any other bird. Cuckoos do not build nests, their offspring are raised by other species of birds, to which cuckoos throw their eggs.","image":"https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3"},{"id":6,"name":"Tit","species":"Parus major","description":"More than 40 different sound combinations are distinguished in the chirping of tits. They sing almost all year round, fading a little only in winter. Tits are real orderlies of the forest. One pair of tits during the nesting period protects dozens of trees from pests.","image":"https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3"}],[{"id":1,"name":"Sparrow","species":"Passer domesticus","description":"Sparrows are the most famous and recognizable birds. They are easily recognizable by their colorful plumage and perky chirping. Sparrows belong to the synotropic species - they settle close to human habitation.","image":"https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3"},{"id":2,"name":"Rook","species":"Corvus frugilegus","description":"Rooks are very smart and quick-witted birds. With the help of a beak, they create and use the simplest tools. Rooks have a developed reflex to the sounds of a tractor. Hearing “rattling”, they fly to the sound - the tractor plows the ground, which means that there is a lot of food in this place.","image":"https://live.staticflickr.com//65535//49347123322_291c86b016.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3"},{"id":3,"name":"Jackdaw","species":"Coloeus monedula","description":"The word “jackdaw” comes from word “jack” is translated as “black”. This word is often used to refer to ravens or other black birds. The Latin name of the jackdaw “monedula” is associated with the words coin for the bird\'s love for shiny and bright things.","image":"https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3"},{"id":4,"name":"Songthrush","species":"Turdus philomelos","description":"Songthrush is the best singer from the sparrow squad. The song consists only of beautiful sonorous whistles and short trills. Most often it can be heard in the morning and evening. Thrushes sing during the entire nesting period.","image":"https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3"},{"id":5,"name":"Magpie","species":"Pica pica","description":"Magpie is a very hardworking bird. She builds up to eight nests, and then chooses the best of them. The entrance to the nest of magpies is always facing south, so that it is warmer in the dwelling. Magpies are the only birds that recognize themselves in a mirror.","image":"https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3"},{"id":6,"name":"Jay","species":"Garrulus glandarius","description":"When the jay is worried, the tuft on her head is ruffled. The bird tries to create a frightening sight. Jays are able to imitate the voices of other birds, animals and the sounds that humans create. For the winter they make large stocks of acorns and nuts.","image":"https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3"}],[{"id":1,"name":"Finch","species":"Fringilla coelebs","description":"There are 450 species of finches in the wild. In winter, finches lead a flocking lifestyle. Sometimes sparrows can be seen in their families. Finches sing in the spring, with the onset of the mating season. Their singing is a gushing multi-minute roulades.","image":"https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3"},{"id":2,"name":"Crossbill","species":"Loxia curvirostra","description":"Crossbills are called “Christmas” birds. Under exceptional conditions, they give birth in winter - in January. These birds insulate their nests with moss and animal hair, so the chicks are not cold. In search of cones crossbills can fly 3500 km from the nest.","image":"https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3"},{"id":3,"name":"Turtledove","species":"Streptopelia turtur","description":"Turtledoves live in mixed and broad-leaved forests, as well as in city parks and towns. Birds often choose places of life next to humans and easily get used to people. Due to the melodic pleasant singing of turtle doves, they are often bred at home.","image":"https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3"},{"id":4,"name":"Woodpecker","species":"Dendrocopos major","description":"The woodpecker is a conspicuous and noisy bird that often lives next to humans. From mid-January to the end of June, you can hear the “drum roll” of woodpeckers - a trill from the vibration of branches under the quick beats of the bird\'s beak. In good weather, the shot can be heard within a radius of 1.5 km.","image":"https://live.staticflickr.com/65535/49339376578_e933426455.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3"},{"id":5,"name":"Hoopoe","species":"Upupa epops","description":"Hoopoes prefer to live in open landscapes with selected trees or groves. The most typical for birds are forest-steppe and savannah. A hoopoe can choose a place of residence next to a person: pastures, vineyards, orchards.","image":"https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3"},{"id":6,"name":"Swift","species":"Apus apus","description":"Swift can be seen in almost every corner of the planet. They live both in forest areas and in open areas. Swifts live in large flocks. Large colonies of these birds can be seen in cities or on coastal cliffs.","image":"https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3"}],[{"id":1,"name":"Lark","species":"Alauda arvensis","description":"Larks are migratory birds. From the beginning of September, they fly south. They return at the beginning of March, regardless of whether the snow has melted or not. By the arrival of the larks, they determined the onset of spring and the time when it was time to plow the land.","image":"https://live.staticflickr.com/65535/47105096764_f751fba568.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3"},{"id":2,"name":"Nightingale","species":"Luscinia luscinia","description":"Nightingales sing from the beginning of May until the end of summer. Each song of the nightingale consists of 12 repeating elements, which are also called knees. In addition to their own trills, nightingales easily and well adopt the singing of other birds.","image":"https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3"},{"id":3,"name":"Starling","species":"Sturnus vulgaris","description":"Starlings are migratory birds. Synchronous flight of large flocks of starlings is called murmuration. This is a beautiful and mesmerizing phenomenon - many birds seem to dance in the air, forming intricate shapes that decrease and increase in the sky.","image":"https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3"},{"id":4,"name":"Oriole","species":"Oriolus oriolus","description":"The melody of the oriole\'s voice is compared to the sound of a flute. It is difficult for a person to see the oriole, as it lives high in the trees. The oriole is not only a very beautiful, but also a useful bird. It destroys poisonous caterpillars that other birds do not eat.","image":"https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3"},{"id":5,"name":"Waxwing","species":"Bombycilla garrulus","description":"The waxwing has very tenacious claws, which helps the bird to stay on the branches and peck at the berries that are the hardest to get. During courtship, the male offers the female a berry or other treat. If the female accepts it, then the birds create a pair.","image":"https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3"},{"id":6,"name":"Goldfinch","species":"Carduelis carduelis","description":"Goldfinches sing beautifully and melodiously. Both in nature and in captivity, they chirp almost all year round. More than 20 iridescent trills are distinguished in the singing of the goldfinch. Goldfinches get used to people, and can even return to the owner after they are released into the wild.","image":"https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3"}],[{"id":1,"name":"Eagle","species":"Aquila nipalensis","description":"In ancient times, the eagle was a symbol of the sun. Eagles often soar above the ground, while their speed can reach 240 km/h. The illusion of slow movement is due to the flight altitude - more than 700 meters","image":"https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3"},{"id":2,"name":"Kite","species":"Milvus migrans","description":"Kites are large predators, they reach a height of about half a meter, and the weight of adults reaches 1 kg. The wings are narrow and long, their span is 1.5 m. Kites often nest in large flocks and even form large colonies.","image":"https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3"},{"id":3,"name":"Harrier","species":"Circus cyaneus","description":"Harrier is a small falcon. It feeds mainly on mouse-like rodents, the basis of its diet is voles, hamsters, and mice. The plumage of the Harrier may be ash grey. The comparison “gray-haired like a harrier” is associated with such a bird.","image":"https://live.staticflickr.com/4480/37240531151_b74619c99d.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3"},{"id":4,"name":"Falcon","species":"Falco peregrinus","description":"The Latin name of the falcon Falco comes from the word “sickle” because of the sickle-shaped wings. Long and wide wings allow the falcon to rise high into the sky and soar freely. The flight speed of the falcon reaches 280-320 kilometers per hour.","image":"https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3"},{"id":5,"name":"Hawk","species":"Accipiter gentilis","description":"All hawks are characterized by wide and short wings. Another distinguishing feature is the white “eyebrows” above the eyes. Slavic warriors placed the image of a hawk on their banners as a symbol of courage, power and ruthlessness towards enemies.","image":"https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3"},{"id":6,"name":"Eagle owl","species":"Bubo bubo","description":"The flight of the eagle owl is silent, the eyesight is very sharp. These features make the bird an unsurpassed night hunter. The eagle owl has no natural enemies, not a single animal preys on adult birds. But foxes and wolves attack the chicks.","image":"https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3"}],[{"id":1,"name":"Albatross","species":"Diomedea exulans","description":"Albatross is the largest flying bird in the world. The wingspan reaches three and a half, weight - ten kilograms. Albatrosses spend most of their lives in the air, covering vast distances above the ocean.","image":"https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3"},{"id":2,"name":"Gannet","species":"Sula nebouxii","description":"A feature of the blue-footed gannet is not only the rich bright blue color of the legs, but also the fact that they are very warm. While other species of birds warm the clutches with their bodies, the blue-footed booby does this with the help of its paws.","image":"https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3"},{"id":3,"name":"Petrel","species":"Puffinus griseus","description":"The sizes of petrels are different. The smallest of them are up to 25 cm long, the largest - up to 1 m, with a wingspan of about 2 m. There is a belief that the appearance of a petrel in the air portends a storm, as the very name of the bird indicates.","image":"https://live.staticflickr.com//607//22136056020_935cb113f9.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3"},{"id":4,"name":"Pelican","species":"Pelecanus","description":"Pelicans are inhabitants of the seas and rivers. They walk awkwardly, but fly and swim well. They feed mainly on fish, organize collective hunts - lining up in a semicircle, they flap their wings and beaks on the water and force out the frightened fish in shallow water.","image":"https://live.staticflickr.com/65535/49159147156_dcbbb5c12a.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3"},{"id":5,"name":"Penguin","species":"Aptenodytes forsteri","description":"The male emperor penguin reaches a height of 130 cm, its weight can approach 50 kg. Of all modern penguins, this species is the largest. The penguin\'s diet consists of fish, squid and krill. Birds hunt in the ocean in large groups.","image":"https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3"},{"id":6,"name":"Seagull","species":"Larus argentatus","description":"Seagulls inhabit the shores of the seas, lakes, rivers, reservoirs, swamps, often nest on islands. Since the end of the last century, seagulls began to appear in large cities, where they nest on the roofs of buildings. All seagulls lead a colonial lifestyle.","image":"https://live.staticflickr.com/65535/48577115317_7034201dde.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3"}]]');

/***/ }),

/***/ "./src/entities/birds-ru-ru.json":
/*!***************************************!*\
  !*** ./src/entities/birds-ru-ru.json ***!
  \***************************************/
/***/ ((module) => {

module.exports = JSON.parse('[[{"id":1,"name":"Ворон","species":"Corvus corax","description":"Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.","image":"https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3"},{"id":2,"name":"Журавль","species":"Grus grus","description":"Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы». Журавли чаще всего поют дуэтом – одна птица начинает запев со слога «кур», а вторая подхватывает «лы». Если птица поёт одна, то она издает только звук «кур».","image":"https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3"},{"id":3,"name":"Ласточка","species":"Delichon urbicum","description":"Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.","image":"https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3"},{"id":4,"name":"Козодой","species":"Caprimulgus europaeus","description":"Козодой – неприметная птица, известная благодаря своему голосу. Песня козодоя звучит как монотонная трель похожая на тарахтение мотоцикла. Такое дребезжание слышно от заката до рассвета, его тональность, частота и громкость изменяются. ","image":"https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3"},{"id":5,"name":"Кукушка","species":"Cuculus canorus","description":"Кукушку назвали так из-за особенностей ее песен. Звонкое «ку-ку» не спутать ни с какой другой птицей. Кукушки не строят гнезда, их потомство выращивают другие виды пернатых, которым кукушки подбрасывают свои яйца.","image":"https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3"},{"id":6,"name":"Синица","species":"Parus major","description":"В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.","image":"https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3"}],[{"id":1,"name":"Воробей","species":"Passer domesticus","description":"Воробьи являются самыми известными и узнаваемыми пернатыми. Их легко узнать по пестрому оперению и задорному чириканью. Воробьи относятся к синатропному виду — они селятся поблизости к человеческому жилищу.","image":"https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3"},{"id":2,"name":"Грач","species":"Corvus frugilegus","description":"Грачи очень умные и сообразительные птицы. С помощью клюва они создают и используют простейшие орудия. У грачей развит рефлекс на звуки трактора. Услышав «тарахтение», они летят на звук – трактор пашет землю, значит, в этом месте много корма.","image":"https://live.staticflickr.com//65535//49347123322_291c86b016.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3"},{"id":3,"name":"Галка","species":"Coloeus monedula","description":"Слово «галка» произошло из старославянского языка и переводится как «чёрный». Этим словом часто называют воронов или других черных птиц. Латинское название галки «monedula» связывают со словами монета за любовь птицы к блестящим и ярким вещам.","image":"https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3"},{"id":4,"name":"Певчий дрозд","species":"Turdus philomelos","description":"Дрозд — лучший певец из отряда воробьиных. Песня состоит только из красивых звучных свистов и коротких трелей. Чаще всего её можно услышать в утреннее и вечернее время. Поют дрозды в течении всего периода гнездования.","image":"https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3"},{"id":5,"name":"Сорока","species":"Pica pica","description":"Сорока очень трудолюбивая птица. Она строит до восьми гнёзд, а потом выбирает из них самое лучшее. Вход в гнездо сорок всегда обращен на юг, чтобы в жилище было теплее. Сороки являются единственными птицами, которые узнают себя в зеркале.","image":"https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3"},{"id":6,"name":"Сойка","species":"Garrulus glandarius","description":"Когда сойка волнуется, хохолок на её голове взъерошивается. Птица старается создать устрашающее зрелище. Сойки умеют имитировать голоса других птиц, животных и звуки, которые создает человек. На зиму они делают большие запасы желудей и орехов.","image":"https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3"}],[{"id":1,"name":"Зяблик","species":"Fringilla coelebs","description":"В дикой природе насчитывается 450 видов зябликов. Зимой зяблики ведут стайный образ жизни. Иногда в их семьях можно увидеть воробьев. Запевают зяблики весной, с наступлением брачного периода. Их пение – это заливистые многоминутные рулады.","image":"https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3"},{"id":2,"name":"Клёст","species":"Loxia curvirostra","description":"Клестов называют «рождественскими» птицами. В естественных условиях они дают потомство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от гнезда.","image":"https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3"},{"id":3,"name":"Горлица","species":"Streptopelia turtur","description":"Горлица обитает в смешанных и широколиственных лесах, а также в городских парках и поселках. Птицы часто выбирают места жизни рядом с человеком и легко привыкают к людям. Благодаря мелодичному приятному пению горлиц часто разводят в домашних условиях.","image":"https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3"},{"id":4,"name":"Дятел","species":"Dendrocopos major","description":"Дятел – заметная и шумная птица, часто живет рядом с человеком. С середины января до конца июня можно услышать «барабанную дробь» дятлов – трель от вибрации веток под быстрыми ударами клюва птицы. В хорошую погоду дробь слышна в радиусе 1,5 км.","image":"https://live.staticflickr.com/65535/49339376578_e933426455.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3"},{"id":5,"name":"Удод","species":"Upupa epops","description":"Удоды предпочитают жить на открытых ландшафтах с отдельными деревьями или рощами. Наиболее удобными для птицы являются лесостепь и саванна. Удод может выбирать места жительства рядом с человеком: пастбища, виноградники, фруктовые сады.","image":"https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3"},{"id":6,"name":"Стриж","species":"Apus apus","description":"Стрижа можно увидеть практически в каждом уголке планеты. Они обитают как в лесных зонах, так и на открытых местностях. Живут стрижи крупными стаями. Большие колонии этих птиц можно увидеть в городах или на прибрежных скалах.","image":"https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3"}],[{"id":1,"name":"Жаворонок","species":"Alauda arvensis","description":"Жаворонки — перелетные птицы. С начала сентября они отлетают на юг. Возвращаются они в начале марта, независимо от того, сошел снег или нет. По прилету жаворонков определяли наступление весны и пору, когда пора пахать землю.","image":"https://live.staticflickr.com/65535/47105096764_f751fba568.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3"},{"id":2,"name":"Соловей","species":"Luscinia luscinia","description":"Соловьи поют с начала мая и до конца лета. Каждая песня соловья состоит из 12 повторяющихся элементов, которые еще называют коленами. Кроме собственных трелей, соловьи легко и хорошо перенимают пение других птиц.","image":"https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3"},{"id":3,"name":"Скворец","species":"Sturnus vulgaris","description":"Скворцы - перелётные птицы. Синхронный перелет больших стай скворцов называется мурмурацией. Это красивое и завораживающее явление – множество птиц будто танцуют в воздухе, образуя замысловатые фигуры, которые уменьшаются и увеличиваются в небе.","image":"https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3"},{"id":4,"name":"Иволга","species":"Oriolus oriolus","description":"Мелодичность голоса иволги сравнивают со звучанием флейты. Человеку сложно разглядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень красивая, но и  полезная птица. Она уничтожает ядовитых гусениц, которых не поедают другие птицы.","image":"https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3"},{"id":5,"name":"Свиристель","species":"Bombycilla garrulus","description":"У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.","image":"https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3"},{"id":6,"name":"Щегол","species":"Carduelis carduelis","description":"Щеглы поют красиво и мелодично. И в природе, и в неволе они щебечут почти круглый год. В пении щегла различают более 20 переливчатых трелей. Щеглы привыкают к людям, и даже могут возвратиться к хозяину после того, как их выпустили на волю","image":"https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3"}],[{"id":1,"name":"Орёл","species":"Aquila nipalensis","description":"В древние времена орел был символом солнца. Орлы часто парят над землей, при этом скорость их перемещения может достигать 240 км/ч. Иллюзия медленного движения происходит из-за высоты полета – более 700 метров","image":"https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3"},{"id":2,"name":"Коршун","species":"Milvus migrans","description":"Коршуны – крупные хищники, в высоту они достигают около полуметра, а вес взрослых особей достигает 1 кг. Крылья узкие и длинные, их размах составляет 1,5 м. Коршуны часто гнездятся большими стаями и даже образуют крупные колонии.","image":"https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3"},{"id":3,"name":"Лунь","species":"Circus cyaneus","description":"Лунь – это небольшой сокол. Питается в основном мышевидными грызунами, основа его рациона – полёвки, хомяки, мыши. Оперение луня может быть пепельно-серым. С такой птицей связано сравнение «седой, как лунь».","image":"https://live.staticflickr.com/4480/37240531151_b74619c99d.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3"},{"id":4,"name":"Сокол","species":"Falco peregrinus","description":"Латинское название сокола Falco произошло от слова «серп» из-за серповидной формы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и свободно парить. Скорость полёта сокола достигает 280-320 километров в час.","image":"https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3"},{"id":5,"name":"Ястреб","species":"Accipiter gentilis","description":"Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный признак - белые «брови» над глазами. Славянские дружинники размещали изображение ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.","image":"https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3"},{"id":6,"name":"Филин","species":"Bubo bubo","description":"Полет филина бесшумный, зрение очень острое. Эти особенности делают птицу непревзойденным ночным охотником. У филина нет естественных врагов, ни один зверь не охотится на взрослых птиц. А вот на птенцов нападают лисы и волки.","image":"https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3"}],[{"id":1,"name":"Альбатрос","species":"Diomedea exulans","description":"Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния","image":"https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3"},{"id":2,"name":"Олуша","species":"Sula nebouxii","description":"Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лапок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц греют кладки своим телом, голубоногая олуша делает это с помощью лапок","image":"https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3"},{"id":3,"name":"Буревестник","species":"Puffinus griseus","description":"Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.","image":"https://live.staticflickr.com//607//22136056020_935cb113f9.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3"},{"id":4,"name":"Пеликан","species":"Pelecanus","description":"Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.","image":"https://live.staticflickr.com/65535/49159147156_dcbbb5c12a.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3"},{"id":5,"name":"Пингвин","species":"Aptenodytes forsteri","description":"Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.","image":"https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3"},{"id":6,"name":"Чайка","species":"Larus argentatus","description":"Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на островах. С конца прошлого века чайки стали появляться в крупных городах, где устраивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.","image":"https://live.staticflickr.com/65535/48577115317_7034201dde.jpg","audio":"https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3"}]]');

/***/ }),

/***/ "./src/entities/main-en-us.json":
/*!**************************************!*\
  !*** ./src/entities/main-en-us.json ***!
  \**************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"lang":"en-en","name":"English","sections":["Warm-up","Passerines","Forest Birds","Songbirds","Predator Birds","Sea Birds"],"welcomeText":"Welcome to the game, here you will learn how to guess birdsong by ear","startBtn":"Start!","galeryBtn":"Galery","score":"Score:","scoreStart":"Best Score:","next":"Next Level","message":"Listen to the player and select a bird from the list","alt":"bird","play":"play","links":["Start Page","Quiz Page","Galery"],"congratulations":"Congratulations!","youPassed":"You passed the quiz and scored","outOf":"out of","possiblePoints":"possible points","tryAgain":"Try again!","toStart":"Open Start Page!"}');

/***/ }),

/***/ "./src/entities/main-ru-ru.json":
/*!**************************************!*\
  !*** ./src/entities/main-ru-ru.json ***!
  \**************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"lang":"ru-ru","name":"Русский","sections":["Разминка","Воробьиные","Лесные птицы","Певчие Птицы","Хищные Птицы","Морские Птицы"],"welcomeText":"Добро пожаловать в игру, здесь вы научитесь угадывать пение птиц по звуку","startBtn":"Начать!","galeryBtn":"Галерея!","score":"Счет:","scoreStart":"Рекорд:","next":"Следующий Уровень","message":"Послушайте плеер и выберите птицу из списка","alt":"птица","play":"воспроизвести","links":["Стартовая","Викторина","Галерея"],"congratulations":"Поздравляем!","youPassed":"Вы прошли викторину и набрали","outOf":"из","possiblePoints":"возможных баллов","tryAgain":"Попробовать еще раз!","toStart":"На стартовую страницу!"}');

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/main.scss */ "./src/style/main.scss");
/* harmony import */ var _pages_start_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/start-page */ "./src/pages/start-page/index.js");



(0,_pages_start_page__WEBPACK_IMPORTED_MODULE_1__["default"])(document.body)
})();

/******/ })()
;
//# sourceMappingURL=main.js.map