// form control
const fullName = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const message = document.getElementById("message")
const submit = document.getElementById("submit")
const statusText = document.getElementById("status")
const statusDiv = document.getElementById("status-div")


submit.addEventListener("click",() => {
    let nameChecked = checkName(fullName.value)
    let emailChecked = checkEmail(email.value)
    let phoneChecked = checkPhone(phone.value)
    let messageChecked = messageCheck(message.value)
    statusDiv.classList.add("status-display")
    statusText.innerHTML = ""
    if(nameChecked && emailChecked && phoneChecked && messageChecked) {statusText.innerHTML = "All Good"
    }else {
        if(!nameChecked) statusText.innerHTML = statusText.innerHTML + "Name format incorrect<br>"
        if(!emailChecked) statusText.innerHTML = statusText.innerHTML + "Email format incorrect<br>"
        if(!phoneChecked) statusText.innerHTML = statusText.innerHTML + "Phone format incorrect<br>"
        if(!messageChecked) statusText.innerHTML = statusText.innerHTML + "Message format incorrect"
    }

})


// functions

const checkName = (input) => {
    let pattern = /.{5,}/
    return input.match(pattern)
}

const checkEmail = (input) => {
    let pattern = /\w{3,}@\w{5,}/
    console.log(input)
    return input.match(pattern)
}

const checkPhone = (input) => {
    let pattern = /\+961[0-9]{7,8}/
    return input.match(pattern)
}

const messageCheck = (input) => {
    let pattern = /.{100,}/
    return input.match(pattern)
}

// popup control

const buttons = document.querySelectorAll(".port-item")
const heading = document.getElementById("popup-heading")
const image = document.getElementById("popup-img")
const popup = document.getElementById('popup')
const button = document.getElementById('popup-button')
const body = document.getElementById('body')


const popupImg = (i) => {
    image.innerHTML = `<img src='images/${i+1}.png' class="popup-img">`
}

for(let i = 0;i<buttons.length; i++){
    buttons[i].addEventListener("click", () => {
        popupImg(i)
        popup.classList.add("popup-display")
        heading.innerHTML = "Heading"
    })
}

button.addEventListener('click', ()=> {
    popup.classList.remove('popup-display')
})