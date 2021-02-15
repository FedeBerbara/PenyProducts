let url = '';

cleanForm = () => {
    document.getElementById('form').reset();
}

submitForm = (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    if (formData.name === '' && formData.email === '' && formData.message === '') {
        swal({
            title: "No tan rapido!",
            text: "No podras enviarme un mensaje si no completas todos los datos.",
            icon: "error",
        });
    } else {
        console.log(formData, JSON.stringify(formData));
        swal({
            title: "¡Muchas Gracias!",
            text: "He recibido tu consulta y la respondere a la brevedad",
            icon: "success",
        });
        setTimeout(cleanForm(), 2000)
    }
}

document.getElementById("button").addEventListener('click', submitForm);