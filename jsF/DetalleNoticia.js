//API CONSUMIR


if (document.getElementById("appDN")) {
  const { createApp } = Vue
 
    createApp({
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

            redireccionar(){
              window.location.href='/PaginaEstudioFake/Noticias.html';

            },
        
            filtro() {
              this.Novedades = this.NovedadesAll.filter(noticias=> (noticias.tema == this.Tema || this.Tema==="All"))
              console.log(this.Novedades.length)
              
              },
                  
            cargarListasDesplegables() {
                  this.Temas =['All']
                  for (noticias of this.NovedadesAll) {
                  if (noticias.tema !== '' && this.Temas.indexOf(noticias.tema) < 0) {
                      this.Temas.push(noticias.tema)
                      }
                    }
                  } 
                }, 
            

            
            async created (){
                 await this.fetchData(this.url) 
                 this.cargarListasDesplegables()
              },

              
        
    }
    
    
    ).mount('#appDN')
    
}


// NOTICIAS 
var args = location.search.substr(1).split('&');
// lee los argumentos pasados a este formulario EN EL LINK

var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
}
console.log(args)


document.getElementById("txtTemas").innerHTML = decodeURIComponent(parts[1][1]);
document.getElementById("txtTitulos").innerHTML = decodeURIComponent(parts[2][1]);
document.getElementById("txtDescripciónes").innerHTML = decodeURIComponent(parts[3][1]);
document.getElementById("txtImagenes").innerHTML = '<img src="'  + decodeURIComponent(parts[4][1]) +  '" name=  alt=""> ';

