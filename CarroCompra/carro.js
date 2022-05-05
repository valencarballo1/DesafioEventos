// Variables
const comidas = [
    {
        id:1,
        name: "Bacon y Cheddar",
        img: '../images/cheddarBacon.jpg',
        precio: 850
    },
    {
        id:2,
        name: "Burga Bacon y Cheddar + Bondiola",
        img: '../images/Bondiola+Cebolla.jpg',
        precio: 990
    },
    {
        id:3,
        name: "Cuarto De Libra",
        img: '../images/cuartoLibra.jpg',
        precio: 900
    }
    
]
// const contenedorComidas = document.getElementById("contenedor-comidas")

const contenedorComidas = document.querySelector(".contenedor-comidas");
const listadoFavoritos = document.querySelector(".listadoFavoritos");
const comidasFavoritas = [];
let total = 0;

document.addEventListener('DOMContentLoaded', () =>{
    mostrarComidas();
})


//eventos


//funciones

function mostrarComidas(){
    for (const comida of comidas) {
        const divComida = document.createElement("div");
        divComida.classList.add("card");

        const imgComida = document.createElement("img");
        imgComida.classList.add("imagen-comida");
        imgComida.src = comida.img;

        const tituloComida = document.createElement("h2");
        tituloComida.classList.add("titulo-comida");
        tituloComida.textContent = comida.name;

        const tituloPrecio = document.createElement("h5");
        tituloPrecio.textContent = comida.precio;

        const btnComida = document.createElement("button");
        btnComida.classList.add("btn-favorito");
        btnComida.textContent = "Añadir";
        btnComida.onclick = () =>{
            agregarAFavorito(comida.id)
            
        };

        divComida.appendChild(imgComida);
        divComida.appendChild(tituloComida);
        divComida.appendChild(tituloPrecio)
        divComida.appendChild(btnComida);

        contenedorComidas.appendChild(divComida)

        
    }
}

function agregarAFavorito(id){
    const comidaAgregada = comidas.find(comida => comida.id === id);
    console.log(comidaAgregada.name, comidaAgregada.precio);
    total = total + comidaAgregada.precio;
    document.querySelector(".button-checkout").innerHTML = `Pagar $${total}`
}

function pay(){
    alert(`Precio $${total}`)
    innerHTML = "";
    total = 0;
    document.querySelector(".button-checkout").innerHTML = `Pagar $${total}`

}