function validateForm (){
    const email = document.getElementById('email')
    const country = document.getElementById('country')
    const zipCode = document.getElementById('zipCode')
    const password = document.getElementById('password')
    const confirmPassword = document.getElementById('confirmPassword')

    const emailError = document.getElementById('emailError');
    emailError.textContent =''

    const countryError = document.getElementById('countryError');
    countryError.textContent =''

    const zipCodeError = document.getElementById('zipCodeError');
    zipCodeError.textContent =''

    const passwordError = document.getElementById('passwordError');
    passwordError.textContent =''

    const confirmPasswordError = document.getElementById('confirmPasswordError');
    confirmPasswordError.textContent=''

    if (!email.checkValidity()) {
        emailError.textContent = 'Invalid email address';
      }

      if (country.value.trim() === '') {
        countryError.textContent = 'Country is required';
      }

      if (!zipCode.checkValidity()) {
        zipCodeError.textContent = 'Invalid zip code';
      }

      if (password.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
      }

      if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = 'Passwords do not match ';
      }

      if(
        email.checkValidity() &&
        country.value.trim() !== '' &&
        zipCode.checkValidity() &&
        password.value.length >= 6 &&
        confirmPassword.value === password.value
      ){
        alert('High five! Form submitted successfully.')
      }

        email.addEventListener('blur', validateForm)
        country.addEventListener('blur', validateForm)
        zipCode.addEventListener('blur', validateForm)
        password.addEventListener('blur', validateForm)
        confirmPassword.addEventListener('blur', validateForm)
}

const button = document.querySelector('button');
button.addEventListener('click', validateForm);