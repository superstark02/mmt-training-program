const btn = document.querySelector('#submit-sign-up');
const form = document.querySelector('#sign-up');
const pwdm = document.querySelector('#passwords-dont-match')
pwdm.style.display = 'none';

btn.addEventListener('click', (e) => {
    // prevent the form from submitting
    e.preventDefault();

    // show the form values
    const formData = new FormData(form);
    const values = [...formData.entries()];
    console.log(values);

    if(values[1][1] === values[2][1]){
        console.log("passwords match");
        pwdm.style.display = 'none';
        // begin auth
    }
    else{
        pwdm.style.display = "block";
    }
});