const formInputEmail = document.getElementById('form-input-email')
const emailSVG = document.getElementById('email-svg')
const formInputPassword = document.getElementById('form-input-password')
const passwordSVG = document.getElementById('password-svg')

formInputEmail.addEventListener('focus', highlightEmail)
formInputEmail.addEventListener('blur', resetEmail)
formInputPassword.addEventListener('focus', highlightPassword)
formInputPassword.addEventListener('blur', resetPassword)

function highlightEmail() {
    emailSVG.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.33329 3.33331H16.6666C17.5833 3.33331 18.3333 4.08331 18.3333 4.99998V15C18.3333 15.9166 17.5833 16.6666 16.6666 16.6666H3.33329C2.41663 16.6666 1.66663 15.9166 1.66663 15V4.99998C1.66663 4.08331 2.41663 3.33331 3.33329 3.33331Z" stroke="#FFC632" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18.3333 5L9.99996 10.8333L1.66663 5" stroke="#FFC632" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `
}

function resetEmail() {
    emailSVG.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.33329 3.33331H16.6666C17.5833 3.33331 18.3333 4.08331 18.3333 4.99998V15C18.3333 15.9166 17.5833 16.6666 16.6666 16.6666H3.33329C2.41663 16.6666 1.66663 15.9166 1.66663 15V4.99998C1.66663 4.08331 2.41663 3.33331 3.33329 3.33331Z" stroke="#AFB6C2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18.3333 5L9.99996 10.8333L1.66663 5" stroke="#AFB6C2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `
}

function highlightPassword() {
    passwordSVG.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.8333 9.16666H4.16667C3.24619 9.16666 2.5 9.91285 2.5 10.8333V16.6667C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6667V10.8333C17.5 9.91285 16.7538 9.16666 15.8333 9.16666Z" stroke="#FFC632" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5.83337 9.16666V5.83332C5.83337 4.72825 6.27236 3.66845 7.05376 2.88704C7.83516 2.10564 8.89497 1.66666 10 1.66666C11.1051 1.66666 12.1649 2.10564 12.9463 2.88704C13.7277 3.66845 14.1667 4.72825 14.1667 5.83332V9.16666" stroke="#FFC632" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `
}

function resetPassword() {
    passwordSVG.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.8333 9.16669H4.16667C3.24619 9.16669 2.5 9.91288 2.5 10.8334V16.6667C2.5 17.5872 3.24619 18.3334 4.16667 18.3334H15.8333C16.7538 18.3334 17.5 17.5872 17.5 16.6667V10.8334C17.5 9.91288 16.7538 9.16669 15.8333 9.16669Z" stroke="#AFB6C2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5.83337 9.16669V5.83335C5.83337 4.72828 6.27236 3.66848 7.05376 2.88708C7.83516 2.10567 8.89497 1.66669 10 1.66669C11.1051 1.66669 12.1649 2.10567 12.9463 2.88708C13.7277 3.66848 14.1667 4.72828 14.1667 5.83335V9.16669" stroke="#AFB6C2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `
}