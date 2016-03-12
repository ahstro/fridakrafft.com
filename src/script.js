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

function closeModal (e) {
  if (e.target.tagName.toLowerCase() === 'img') return
  const main = document.getElementById('main')
  const modal = document.getElementById('modal')
  main.removeChild(modal)
}

function openModal (e) {
  const main = document.getElementById('main')
  const oldModal = document.getElementById('modal')
  if (oldModal) main.removeChild(oldModal)
  const modal = document.createElement('div')
  const image = document.createElement('img')
  modal.id = "modal"
  image.src = e.target.src
  image.addEventListener('click', _ => window.open(e.target.src, '_blank'))
  modal.addEventListener('click', closeModal)
  modal.appendChild(image)
  main.appendChild(modal)
}

function addModalEventListeners (e) {
  // Only update on relevant url
  if (e && e.newURL.indexOf('#gallery') === -1) return
  // Add event listeners to images
  Array.from(document.getElementsByClassName('art')).forEach(el => {
    el.addEventListener('click', openModal)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  // Set state from url hash
  updateSite(window.location.hash.substr(1))

  // Make sure clicking images works
  window.addEventListener('hashchange',  addModalEventListeners)
  addModalEventListeners()

  // Set event listener to show content on click
  document.getElementById('nav').addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() !== 'a') return
    updateSite(e.target.hash.substr(1))
  })
})
