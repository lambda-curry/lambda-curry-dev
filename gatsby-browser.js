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

// https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
window.addEventListener(
  'resize',
  document.documentElement.style.setProperty(
    '--vh',
    `${window.innerHeight * 0.01}px`
  )
)

const embed = window.document.createElement('script')
embed.type = 'text/javascript'
embed.setAttribute('data-coupon-id', '5e81727fd99ba59195983219')
embed.src = `https://app.emeal.me/static/dist/emeal-embed.min.js`
document.body.appendChild(embed)
