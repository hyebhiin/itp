function setup() {
  createCanvas(400, 400); // Set canvas size
  noStroke(); // Disable drawing the stroke
  background(255); // Set background to white
  
  let gridSize = 8; // Set grid size
  let cellSize = width / gridSize; // 
  // Use nested for-loops to tile the visual object across the grid
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      // Calculate the position of each object
      let x = i * cellSize; // X position aligned with cell size
      let y = j * cellSize; // Y position aligned with cell size

      // Calculate the scale factor based on cell size
      let scaleFactor = (cellSize * 0.7) / 220; // 0.7 scale to make the tree fit inside the cell

      // Call the drawObject function to draw the visual object
      drawObject(x, y, scaleFactor);
    }
  }
}

// drawObject function: Draws a tree object at the given position and scale
function drawObject(x, y, s) {
  push();
  translate(x, y);
  scale(s);

  // Tree part: 3 triangles
  fill(34, 139, 34); // Deep green color for the tree

  // Top triangle (green)
  triangle(200, 80, 150, 160, 250, 160);

  // Middle triangle (green)
  triangle(200, 160, 130, 240, 270, 240);

  // Bottom triangle (green)
  triangle(200, 240, 110, 320, 290, 320);

  // Tree trunk (rectangle)
  fill(139, 69, 19); // Brown color for the tree trunk
  rect(170, 320, 60, 80);

  pop();
}
