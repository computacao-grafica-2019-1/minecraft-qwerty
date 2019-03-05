btw = 5;
wh = 80;
hh = 80;
wa = 80;
ha = 150;


function setup() {
}
//a coordenada x da cabeça é negativa pra desenhar ela no meio da tela
//o x é a posição x menos metade da largura da cabeça
//o y é a posição y menos a altura da cabeça
function Head(x, y, w, h){
  this.x = x - w/2;
  this.y = y - h;
  this.w = w;
  this.h = h;

  this.desenha = function(){
    rect(this.x, this.y, this.w, this.h);
    ellipse(0, 0, 5)

  }
}

//a largura do corpo tem 2x a largura da cabeça
//a altura do corpo tem 3x a altura da cabeça
//body(posição x, posição y, width do head, height do head)
function Body(x, y, w, h){
  this.x = x - w; // pra começara desenhar a uma cabeça de distancia
  this.y = y - h;
  this.w = 2*w;
  this.h = 3*h;

  this.desenha = function(){
    rect(this.x, this.y, this.w, this.h);
    ellipse(0, 0, 5)

  }
}

function Arm(x, y, w, h){
  //o x - a altura do braço desenha o braço no lugar correto
  //e só mantém o valor de Y no 0 mesmo
  this.x = x - ha;
  this.y = y - wh/2;
  this.w = w;
  this.h = h;
  this.desenha = function(){
    rect(this.x, this.y, this.h, this.w);
    ellipse(0, 0, 5)

  }
}

function Leg(x, y, w, h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;

  this.desenha = function(){
    rect(this.x, this.y, this.w, this.h)
    ellipse(0, 0, 5)
  }

}

function keyPressed(arm) {
  if (keyCode === 69 && arm == "E") {
    return -45;
  }
  if(keyCode === 68 && arm == "D" ){
    return -45;
  }
  if(keyCode === 32){
    return 0;
  }
}


function draw() {

  createCanvas(600, 600);
  background(220);
  //CABEÇA
  push();
  translate(width/2, 100);
  h = new Head(0, 0, hh, hh);
  h.desenha();
  pop();

  //CORPO
  // o corpo tem a mesma coordenada x da cabeçça
  // a coordenada y = y - head.h
  push();
  translate(width/2, 20);
  ellipse(0, 0, 5)
  b = new Body(0, wh*2 + btw, wh, hh);
  b.desenha();
  pop();

  //BRAÇO DIREITO
  push();
  translate(width/2 - wh, 100 + btw + wh/2);
  rotate(keyPressed("D"));
  rA = new Arm(0 - btw , 0, wa, ha);
  rA.desenha();
  pop();

  //BRAÇO ESQUERDO
  push();
  //x = metade da tela + metade da cabeça
  //y = 100 + btw + tamanho da cabeça / 2
  translate(width/2 + wh, 100 + btw + wh/2);
  rotate(keyPressed("E"));
  lA = new Arm(0 + ha + btw, 0, wa, ha);
  lA.desenha();
  ellipse(0, 0, 5);
  pop();
  //PERNA DIREITA
  push();
  //x = metade da tela - a largura da cabeça
  //o y é 100 de altura o mesmo valor que ta pro corpo +
  //btw*2 pq tem que distanciar da cabeça e do corpo +
  // a altura do corpo
  translate(width/2 - wh/2, 100+btw*2+wh*3);
  rL = new Leg(0 - wh/2 , 0, wa, ha);
  rL.desenha();
  pop();

  //PERNA ESQUERDA
  push();
  translate(width/2 + wh/2, 100+btw*2+wh*3);
  lL= new Leg(0 - wh/2, 0, wa, ha);
  lL.desenha();
  pop();

}