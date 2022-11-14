import './/style.scss'

import correct from '../../assets/audio/correct.wav';
import wrong from '../../assets/audio/lose.wav'
import endGame from '../../assets/audio/end-game.wav'
import { createNewElement } from '../../module/blocks-creator';
import { getVolume, VOLUME_MAIN } from './player.hook';

export const createPlayer = (_player, type) => {
  const _player__wrapper = createNewElement('.player__wrapper')
  const _player__playBtn = createNewElement('.player__play-btn');
  const _player__timelineWrapper = createNewElement('.player__timeline-wrapper')
  const _player__timeline = createNewElement('input.player__timeline');
  _player__timeline.setAttribute('type', 'range');
  _player__timeline.setAttribute('step', 0.1);
  _player__timeline.value = 0;

  const _player__volumeBtn = createNewElement('.player__volume-btn')
  const _player__volume = createNewElement('input.player__volume');
  _player__volume.setAttribute('type', 'range');
  _player__volume.max = 100;

  const _player__loading = createNewElement('.player__loading')
  const _a = createNewElement('.player__loading.a')
  _a.setAttribute('style', '--n: 10')
  for(let i = 0; i < 10; i++) {
    const _dot = createNewElement('.dot')
    _dot.setAttribute('style', '--i: '+i)
    _a.append(_dot)
  }
  _player__loading.append(_a);

  const _player__time = createNewElement('.player__time');
  const _player__timeCur = createNewElement(`.player__time-cur=00:00`);
  const _player__timeDur = createNewElement(`.player__time-dur=00:00`);
  _player__time.append(_player__timeCur, _player__timeDur)
  
  _player__timelineWrapper.append(_player__timeline, _player__time)
  _player__wrapper.append(_player__playBtn, _player__timelineWrapper, _player__volumeBtn, _player__volume)
  _player.append(_player__wrapper, _player__loading)
  return _player
}

export const playCorrect = () => {
  const correctAudio = new Audio(correct)
  correctAudio.volume = getVolume(VOLUME_MAIN) / 100
  correctAudio.play()
}

export const playWrong = () => {
  const wrongAudio = new Audio(wrong)
  wrongAudio.volume = getVolume(VOLUME_MAIN) / 100
  wrongAudio.play()
}

export const playEnd = () => {
  const endGameAudio = new Audio(endGame)
  endGameAudio.volume = getVolume(VOLUME_MAIN) / 100
  endGameAudio.play()
}