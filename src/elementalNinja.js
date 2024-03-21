// iniciar juego | start game
const sectionNext = document.getElementById("welcome")
const next = document.getElementById("next").addEventListener('click', () => {
    sectionNext.style.display = "none"
    sectionSelectNinja.style.display = "flex"
    sectionBotonNinja.style.display = "flex"
})

const sectionBotonNinja = document.getElementById("sectionBotonNinja")

const cancel = document.getElementById("cancel")

cancel.addEventListener('click', () => {
    // skills | habilidades
    divhabilityHydra.style.display = "none"
    divhabilityJeys.style.display = "none"
    divhabilityKyrod.style.display = "none"
    divhabilityHorus.style.display = "none"
    divhabilityKron.style.display = "none"
    divhabilitykoryu.style.display = "none"
    divhabilityWalker.style.display = "none"

    // other | otro
    divHydra.style.display = "flex"
    divJeys.style.display = "flex"
    divKyrod.style.display = "flex"
    divHorus.style.display = "flex"
    divKron.style.display = "flex"
    divkoryu.style.display = "flex"
    divWalker.style.display = "flex"

    // final
    cancel.style.display = "none"
})

// Modes section | Seccion de modos

const sectionGameMode = document.getElementById('sectionGameMode')
const gameModeHP = document.getElementById('gameModeHP')
gameModeHP.addEventListener('click', () => {
    selectMode('hp')
})
const gameModeVictorys = document.getElementById('gameModeVictorys')
gameModeVictorys.addEventListener('click', () => {
    selectMode('victorys')
})

// Attacks section | Seccion de ataques

const sectionSelectAttack = document.getElementById("selectAttack")
const seccionRestart = document.getElementById("restart")
const botonNinjaJugador = document.getElementById("botonNinja")
const botonFuego = document.getElementById("boton-fuego")
const botonAgua = document.getElementById("boton-agua")
const botonTierra = document.getElementById("boton-tierra")
const botonMeteoro = document.getElementById("boton-meteoro")
const botonRayo = document.getElementById("boton-rayo")
const botonRestart = document.getElementById("restart")

// Character divs | Divs de personajes

const divHydra = document.getElementById("hydra")
const divJeys = document.getElementById("jeys")
const divKyrod = document.getElementById("kyrod")
const divHorus = document.getElementById("horus")
const divKron = document.getElementById("kron")
const divkoryu = document.getElementById("koryu")
const divWalker = document.getElementById("walker")

// Skills Description | Descripcion de Habilidades

const divhabilityHydra = document.getElementById("habilityHydra")
const divhabilityJeys = document.getElementById("habilityJeys")
const divhabilityKyrod = document.getElementById("habilityKyrod")
const divhabilityHorus = document.getElementById("habilityHorus")
const divhabilityKron = document.getElementById("habilityKron")
const divhabilitykoryu = document.getElementById("habilitykoryu")
const divhabilityWalker = document.getElementById("habilityWalker")

// select ninja player | seleccionar ninja jugador

const sectionSelectNinja = document.getElementById("selectNinja")
const spanNinja = document.getElementById("ninja")


// select enemy ninja | seleccionar ninja enemigo

const spanNinjaEnemy = document.getElementById("ninjaEnemy")

// combat | combate

const spanLivesPlayer = document.getElementById("playerLives")
const spanLivesEnemy = document.getElementById("enemyLives")

// create message | crear mensaje

const sectionMessages = document.getElementById("messages")

//createMessageFinal.......

//HTML

let attackPlayer
let attackEnemy

