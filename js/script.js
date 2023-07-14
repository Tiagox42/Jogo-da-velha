let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

let player1 = 0;
let player2 = 0;

for (let i = 0; i < boxes.length; i++) {

    boxes[i].addEventListener("click", function () {

        let contexto = checkContexto(player1, player2);

        if (this.childNodes.length == 0) {
            let cloneContexto = contexto.cloneNode(true);

            this.appendChild(cloneContexto);

            // vez de cada jogador
            if (player1 == player2) {
                player1++;

                if(secondPlayer == 'ai-player') {
                    computePlay();
                    player2++;
                }


            } else {
                player2++;
            }

            verificaVencendor();
        }

    });
}

for(let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function() {

        secondPlayer = this.getAttribute("id");

        for (let y = 0; y < buttons.length; y++) {
            buttons[y].style.display = 'none';
        }

        setTimeout(function() {
            let container = document.querySelector("#container");
            container.classList.remove("hide");

        }, 600);
    
    });
}

function checkContexto(player1, player2) {

        if (player1 == player2) {
            contexto = x;
        } else {
            contexto = o;
        }

        return contexto;
}

function verificaVencendor() {

    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

    //horizontal
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0 ) {

        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
            declaraVencedor('x');
        } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
            declaraVencedor('o');
        }
    }

    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0 ) {

        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
            declaraVencedor('x');
        } else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
            declaraVencedor('o');
        }
    }

    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0 ) {

        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
            declaraVencedor('x');
        } else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
            declaraVencedor('o');
        }
    }

    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0 ) {

        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
            declaraVencedor('x');
        } else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
            declaraVencedor('o');
        }
    }

    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0 ) {

        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if(b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
            declaraVencedor('x');
        } else if (b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
            declaraVencedor('o');
        }
    }

    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0 ) {

        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
            declaraVencedor('x');
        } else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
            declaraVencedor('o');
        }
    }

    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0 ) {

        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
            declaraVencedor('x');
        } else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
            declaraVencedor('o');
        }
    }

    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0 ) {

        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
            declaraVencedor('x');
        } else if (b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
            declaraVencedor('o');
        }
    }

    let contador = 0;

    for(let i = 0; i <boxes.length; i++) {
        if(boxes[i].childNodes[0] != undefined) {
            contador++;
        }
    }

    if (contador == 9) {
        declaraVencedor('Deu velha!')
    }
    
}

function declaraVencedor(vencedor) {
    let scoreboardX = document.querySelector("#scoreboard1")
    let scoreboardO = document.querySelector("#scoreboard2")
    let msg = '';

    if(vencedor == 'x') {
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = "O jogador 1 venceu!";
    } else if(vencedor == 'o') {
        scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
        msg = "O jogador 2 venceu!";
    } else {
        msg = "Deu velha!";
    }

    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide");

    setTimeout(function() {
        messageContainer.classList.add("hide");
    }, 4000);

    player1 = 0;
    player2 = 0;

    let boxesToRemove = document.querySelectorAll(".box div")

    for(let i = 0; i < boxesToRemove.length; i++) {
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }

}

function computePlay() {

    let clone0 = o.cloneNode(true);
    counter = 0;
    filled = 0;

    for (let i = 0; i < boxes.length; i++) {
        let randomNumber = Math.floor(Math.random() * 5);

        
        // só preencer se estiver vazio o filho
        if (boxes[i].childNodes[0] == undefined) {
            if(randomNumber <=1) {
                boxes[i].appendChild(clone0);
                counter++;
                break;
            }

            // checagem de quantas estão preenchidas
        } else {
            filled++;
        }
        
    }

    if (counter == 0 && filled < 9) {
        computePlay();
    }
}
