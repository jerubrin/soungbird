import { useClassState } from "../../module/hooks"
import { DISPLAY_NONE } from "../../pages/game-page"

const MUTED_CLASS = 'player__volume-btn_mute'

const players = []
export const stopAllPlayers = () => players.forEach(player => player.stop())

export function usePlayerState(_playerBlock, volumeType) {
  let audio = null
  let isPlaying = false
  const _wrapper = _playerBlock.firstChild
  const _playButton = _playerBlock.firstChild.children[0]
  const _timeline = _playerBlock.firstChild.children[1].firstChild
  const _curTime = _playerBlock.firstChild.children[1].children[1].firstChild
  const _durTime = _playerBlock.firstChild.children[1].children[1].children[1]

  const _volumeButton = _playerBlock.firstChild.children[2]
  const _volLine = _playerBlock.firstChild.children[3]

  const _loading = _playerBlock.children[1]

  const loadingState = useClassState(DISPLAY_NONE, _loading)
  loadingState.setVal(false)
  const playerDisplayState = useClassState(DISPLAY_NONE, _wrapper);
  playerDisplayState.setVal(true)
  const volumeButtonState = useClassState(MUTED_CLASS, _volumeButton)

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
    _volLine.value = getVolume(volumeType);
    volumeButtonState.setVal(_volLine.value == 0)
    audio.volume = _volLine.value / 100
    const t = {
      style: _volLine.style,
      value: _volLine.value,
      min: 0,
      max: 100
    }
    setStyleForTimeline(t)

    const loadPlayer =() => {
      _timeline.max = audio.duration;
      _durTime.textContent = getFormatedTime(audio.duration)
      loadingState.setVal(true)
      playerDisplayState.setVal(false)
    }

    if (/iPad|iPhone|iPod/.test(navigator.userAgent)){
      loadingState.setVal(true)
      playerDisplayState.setVal(false)
      _playButton.addEventListener('click', () => {
        audio.addEventListener('loadeddata', loadPlayer, false)
      })
    }
      
    audio.addEventListener('loadeddata', loadPlayer, false)
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
    setVolume(e.target.value, volumeType)
  }

  _volumeButton.onclick = function(e) {
    if(_volLine.valueAsNumber == 0) {
      const vol = getWasVolume(volumeType)
      setVolume(vol, volumeType)
      _volLine.value = vol
      audio.volume = vol / 100
    } else {
      setWasVolume(_volLine.valueAsNumber, volumeType);
      setVolume(0, volumeType)
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

function setVolume(vol, volumeType){
  localStorage.setItem(volumeType, vol)
}
export function getVolume(volumeType){
  const vol = localStorage.getItem(volumeType);
  return vol ? vol : 100
}

function setWasVolume(vol, volumeType){
  localStorage.setItem(volumeType + "_WAS", vol)
}

function getWasVolume(volumeType){
  const vol = localStorage.getItem(volumeType + "_WAS");
  return vol ? vol : 100
}

export function getFormatedTime(time) {
  const m = Math.trunc(time / 60)
  const s = Math.trunc(time % 60)
  return ((m < 10) ? ('0' + m) : (m)) + ':' +
         ((s < 10) ? ('0' + s) : (s));
}