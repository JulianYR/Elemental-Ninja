//iniciarJuego
const seccionSiguiente = document.getElementById("bienvenida")
const next = document.getElementById("next").addEventListener('click', () => {
    seccionSiguiente.style.display = "none"
    seccionSeleccionarNinja.style.display = "flex"
    sectionBotonNinja.style.display = "flex"
})

const sectionBotonNinja = document.getElementById("sectionBotonNinja")

const cancelar = document.getElementById("cancelar")

cancelar.addEventListener('click', () => {
    // habilidades
    divHabilidadHydra.style.display = "none"
    divHabilidadJeys.style.display = "none"
    divHabilidadKyrod.style.display = "none"
    divHabilidadHorus.style.display = "none"
    divHabilidadKron.style.display = "none"
    divHabilidadkoryu.style.display = "none"
    divHabilidadWalker.style.display = "none"

    // otro
    divHydra.style.display = "flex"
    divJeys.style.display = "flex"
    divKyrod.style.display = "flex"
    divHorus.style.display = "flex"
    divKron.style.display = "flex"
    divkoryu.style.display = "flex"
    divWalker.style.display = "flex"

    // final
    cancelar.style.display = "none"
})

// Seccion de ataques

const seccionSeleccionarAtaque = document.getElementById("selecionar-ataque")
const seccionReiniciar = document.getElementById("reiniciar")
const botonNinjaJugador = document.getElementById("boton-ninja")
const botonFuego = document.getElementById("boton-fuego")
const botonAgua = document.getElementById("boton-agua")
const botonTierra = document.getElementById("boton-tierra")
const botonMeteoro = document.getElementById("boton-meteoro")
const botonRayo = document.getElementById("boton-rayo")
const boton_reiniciar = document.getElementById("reiniciar")

// Divs de presonajes

const divHydra = document.getElementById("hydra")
const divJeys = document.getElementById("jeys")
const divKyrod = document.getElementById("kyrod")
const divHorus = document.getElementById("horus")
const divKron = document.getElementById("kron")
const divkoryu = document.getElementById("koryu")
const divWalker = document.getElementById("walker")

// Descripcion de Habilidades

const divHabilidadHydra = document.getElementById("habilidadHydra")
const divHabilidadJeys = document.getElementById("habilidadJeys")
const divHabilidadKyrod = document.getElementById("habilidadKyrod")
const divHabilidadHorus = document.getElementById("habilidadHorus")
const divHabilidadKron = document.getElementById("habilidadKron")
const divHabilidadkoryu = document.getElementById("habilidadkoryu")
const divHabilidadWalker = document.getElementById("habilidadWalker")

//seleccionarNinjaJugador

const seccionSeleccionarNinja = document.getElementById("selecionar-ninja")
const spanNinja = document.getElementById("ninja")


//seleccionarNinjaEnemigo

const spanNinjaEnemigo = document.getElementById("ninja-enemigo")

//combate

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

//crearMensaje

const seccionMensajes = document.getElementById("mensajes")

//crearMensajeFinal.......

//HTML

let ataqueJugador
let ataqueEnemigo

/* 
    Habilidades

    - Hydra: Blindado
    Disminuye el daño en un 8%

    - Jeys: Escudo
    Añade un escudo de 15 de PV ante el primer impacto

    - Kyrod: Ira Dominante
    Aumenta el daño un 7.5%

    - Horus: Segunda oportunidad
    Si tu PV es menor a 50 recupera 15 de Pv (Uso maximo por partida 1 vez)

    - Kron: Ultimo Recurso
    Cuando tu PV sea menor a 30 el daño aumenta un 25% ante un impacto (Uso maximo 1 vez)

    - koryu: Rafagas
    Los ataques de Meteoro aumentan el daño un 13% (Uso maximo 4 veces)

    - Walker: Privilegio
    El daño aumenta un 20% si el PV del enemigo es menor a 65

    Variantes del Daño

    - Fuego
    33-35

    - Agua
    30-32

    - Rayo
    27-29

    -Tierra
    24-26

    - Fugaz
    20-23

*/

let daño
let dañoHability
let dañoEnemigo
let habilityJeys = false
let habilityHorus = false
let habilityKron = false
let habilityDreyKroyu = 0

