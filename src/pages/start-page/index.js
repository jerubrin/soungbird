import { createHeader } from "../../components/header/header";
import { createNewElement, createNewElements } from "../../module/my-little-fw";

export default function openStartPage(root) {
  clearView(root)
  const {_scoreText, _score} = createHeader(root)
  createView(root)
}

const clearView = root => root.innerHTML = '';

const createView = (root) => {
  
}