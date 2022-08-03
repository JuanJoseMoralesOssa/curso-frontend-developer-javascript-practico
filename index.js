document.addEventListener('DOMContentLoaded', () => {
    const menuEmail = document.querySelector('.navbar-email')
    const desktopMenu = document.querySelector('.desktop-menu')
    const menuHamIcon = document.querySelector('.menu')
    const mobileMenu = document.querySelector('.mobile-menu')

    menuEmail.addEventListener('click', () => {
        toggleMenu(desktopMenu)
    })

    menuHamIcon.addEventListener('click', () => {
        toggleMenu(mobileMenu)
    })
})

function toggleMenu(element) {
    element.classList.toggle('inactive')
}