let hydra = document.getElementById("hydra").addEventListener('click', () => {
    mostrarHabilidad('hydra');
});
let jeys = document.getElementById("jeys").addEventListener('click', () => {
    mostrarHabilidad('jeys')
})
let kyrod = document.getElementById("kyrod").addEventListener('click', () => {
    mostrarHabilidad('kyrod')
})
let horus = document.getElementById("horus").addEventListener('click', () => {
    mostrarHabilidad('horus')
})
let kron = document.getElementById("kron").addEventListener('click', () => {
    mostrarHabilidad('kron')
})
let koryu = document.getElementById("koryu").addEventListener('click', () => {
    mostrarHabilidad('koryu')
})
let walker = document.getElementById("walker").addEventListener('click', () => {
    mostrarHabilidad('walker')
})


// Inputs

const inputHidra = document.getElementById("Hydra💧")
const inputJeys = document.getElementById("Jeys🌱")
const inputKyrod = document.getElementById("Kyrod🔥")
const inputHorus = document.getElementById("Horus🌌")
const inputKron = document.getElementById("Kron🍁")
const inputkoryu = document.getElementById("Koryu💎")
const inputWalker = document.getElementById("Walker🎃")

let pvJugador = 200
let pvEnemigo = 200

function iniciarJuego(){

    seccionSeleccionarNinja.style.display = "none"

    cancelar.style.display = "none"

    sectionBotonNinja.style.display = "none"

    seccionSeleccionarAtaque.style.display = "none"

    seccionReiniciar.style.display = "none"

    divHabilidadHydra.style.display = "none"

    divHabilidadJeys.style.display = "none"

    divHabilidadKyrod.style.display = "none"

    divHabilidadHorus.style.display = "none"

    divHabilidadKron.style.display = "none"

    divHabilidadkoryu.style.display = "none"

    divHabilidadWalker.style.display = "none"

    botonNinjaJugador.addEventListener("click", seleccionarNinjaJugador)

    botonFuego.addEventListener("click", ataqueFuego)

    botonAgua.addEventListener("click", ataqueAgua)

    botonTierra.addEventListener("click", ataqueTierra)

    botonMeteoro.addEventListener("click", ataqueMeteoro)

    botonRayo.addEventListener("click", ataqueRayo)

    boton_reiniciar.addEventListener("click", reiniciarJuego)
}

function mostrarHabilidad(element){
    if (element == "hydra"){ //Hidra💧
        divHabilidadHydra.style.display = "flex"
        divJeys.style.display = "none"
        divKyrod.style.display = "none"
        divHorus.style.display = "none"
        divKron.style.display = "none"
        divkoryu.style.display = "none"
        divWalker.style.display = "none"
        cancelar.style.display = "flex"
    }
    else if (element == "jeys"){ //Jeys🌱
        divHydra.style.display = "none"
        divHabilidadJeys.style.display = "flex"
        divKyrod.style.display = "none"
        divHorus.style.display = "none"
        divKron.style.display = "none"
        divkoryu.style.display = "none"
        divWalker.style.display = "none"
        cancelar.style.display = "flex"
    }
    else if (element == "kyrod"){ //Kyrod🔥
        divHydra.style.display = "none"
        divJeys.style.display = "none"
        divHabilidadKyrod.style.display = "flex"
        divHorus.style.display = "none"
        divKron.style.display = "none"
        divkoryu.style.display = "none"
        divWalker.style.display = "none"
        cancelar.style.display = "flex"
    }
    else if (element == "horus"){ //Horus🌌
        divHydra.style.display = "none"
        divJeys.style.display = "none"
        divKyrod.style.display = "none"
        divHabilidadHorus.style.display = "flex"
        divKron.style.display = "none"
        divkoryu.style.display = "none"
        divWalker.style.display = "none"
        cancelar.style.display = "flex"
    }
    else if (element == "kron"){ //Kron🍁
        divHydra.style.display = "none"
        divJeys.style.display = "none"
        divKyrod.style.display = "none"
        divHorus.style.display = "none"
        divHabilidadKron.style.display = "flex"
        divkoryu.style.display = "none"
        divWalker.style.display = "none"
        cancelar.style.display = "flex"
    }
    else if (element == "koryu"){ //Koryu💎
        divHydra.style.display = "none"
        divJeys.style.display = "none"
        divKyrod.style.display = "none"
        divHorus.style.display = "none"
        divKron.style.display = "none"
        divHabilidadkoryu.style.display = "flex"
        divWalker.style.display = "none"
        cancelar.style.display = "flex"
    }
    else if (element == "walker"){ //Walker🎃
        divHydra.style.display = "none"
        divJeys.style.display = "none"
        divKyrod.style.display = "none"
        divHorus.style.display = "none"
        divKron.style.display = "none"
        divkoryu.style.display = "none"
        divHabilidadWalker.style.display = "flex"
        cancelar.style.display = "flex"
    }
    else {
        return ;
    }
}