/* 

    Español - Spanish

    Habilidades

    - Hydra: Blindado
    Disminuye el damage en un 8%

    - Jeys: Escudo
    Añade un escudo de 15 de HP ante el primer impacto

    - Kyrod: Ira Dominante
    Aumenta el damage un 7.5%

    - Horus: Segunda oportunidad
    Si tu HP es menor a 50 recupera 15 de HP (Uso maximo por partida 1 vez)

    - Kron: Ultimo Recurso
    Cuando tu HP sea menor a 30 el damage aumenta un 25% ante un impacto (Uso maximo 1 vez)

    - koryu: Rafagas
    Los ataques de Meteoro aumentan el damage un 13% (Uso maximo 4 veces)

    - Walker: Privilegio
    El damage aumenta un 20% si el HP del enemigo es menor a 65

    Variantes del damage

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



    English - Inglés

    Skills

    - Hydra: Armored
    Decreases damage by 8%

    - Jeys: Shield
    Adds a 15 HP shield on first hit

    - Kyrod: Dominant Rage
    Increases damage by 7.5%

    - Horus: Second Chance
    If your HP is less than 50, recover 15 HP (Maximum use per game 1 time)

    - Kron: Last Resort
    When your HP is less than 30, the damage increases by 25% upon impact (Maximum use 1 time)

    - koryu: Gusts
    Meteor attacks increase damage by 13% (Maximum use 4 times)

    - Walker: Privilege
    Damage increases by 20% if the enemy's HP is less than 65

    Damage Variants

    - Fire
    33-35

    - Water
    30-32

    - Ray
    27-29

    -Land
    24-26

    - Fleeting
    20-23

*/

let variableQuery
let damage
let damageHability
let damageEnemy
let habilityJeys = false
let habilityHorus = false
let habilityKron = false
let habilityDreyKroyu = 0

let hydra = document.getElementById("hydra").addEventListener('click', () => {
    showSkill('hydra')
});
let jeys = document.getElementById("jeys").addEventListener('click', () => {
    showSkill('jeys')
})
let kyrod = document.getElementById("kyrod").addEventListener('click', () => {
    showSkill('kyrod')
})
let horus = document.getElementById("horus").addEventListener('click', () => {
    showSkill('horus')
})
let kron = document.getElementById("kron").addEventListener('click', () => {
    showSkill('kron')
})
let koryu = document.getElementById("koryu").addEventListener('click', () => {
    showSkill('koryu')
})
let walker = document.getElementById("walker").addEventListener('click', () => {
    showSkill('walker')
})


// Inputs

const inputHidra = document.getElementById("Hydra💧")
const inputJeys = document.getElementById("Jeys🌱")
const inputKyrod = document.getElementById("Kyrod🔥")
const inputHorus = document.getElementById("Horus🌌")
const inputKron = document.getElementById("Kron🍁")
const inputkoryu = document.getElementById("Koryu💎")
const inputWalker = document.getElementById("Walker🎃")

let hpPlayer = 200
let victorysPlayer = 0
let hpEnemy = 200
let victorysEnemy = 0

function startGame(){

    sectionSelectNinja.style.display = "none"

    sectionGameMode.style.display = "none"

    cancel.style.display = "none"

    sectionBotonNinja.style.display = "none"

    sectionSelectAttack.style.display = "none"

    seccionRestart.style.display = "none"

    divhabilityHydra.style.display = "none"

    divhabilityJeys.style.display = "none"

    divhabilityKyrod.style.display = "none"

    divhabilityHorus.style.display = "none"

    divhabilityKron.style.display = "none"

    divhabilitykoryu.style.display = "none"

    divhabilityWalker.style.display = "none"

    botonNinjaJugador.addEventListener("click", selectNinjaPlayer)

    botonFuego.addEventListener("click", attackFuego)

    botonAgua.addEventListener("click", attackAgua)

    botonTierra.addEventListener("click", attackTierra)

    botonMeteoro.addEventListener("click", attackMeteoro)

    botonRayo.addEventListener("click", attackRayo)

    botonRestart.addEventListener("click", restartGame)
}

