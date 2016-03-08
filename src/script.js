document.addEventListener('DOMContentLoaded', () => {
  // Toggle navbar
  const main = document.getElementById('main')
  main.addEventListener('click', _ => {
    main.className = main.className === 'show-nav' ? 'hide-nav' : 'show-nav'
  })

  // Prevent toggling navbar when clicking navbar items
  const nav = document.getElementById('nav')
  nav.addEventListener('click', e => { e.stopPropagation() })
})
