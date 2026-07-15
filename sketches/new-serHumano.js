/*
/////////////////////////////////////////////////////////////
Este sketch lo hice para la solemne-2 del ramo de pensamiento computacional. Lo hice basándome en la estética y pesonalidades de los artistas del álbum Ser Hümano!!, de Tiro de Gracia, el cual fue lanzado en 1997 y fue su álbum debut.
/////////////////////////////////////////////////////////////
*/

// Modo instancia: todo el sketch vive dentro de esta función,
// que recibe "p" y con eso arma su propio p5 aislado del resto de la página.
const sketchSerHumano = (p) => {

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

  p.setup = () => {
    p.createCanvas(600*0.8, 400*0.8);

    paletadecolores();
  };

  // ----------------------
  // draw
  // ----------------------

  p.draw = () => {
    //son solo funciones, así queda más legible, y las funciones están escritas más abajo
    p.background(colorFondo);
    dibujarGrilla();
    dibujarParedes();
    dibujarPelotas();
    dibujarMesa();
  };

  // ----------------------
  // colores
  // ----------------------

  function paletadecolores() {
    colorFondo = p.color(25, 20, 15);
    colorGrilla = p.color(100, 50, 20, 40);
    colorPared = p.color(180, 80, 30);
    colorMesa = p.color(40, 35, 30);
    colorVinilo = p.color(10);
    colorPelota = p.color(255, 200, 50);
  }

  // ----------------------
  // grilla
  // ----------------------

  function dibujarGrilla() {
    p.stroke(colorGrilla);
    p.strokeWeight(1);
    // horizontal
    for (let i = 0; i < p.width; i += 30) {
      p.line(i, 0, i, p.height);
    }
    // vertical
    for (let j = 0; j < p.height; j += 30) {
      p.line(0, j, p.width, j);
    }
  }

  // ----------------------
  // paredes
  // ----------------------

  function dibujarParedes() {
    p.noStroke();

    p.fill(colorPared);

    // bordes
    p.rect(0, 0, p.width, p.height / 20);

    p.rect(0, p.height - p.height / 20, p.width, p.height / 20);

    // movimiento
    let movimiento = (p.frameCount * velocidad) % distancia;

    // formas
    for (let i = -distancia; i < p.width + distancia; i += distancia) {
      let x = i - movimiento;

      p.ellipse(x + 110, 0, 150, 420);

      p.ellipse(x, p.height, 150, 420);
    }
  }

  // ----------------------
  // pelotas
  // ----------------------

  function dibujarPelotas() {
    let angulo = p.frameCount * velocidad * (p.TWO_PI / distancia);

    let posicionY = p.height / 2 + p.sin(angulo + p.HALF_PI) * 80;

    p.fill(colorPelota);

    p.noStroke();

    p.circle(posicionX - 10, posicionY, 20);

    p.circle(posicionX * 2.8 - 10, posicionY, 20);

    p.circle(posicionX * 4.7 - 10, posicionY, 20);
  }

  // ----------------------
  // mesa dj
  // ----------------------

  function dibujarMesa() {
    p.push();

    p.translate(p.width / 2, p.height / 2);

    p.rectMode(p.CENTER);

    // base
    p.fill(colorMesa);

    p.noStroke();

    p.rect(0, 0, 260, 110);

    // ----------------
    // vinilo izquierda
    // ----------------

    p.push();

    p.translate(-75, 0);

    p.rotate(rotacionVinilo);

    p.fill(colorVinilo);

    p.circle(0, 0, 70);

    p.stroke(255);

    p.line(0, 0, 20, 0);

    p.pop();

    // ----------------
    // vinilo derecha
    // ----------------

    p.push();

    p.translate(75, 0);

    p.rotate(-rotacionVinilo);

    p.fill(colorVinilo);

    p.circle(0, 0, 70);

    p.stroke(255);

    p.line(0, 0, 20, 0);

    p.pop();

    // ----------------
    // pantalla centro
    // ----------------

    p.fill(20);

    p.noStroke();

    p.rect(0, 0, 60, 60);

    // estrella
    p.push();

    p.rotate(rotacionEstrella);

    p.noFill();

    p.stroke(colorPelota);

    p.beginShape();

    for (let i = 0; i < 10; i++) {
      let angulo = p.map(i, 0, 10, 0, p.TWO_PI);

      let distancia = p.random(8, 25);

      let x = p.cos(angulo) * distancia;

      let y = p.sin(angulo) * distancia;

      p.vertex(x, y);
    }

    p.endShape(p.CLOSE);

    p.pop();

    p.pop();

    // animaciones
    rotacionVinilo += 0.05;

    rotacionEstrella += 0.03;
  }
};
