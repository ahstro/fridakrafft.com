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

function updateSite () {
  // Get id from the location hash
  const id = window.location.hash.substr(1)

  // Set content according to current open page
  setContent(id)
  setActiveButton(id)
  addModalEventListeners(id)
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

function addModalEventListeners (id) {
  // Only update on relevant url
  if (id !== 'gallery') return
  // Add event listeners to images
  Array.from(document.getElementsByClassName('art')).forEach(el => {
    el.addEventListener('click', openModal)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  // Set state from url hash
  updateSite()

  // Update site whenever a menu item is clicked
  window.addEventListener('hashchange',  updateSite)
})
