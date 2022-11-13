import openFinishPage from "../pages/finish-page";
import openGamePage from "../pages/game-page";
import openStartPage from "../pages/start-page";

export const clearView = root => root.innerHTML = '';

export const router = [
  () => {
    openStartPage(document.body)
    players.forEach(player => player.stop())
  },
  () => {
    openGamePage(document.body)
    players.forEach(player => player.stop())
  },
  () => {
    openFinishPage(document.body)
    players.forEach(player => player.stop())
  },
  () => {},
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

export const players = []
export function usePlayerState(_block, type) {
  let audio = null
  let isPlaying = false
  const _playButton = _block.children[0]
  const _timeline = _block.children[1]

  const _soundButton = _block.children[2]
  const _volLine = _block.children[3]

  let isMoving = false
  setInterval(() => {
    if(!audio || isMoving) return
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
    audio = new Audio(url)
    _timeline.valueAsNumber = 0;
    _volLine.value = getVolume(type);
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
    }
  }
  
  _timeline.oninput = e => {
    setStyleForTimeline(e.target)
    isMoving = true
  }
  _timeline.onchange = function(e) {
    setStyleForTimeline(e.target)
    audio.currentTime = this.valueAsNumber;
    isMoving = false;
  }

  _volLine.oninput = function(e) {
    audio.volume = e.target.valueAsNumber / 100;
    setStyleForTimeline(e.target)
  }
  _volLine.onchange = function(e) {
    setVolume(e.target.value, type)
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