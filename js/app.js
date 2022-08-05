const enviarBoton = document.querySelector('#enviar')
const form = document.querySelector('#enviar-mail')
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

document.addEventListener('DOMContentLoaded', iniciarApp);

function iniciarApp () {
    enviarBoton.disabled = true;
    enviarBoton.classList.add('cursor-not-allowed', 'opacity-50')
}

email.addEventListener('blur', (e) => {
   if (e.target.type === 'email') {
    const eR = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (eR.test(e.target.value) ) {
            const error = document.querySelector('p.error');
            error.remove();
            e.target.classList.remove('border', 'border-red-600')
            e.target.classList.add('border', 'border-green-500')
        } else {
       
        e.target.classList.remove('border', 'border-green-500')  
        e.target.classList.add('border', 'border-red-600')
        mostrarError('Email no válido')
        }
   }
});

asunto.addEventListener ('blur', (e) => { 

    if (e.target.value.length > 0) {
        const error = document.querySelector('p.error');
        error.remove();
        e.target.classList.remove('border', 'border-red-600')
        e.target.classList.add('border', 'border-green-500')
    
    } else {
        e.target.classList.remove('border', 'border-green-500')  
        e.target.classList.add('border', 'border-red-600')
        mostrarError('Hay campos vacíos')
    }
});

function mostrarError (mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'mt-4', 'p-3', 'background-red-70', 'text-red-700', 'text-xl', 'error');
 
    const claseError = document.querySelectorAll('.error')
    if (claseError.length === 0) {
        form.appendChild(mensajeError);
    }

   
} 

 mensaje.addEventListener('blur', () => {
    const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     if (er.test(email.value) && mensaje.value !== '' && asunto.value !== '') {
         console.log('pasate la validacion');
         enviarBoton.disabled = false;
         enviarBoton.classList.remove('cursor-not-allowed', 'opacity-50')
     } else {
         console.log('no pasaste');
     }
 })

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const spinner = document.querySelector('#spinner') 
    spinner.style.display = 'flex'
    console.log('enviado');
})
