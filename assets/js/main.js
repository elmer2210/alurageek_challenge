const boton_busqueda = document.querySelector('.header__busquedadespegable-boton');
var input = document.querySelector('.header__busquedadespegable-input')

boton_busqueda.addEventListener("click", () =>{
    input.focus();
})

