function slideHeaderUp () {
  const main = document.getElementById('main')
  if (main.className !== 'show-content') {
    main.className = 'show-content'
  }
}

function setContent (id) {
  if (!id) return
  slideHeaderUp()
  document.getElementById('content').innerHTML = document.getElementById(id).innerHTML
}

document.addEventListener('DOMContentLoaded', () => {
  // Set state from url hash
  const id = window.location.hash.substr(1)
  setContent(id)

  // Set event listener to show content on click
  document.getElementById('nav').addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() !== 'a') return
    setContent(e.target.hash.substr(1))
  })
})
