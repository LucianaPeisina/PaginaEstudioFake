

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