/*
/////////////////////////////////////////////////////////////
Este sketch lo hice para la solemne-2 del ramo de pensamiento computacional. Lo hice basándome en la estética y pesonalidades de los artistas del álbum Ser Hümano!!, de Tiro de Gracia, el cual fue lanzado en 1997 y fue su álbum debut.
/////////////////////////////////////////////////////////////
*/

// ----------------------
// variables
// ----------------------

let colorFondo;
let colorGrilla;
let colorPared;
let colorMesa;
let colorVinilo;
let colorPelota;

let posicionX = 120;
let velocidad = 4;
let distancia = 220;
let rotacionVinilo = 0;
let rotacionEstrella = 0;

// ----------------------
// setup
// ----------------------

function setup() {
  createCanvas(600, 400);

  paletadecolores();
}

// ----------------------
// draw
// ----------------------

function draw() {
  //son solo funciones, así queda más legible, y las funciones están escritas más abajo
  background(colorFondo);
  dibujarGrilla();
  dibujarParedes();
  dibujarPelotas();
  dibujarMesa();
}

// ----------------------
// colores
// ----------------------

function paletadecolores() {
  colorFondo = color(25, 20, 15);
  colorGrilla = color(100, 50, 20, 40);
  colorPared = color(180, 80, 30);
  colorMesa = color(40, 35, 30);
  colorVinilo = color(10);
  colorPelota = color(255, 200, 50);
}

// ----------------------
// grilla
// ----------------------

function dibujarGrilla() {
  stroke(colorGrilla);
  strokeWeight(1);
  // horizontal
  for (let i = 0; i < width; i += 30) {
    line(i, 0, i, height);
  }
  // vertical
  for (let j = 0; j < height; j += 30) {
    line(0, j, width, j);
  }
}

// ----------------------
// paredes
// ----------------------

function dibujarParedes() {
  noStroke();

  fill(colorPared);

  // bordes
  rect(0, 0, width, height / 20);

  rect(0, height - height / 20, width, height / 20);

  // movimiento
  let movimiento = (frameCount * velocidad) % distancia;

  // formas
  for (let i = -distancia; i < width + distancia; i += distancia) {
    let x = i - movimiento;

    ellipse(x + 110, 0, 150, 420);

    ellipse(x, height, 150, 420);
  }
}

// ----------------------
// pelotas
// ----------------------

function dibujarPelotas() {
  let angulo = frameCount * velocidad * (TWO_PI / distancia);

  let posicionY = height / 2 + sin(angulo + HALF_PI) * 80;

  fill(colorPelota);

  noStroke();

  circle(posicionX - 10, posicionY, 20);

  circle(posicionX * 2.8 - 10, posicionY, 20);

  circle(posicionX * 4.7 - 10, posicionY, 20);
}

// ----------------------
// mesa dj
// ----------------------

function dibujarMesa() {
  push();

  translate(width / 2, height / 2);

  rectMode(CENTER);

  // base
  fill(colorMesa);

  noStroke();

  rect(0, 0, 260, 110);

  // ----------------
  // vinilo izquierda
  // ----------------

  push();

  translate(-75, 0);

  rotate(rotacionVinilo);

  fill(colorVinilo);

  circle(0, 0, 70);

  stroke(255);

  line(0, 0, 20, 0);

  pop();

  // ----------------
  // vinilo derecha
  // ----------------

  push();

  translate(75, 0);

  rotate(-rotacionVinilo);

  fill(colorVinilo);

  circle(0, 0, 70);

  stroke(255);

  line(0, 0, 20, 0);

  pop();

  // ----------------
  // pantalla centro
  // ----------------

  fill(20);

  noStroke();

  rect(0, 0, 60, 60);

  // estrella
  push();

  rotate(rotacionEstrella);

  noFill();

  stroke(colorPelota);

  beginShape();

  for (let i = 0; i < 10; i++) {
    let angulo = map(i, 0, 10, 0, TWO_PI);

    let distancia = random(8, 25);

    let x = cos(angulo) * distancia;

    let y = sin(angulo) * distancia;

    vertex(x, y);
  }

  endShape(CLOSE);

  pop();

  pop();

  // animaciones
  rotacionVinilo += 0.05;

  rotacionEstrella += 0.03;
}
