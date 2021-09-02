//================= Show menu ====================

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)


    // Validate that varibles exist

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu');

//================= Remove menu mobile ========================

const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//================= Scroll section active link ====================
const sections = document.querySelectorAll('section[id')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href=*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav_menu a[href=*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive);

//================= show Scroll top  ====================

function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');

    if (this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop)

//================= dark light theme  ====================

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.body.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

//================= reduce Print pdf A4 ====================

function scaleCv() {
    document.body.classList.add('scale-cv')
}

//================= remove print pdf size  ====================

function removeScale() {
    document.body.classList.remove('scale-cv')
}

//================= generate pdf ====================

let resumeButton = document.getElementById('resume-button')

let opt = {
    margin: 0,
    filename: 'resume Iftikhor.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 4 },
    jsPDF: { format: 'a4', orintation: 'portrait' }
}


function generateResume() {
    html2pdf(areaCv, opt)
}

resumeButton.addEventListener('click', () => {
    scaleCv()

    generateResume()

    setTimeout(removeScale, 5000)
})

let areaCv = document.getElementById('area-cv')







