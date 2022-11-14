import { stopAllPlayers } from "../components/player/player.hook"
import openFinishPage from "../pages/finish-page"
import openGalleryPage from "../pages/galery-page"
import openGamePage from "../pages/game-page"
import openStartPage from "../pages/start-page"

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