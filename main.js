const formulario = document.querySelector("form")
console.log(formulario)

formulario.addEventListener("submit", (e)=>{
    console.log(e)
    if (formulario == null){
        event.preventDefault(e)
    }
})