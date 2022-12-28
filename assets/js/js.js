/* Desafio 1 */
borde = document.getElementById("borde")

borde.addEventListener("click", () => {
    desafio1Borde = borde.border

    if (desafio1Borde == "") {
        borde.border = "2px solid"
    } else {
        borde.border = ""
    }
})


/* Desafio 2 */
span1 = document.querySelector(".suficiente")
span2 = document.querySelector(".demasiados")

function demasiados() {
    sticker1 = document.getElementById("sticker1").value
    sticker2 = document.getElementById("sticker2").value
    sticker3 = document.getElementById("sticker3").value
    stickers = +sticker1 + +sticker2 + +sticker3
    if (stickers <= 10) {
        span1.innerHTML = stickers
        span2.innerHTML = "son suficientes"
        span1.style.color = "green"
        span2.style.color = "green"
    } else {
        span1.innerHTML = stickers
        span2.innerHTML = "son DEMASIADOS"
        span1.style.color = "red"
        span2.style.color = "red"
    }
}


/* Desafio 3 */
uno = document.querySelector(".uno")
dos = document.querySelector(".dos")
tres = document.querySelector(".tres")

function clave() {
    clave1 = document.getElementById("uno").selectedIndex+1
    clave2 = document.getElementById("dos").selectedIndex+1
    clave3 = document.getElementById("tres").selectedIndex+1
    claves = clave1.toString() + clave2.toString() + clave3.toString()
    if (claves == "911") {
        uno.innerHTML = claves
        dos.innerHTML = "CORRECTO"
        uno.style.color = "green"
        dos.style.color = "green"
    } else if (claves == 714) {
        uno.innerHTML = claves
        dos.innerHTML = "CORRECTO"
        uno.style.color = "green"
        dos.style.color = "green"
    } else [
        uno.innerHTML = claves,
        dos.innerHTML = "incorrecto",
        uno.style.color = "red",
        dos.style.color = "red",
    ]
}