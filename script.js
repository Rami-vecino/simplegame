const colorBoxes = document.querySelectorAll(".box-color");
const container = document.querySelector(".game-container");
let contador = document.querySelector(".attempts");
let Adivino = false;
let intentos = 0;
let valorCorrecto = Math.floor(Math.random()*9) + 1;
console.log(valorCorrecto);
colorBoxes.forEach((colorBox) => {
    colorBox.addEventListener("click", () => {
        if (colorBox.dataset.value != valorCorrecto){
            console.log(parseInt(colorBox.dataset.value));
            let div = colorBox.firstElementChild;
            div.classList.add("X-color");
            intentos++;
            contador.textContent = intentos;
            if (intentos == 3){
                let perdiste = container.lastElementChild;
                perdiste.classList.add("loser");
                perdiste.textContent = "PERDISTE :(";
            }
        } else {
            let div = colorBox.firstElementChild;
            div.classList.add("V-color");
            intentos++;
            contador.textContent = intentos;
            Adivino = true;
            if(Adivino && intentos <= 3){
                let ganaste = container.lastElementChild;
                ganaste.classList.add("winner");
                ganaste.textContent = "GANASTE :D";
            }
        }

    })
})

const restart= () =>{
    location.reload();
}