//  intro title for desktop layout
const introTitle = document.querySelector('.intro__title')

//  navigation
const nav = document.querySelector('.navbar__nav')
//  navigation items
const navItemArr = document.querySelectorAll('.header .navbar__nav-item')
//  hamburger menu icon
const burger = document.querySelector('.navbar__hamburger')

// toggle open and close burger icon menu state function
const toggleOpenCloseBurgerIcon = () => {
    burger.classList.contains('navbar__hamburger--close')
        ? burger.classList.remove('navbar__hamburger--close')
        : burger.classList.add('navbar__hamburger--close')
}

//  add fade in animation
const fadeIn = () => {
    nav.classList.add('fade-in')
}

//  add fade out animation
const fadeOut = () => {
    nav.classList.add('fade-out')
}

//  display the nav item after the fade in animation
const displayLinks = () => {
    navItemArr.forEach(navItem => {
        navItem.style.opacity = '1'
    })
}

// adding a delay before de the fade out animation
const removeLinks = () => {
    navItemArr.forEach(navItem => {
        navItem.style.opacity = '0'
    })
}

// remove fade in animation
const removeFadeIn = () => {
    nav.classList.remove('fade-in')
}

//  remove fade out animation
const removeFadeOut = () => {
    nav.classList.remove('fade-out')
}

//  display navigation links
const displayNavLinks = () => {
    if (nav.classList.contains('navbar__nav--on')) {
        //  remove fade in animation
        removeFadeIn()

        //  remove the nav links first before the fade out of the background
        removeLinks()

        //  remove the nav background after 120ms
        let timeoutID = setTimeout(() => {
            //  remove the navbar__nav--on class
            nav.classList.remove('navbar__nav--on')
        }, 130)
    } else {
        //  remove fade out animation
        removeFadeOut()

        // add the fade in animation the the navigation
        fadeIn()

        //  add the navbar__nav--on class
        nav.classList.add('navbar__nav--on')

        //  set a time for the nav item to appear after de fade in animation of the background
        let timeoutID = setTimeout(displayLinks, 130)
    }
}

//  burger icon click handler
const handleClick = () => {
    toggleOpenCloseBurgerIcon()
    displayNavLinks()
}

//  burger event listener
burger.addEventListener('click', handleClick)

//  desktop layout
const mqd = window.matchMedia('(min-width: 1024px)')

//  desktop layout matches handler
if (mqd.matches) {
    introTitle.textContent = 'Immersive experiences that deliver'
}


