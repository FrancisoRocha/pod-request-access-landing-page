const inputEmail = document.querySelector('.input__text');
const buttonAccess = document.querySelector('.button__pod');

//console.log(inputEmail)
//console.log(buttonAccess)

//Asignar eventos
inputEmail.addEventListener('blur', validar)

buttonAccess.addEventListener('click', (e) => {
    e.preventDefault();

    const inputDiv = e.target.parentElement;
    const errorPrevio = inputDiv.querySelector('.error');
    if (errorPrevio) errorPrevio.remove()

    if(inputEmail.value.trim() === ''){
        mostrarMensaje('Oops! Please check your email', inputDiv);
        return;
    }

    // Validar el email y mostrar la alerta si es valido
    if(!validarMail(inputEmail.value.trim())){
        mostrarMensaje('Oops! Please check your email', inputDiv);
        return;
    }

    setTimeout(() => {
        window.location.href = 'index.html';
    })

})

function validar(e) {

    const valor = e.target.value.trim();
    const inputDiv = e.target.parentElement;

    const errorPrevio = inputDiv.querySelector('.error');
    if (errorPrevio) errorPrevio.remove()

    if (valor === '') {
        mostrarMensaje('Oops! Please check your email', inputDiv);
        return;
    }
}


// Mostrar Alerta
function mostrarMensaje(mensaje, input) {
    // Eliminar el mensaje previo
    const errorPrevio = input.querySelector('.error');
    if (errorPrevio) errorPrevio.remove();

    // Generar alerta en HTML
    const error = document.createElement('P');
    error.textContent = mensaje
    error.classList.add('error');

    const inputMail = input.querySelector('.input__text');
    // Inyectar el error en el formulario
    input.insertAdjacentElement('beforebegin', error);
    // Cambiar el color del borde del input
    inputMail.classList.add('input__text--error');

    setTimeout(() => {
        error.remove()
        inputMail.classList.remove('input__text--error');
    }, 3000)
}

// Validar el Email
function validarMail(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email);
    return resultado;
}
