document.addEventListener('DOMContentLoaded', () => {
    const menuEmail = document.querySelector('.navbar-email')
    const desktopMenu = document.querySelector('.desktop-menu')
    const menuHamIcon = document.querySelector('.menu')
    const mobileMenu = document.querySelector('.mobile-menu')
    const menuCartIcon = document.querySelector('.navbar-shopping-cart')
    const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
    const cardsContainer = document.querySelector('.cards-container')
    const productDetailCloseIcon = document.querySelector('.product-detail-close')
    const productDetailContainer = document.querySelector('#productDetail')

    menuEmail.addEventListener('click', () => {
        toggleDesktopMenu(desktopMenu, shoppingCartContainer)
    })

    menuHamIcon.addEventListener('click', () => {
        toggleMobileMenu(mobileMenu, shoppingCartContainer)
    })

    menuCartIcon.addEventListener('click', () => {
        toggleCartAside(mobileMenu, shoppingCartContainer, productDetailContainer)
    })

    productDetailCloseIcon.addEventListener('click', () => {
        closeProductDetailAside()
    })

    const productList = []

    productList.push({
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    })

    productList.push({
        name: 'Computer',
        price: 420,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    })

    productList.push({
        name: 'Cellphone',
        price: 320,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    })

    renderProducts(productList, cardsContainer, productDetailContainer)

})

function renderProducts(productList, cardsContainer, productDetailContainer) {
    for (const product of productList) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')

        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)

        productImg.addEventListener('click', () => {
            openProductDetailAside(productDetailContainer)
        })

        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')

        const productInfoDiv = document.createElement('div')

        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price

        const productName = document.createElement('p')
        productName.innerText = product.name

        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)

        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')

        productInfoFigure.appendChild(productImgCart)

        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)

        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)

        cardsContainer.appendChild(productCard)
    }
}

function closeProductDetailAside() {
    const productDetailContainer = document.querySelector('#productDetail')
    productDetailContainer.classList.add('inactive')
}

function openProductDetailAside(productDetailContainer) {
    const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
    shoppingCartContainer.classList.add('inactive')

    productDetailContainer.classList.remove('inactive')
}

function toggleDesktopMenu(desktopMenu, shoppingCartContainer) {
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive')

    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(mobileMenu, shoppingCartContainer) {
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive')

    if (!isShoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive')
    }

    closeProductDetailAside()

    mobileMenu.classList.toggle('inactive')
}

function toggleCartAside(mobileMenu, shoppingCartContainer, productDetailContainer) {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive')

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive')
    }

    shoppingCartContainer.classList.toggle('inactive')

}
