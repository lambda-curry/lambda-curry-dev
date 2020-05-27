/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import './src/styles/global.scss'

if ('ontouchstart' in document.documentElement) {
  document.body.classList.add('touch')
} else {
  document.body.classList.add('no-touch')
}
