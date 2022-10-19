
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
        <li class="navC-item"> <a class= "link" href="Nuestros Clientes.html">Noticias</a></li>
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
//Probabando el JSON de clientes
