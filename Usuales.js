
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
        <li class="navC-item"> <a class= "link" href="Nuestros Clientes.html">Clientes</a></li>
        <li class="navC-item"><a class= "link" href="Contacto.html">Contactanos</a></li>
    </ul>
</nav> 
`;

document.querySelector(".headerC").innerHTML = Bnav;

// PAGINA INDEX
let PIndex= `
<div class="Sliders">
<div class="contenedorI active">
    <div class="slide"> 
        <div class="slideproject"> 
            <p> Le ayudaremos a tramitar lo necesario para su jubilación.</p>
            <br>
            <a href="./Contacto.html" class="BotonConsulta"> Haga su consulta aquí</a>
        </div>
    </div>  
</div>
<div class="contenedorI">
    <div class="slide"> 
        <div class="slideproject"> 
            <p> Tiene derecho a un cálculo de reajuste de haberes justo.</p>
            <br>
            <a href="./Contacto.html" class="BotonConsulta"> Hacé tu consulta hoy</a>
        </div>
    </div>  
</div>
<div class="contenedorI">
    <div class="slide"> 
        <div class="slideproject"> 
            <p> Confie en nosotros y le brindaremos un servicio de calidad. </p>
            <br>
            <a href="./Contacto.html" class="BotonConsulta"> Hacé tu consulta aquí</a>
        </div>
    </div>  
</div>
</div>
<div class="acordeones">
<h2 class="Servicios">Servicios </h2>
<button class="acordeon">Asesoramiento Previsional</button>
<div class="contenido">
    <ul class="listasS">
            <li class="ServiciosS">Gestión de jubilación</li>
            <li class="ServiciosS"> Consulta profesional</li>
            <li class="ServiciosS"> Informe Previsional con Cálculos</li>
            <li class="ServiciosS"> Reconocimiento de Haberes</li>
            <li class="ServiciosS">Retiro por Invalidez</li>
            <li class="ServiciosS">Pensión por fallecimiento</li>
    </ul>
    <br>
    <div class="botonesS"> 
        <a href="./Servicios.html" class="BotonServicios"> Quiero saber más</a>
        <a href="./Contacto.html" class="BotonConsultor"> Enviar Consulta</a>
    </div>
</div>
<button class="acordeon">Reajuste de Haberes</button>
<div class="contenido">
    <ul class="listasS">
        <li class="ServiciosS">Gestión de jubilación</li>
        <li class="ServiciosS"> Consulta profesional</li>
        <li class="ServiciosS"> Informe Previsional con Cálculos</li>
        <li class="ServiciosS"> Reconocimiento de Haberes</li>
        <li class="ServiciosS">Retiro por Invalidez</li>
        <li class="ServiciosS">Pensión por fallecimiento</li>
    </ul>
    <br>
    <div class="botonesS"> 
        <a href="./Servicios.html" class="BotonServicios"> Quiero saber más</a>
        <a href="./Contacto.html" class="BotonConsultor"> Enviar Consulta</a>
    </div>
</div>
<button class="acordeon">Sucesiones</button>
<div class="contenido">
    <ul class="listasS">
        <li class="ServiciosS">Gestión de jubilación</li>
        <li class="ServiciosS"> Consulta profesional</li>
        <li class="ServiciosS"> Informe Previsional con Cálculos</li>
        <li class="ServiciosS"> Reconocimiento de Haberes</li>
        <li class="ServiciosS">Retiro por Invalidez</li>
        <li class="ServiciosS">Pensión por fallecimiento</li>
    </ul>
    <br>
    <div class="botonesS"> 
        <a href="./Servicios.html" class="BotonServicios"> Quiero saber más</a>
        <a href="./Contacto.html" class="BotonConsultor"> Enviar Consulta</a>
    </div>
</div>
<button class="acordeon">Jubilación</button>
<div class="contenido">
    <ul class="listasS">
        <li class="ServiciosS">Gestión de jubilación</li>
        <li class="ServiciosS"> Consulta profesional</li>
        <li class="ServiciosS"> Informe Previsional con Cálculos</li>
        <li class="ServiciosS"> Reconocimiento de Haberes</li>
        <li class="ServiciosS">Retiro por Invalidez</li>
        <li class="ServiciosS">Pensión por fallecimiento</li>
    </ul>
    <br>
    <div class="botonesS"> 
        <a href="./Servicios.html" class="BotonServicios"> Saber más</a>
        <a href="./Contacto.html" class="BotonConsultor"> Enviar Consulta</a>
    </div>
</div>
 `

 document.getElementById("Index").innerHTML = PIndex;
//FIN PAGINA INDEX

//PAGINA SERVICIOS



//FIN PAGINA SERVICIOS

//PAGINA SOBRE NOSOTROS

//FIN PAGINA SOBRE NOSOTROS

// PAGINA NUESTROS CLIENTES

// FIN PAGINA SOBRE NOSOTROS

// PAGINA CONTACTO

// FIN PAGINA CONTACTO
// Footer  
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

document.querySelector(".FooterP").innerHTML= Pfooter;

