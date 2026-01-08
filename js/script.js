let visitas= localStorage.getItem("visitas")

if (visitas === null) {
    visitas=0
} else {
    visitas = Number(visitas) + 1;

}
console.log(visitas)
localStorage.setItem("visitas", visitas);

cuentaVisitas=document.getElementById("contadorVisitas")
cuentaVisitas.textContent=visitas

const botonReset=document.getElementById("btnReestablecer")

botonReset.addEventListener("click",function(){
    visitas=0
    localStorage.setItem("visitas",visitas)
    cuentaVisitas.textContent=visitas
});

