const form = document.querySelector('form');

form.addEventListener('submit', submitForm);

function submitForm(event) {
    event.preventDefault();
    const objectForm = {
    };
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert("Please fill in all the fields!");
    }
    objectForm.email = email.value;
    objectForm.password = password.value;
    console.log(objectForm);
    event.currentTarget.reset();
}



