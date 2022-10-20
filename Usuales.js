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

//Barra de navegación
let Bnav=` 

<h1 class="h1"><a class="logo" href="index.html">
        <img src="./imagenes/fake.jpg" alt="Logo Fake" class="fake"></a></h1>

<button class="boton"> <i class="fa-solid fa-bars"></i></button>
<nav id="seleccionar" class="navC"> 
    <ul class="navC-lista"> 
        <li class="navC-item"><a class="link" href="index.html"> Inicio </a></li>
        <li class="navC-item"><a class="link" href="Servicios.html"> Servicios</a></li>
        <li class="navC-item"><a class="link" href="Sobre Nosotros.html">Sobre Nosotros</a> </li>
        <li class="navC-item"> <a class= "link" href="Noticias.html">Noticias</a></li>
        <li class="navC-item"><a class= "link" href="Contacto.html">Contactanos</a></li>
    </ul>
</nav> 
`;

document.querySelector(".headerC").innerHTML = Bnav;

//Footer
let Pfooter=`    
<div class="red"> 
<img src="./imagenes/fake.jpg" alt="logo" class="logo-footer"> 
<p id="Estudio"> Estudio Juridico Fake</p> <br>
    <nav class="Redes"> 
        <a class="RSS" target="_blank" href="https://linkedin.com">
           <i class="fa-brands fa-linkedin"alt="linkedin" title="Linkedin"></i> 
         </a>
        <a class="RSS" target="_blank" href="https://instagram.com">
           <i class="fa-brands fa-instagram" alt="instagram" title="Instagram"></i> 

        </a>
       <a class="RSS" target="_blank" href="https://twitter.com">
           <i class="fa-brands fa-twitter" alt="twitter" title="Twitter"> </i>
        </a>
        <a class="RSS" target="_blank" href="https://youtube.com">
           <i class="fa-brands fa-youtube"alt="youtube" title="Youtube"> </i>
    </a>
   </nav>
</div>
<!-- 
<div class="oficinas"> 
<h2 class="Oficina"> Nuestra oficina: </h2><br>
<p class="Text-oficinas"> Talcahuano 123</p><br>
<p class="Text-Oficinas"> CABA</p>
</div>
<div class="llamanos">
<h5> Contactanos</h5>
<p class="Text-Oficinas"> consultas@fake </p>
</div>--> 
` ;

document.getElementById("FooterP").innerHTML= Pfooter;

//API CONSUMIR
const { createApp } = Vue

const appN=createApp({
  data() {
    return {
      Novedades: []
    }
  },
  methods: {
    fetchData(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => { 
                this.Novedades=data.noticias 
            })

    }
  },
  created(){
  this.fetchData("./noticias.json") 
  }
}).mount('#appN')


// Validacion de forms
const nombreFormu = document.querySelector("[name=nombre]");
const telefonoFormu = document.querySelector("[name=telefono]");
const emailFormu = document.querySelector("[name=mail]");
const consultaFormu = document.querySelector("[name=consulta]");


const setErrors = (message, formu, isError = true) => {
  if (isError) {
    formu.classList.add("invalid");
    formu.nextElementSibling.classList.add("error");
    formu.nextElementSibling.innerText = message;
  } else {
    formu.classList.remove("invalid");
    formu.nextElementSibling.classList.remove("error");
    formu.nextElementSibling.innerText = "";
  }
}

const validateEmptyField = (message, e) => {
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.trim().length === 0) {
      setErrors(message, field);
    } else {
      setErrors("", field, false);
    }
  }
  
  const validateEmailFormat = e => {
    const field = e.target;
    const fieldValue = e.target.value;
    const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    if (fieldValue.trim().length > 5 && !regex.test(fieldValue)) {
      setErrors("Please enter a valid email", field);
    } else {
      setErrors("", field, false);
    }
  }
  
  userNameField.addEventListener("blur", (e) => validateEmptyField("Add your username", e));
  passwordField.addEventListener("blur", (e) => validateEmptyField("Write your password", e));
  emailField.addEventListener("blur", (e) => validateEmptyField("Please provide an email", e));
  
  emailField.addEventListener("input", validateEmailFormat);
  
  fileField.addEventListener("change", (e) => {
    const field = e.target;
    const fileExt = e.target.files[0].name.split(".").pop().toLowerCase();
    const allowedExt = ["jpg", "jpeg", "png", "gif"];
    if (!allowedExt.includes(fileExt)) {
      setErrors(`The only extensions allowed are ${allowedExt.join(", ")}`, field);
    } else {
      setErrors("", field, false);
    }
  });