function seleccionarNinjaJugador(){


    if(inputHidra.checked){
        alertAvatar('hydra')
        spanNinja.innerHTML = "Hidra💧"
        botonNinjaJugador.style.display = "none"
    } 
    else if(inputJeys.checked){
        alertAvatar('jeys')
        spanNinja.innerHTML = "Jeys🌱"
        botonNinjaJugador.style.display = "none"
    }
    else if(inputKyrod.checked){
        alertAvatar('kyrod')
        spanNinja.innerHTML = "Kyrod🔥"
        botonNinjaJugador.style.display = "none"
    }
    else if(inputHorus.checked){
        alertAvatar('horus')
        spanNinja.innerHTML = "Horus🌌"
        botonNinjaJugador.style.display = "none"
    }
    else if (inputKron.checked){
        alertAvatar('kron')
        spanNinja.innerHTML = "Kron🍁"
        botonNinjaJugador.style.display = "none"
    }
    else if (inputkoryu.checked){
        alertAvatar('koryu')
        spanNinja.innerHTML = "Koryu💎"
        botonNinjaJugador.style.display = "none"
    }
    else if (inputWalker.checked){
        alertAvatar('walker')
        spanNinja.innerHTML = "Walker🎃"
        botonNinjaJugador.style.display = "none"
    }
    else {
        alertAvatar('')
        return
    }

    seccionSeleccionarNinja.style.display = "none"

    seccionSeleccionarAtaque.style.display = "flex"

    seleccionarNinjaEnemigo()
}

function seleccionarNinjaEnemigo(){
    let enemigoAleatorio = aleatorio(0, 5)

    if (enemigoAleatorio == 0){
        spanNinjaEnemigo.innerHTML = 'Hidra💧'
    }
    else if (enemigoAleatorio == 1){
        spanNinjaEnemigo.innerHTML = 'Jeys🌱'
    }
    else if (enemigoAleatorio == 2){
        spanNinjaEnemigo.innerHTML = 'Kyrod🔥'
    }
    else if (enemigoAleatorio == 3){
        spanNinjaEnemigo.innerHTML = 'Horus🌌'
    }
    else if (enemigoAleatorio == 4){
        spanNinjaEnemigo.innerHTML = 'Kron🍁'
    }
    else if (enemigoAleatorio == 5){
        spanNinjaEnemigo.innerHTML = 'Walker🎃'
    }

}

function ataqueFuego(){
    ataqueJugador = "🔥"
    daño = aleatorio(32, 35)
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = "💧"
    daño = aleatorio(30, 32)
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = "🌱"
    daño = aleatorio(24, 26)
    ataqueAleatorioEnemigo()
}
function ataqueMeteoro(){
    ataqueJugador = "☄️"
    daño = aleatorio(20, 23)
    ataqueAleatorioEnemigo()
}
function ataqueRayo(){
    ataqueJugador = "⚡"
    daño = aleatorio(27, 29)
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,5)

    if (ataqueAleatorio == 1){
        ataqueEnemigo = "🔥"
        dañoEnemigo = aleatorio(32, 35)
    }
    else if (ataqueAleatorio == 2){
        ataqueEnemigo = "💧"
        dañoEnemigo = aleatorio(30, 32)
    } 
    else if (ataqueAleatorio == 3){
        ataqueEnemigo = "🌱"
        dañoEnemigo = aleatorio(24, 26)
    }
    else if(ataqueAleatorio == 4){
        ataqueEnemigo = "☄️"
        dañoEnemigo= aleatorio(20, 23)
    }
    else {
        ataqueEnemigo = "⚡"
        dañoEnemigo = aleatorio(27, 29)
    }
    combate()
}

