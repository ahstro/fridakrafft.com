function slideHeaderUp () {
  const main = document.getElementById('main')
  if (main.className !== 'show-content') {
    main.className = 'show-content'
  }
}

function setActiveButton (id) {
  Array.from(document.getElementsByClassName('menu-item')).forEach(x => {
    x.className = x.hash === `#${id}`
      ? `${x.className} active`
      : x.className.replace('active', '')
  })
}

function setContent (id) {
  if (!id) return
  slideHeaderUp()
  document.getElementById('content').innerHTML = document.getElementById(id).innerHTML
}

function updateSite (id) {
  setContent(id)
  setActiveButton(id)
}

document.addEventListener('DOMContentLoaded', () => {
  // Set state from url hash
  updateSite(window.location.hash.substr(1))

  // Set event listener to show content on click
  document.getElementById('nav').addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() !== 'a') return
    updateSite(e.target.hash.substr(1))
  })
})
