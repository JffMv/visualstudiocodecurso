
function draw() {
    background(50, 150, 100);
    dibujar_linea(200, 400, 80, 120);
    noLoop();
  }
  
   
  
   
  
  function dibujar_linea(x, y, angulo, longitud) {
    let angulo_rad;
    angulo_rad = grados_a_radianes(angulo);
    let x_final;
    let y_final;
    x_final = x + longitud*cos(angulo_rad);
    y_final = y - longitud*sin(angulo_rad);
    line(x, y, x_final, y_final);
    
    if (longitud >= 1) {
      dibujar_linea(x_final, y_final, angulo - 30, 0.6*longitud);
      dibujar_linea(x_final, y_final, angulo + 20, 0.75*longitud);
    }
  }
  
   
  
   
  
  function grados_a_radianes(angulo) {
    let valor_en_radianes;
    valor_en_radianes = angulo * PI / 180;
    return valor_en_radianes;
  } 