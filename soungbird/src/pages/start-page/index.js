import './/style.scss'
import { createHeader } from "../../components/header/header";
import { createNewElement, createNewElements } from "../../module/my-little-fw";
import { getScore, getTextByKey } from "../../module/settings";
import { createFooter } from '../../components/footer';
import { clearView, gameStatus, router } from '../../module/commands';

export default function openStartPage(root) {
  clearView(root)
  root.appendChild(createNewElement('.body-back'))
  const [_scoreText, _score] = createHeader(root, 0)
  _scoreText.textContent = getTextByKey('scoreStart')
  _score.textContent = getScore()
  const [startButton, galeryButton] = createView(root)
  createButtonEvents(startButton, galeryButton, root, router)
  createFooter(root)
}

const createView = (root) => {
  const _main =  createNewElement('main.main');
  const _container =  createNewElement('.container');
  const _startScreen =  createNewElement('.start-screen');
  const _startScreen__welcomeText =  createNewElement(`.start-screen__welcome-text=${getTextByKey("welcomeText")}`);
  const _startScreen__startButton =  createNewElement(`button.start-screen__start-button.button=${getTextByKey("startBtn")}`);
  const _startScreen__galeryButton =  createNewElement(`button.start-screen__start-button.button=${getTextByKey("galeryBtn")}`);
  const _main__bird1 = createNewElement('.main__bird-1')
  const _main__bird2 = createNewElement('.main__bird-2')
  const _main__bird3 = createNewElement('.main__bird-3')
  
  _startScreen.append(_startScreen__welcomeText, _startScreen__startButton, _startScreen__galeryButton)
  _container.append(_startScreen)
  _main.append(_container, _main__bird1, _main__bird2, _main__bird3)
  root.append(_main)

  return [_startScreen__startButton, _startScreen__galeryButton]
}

const createButtonEvents = (startButton, galeryButton, root, router) => {
  startButton.onclick = () => {
    gameStatus.isStarted = false;
    gameStatus.missCh = [];
    gameStatus.chousedCorrectBird = false;
    gameStatus.lastChoise = -1;
    gameStatus.score = 0;
    router[1](root);
  }
}