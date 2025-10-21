#  MIDTERM
## What I made
In this project, I created a visual object that looks like a tree. In Phase 1, I drew the tree on graph paper. In Phase 2, I translated the drawing into code using P5.js. Then, in Phase 3, I created a function to draw the tree, making it easier to reuse and adjust. Finally, in Phase 4, I tiled the tree objects across the canvas in a grid and made sure the trees fit properly in the grid cells.

## How I made it
Phase 1: I started by drawing the tree on iPad drawing app. The tree was made up of three triangles and a rectangle.

Phase 2: I used P5.js to turn my paper sketch into a digital version. I used functions like rect() and triangle() to draw the different parts of the tree.

Phase 3: I turned the code for drawing the tree into a function called drawObject(x, y, s). This function lets me draw the tree at different positions and sizes easily.

Phase 4: I divided the canvas into a grid and used that grid to tile the tree across the canvas. I also made sure the trees fit within the grid cells and adjusted their size so they didn’t overlap.

## The problems I faced
Firstly, the trees were keep overlapped. In Phase 4, when I tried to tile the trees, they were overlapping each other. This happened because the triangles in the tree were too big or didn’t fit properly in the grid cells.

Secondly, adjusting the grid size was hard. It was challenging to calculate the correct grid cell size and make sure the trees fit perfectly inside each cell. I took most of time to figure out this
## How I overcame them
I adjusted the size of the trees and made sure there was enough space between them. I used the scale() function to make the trees fit within the grid cells. I also added some space between each tree by adjusting the positions of the trees slightly.

I carefully calculated the size of each grid cell and used that to scale the trees correctly. By adjusting the scaleFactor in the function, I made sure the trees would fit within the cells and not overflow. I also searched from https://p5js.org/reference/p5/triangle to figure out to create triangle.