function showSkill(element){
    if (element == "hydra"){ //Hidra💧
        divhabilityHydra.style.display = "flex"
        divJeys.style.display = "none"
        divKyrod.style.display = "none"
        divHorus.style.display = "none"
        divKron.style.display = "none"
        divkoryu.style.display = "none"
        divWalker.style.display = "none"
        cancel.style.display = "flex"
    }
    else if (element == "jeys"){ //Jeys🌱
        divHydra.style.display = "none"
        divhabilityJeys.style.display = "flex"
        divKyrod.style.display = "none"
        divHorus.style.display = "none"
        divKron.style.display = "none"
        divkoryu.style.display = "none"
        divWalker.style.display = "none"
        cancel.style.display = "flex"
    }
    else if (element == "kyrod"){ //Kyrod🔥
        divHydra.style.display = "none"
        divJeys.style.display = "none"
        divhabilityKyrod.style.display = "flex"
        divHorus.style.display = "none"
        divKron.style.display = "none"
        divkoryu.style.display = "none"
        divWalker.style.display = "none"
        cancel.style.display = "flex"
    }
    else if (element == "horus"){ //Horus🌌
        divHydra.style.display = "none"
        divJeys.style.display = "none"
        divKyrod.style.display = "none"
        divhabilityHorus.style.display = "flex"
        divKron.style.display = "none"
        divkoryu.style.display = "none"
        divWalker.style.display = "none"
        cancel.style.display = "flex"
    }
    else if (element == "kron"){ //Kron🍁
        divHydra.style.display = "none"
        divJeys.style.display = "none"
        divKyrod.style.display = "none"
        divHorus.style.display = "none"
        divhabilityKron.style.display = "flex"
        divkoryu.style.display = "none"
        divWalker.style.display = "none"
        cancel.style.display = "flex"
    }
    else if (element == "koryu"){ //Koryu💎
        divHydra.style.display = "none"
        divJeys.style.display = "none"
        divKyrod.style.display = "none"
        divHorus.style.display = "none"
        divKron.style.display = "none"
        divhabilitykoryu.style.display = "flex"
        divWalker.style.display = "none"
        cancel.style.display = "flex"
    }
    else if (element == "walker"){ //Walker🎃
        divHydra.style.display = "none"
        divJeys.style.display = "none"
        divKyrod.style.display = "none"
        divHorus.style.display = "none"
        divKron.style.display = "none"
        divkoryu.style.display = "none"
        divhabilityWalker.style.display = "flex"
        cancel.style.display = "flex"
    }
}

function selectNinjaPlayer(){


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

    sectionSelectNinja.style.display = "none"

    sectionGameMode.style.display = "flex"

}

function selectMode(mode){
    if (mode == 'hp'){
        variableQuery = 'hp'
    }
    else if (mode == 'victorys'){
        variableQuery = 'victorys'
    }

    selectNinjaEnemy()
}

function selectNinjaEnemy(){
    let enemyRandom = random(0, 5)

    if (enemyRandom == 0){
        spanNinjaEnemy.innerHTML = 'Hidra💧'
    }
    else if (enemyRandom == 1){
        spanNinjaEnemy.innerHTML = 'Jeys🌱'
    }
    else if (enemyRandom == 2){
        spanNinjaEnemy.innerHTML = 'Kyrod🔥'
    }
    else if (enemyRandom == 3){
        spanNinjaEnemy.innerHTML = 'Horus🌌'
    }
    else if (enemyRandom == 4){
        spanNinjaEnemy.innerHTML = 'Kron🍁'
    }
    else if (enemyRandom == 5){
        spanNinjaEnemy.innerHTML = 'Walker🎃'
    }

    sectionSelectAttack.style.display = "flex"
    sectionGameMode.style.display = "none"

    consult(variableQuery)

}

function attackFuego(){
    attackPlayer = "🔥"
    damage = random(32, 35)
    attackRandomEnemy()
}
function attackAgua(){
    attackPlayer = "💧"
    damage = random(30, 32)
    attackRandomEnemy()
}
function attackTierra(){
    attackPlayer = "🌱"
    damage = random(24, 26)
    attackRandomEnemy()
}
function attackMeteoro(){
    attackPlayer = "☄️"
    damage = random(20, 23)
    attackRandomEnemy()
}
function attackRayo(){
    attackPlayer = "⚡"
    damage = random(27, 29)
    attackRandomEnemy()
}

function attackRandomEnemy(){
    let attackRandom = random(1,5)

    if (attackRandom == 1){
        attackEnemy = "🔥"
        damageEnemy = random(32, 35)
    }
    else if (attackRandom == 2){
        attackEnemy = "💧"
        damageEnemy = random(30, 32)
    } 
    else if (attackRandom == 3){
        attackEnemy = "🌱"
        damageEnemy = random(24, 26)
    }
    else if(attackRandom == 4){
        attackEnemy = "☄️"
        damageEnemy= random(20, 23)
    }
    else {
        attackEnemy = "⚡"
        damageEnemy = random(27, 29)
    }
}

