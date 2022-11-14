import './/style.scss'

import { createFooter } from "../../components/footer"
import { createHeader } from "../../components/header/header"
import { createNewElement } from "../../module/blocks-creator"
import { getTextByKey, setScore } from "../../module/content-filler"
import { playEnd } from '../../components/player/player'
import { router } from '../../module/router'
import { clearView } from '../../module/clear-view'
import { gameStatus } from '../../module/game-status'

const MAX_SCORE = 30;

export default function openFinishPage(root) {
  playEnd()
  setScore(gameStatus.score)
  clearView(root)
  root.appendChild(createNewElement('.body-back'))
  const [_scoreText, _score] = createHeader(root, 3)
  _scoreText.textContent = getTextByKey('score')
  _score.textContent = gameStatus.score;

  const {_main, _finish__button} = createView(root, _score)
  createFooter(_main)
  
  _finish__button.onclick = 
    gameStatus.score == MAX_SCORE ? toStartPage : toGamePage;
}

const toStartPage = () => {
  clearGameState()
  router[0]()
}

const toGamePage = () => {
  clearGameState()
  router[1]()
}

const clearGameState = () => {
  gameStatus.score = 0;
  gameStatus.missCh = [];
}

const createView = (root) => {
  const _downWrapper = createNewElement('.down-wrapper')

  const _main = createNewElement('main.main')
  const _container = createNewElement('.container')

  const _finish = createNewElement('.finish')
  const textTitle = getTextByKey("congratulations");
  const _finish__title = createNewElement(`.finish__title=${textTitle}`)
  const text = 
    (gameStatus.score < MAX_SCORE) ?
      getTextByKey('youPassed') + ' ' +
      gameStatus.score + ' ' +
      getTextByKey('outOf') + ' ' +
      MAX_SCORE + ' ' +
      getTextByKey('possiblePoints') :
      getTextByKey('maxScore')

  const _finish__text = createNewElement(`.finish__text.text=${text}`)
  const btnText = gameStatus.score == MAX_SCORE ?
    getTextByKey('toStart') :
    getTextByKey('tryAgain');
  const _finish__button = createNewElement(`.finish__button.button=${btnText}`)

  _finish.append(_finish__title, _finish__text, _finish__button)
  _container.append(_finish)
  _main.append(_container)
  _downWrapper.append(_main)
  root.append(_downWrapper)

  return {_main: _downWrapper, _finish__button}
}
