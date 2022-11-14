import './/style.scss'
import { createNewElement, createNewElements } from '../../module/blocks-creator'

export const createFooter = (root) => {
  const _footer = createNewElement('footer.footer')
  const _footer__year = createNewElement('.footer__year=2022')
  const _footer__github = createNewElement('a.footer__github')
  const _footer__githubIcon = createNewElement('.footer__github-icon')
  const _footer__githubText = createNewElement('.footer__github-text=jerubrin')
  const _footer__rs = createNewElement('a.footer__rs')

  _footer__github.setAttribute('href', 'https://github.com/jerubrin/')
  _footer__github.setAttribute('target', '_blank')
  _footer__rs.setAttribute('href', 'https://rs.school/js/')
  _footer__rs.setAttribute('target', '_blank')

  _footer__github.append(_footer__githubIcon, _footer__githubText)
  _footer.append(_footer__year, _footer__github, _footer__rs)
  root.append(_footer)
}