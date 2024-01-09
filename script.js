const btn = document.querySelector("#yourButtonId");
const pass = document.querySelector("#pass");
const confirm = document.querySelector("#confirm");
const passwordError = document.querySelector('#passwordError');

function checkEqual(pass, confirm){

    if(pass.value !== confirm.value){
        passwordError.textContent = 'Passwords do not match';
    }else{
        passwordError.textContent = '';
    }
}

btn.addEventListener('click', () =>checkEqual(pass,confirm));