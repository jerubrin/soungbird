import './/style.scss';
import { createNewElement } from '../../module/blocks-creator';
import { getLang, getTextByKey, langs, setLang } from '../../module/content-filler';
import { router } from '../../module/router';

export const createHeader = (root, routerNum) => {
  const _header = createNewElement('header.header')
  
  const _logo = createNewElement('.logo')
  const _logo__img = createNewElement('.logo__img')
  const _logo__text = createNewElement('.logo__text=songbird')

  const linkNames = getTextByKey("links");
  const _nav = createNewElement('.nav');
  const _nav__ul = createNewElement('ul.nav__ul');

  [1, 2, 3].map((it, i) => {
    return [
      `li.nav__li.nav__li_${it}`, 
      `a.nav__link.nav__link_${it}=${linkNames[i]}`
    ]
  }).forEach((it, i) => {
    const _nav__li = createNewElement(it[0]);
    const _nav__a = createNewElement(it[1]);
    _nav__li.append(_nav__a);
    _nav__a.onclick = () => router[i]()
    _nav__ul.append(_nav__li)
  });
  _nav.append(_nav__ul);

  const _langs = createNewElement('.langs')
  const _langs__link_ru = createNewElement('a.langs__link=ru')
  const _langs__split = createNewElement('.langs__split=|')
  const _langs__link_en = createNewElement('a.langs__link=en')
  setLangs(_langs__link_ru, _langs__link_en, routerNum)
  
  const _score = createNewElement('.score')
  const _score__text = createNewElement('.score__text')
  const _score__number = createNewElement('.score__number')

  _langs.append(_langs__link_en, _langs__split, _langs__link_ru)
  _logo.append(_logo__img, _logo__text)
  _score.append(_score__text, _score__number)
  _header.append(_logo, _nav, _langs, _score)
  root.append(_header)
  return [_score__text, _score__number]
}

const setLangs = (_langs__link_ru, _langs__link_en, routerNum) => {
  const lang = getLang()
  if(lang == langs.SB_LANG_RU) {
    _langs__link_ru.classList.add('langs__link_active')
    _langs__link_en.onclick = () => {
      setLang(langs.SB_LANG_EN)
      router[routerNum]()
    }
  }
  if(lang == langs.SB_LANG_EN) {
    _langs__link_en.classList.add('langs__link_active')
    _langs__link_ru.onclick = () => {
      setLang(langs.SB_LANG_RU)
      router[routerNum]()
    }
  }
}