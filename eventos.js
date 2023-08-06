document.addEventListener("DOMContentLoaded", () =>{

    const unicoDiv = document.querySelector("div");
    const btn = document.querySelector("button");
    
    unicoDiv.addEventListener("click", () =>{
        alert("¡Hola! Soy el div.");
     });
    
     btn.addEventListener ("click", (event) => {
        event.stopPropagation();
        alert("¡Hola!");
        });  
});