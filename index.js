document.addEventListener('DOMContentLoaded', () => {
    const menuEmail = document.querySelector('.navbar-email')
    const desktopMenu = document.querySelector('.desktop-menu')

    menuEmail.addEventListener('click', () => {
        toggleDesktopMenu(desktopMenu)
    })
})

function toggleDesktopMenu(desktopMenu) {
    desktopMenu.classList.toggle('inactive')
}