function combate(){

    // Hydra

    if (spanNinja.innerHTML == "Hidra💧") {
        if (ataqueEnemigo == ataqueJugador) {
            crearMensaje("EMPATE 🥈");
        }
        else if (
            (ataqueJugador == "🔥" && (ataqueEnemigo == "🌱" || ataqueEnemigo == "⚡" || ataqueEnemigo == "☄️")) ||
            (ataqueJugador == "💧" && (ataqueEnemigo == "🔥" || ataqueEnemigo == "⚡" || ataqueEnemigo == "🌱")) ||
            (ataqueJugador == "🌱" && (ataqueEnemigo == "💧" || ataqueEnemigo == "⚡" || ataqueEnemigo == "☄️")) ||
            (ataqueJugador == "☄️" && (ataqueEnemigo == "💧" || ataqueEnemigo == "🌱")) ||
            (ataqueJugador == "⚡" && ataqueEnemigo == "☄️")
        ) {
            crearMensaje("GANASTE 🥇");
            const result = Math.round(daño);
            pvEnemigo = pvEnemigo - result;
            spanVidasEnemigo.innerHTML = pvEnemigo;
        }
        else {
            crearMensaje("PERDISTE 🥉");
            dañoHability = dañoEnemigo;
            dañoHability = (dañoHability * 0.8);
            dañoEnemigo = dañoEnemigo - dañoHability;
            const resultEnemy = Math.round(dañoEnemigo);
            pvJugador = pvJugador - resultEnemy;
            spanVidasJugador.innerHTML = pvJugador;
        }
    }
    

    // Jeys

    else if (spanNinja.innerHTML == "Jeys🌱") {
        let jugadorGana = false;
    
        if (
            (ataqueJugador == "🔥" && ataqueEnemigo == "🌱") ||
            (ataqueJugador == "🔥" && ataqueEnemigo == "⚡") ||
            (ataqueJugador == "🔥" && ataqueEnemigo == "☄️") ||
            (ataqueJugador == "💧" && ataqueEnemigo == "🔥") ||
            (ataqueJugador == "💧" && ataqueEnemigo == "⚡") ||
            (ataqueJugador == "🌱" && ataqueEnemigo == "💧") ||
            (ataqueJugador == "🌱" && ataqueEnemigo == "⚡") ||
            (ataqueJugador == "☄️" && ataqueEnemigo == "💧") ||
            (ataqueJugador == "☄️" && ataqueEnemigo == "🌱") ||
            (ataqueJugador == "⚡" && ataqueEnemigo == "☄️")
        ) {
            jugadorGana = true;
        }
    
        if (jugadorGana) {
            crearMensaje("GANASTE 🥇");
            const result = Math.round(daño);
            pvEnemigo = pvEnemigo - result;
            spanVidasEnemigo.innerHTML = pvEnemigo;
        } 
        else {
            crearMensaje("PERDISTE 🥉");
            if (!habilityJeys) {
                dañoEnemigo = dañoEnemigo - 15;
                const resultEnemy = Math.round(dañoEnemigo);
                pvJugador = pvJugador - resultEnemy;
                spanVidasJugador.innerHTML = pvJugador;
                habilityJeys = true;
            } else {
                const resultEnemy = Math.round(dañoEnemigo);
                pvJugador = pvJugador - resultEnemy;
                spanVidasJugador.innerHTML = pvJugador;
            }
        }
    }


    // Kyrod

    else if (spanNinja.innerHTML === "Kyrod🔥") {
        if (ataqueEnemigo === ataqueJugador) {
            crearMensaje("EMPATE 🥈");
        } 
        else if (
            (ataqueJugador === "🔥" && ataqueEnemigo === "🌱") ||
            (ataqueJugador === "🔥" && ataqueEnemigo === "⚡") ||
            (ataqueJugador === "🔥" && ataqueEnemigo === "☄️") ||
            (ataqueJugador === "💧" && ataqueEnemigo === "🔥") ||
            (ataqueJugador === "💧" && ataqueEnemigo === "⚡") ||
            (ataqueJugador === "🌱" && ataqueEnemigo === "💧") ||
            (ataqueJugador === "🌱" && ataqueEnemigo === "⚡") ||
            (ataqueJugador === "☄️" && ataqueEnemigo === "💧") ||
            (ataqueJugador === "☄️" && ataqueEnemigo === "🌱") ||
            (ataqueJugador === "⚡" && ataqueEnemigo === "☄️")
        ) {
            crearMensaje("GANASTE 🥇");
            dañoHability = daño;
            dañoHability = (dañoHability * 7.5) / 100;
            daño = daño + dañoHability;
            const result = Math.round(daño)
            pvEnemigo = pvEnemigo - result;
            spanVidasEnemigo.innerHTML = pvEnemigo;
        } 
        else {
            crearMensaje("PERDISTE 🥉");
            const resultEnemy = Math.round(dañoEnemigo)
            pvJugador = pvJugador - resultEnemy;
            spanVidasJugador.innerHTML = pvJugador;
        }
    }


    // Horus

    else if (spanNinja.innerHTML == "Horus🌌") {
        if (ataqueEnemigo == ataqueJugador) {
            crearMensaje("EMPATE 🥈");
        } 
        else {
            const result = Math.round(daño);
            
            if ((ataqueJugador == "🔥" && (ataqueEnemigo == "🌱" || ataqueEnemigo == "⚡" || ataqueEnemigo == "☄️")) ||
                (ataqueJugador == "💧" && (ataqueEnemigo == "🔥" || ataqueEnemigo == "⚡")) ||
                (ataqueJugador == "🌱" && (ataqueEnemigo == "💧" || ataqueEnemigo == "⚡")) ||
                (ataqueJugador == "☄️" && (ataqueEnemigo == "💧" || ataqueEnemigo == "🌱")) ||
                (ataqueJugador == "⚡" && ataqueEnemigo == "☄️")) {
                crearMensaje("GANASTE 🥇");
                pvEnemigo -= result;
                spanVidasEnemigo.innerHTML = pvEnemigo;
            } else {
                crearMensaje("PERDISTE 🥉");
                const resultEnemy = Math.round(dañoEnemigo);
                pvJugador -= result;
                spanVidasJugador.innerHTML = pvJugador;
            }
        }
    
        if (pvJugador <= 50 && !habilityHorus) {
            dañoEnemigo -= 15;
            habilityHorus = true;
        }
    }


    // Kron

    else if (spanNinja.innerHTML == "Kron🍁") {
        let result = Math.round(daño);
        
        if (ataqueEnemigo == ataqueJugador || (ataqueEnemigo == "☄️" && ataqueJugador == "⚡")) {
            crearMensaje("EMPATE 🥈");
        } else if ((ataqueJugador == "🔥" && ataqueEnemigo == "🌱") ||
                   (ataqueJugador == "🔥" && ataqueEnemigo == "⚡") ||
                   (ataqueJugador == "🔥" && ataqueEnemigo == "☄️") ||
                   (ataqueJugador == "💧" && ataqueEnemigo == "🔥") ||
                   (ataqueJugador == "💧" && ataqueEnemigo == "⚡") ||
                   (ataqueJugador == "🌱" && ataqueEnemigo == "💧") ||
                   (ataqueJugador == "🌱" && ataqueEnemigo == "⚡") ||
                   (ataqueJugador == "☄️" && ataqueEnemigo == "💧") ||
                   (ataqueJugador == "☄️" && ataqueEnemigo == "🌱") ||
                   (ataqueJugador == "⚡" && ataqueEnemigo == "☄️")) {
            crearMensaje("GANASTE 🥇");
            
            if (pvJugador <= 30 && !habilityKron) {
                let dañoHability = (daño * 25) / 100;
                daño += dañoHability;
                result += Math.round(dañoHability);
                habilityKron = true;
            }
            
            pvEnemigo -= result;
            spanVidasEnemigo.innerHTML = pvEnemigo;
        } 
        else {
            crearMensaje("PERDISTE 🥉");
            let resultEnemy = Math.round(dañoEnemigo);
            pvJugador -= resultEnemy;
            spanVidasJugador.innerHTML = pvJugador;
        }
    }
    


    // koryu

    else if (spanNinja.innerHTML == "Koryu💎") {
        if (
            (ataqueJugador == "🔥" && (ataqueEnemigo == "🌱" || ataqueEnemigo == "⚡" || ataqueEnemigo == "☄️")) ||
            (ataqueJugador == "💧" && (ataqueEnemigo == "🔥" || ataqueEnemigo == "⚡")) ||
            (ataqueJugador == "🌱" && (ataqueEnemigo == "💧" || ataqueEnemigo == "⚡")) ||
            (ataqueJugador == "☄️" && (ataqueEnemigo == "💧" || ataqueEnemigo == "🌱"))
        ) {
            
            if (ataqueJugador == "☄️" && habilityDreyKroyu <= 4) {
                dañoHability = ((daño * 13)/ 100);
                daño += dañoHability;
                habilityDreyKroyu++;
            }
    
            const result = Math.round(daño);
            pvEnemigo -= result;
            spanVidasEnemigo.innerHTML = pvEnemigo;
            crearMensaje("GANASTE 🥇");
        }
        else if (ataqueEnemigo == ataqueJugador) {
            crearMensaje("EMPATE 🥈");
        }
        else {
            const resultEnemy = Math.round(dañoEnemigo);
            pvJugador -= resultEnemy;
            spanVidasJugador.innerHTML = pvJugador;
            crearMensaje("PERDISTE 🥉");
        }
    }
    

    
    // Walker

    else if (spanNinja.innerHTML == "Walker🎃") {
        if (ataqueEnemigo == ataqueJugador) {
            crearMensaje("EMPATE 🥈");
        } 
        else if (
            (ataqueJugador == "🔥" && (ataqueEnemigo == "🌱" || ataqueEnemigo == "⚡" || ataqueEnemigo == "☄️")) ||
            (ataqueJugador == "💧" && (ataqueEnemigo == "🔥" || ataqueEnemigo == "⚡")) ||
            (ataqueJugador == "🌱" && (ataqueEnemigo == "💧" || ataqueEnemigo == "⚡")) ||
            (ataqueJugador == "☄️" && (ataqueEnemigo == "💧" || ataqueEnemigo == "🌱"))
        ) {
            crearMensaje("GANASTE 🥇");
            if (pvEnemigo <= 50) {
                dañoHability = daño * 0.20;
                daño += dañoHability;
            }
            const result = Math.round(daño);
            pvEnemigo -= result;
            spanVidasEnemigo.innerHTML = pvEnemigo;
        }
        else {
            crearMensaje("PERDISTE 🥉");
            const resultEnemy = Math.round(dañoEnemigo);
            pvJugador -= resultEnemy;
            spanVidasJugador.innerHTML = pvJugador;
        }
    }
    


    revisarPV()
}

function revisarPV(){

    if (pvJugador > 0 && pvEnemigo <= 0){
        crearMensajeFinal("FELICITACIONES, GANASTE🏆!")
        if (pvEnemigo < 0){
            spanVidasEnemigo.innerHTML = 0
        }
    }
    else if (pvEnemigo > 0 && pvJugador <= 0){
        crearMensajeFinal("Has Fallado😖. Intentalo de nuevo🔂.")
        if (pvJugador < 0){
            spanVidasJugador.innerHTML = 0
        }
    }

}

function crearMensajeFinal(final){
    

    let parrafo = document.createElement("p")
    parrafo.innerHTML = final

    seccionMensajes.appendChild(parrafo)

    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
    botonMeteoro.disabled = true
    botonRayo.disabled = true
    
    seccionReiniciar.style.display = "flex"

}

function crearMensaje(resultado){

    let parrafo = document.createElement("p")
    parrafo.innerHTML = "TU: " + ataqueJugador + ", RIVAL: " + ataqueEnemigo + " - " + resultado

    seccionMensajes.appendChild(parrafo)
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)