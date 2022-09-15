/* Cuando hago CLICK .button, .nav TOGGLE 'activo' */
  const boton = document.querySelector('.boton')
  const navC    = document.querySelector('.navC')
  
  boton.addEventListener('click',()=>{
      navC.classList.toggle('activo')
  })