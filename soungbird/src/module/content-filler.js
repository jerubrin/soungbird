import dataRu from '../entities/main-ru-ru.json'
import dataEn from '../entities/main-en-us.json'
import birdsRu from '../entities/birds-ru-ru.json'
import birdsEn from '../entities/birds-en-us.json'

//localStorage keys
const SB_LANG = 'SB_LANG';
const SB_SCORE = 'SB_SCORE';

export const langs = {
  SB_LANG_RU: 'ru-ru',
  SB_LANG_EN: 'en-us'
}
const allLengs = [langs.SB_LANG_EN, langs.SB_LANG_RU]

export const getLang = () => {
  let lang = localStorage.getItem(SB_LANG)
  return lang ? lang : langs.SB_LANG_RU
}

export const setLang = (lang) => {
  if(new Set(allLengs).has(lang)){
    localStorage.setItem(SB_LANG, lang)
  } else {
    localStorage.setItem(SB_LANG, langs.SB_LANG_RU)
  }
}

export const getTextByKey = (key) => {
  const data = getLang() == langs.SB_LANG_RU 
    ? dataRu 
    : dataEn
  return data[key] ? data[key] : '{text}'
}

export const getBirdByLevelAndNumber = (level, number) => {
  const birds = getLang() == langs.SB_LANG_RU 
    ? birdsRu 
    : birdsEn
  return birds[level][number] ? birds[level][number] : {name: '{text}'}
}

export const setScore = (score) => {
  if(score > getScore()) {
    localStorage.setItem(SB_SCORE, score)
  }
}

export const getScore = () => {
  const score = localStorage.getItem(SB_SCORE)
  return score ? Number(score) : 0
}