function consult(letConsdultF){

    if (letConsdultF == 'hp'){
        combat('combatHP')
    }
    else if (letConsdultF == 'victorys'){
        combat('combatVictorys')
    }

}

function combat(modeCombat){

    if (modeCombat === 'combatHP'){
        // Hydra

        if (spanNinja.innerHTML == "Hidra💧") {
            if (attackEnemy == attackPlayer) {
                createMessage("It's a TIE 🥈");
            }
            else if (
                (attackPlayer == "🔥" && (attackEnemy == "🌱" || attackEnemy == "⚡" || attackEnemy == "☄️")) ||
                (attackPlayer == "💧" && (attackEnemy == "🔥" || attackEnemy == "⚡" || attackEnemy == "🌱")) ||
                (attackPlayer == "🌱" && (attackEnemy == "💧" || attackEnemy == "⚡" || attackEnemy == "☄️")) ||
                (attackPlayer == "☄️" && (attackEnemy == "💧" || attackEnemy == "🌱")) ||
                (attackPlayer == "⚡" && attackEnemy == "☄️")
            ) {
                createMessage("Winner 🥇");
                const result = Math.round(damage);
                hpEnemy = hpEnemy - result;
                spanLivesEnemy.innerHTML = hpEnemy;
            }
            else {
                createMessage("You Lost 🥉");
                damageHability = damageEnemy;
                damageHability = (damageHability * 0.8);
                damageEnemy = damageEnemy - damageHability;
                const resultEnemy = Math.round(damageEnemy);
                hpPlayer = hpPlayer - resultEnemy;
                spanLivesPlayer.innerHTML = hpPlayer;
            }
        }
        

        // Jeys

        else if (spanNinja.innerHTML == "Jeys🌱") {
            let playerWin = false;
        
            if (
                (attackPlayer == "🔥" && attackEnemy == "🌱") ||
                (attackPlayer == "🔥" && attackEnemy == "⚡") ||
                (attackPlayer == "🔥" && attackEnemy == "☄️") ||
                (attackPlayer == "💧" && attackEnemy == "🔥") ||
                (attackPlayer == "💧" && attackEnemy == "⚡") ||
                (attackPlayer == "🌱" && attackEnemy == "💧") ||
                (attackPlayer == "🌱" && attackEnemy == "⚡") ||
                (attackPlayer == "☄️" && attackEnemy == "💧") ||
                (attackPlayer == "☄️" && attackEnemy == "🌱") ||
                (attackPlayer == "⚡" && attackEnemy == "☄️")
            ) {
                playerWin = true;
            }
        
            if (playerWin) {
                createMessage("Winner 🥇");
                const result = Math.round(damage);
                hpEnemy = hpEnemy - result;
                spanLivesEnemy.innerHTML = hpEnemy;
            } 
            else {
                createMessage("You Lost 🥉");
                if (!habilityJeys) {
                    damageEnemy = damageEnemy - 15;
                    const resultEnemy = Math.round(damageEnemy);
                    hpPlayer = hpPlayer - resultEnemy;
                    spanLivesPlayer.innerHTML = hpPlayer;
                    habilityJeys = true;
                } else {
                    const resultEnemy = Math.round(damageEnemy);
                    hpPlayer = hpPlayer - resultEnemy;
                    spanLivesPlayer.innerHTML = hpPlayer;
                }
            }
        }


        // Kyrod

        else if (spanNinja.innerHTML === "Kyrod🔥") {
            if (attackEnemy === attackPlayer) {
                createMessage("It's a TIE 🥈");
            } 
            else if (
                (attackPlayer === "🔥" && attackEnemy === "🌱") ||
                (attackPlayer === "🔥" && attackEnemy === "⚡") ||
                (attackPlayer === "🔥" && attackEnemy === "☄️") ||
                (attackPlayer === "💧" && attackEnemy === "🔥") ||
                (attackPlayer === "💧" && attackEnemy === "⚡") ||
                (attackPlayer === "🌱" && attackEnemy === "💧") ||
                (attackPlayer === "🌱" && attackEnemy === "⚡") ||
                (attackPlayer === "☄️" && attackEnemy === "💧") ||
                (attackPlayer === "☄️" && attackEnemy === "🌱") ||
                (attackPlayer === "⚡" && attackEnemy === "☄️")
            ) {
                createMessage("Winner 🥇");
                damageHability = damage;
                damageHability = (damageHability * 7.5) / 100;
                damage = damage + damageHability;
                const result = Math.round(damage)
                hpEnemy = hpEnemy - result;
                spanLivesEnemy.innerHTML = hpEnemy;
            } 
            else {
                createMessage("You Lost 🥉");
                const resultEnemy = Math.round(damageEnemy)
                hpPlayer = hpPlayer - resultEnemy;
                spanLivesPlayer.innerHTML = hpPlayer;
            }
        }


        // Horus

        else if (spanNinja.innerHTML == "Horus🌌") {
            if (attackEnemy == attackPlayer) {
                createMessage("It's a TIE 🥈");
            } 
            else {
                const result = Math.round(damage);
                
                if ((attackPlayer == "🔥" && (attackEnemy == "🌱" || attackEnemy == "⚡" || attackEnemy == "☄️")) ||
                    (attackPlayer == "💧" && (attackEnemy == "🔥" || attackEnemy == "⚡")) ||
                    (attackPlayer == "🌱" && (attackEnemy == "💧" || attackEnemy == "⚡")) ||
                    (attackPlayer == "☄️" && (attackEnemy == "💧" || attackEnemy == "🌱")) ||
                    (attackPlayer == "⚡" && attackEnemy == "☄️")) {
                    createMessage("Winner 🥇");
                    hpEnemy -= result;
                    spanLivesEnemy.innerHTML = hpEnemy;
                } else {
                    createMessage("You Lost 🥉");
                    const resultEnemy = Math.round(damageEnemy);
                    hpPlayer -= result;
                    spanLivesPlayer.innerHTML = hpPlayer;
                }
            }
        
            if (hpPlayer <= 50 && !habilityHorus) {
                damageEnemy -= 15;
                habilityHorus = true;
            }
        }


        // Kron

        else if (spanNinja.innerHTML == "Kron🍁") {
            let result = Math.round(damage);
            
            if (attackEnemy == attackPlayer || (attackEnemy == "☄️" && attackPlayer == "⚡")) {
                createMessage("It's a TIE 🥈");
            } else if ((attackPlayer == "🔥" && attackEnemy == "🌱") ||
                    (attackPlayer == "🔥" && attackEnemy == "⚡") ||
                    (attackPlayer == "🔥" && attackEnemy == "☄️") ||
                    (attackPlayer == "💧" && attackEnemy == "🔥") ||
                    (attackPlayer == "💧" && attackEnemy == "⚡") ||
                    (attackPlayer == "🌱" && attackEnemy == "💧") ||
                    (attackPlayer == "🌱" && attackEnemy == "⚡") ||
                    (attackPlayer == "☄️" && attackEnemy == "💧") ||
                    (attackPlayer == "☄️" && attackEnemy == "🌱") ||
                    (attackPlayer == "⚡" && attackEnemy == "☄️")) {
                createMessage("Winner 🥇");
                
                if (hpPlayer <= 30 && !habilityKron) {
                    let damageHability = (damage * 25) / 100;
                    damage += damageHability;
                    result += Math.round(damageHability);
                    habilityKron = true;
                }
                
                hpEnemy -= result;
                spanLivesEnemy.innerHTML = hpEnemy;
            } 
            else {
                createMessage("You Lost 🥉");
                let resultEnemy = Math.round(damageEnemy);
                hpPlayer -= resultEnemy;
                spanLivesPlayer.innerHTML = hpPlayer;
            }
        }
        


        // koryu

        else if (spanNinja.innerHTML == "Koryu💎") {
            if (
                (attackPlayer == "🔥" && (attackEnemy == "🌱" || attackEnemy == "⚡" || attackEnemy == "☄️")) ||
                (attackPlayer == "💧" && (attackEnemy == "🔥" || attackEnemy == "⚡")) ||
                (attackPlayer == "🌱" && (attackEnemy == "💧" || attackEnemy == "⚡")) ||
                (attackPlayer == "☄️" && (attackEnemy == "💧" || attackEnemy == "🌱"))
            ) {
                
                if (attackPlayer == "☄️" && habilityDreyKroyu <= 4) {
                    damageHability = ((damage * 13)/ 100);
                    damage += damageHability;
                    habilityDreyKroyu++;
                }
        
                const result = Math.round(damage);
                hpEnemy -= result;
                spanLivesEnemy.innerHTML = hpEnemy;
                createMessage("Winner 🥇");
            }
            else if (attackEnemy == attackPlayer) {
                createMessage("It's a TIE 🥈");
            }
            else {
                const resultEnemy = Math.round(damageEnemy);
                hpPlayer -= resultEnemy;
                spanLivesPlayer.innerHTML = hpPlayer;
                createMessage("You Lost 🥉");
            }
        }
        

        
        // Walker

        else if (spanNinja.innerHTML == "Walker🎃") {
            if (attackEnemy == attackPlayer) {
                createMessage("It's a TIE 🥈");
            } 
            else if (
                (attackPlayer == "🔥" && (attackEnemy == "🌱" || attackEnemy == "⚡" || attackEnemy == "☄️")) ||
                (attackPlayer == "💧" && (attackEnemy == "🔥" || attackEnemy == "⚡")) ||
                (attackPlayer == "🌱" && (attackEnemy == "💧" || attackEnemy == "⚡")) ||
                (attackPlayer == "☄️" && (attackEnemy == "💧" || attackEnemy == "🌱"))
            ) {
                createMessage("Winner 🥇");
                if (hpEnemy <= 50) {
                    damageHability = damage * 0.20;
                    damage += damageHability;
                }
                const result = Math.round(damage);
                hpEnemy -= result;
                spanLivesEnemy.innerHTML = hpEnemy;
            }
            else {
                createMessage("You Lost 🥉");
                const resultEnemy = Math.round(damageEnemy);
                hpPlayer -= resultEnemy;
                spanLivesPlayer.innerHTML = hpPlayer;
            }
        }

        review('hp')
    }
    else if (modeCombat === 'combatVictorys'){

        if (attackEnemy == attackPlayer) {
            createMessage("It's a TIE 🥈");
        }
        else if (
            (attackPlayer == "🔥" && (attackEnemy == "🌱" || attackEnemy == "⚡" || attackEnemy == "☄️")) ||
            (attackPlayer == "💧" && (attackEnemy == "🔥" || attackEnemy == "⚡" || attackEnemy == "🌱")) ||
            (attackPlayer == "🌱" && (attackEnemy == "💧" || attackEnemy == "⚡" || attackEnemy == "☄️")) ||
            (attackPlayer == "☄️" && (attackEnemy == "💧" || attackEnemy == "🌱")) ||
            (attackPlayer == "⚡" && attackEnemy == "☄️")
        ) {
            createMessage("Winner 🥇");
            victorysPlayer++
            spanLivesPlayer.innerHTML = victorysPlayer
        }
        else {
            createMessage("You Lost 🥉");
            victorysEnemy++
            spanLivesEnemy.innerHTML = victorysEnemy
        }

        review('victorys')
    }
    
}

