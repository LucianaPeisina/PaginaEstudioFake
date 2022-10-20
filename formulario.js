// Validacion de forms

const formulario = document.getElementById('formC');
const inputs = document.querySelectorAll('#formC input');
const consulta= document.querySelector('#formC textarea');
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    consulta: /^[a-zA-ZÀ-ÿ\s]/
}
const campos = {
	nombre: false,
	mail: false,
	telefono: false,
    consulta: false
}



const validarFormulario = (e) =>{ 
    switch (e.target.name) {
        case "nombre":
            validarCampos(expresiones.nombre, e.target, 'nombre' );
        break;
        case "telefono":
                validarCampos(expresiones.telefono, e.target, 'telefono');
        break;
        case "mail":
            validarCampos(expresiones.mail, e.target, 'mail');                
        break;
        case "consulta":
            validarCampos(expresiones.consulta, e.target, 'consulta')
        break;
       
    } 

}

const validarCampos = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo]=true;
    
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo]=false;
    }   
}

inputs.forEach((input)=> {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

consulta.addEventListener('blur', validarFormulario );
consulta.addEventListener('keyup',validarFormulario);



formulario.addEventListener('submit', (e) => {
	e.preventDefault();

    if(campos.nombre && campos.mail && campos.telefono && campos.consulta){
        formulario.reset();
        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 2000);

    } else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
        setTimeout(() => {
			document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		}, 5000);

	}
})