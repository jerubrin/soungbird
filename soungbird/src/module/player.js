import correct from '../assets/audio/correct.wav';
import wrong from '../assets/audio/lose.wav'
import endGame from '../assets/audio/end-game.wav'
import { getVolume, VOLUME_MAIN } from './commands';

const correctAudio = new Audio(correct)
export const playCorrect = () => {
  correctAudio.volume = getVolume(VOLUME_MAIN) / 100
  correctAudio.play()
}

const wrongAudio = new Audio(wrong)
export const playWrong = () => {
  wrongAudio.volume = getVolume(VOLUME_MAIN) / 100
  wrongAudio.play()
}

const endGameAudio = new Audio(endGame)
export const playEnd = () => {
  endGameAudio.volume = getVolume(VOLUME_MAIN) / 100
  endGameAudio.play()
}