

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
<div class="logo">
    <figure>
        <img src="./imagenes/fake.jpg" alt="logo" class="logo-footer"> 
        <p id="Estudio"> Estudio Juridico Fake</p> 
    </figure>
</div>
<div class="oficinas"> 
    <h2 class="Oficina"> NUESTRA OFICINA </h2>
    <p class="Text-oficinas"> Talcahuano 123</p>
    <p class="Text-oficinas"> CABA</p>
    <h2 class="Oficina"> EMAIL </h2>
    <p class="Text-oficinas"> consulta@estudiofake.com </p>
</div>
<div class="redesFooter">
    <h2 class="Oficina">SIGUENOS</h2>
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
</div>
<div class="Derechos">
<small>&copy; 2022 <b>Grupo Fake</b> - Todos los Derechos Reservados.</small>
</div>
` ;

document.getElementById("FooterP").innerHTML= Pfooter;

//API CONSUMIR
const { createApp } = Vue

const appN=createApp({
  data() {
    return {
      url: 'https://lucianapeisina.github.io/Noticias.json',
      NovedadesAll: [],
      Novedades: [],
      Temas: [],
      Tema: "All" // array para mostrar   
      }
  },
  methods: {
        async fetchData(url) {
            resp = await fetch(url)
            this.NovedadesAll = await resp.json()
            this.Novedades = this.NovedadesAll
        },

      filtro() {
        this.Novedades = this.NovedadesAll.filter(noticias=> (noticias.Tema == this.Tema || this.Tema==="All"))
      console.log(this.Novedades.length )
      },
         
  cargarListasDesplegables() {
          this.Temas =['All']
          for (noticias of this.NovedadesAll) {
            if (noticias.Tema !== '' && this.Temas.indexOf(noticias.Tema) < 0) {
              this.Temas.push(noticias.Tema)
            }
          }
         } 
      },  

    async created (){
         await this.fetchData(this.url) 
         this.cargarListasDesplegables()
      }

    }).mount('#appN')
    
    
    

