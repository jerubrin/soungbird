import openFinishPage from "../pages/finish-page";
import openGalleryPage from "../pages/galery-page";
import openGamePage, { DISPLAY_NONE } from "../pages/game-page";
import openStartPage from "../pages/start-page";

export const clearView = root => root.innerHTML = '';

export const router = [
  () => {
    openStartPage(document.body)
    stopAllPlayers()
  },
  () => {
    openGamePage(document.body)
    stopAllPlayers()
  },
  () => {
    openGalleryPage(document.body)
    stopAllPlayers()
  },
  () => {
    openFinishPage(document.body)
    stopAllPlayers()
  },
]

export const gameStatus = {
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

export class useState {
  constructor (initVal, _block) {
    this.block = _block
    this.setVal(initVal)
  }
  setVal(newVal) {
    this.val = newVal
    this.block.textContent = this.val
  }
}

export class useImageState {
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

export class useClassState {
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
export const stopAllPlayers = () => players.forEach(player => player.stop())

export function usePlayerState(_block, type) {
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

  const loadingState = new useClassState(DISPLAY_NONE, _loading)
  loadingState.setVal(false)
  const playerDisplayState = new useClassState(DISPLAY_NONE, _wrapper);
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

export const VOLUME_MAIN = 'VOLUME_MAIN';
export const VOLUME_ADDITIONAL = 'VOLUME_ADDITIONAL';

function setVolume(vol, type){
  localStorage.setItem(type, vol)
}
export function getVolume(type){
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

export function getFormatedTime(time) {
  const m = Math.trunc(time / 60)
  const s = Math.trunc(time % 60)
  return ((m < 10) ? ('0' + m) : (m)) + ':' +
         ((s < 10) ? ('0' + s) : (s));
}