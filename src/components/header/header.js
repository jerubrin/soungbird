export const createHeader = (root) => {
  const _header = createNewElement('header.header')
  const _logo = createNewElement('.logo')
  const _logo__img = createNewElement('.logo__img')
  const _logo__text = createNewElement('.logo__text')
  const _score = createNewElement('.score')
  const _score__text = createNewElement('.score__text')
  const _score__number = createNewElement('.score__number')
  _logo.append(_logo__img, _logo__text)
  _score.append(_score__text, _score__number)
  _header.append(_logo, _score)
  root.append(_header)
  return {_score__text, _score__number}
}