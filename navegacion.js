/* Cuando hago CLICK .button, .nav TOGGLE 'activo' */
  const boton = document.querySelector('.boton')
  const navC    = document.querySelector('.navC')
  
  boton.addEventListener('click',()=>{
      navC.classList.toggle('activo')
  })

  /*sliders en INDEX*/
  
let slides = document.querySelectorAll('.contenedorI');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

setInterval(next, 7000);

/*Acordeones en pagina servicios*/
var acc = document.getElementsByClassName("acordeon");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var contenido = this.nextElementSibling;
    if (contenido.style.maxHeight) {
      contenido.style.maxHeight = null;
    } else {
      contenido.style.maxHeight = contenido.scrollHeight + "px";
    } 
  });
}
