import './/style.scss'
import birdsRu from '../../entities/birds-ru-ru.json'
import birdsEn from '../../entities/birds-en-us.json'

import { createFooter } from "../../components/footer"
import { createHeader } from "../../components/header/header"
import { clearView, gameStatus, router, stopAllPlayers, usePlayerState, VOLUME_MAIN } from "../../module/commands"
import { createNewElement } from "../../module/my-little-fw"
import { getLang, getScore, getTextByKey, langs, setScore } from "../../module/settings"
import { createPlayer } from '../../module/player'

const MAX_SCORE = 30;

export default function openGalleryPage(root) {
  setScore(gameStatus.score)
  clearView(root)
  root.appendChild(createNewElement('.body-back'))
  const [_scoreText, _score] = createHeader(root, 2)
  _scoreText.textContent = getTextByKey('scoreStart')
  _score.textContent = getScore();

  const {_main} = createView(root, _score)
  createFooter(_main)
}

const createView = (root) => {
  const _downWrapper = createNewElement('.down-wrapper')

  const _main = createNewElement('main.main')
  const _container = createNewElement('.container')

  const _gallery = createNewElement('.gallery')

  const {_title, _cards} = createGalleryList(root)

  _gallery.append(_title, _cards)
  _container.append(_gallery)
  _main.append(_container)
  _downWrapper.append(_main)
  root.append(_downWrapper)

  return {_main: _downWrapper}
}

const createBirdsData = () => 
  getLang() == langs.SB_LANG_RU ? birdsRu : birdsEn;

const createGalleryList = root => {
  const galleryTitle = getTextByKey('galleryTitle')
  const _title = createNewElement(`.gallery__title=${galleryTitle}`)
  
  const _cards = createNewElement('.gallery__cards')
  let _modal = createNewElement('.modal')
  console.log(createBirdsData().flat())
  const cardsArray = createBirdsData()
    .flat()
    .map(bird => {
      const _card = createNewElement('.card')
      const _picture = createNewElement('.card__picture')
      _picture.style.backgroundImage = `url("${bird.image}")`
      const _title = createNewElement(`.card__title=${bird.name}`)
      _card.append(_title, _picture)
      _card.onclick = () => {
        if(root.lastChild == _modal) root.removeChild(_modal)
        const blocks = createModalWindow(bird)
        _modal = blocks._modal 
        blocks._modal__back.onclick = () => {
          stopAllPlayers()
          if(root.lastChild == _modal) root.removeChild(_modal)
        }
        root.append(blocks._modal)
      }
      return _card
    })
  cardsArray.forEach(_card => _cards.append(_card))

  return {_title, _cards}
}

const createModalWindow = (bird) => {
  const _modal = createNewElement('.modal')
  const _modal__back = createNewElement('.modal__back')
  const _modal__wrapper = createNewElement('.modal__wrapper')

  const name = bird.name
  const latinName = bird.species
  const description = bird.description
  const image = bird.image
  const audio = bird.audio

  const _picture = createNewElement('.modal__picture')
  _picture.style.backgroundImage = `url(${image})`
  const _right = createNewElement('.modal__right')
  const _name = createNewElement(`.modal__name=${name}`)
  const _latin = createNewElement(`.modal__latin=${latinName}`)
  
  const _description = createNewElement(`.modal__description=${description}`)
  const _player = createNewElement('.modal__player.player')
  const player = createPlayer(_player, VOLUME_MAIN)
  const playerState = new usePlayerState(player, VOLUME_MAIN)
  playerState.setAudio(audio)

  _right.append(_name, _latin, _player)
  _modal__wrapper.append(_picture, _right, _description)
  _modal.append(_modal__back, _modal__wrapper)

  _modal__back.onclick = () => {
    stopAllPlayers();
    if(root.lastChild == _modal){
      root.removeChild(_modal)
    }
  }

  return {_modal, _modal__back}
}