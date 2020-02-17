const username = document.getElementById('username')
const password = document.getElementById('password')
const buttonlogin = document.getElementById('buttonLogin')
const massage = document.getElementById('messege')

function login() {
    if(username.value === 'andhikaArnes'){
        if(password.value === '123456'){
            window.location.href = 'detail.html'
        }
    }

}