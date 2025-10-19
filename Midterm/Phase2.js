
function setup() {
  createCanvas(400, 400);
  background(255);
  strokeWeight(2);

  // Top triangle (green)
  fill(34, 139, 34); // fill in with deep green color
  triangle(200, 80, 150, 160, 250, 160);

  // Middle triangle (green)
  triangle(200, 160, 130, 240, 270, 240);

  // Bottom triangle (green)
  triangle(200, 240, 110, 320, 290, 320);

  // Trunk rectangle (brown)
  fill(139, 69, 19); // fill in with brown color
  rect(170, 320, 60, 80);
}
