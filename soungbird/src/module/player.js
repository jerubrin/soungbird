import correct from '../assets/audio/correct.wav';
import wrong from '../assets/audio/lose.wav'
import endGame from '../assets/audio/end-game.wav'
import { getVolume, VOLUME_MAIN } from './commands';

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