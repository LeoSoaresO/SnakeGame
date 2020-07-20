let canvas = document.getElementById("snake");
let context = canvas.getContext('2d')
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direcao = "right";
let comida= {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarEspaço() {
    context.fillStyle = "Blue";
    context.fillRect(0, 0, 16  * box, 16 * box);
}

function criarCobra() {
    for(i=0; i < snake.length; i++) {
        context.fillStyle = "white";
        context.fillRect(snake[i].x, snake[i].y, box ,box);
    }
}

function criarComida(){
    context.fillStyle = "black";
    context.fillRect(comida.x, comida.y, box, box);
}

document.addEventListener('keydown', update);

function update(event) {
    if(event.keyCode == 37 && direcao != "right") direcao = "left";
    if(event.keyCode == 38 && direcao != "down") direcao = "up";
    if(event.keyCode == 39 && direcao != "left") direcao = "right";
    if(event.keyCode == 40 && direcao != "up") direcao = "down";
}

function iniciarJogo() {

    if(snake[0].x > 15 * box && direcao == "right") snake[0].x = 0;
    if(snake[0].x < 0 * box && direcao == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direcao == "down") snake[0].y = 0;
    if(snake[0].y < 0 * box && direcao == "up") snake[0].y = 16 * box;
 
    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert("Game over")
        }
    }

    criarEspaço();
    criarCobra();
    criarComida();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direcao == "right") snakeX += box;
    if(direcao == "left") snakeX -= box;
    if(direcao == "up") snakeY -= box;
    if(direcao == "down") snakeY += box;

    if(snakeX != comida.x || snakeY != comida.y){
        snake.pop();
    }
    else{
    comida.x = Math.floor(Math.random() * 15 + 1) * box,
    comida.y = Math.floor(Math.random() * 15 + 1) * box
}


    let cabecaC = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(cabecaC);
}

let jogo = setInterval(iniciarJogo, 100);
