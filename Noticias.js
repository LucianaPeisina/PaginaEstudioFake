let url = "noticias.json"
let datos = [];

fetch(url)
    .then(response => response.json())
    .then(data => {  // data contiene el JSON
        console.log(data)
        datos = data.noticias
        console.log(datos)   //  3 plantas


        let cad = `<div class="container">`

        for (Novedades of datos) {
            cad += `
        <div class="tarjeta">
            <img src="${Novedades.imagen}" alt="${Novedades.nombre}">
            <div class="cuerpo">
                <h4>${Novedades.id} - ${Novedades.Tema}</h4>
                <p>${Novedades.Titulo}</p>
                <p>${Novedades.Descripcion}</p>
            </div>
        </div>   
    `
        }


        cad += `</div>
         `

        console.log(cad)



        document.getElementById("tarjetas").innerHTML = cad;


    }
    );
















/*let cad=`<div class="container">`

for(elemento of data){

    cad+=`
        <div class="tarjeta">
            <img src="${elemento.image}" alt="foto">
            <div class="cuerpo">
                <h4>Nombre:${elemento.id} - ${elemento.name}</h4>
                <p>Genero:${elemento.gender}</p>
                <p>Especie:${elemento.species} </p>
            </div>
        </div>
    `
}
cad+=`

console.log(cad)

document.getElementById("tarjetas").innerHTML=cad

*/




















/*let cad=`<div class="container">       `
for( personaje of data){
    cad +=`
        <div class="tarjeta">
            <img src="${personaje.image}" alt="${personaje.name}">
            <div class="cuerpo">
                <h4>Nombre: ${personaje.name}</h4>
                <p>Genero:${personaje.gender}</p>
                <p>Especie:${personaje.species} </p>
            </div>
        </div>
    `    
}
cad+=`</div>          `
console.log(cad)
document.getElementById("fotos").innerHTML=cad;
*/














/*let cad=`<div class="container">
       `
for(personaje of data){  // data es un arreglo que contiene a los personajes
    cad+=`<div class="tarjeta">
            <img src="${personaje.image}" alt="${personaje.name}">
            <div class="cuerpo">
                <h4>Personaje:${personaje.id} - ${personaje.name}</h4>
                <p>Genero:${personaje.gender}</p>
                <p>Especie:${personaje.species}</p>
            </div>
        </div>
    `
}
cad+=`</div>
      `       // le agrego el cierre de la etiqueta div
console.log(cad)
document.getElementById("fotos").innerHTML=cad
*/

