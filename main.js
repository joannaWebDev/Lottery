const firstPrice = 12580;
const secondPrice = 56874;
const thirdPrice = 70557;

function checkLotteryNumber() {
    var userNumber = document.getElementById('userNumber').value;
    if (userNumber == firstPrice) {
        document.getElementById('showResult').innerText = `El número ${firstPrice} es el ganador del primer premio!`;
        var img = new Image();
        img.src = "img/colorful-confetti.jpg";
        img.style.opacity = '0.5'
        document.body.background = img.src;
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
        document.querySelector('div').style.textShadow = "1px 1px 1px #0000ff";
    } else if (userNumber == secondPrice) {
        document.getElementById('showResult').innerText = `El número ${secondPrice} es el ganador del segundo premio.`;
    } else if (userNumber == thirdPrice) {
        document.getElementById('showResult').innerText = `El número ${thirdPrice} es el ganador del tercer premio`;
    } else {
        document.getElementById('showResult').innerText = `El número no ha sido premiado.`;
    }
}

const btn = document.querySelector('button');
btn.addEventListener('click', checkLotteryNumber, true)


//opcion 2
// matriz = [2,5,9]
// function elementosMatriz(el, indice,matriz) {
//     console.log(`indice[${indice}] = ${el}`);
// }

// matriz.forEach(elementosMatriz);