const switcher = document.querySelectorAll ('.switch')

switcher.forEach(e => {
    e.addEventListener('click', () => {
        e.parentNode.classList.toggle('active')
    })
})
