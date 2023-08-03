const btn = document.querySelector('#submit');
const form = document.querySelector('#login');

const EP = "http://localhost:3000/"

btn.addEventListener('click', (e) => {
    // prevent the form from submitting
    e.preventDefault();

    // show the form values
    const formData = new FormData(form);
    const values = [...formData.entries()];
    console.log(values);

    fetch(EP,{
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(values)
    })
});