function review(caseCombat){

    if (caseCombat == 'hp'){
        if (hpPlayer > 0 && hpEnemy <= 0){
            createMessageFinal("CONGRATULATIONS, Winner 🏆🎉!")
            if (hpEnemy < 0){
                spanLivesEnemy.innerHTML = 0
            }
        }
        else if (hpPlayer > 0 && hpEnemy <= 0){
            createMessageFinal("You have failed😖, try again.")
            if (hpPlayer < 0){
                spanLivesPlayer.innerHTML = 0
            }
        }
    }
    else if (caseCombat == 'victorys'){
        if (victorysPlayer === 5){
            createMessageFinal("CONGRATULATIONS, Winner 🏆🎉!")
        }
        else if (victorysEnemy === 5){
            createMessageFinal("You have failed😖, try again.")
        }
    }

}

function createMessageFinal(final){
    

    messageFinalAlert(final)

    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
    botonMeteoro.disabled = true
    botonRayo.disabled = true
    
    seccionRestart.style.display = "flex"

}

function createMessage(result){

    let paragraph = document.createElement("p")
    paragraph.innerHTML = "You: " + attackPlayer + ", Enemy: " + attackEnemy + " - " + result

    sectionMessages.appendChild(paragraph)
}

function restartGame(){
    location.reload()
}

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", startGame)