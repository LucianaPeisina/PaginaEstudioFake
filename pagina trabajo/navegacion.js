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
