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
            } else {
                player2++;
            }
        }

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