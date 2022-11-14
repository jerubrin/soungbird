import './/style.scss'
import { createFooter } from "../../components/footer"
import { createHeader } from "../../components/header/header"
import { clearView, gameStatus, router, useClassState, useImageState, usePlayerState, useState, VOLUME_ADDITIONAL, VOLUME_MAIN } from "../../module/commands"
import { createNewElement, createNewElements } from "../../module/my-little-fw"
import { getBirdByLevelAndNumber, getTextByKey } from "../../module/settings"
import { createPlayer, playCorrect, playWrong } from '../../module/player'

export const DISPLAY_NONE = 'display-none';

export default function openGamePage(root) {
  clearView(root)
  root.appendChild(createNewElement('.body-back'))
  const [_scoreText, _score] = createHeader(root, 1)
  _scoreText.textContent = getTextByKey('score')
  
  const blocksBundle = createView(root, _score)
  createFooter(blocksBundle.main)
  
  startGame(blocksBundle)
}

const createView = (root, _score) => {
  const _downWrapper = createNewElement('.down-wrapper')
  const _main =  createNewElement('main.main');
  const _container = createNewElement('.container');

  const _game = createNewElement('.game');

  const _game__levelList = createNewElement('.game__level-list');
  createNewElements(
    [1, 2, 3, 4, 5, 6].map(it => 'button.game__level.game__level_'+it)
  ).forEach((element, index) => {
    _game__levelList.append(element);
    element.textContent = getTextByKey('sections')[index]
  });

  const _game__main = createNewElement('.game__main');
  const _game__birdImg = createNewElement('.game__bird-img');
  const _game__mainRight = createNewElement('.game__main-right');
  const _game__name = createNewElement('.game__name=***');
  const _game__player = createNewElement('.game__player.player');
  createPlayer(_game__player, VOLUME_MAIN);
  _game__mainRight.append(_game__name, _game__player);
  _game__main.append(_game__birdImg, _game__mainRight);
  
  const _game__bottom = createNewElement('.game__bottom')

  const _game__select = createNewElement('.game__select.select')
  createNewElements(
    [1, 2, 3, 4, 5, 6].map(it => 'button.select__btn.button.select__btn_'+it)
  ).forEach(element => _game__select.append(element));
  
  const _game__aditional = createNewElement('.game__aditional.aditional')
  const _aditional__top = createNewElement('.aditional__top')
  const _aditional__img = createNewElement('.aditional__img')
  const _aditional__left = createNewElement('.aditional__left')
  const _aditional__name = createNewElement('.aditional__name')
  const _aditional__nameLatin = createNewElement('.aditional__name-latin')
  const _aditional__player = createNewElement('.aditional__player.player')
  createPlayer(_aditional__player, VOLUME_ADDITIONAL);
  const _aditional__text = createNewElement('.aditional__text')

  _aditional__left.append(_aditional__name, _aditional__nameLatin, _aditional__player)
  _aditional__top.append(_aditional__img, _aditional__left)
  _game__aditional.append(_aditional__top, _aditional__text)

  const _game__nextBtn = createNewElement(`.game__next-btn.button=${getTextByKey('next')}`)

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

function startGame(blocksBundle) {
  const states = {
    nameState: new useState('', blocksBundle.name),
    imgState: new useImageState('', blocksBundle.img),
    player: new usePlayerState(blocksBundle.player, VOLUME_MAIN),
    scoreState: new useState(0, blocksBundle.score),
    aditionalStates: {
      displayState: new useClassState(DISPLAY_NONE, blocksBundle.aditional.container),
      nameState: new useState('', blocksBundle.aditional.name),
      latinState: new useState('', blocksBundle.aditional.latin),
      imgState: new useImageState('', blocksBundle.aditional.img),
      player: new usePlayerState(blocksBundle.aditional.player, VOLUME_ADDITIONAL),
      textState: new useState('', blocksBundle.aditional.text),
    },
    nextState: new useClassState('game__next-btn_disabled', blocksBundle.next)
  }

  if(!gameStatus.isStarted) {
    gameStatus.isStarted = true;
    states.nameState.setVal('* * *');
    states.imgState.setVal('');
    states.scoreState.setVal(0);
    gameStatus.curScore = 0;
    states.aditionalStates.displayState.setVal(true);
    states.aditionalStates.nameState.setVal('');
    states.aditionalStates.imgState.setVal('');
    states.aditionalStates.textState.setVal(
      getTextByKey("message")
    )
    states.aditionalStates.latinState.setVal('');
    states.nextState.setVal(true)
    setRandomBird(0)
  } else {
    const bird = getBirdByLevelAndNumber(gameStatus.level, gameStatus.correctBird)
    if (gameStatus.chousedCorrectBird) {
      states.nameState.setVal(bird.name);
      states.imgState.setVal(bird.image);
      states.aditionalStates.displayState.setVal(false);

      const aditionalBird = getBirdByLevelAndNumber(
        gameStatus.level,
        gameStatus.lastChoise
      ) 
      states.aditionalStates.nameState.setVal(aditionalBird.name);
      states.aditionalStates.imgState.setVal(aditionalBird.image);
      states.scoreState.setVal(gameStatus.score);
      states.aditionalStates.player.setAudio(aditionalBird.audio)
      states.aditionalStates.latinState.setVal(aditionalBird.species);
      states.aditionalStates.textState.setVal(aditionalBird.description);
      setBird()
      const button = blocksBundle.selector.children[gameStatus.correctBird];
      button.textContent = "✔ " +button.textContent
      button.classList.add('select__btn_correct')
      states.nextState.setVal(false)
    } else {
      states.nameState.setVal('* * *');
      states.imgState.setVal('');
      states.aditionalStates.displayState.setVal(true);
      states.aditionalStates.nameState.setVal('');
      states.aditionalStates.imgState.setVal('');
      states.scoreState.setVal(gameStatus.score);
      states.aditionalStates.textState.setVal(
        getTextByKey("message")
      )
      states.aditionalStates.latinState.setVal('');
      setBird()
      states.nextState.setVal(true);
    }
    gameStatus.missCh.forEach(num => {
      const button = blocksBundle.selector.children[num];
      button.textContent = "✘ " +button.textContent;
      button.classList.add('select__btn_wrong');
    })
  }

  blocksBundle.next.onclick = nextLevel;


  function setRandomBird(level) {
    gameStatus.level = level
    gameStatus.correctBird = Math.trunc(Math.random()*60) % 6;
    states.imgState.setVal('');

    setBird()
  }

  function setBird() {
    [...blocksBundle.selector.children].forEach((sel, i) => {
      sel.textContent = getBirdByLevelAndNumber(gameStatus.level, i).name
    })

    for(let i = 0; i < gameStatus.level; i++) {
      blocksBundle.topLevels.children[i].classList.add(
        "game__level_done"
      )
    }
    blocksBundle.topLevels.children[gameStatus.level].classList.add(
      "game__level_current"
    )

    const bird = getBirdByLevelAndNumber(gameStatus.level, gameStatus.correctBird)
    states.aditionalStates.player.stop()
    states.player.stop()
    states.player.setAudio(bird.audio)
    
    blocksBundle.selector.addEventListener('click', e => {
      const children = [...blocksBundle.selector.children]
      if(e.target == children[gameStatus.correctBird]) {
        userChouseCorrectBird(e.target)
      }
      children.forEach((button, i) => {
        if(e.target == button) {
          gameStatus.lastChoise = i
          showBirgsInfo(i)
          if(e.target != children[gameStatus.correctBird]) {
            userChouseWrongBird(e.target, i)
          }
        }
      })
    })
  }

  function userChouseCorrectBird(button) {
    if(gameStatus.chousedCorrectBird) return
    gameStatus.chousedCorrectBird = true
    states.player.stop();
    button.textContent = "✔ " +button.textContent
    button.classList.add('select__btn_correct')
    playCorrect();
    
    const points = gameStatus.score + 5 - gameStatus.missCh.length;
    states.scoreState.setVal(points)
    gameStatus.score = points

    const bird = getBirdByLevelAndNumber(gameStatus.level, gameStatus.correctBird)
    states.nameState.setVal(bird.name);
    states.imgState.setVal(bird.image);
    states.nextState.setVal(false);
  }

  function userChouseWrongBird(button, i) {
    if(gameStatus.chousedCorrectBird) return
    if(gameStatus.missCh.has(i)) return
    gameStatus.missCh.push(i)
    button.textContent = "✘ " +button.textContent
    button.classList.add('select__btn_wrong')
    playWrong();
  }

  function showBirgsInfo(number) {
    const bird = getBirdByLevelAndNumber(gameStatus.level, number)
    states.aditionalStates.displayState.setVal(false);
    states.aditionalStates.imgState.setVal(bird.image);
    states.aditionalStates.nameState.setVal(bird.name);
    states.aditionalStates.latinState.setVal(bird.species);
    states.aditionalStates.textState.setVal(bird.description);
    states.aditionalStates.player.stop()
    states.aditionalStates.player.setAudio(bird.audio)
  }

  function nextLevel() {
    if(!gameStatus.chousedCorrectBird) return;
    if(gameStatus.level == 5) {
      gameStatus.isStarted = false;
      gameStatus.chousedCorrectBird = false;
      router[3]();
    } else {
      gameStatus.level = gameStatus.level + 1
      gameStatus.chousedCorrectBird = false;
      gameStatus.missCh = []
      states.nameState.setVal('* * *');
      states.imgState.setVal('');
      states.aditionalStates.displayState.setVal(true);
      states.aditionalStates.nameState.setVal('');
      states.aditionalStates.imgState.setVal('');
      states.aditionalStates.textState.setVal(
        getTextByKey("message")
      )
      states.aditionalStates.latinState.setVal('');
      states.nextState.setVal(true);
      setRandomBird(gameStatus.level);
      router[1]();
    }
  }
}

Array.prototype.has = function(elem) {
  return new Set(this).has(elem)
}