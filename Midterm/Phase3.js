function setup() {
  createCanvas(400, 400); // Set the size of the canvas
  strokeWeight(2); // Disable drawing the stroke
}

function drawObject(x, y, s) {
  push();
  translate(x, y);
  scale(s);

  // Tree part: 3 triangles
  fill(34, 139, 34); // Deep green color (for the tree)

  // Top triangle (green)
  triangle(200, 80, 150, 160, 250, 160);

  // Middle triangle (green)
  triangle(200, 160, 130, 240, 270, 240);

  // Bottom triangle (green)
  triangle(200, 240, 110, 320, 290, 320);

  // Tree trunk (rectangle)
  fill(139, 69, 19); // Brown color (for the tree trunk)
  rect(170, 320, 60, 80);

  pop();
}

function draw() {
  drawObject(0, 0, 1); 
  drawObject(200, 0, 0.5);
}
