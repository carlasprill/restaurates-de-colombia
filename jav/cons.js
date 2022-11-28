import { restaurante1 } from "./constante.js";

const boton = document.getElementById("boton");



boton.addEventListener("click", buscador);

let verdadero = false;
let obtener2 = "";
function buscador(){
     
let obtener = document.getElementById('search').value;

if(obtener2!=obtener){
    
    if(verdadero==true){
        
    if(((restaurante1[0].restaurante_titulo||restaurante1[1].restaurante_titulo||restaurante1[2].restaurante_titulo||restaurante1[3].restaurante_titulo)==obtener) && (obtener2!=obtener)){
caja2.removeChild(desb1);
caja2.removeChild(desb);
caja2.removeChild(titulo);
cajaPL.removeChild(caja2);
cajaPL.removeChild(imagenPL);
conjunto.removeChild(cajaPL);
      
verdadero=false;
        
    }else {
caja2.removeChild(desb1);
caja2.removeChild(desb);
caja2.removeChild(titulo);
cajaPL.removeChild(caja2);
cajaPL.removeChild(imagenPL);
conjunto.removeChild(cajaPL);
        
verdadero=false;
    }
};
    
};

if(restaurante1[0].restaurante_titulo==obtener && obtener!=obtener2){
    
    
    const conjunto = document.getElementById('conjunto');
    const caja = document.createElement("div");
    caja.setAttribute("id","cajaPL");
    
    caja.setAttribute("class","card");
    
 caja.setAttribute("style","width: 25rem");
    conjunto.appendChild(caja);
  
   
    const imagen = document.createElement("img");
    imagen.setAttribute("id", "imagenPL");
    imagen.setAttribute("src", restaurante1[0].img);
    imagen.setAttribute("class","card-img-top");
    
    caja.appendChild(imagen);

   
    const caja2 = document.createElement("div");
    caja2.setAttribute("id", "caja2");
    caja2.setAttribute("class","card-body");
    
    caja.appendChild(caja2);
   
   
    const titulo = document.createElement("h5");
    titulo.setAttribute("id","titulo");
    titulo.setAttribute("class","card-title restaurant");
   
    titulo.textContent = restaurante1[0].restaurante_titulo;
    caja2.appendChild(titulo);
 
   
    const desb = document.createElement("p");
    desb.setAttribute("id","desb");
    desb.setAttribute("class","card-text");
   
    desb.textContent = restaurante1[0].restaurantes_descripcion;
    caja2.appendChild(desb);

    const desb1 = document.createElement("p");
    desb1.setAttribute("id","desb1");
    desb1.setAttribute("class","card-text");
   
    desb1.textContent = restaurante1[0].restaurantes_descripcion2;
    caja2.appendChild(desb1);
    
   
   
   
   

    
    verdadero = true;

}
if(restaurante1[1].restaurante_titulo==obtener && obtener!=obtener2){
    const conjunto = document.getElementById('conjunto');
 const caja = document.createElement("div");
 caja.setAttribute("id","cajaPL");
 caja.setAttribute("class","card");
 caja.setAttribute("style","width: 25rem");
 conjunto.appendChild(caja);
 

 const imagen = document.createElement("img");
 imagen.setAttribute("id", "imagenPL");
 imagen.setAttribute("src", restaurante1[1].img);
 imagen.setAttribute("class","card-img-top");
 caja.appendChild(imagen);


 const caja2 = document.createElement("div");
 caja2.setAttribute("id", "caja2");
 caja2.setAttribute("class","card-body");
 caja.appendChild(caja2);


 const titulo = document.createElement("h5");
 titulo.setAttribute("id","titulo");
 titulo.setAttribute("class","card-title restaurant");
 titulo.textContent = restaurante1[1].restaurante_titulo;
 caja2.appendChild(titulo);


 const desb = document.createElement("p");
 desb.setAttribute("id","desb");
 desb.setAttribute("class","card-text");
 desb.textContent = restaurante1[1].restaurantes_descripcion;
 caja2.appendChild(desb);

 const desb1 = document.createElement("p");
 desb1.setAttribute("id","desb1");
 desb1.setAttribute("class","card-text");

 desb1.textContent = restaurante1[1].restaurantes_descripcion2;
 caja2.appendChild(desb1);

 

 verdadero = true;
}
if(restaurante1[2].restaurante_titulo==obtener && obtener!=obtener2){
    const conjunto = document.getElementById('conjunto');
 const caja = document.createElement("div");
 caja.setAttribute("id","cajaPL");
 caja.setAttribute("class","card");
 caja.setAttribute("style","width: 25rem");
 conjunto.appendChild(caja);


 const imagen = document.createElement("img");
 imagen.setAttribute("id", "imagenPL");
 imagen.setAttribute("src", restaurante1[2].img);
 imagen.setAttribute("class","card-img-top");
 caja.appendChild(imagen);
 

 const caja2 = document.createElement("div");
 caja2.setAttribute("id", "caja2");
 caja2.setAttribute("class","card-body");
 caja.appendChild(caja2);


 const titulo = document.createElement("h5");
 titulo.setAttribute("id","titulo");
 titulo.setAttribute("class","card-title restaurant");
 titulo.textContent = restaurante1[2].restaurante_titulo;
 caja2.appendChild(titulo);


 const desb = document.createElement("p");
 desb.setAttribute("id","desb");
 desb.setAttribute("class","card-text");
 desb.textContent = restaurante1[2].restaurantes_descripcion;
 caja2.appendChild(desb);
 
 const desb1 = document.createElement("p");
 desb1.setAttribute("id","desb1");
 desb1.setAttribute("class","card-text");

 desb1.textContent = restaurante1[2].restaurantes_descripcion2;
 caja2.appendChild(desb1);



 verdadero = true;
};
if(restaurante1[3].restaurante_titulo==obtener && obtener!=obtener2){
    const conjunto = document.getElementById('conjunto');
 const caja = document.createElement("div");
 caja.setAttribute("id","cajaPL");
 caja.setAttribute("class","card");
 caja.setAttribute("style","width: 25rem");
 conjunto.appendChild(caja);


 const imagen = document.createElement("img");
 imagen.setAttribute("id", "imagenPL");
 imagen.setAttribute("src", restaurante1[3].img);
 imagen.setAttribute("class","card-img-top");
 caja.appendChild(imagen);


 const caja2 = document.createElement("div");
 caja2.setAttribute("id", "caja2");
 caja2.setAttribute("class","card-body");
 caja.appendChild(caja2);


 const titulo = document.createElement("h5");
 titulo.setAttribute("id","titulo");
 titulo.setAttribute("class","card-title restaurant");
 titulo.textContent = restaurante1[3].restaurante_titulo;
 caja2.appendChild(titulo);


 const desb = document.createElement("p");
 desb.setAttribute("id","desb");
 desb.setAttribute("class","card-text");
 desb.textContent = restaurante1[3].restaurantes_descripcion;
 caja2.appendChild(desb);


 const desb1 = document.createElement("p");
 desb1.setAttribute("id","desb1");
 desb1.setAttribute("class","card-text");

 desb1.textContent = restaurante1[3].restaurantes_descripcion2;
 caja2.appendChild(desb1);


 verdadero = true;
}

 obtener2 = obtener;


}