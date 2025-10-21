#  MIDTERM
## What I made
In this project, I created a visual object that looks like a tree. In Phase 1, I drew the tree on graph paper. In Phase 2, I translated the drawing into code using P5.js. Then, in Phase 3, I created a function to draw the tree, making it easier to reuse and adjust. Finally, in Phase 4, I tiled the tree objects across the canvas in a grid and made sure the trees fit properly in the grid cells.

![Phase1](https://github.com/user-attachments/assets/9b9a21bb-5327-4cb1-b9f3-002825ef82ea)


## How I made it
Phase 1: I started by drawing the tree on iPad drawing app. The tree was made up of three triangles and a rectangle.

Phase 2: I used P5.js to turn my paper sketch into a digital version. I used functions like rect() and triangle() to draw the different parts of the tree.

<img width="395" height="409" alt="Screenshot 2025-10-21 at 9 18 50 AM" src="https://github.com/user-attachments/assets/619aef8b-7530-4523-97d2-12f2aaf99692" />


Phase 3: I turned the code for drawing the tree into a function called drawObject(x, y, s). This function lets me draw the tree at different positions and sizes easily.

<img width="369" height="412" alt="Screenshot 2025-10-21 at 9 19 05 AM" src="https://github.com/user-attachments/assets/4bdc346b-75e3-4484-ac2f-96adb6772cf3" />


Phase 4: I divided the canvas into a grid and used that grid to tile the tree across the canvas. I also made sure the trees fit within the grid cells and adjusted their size so they didn’t overlap.

<img width="390" height="405" alt="Screenshot 2025-10-21 at 9 19 17 AM" src="https://github.com/user-attachments/assets/ea136108-e5a9-4247-82e8-a4847ea38a84" />

I referenced from the class 04Control flow codealongs, which is <img width="516" height="258" alt="Screenshot 2025-10-21 at 9 38 11 AM" src="https://github.com/user-attachments/assets/bd727dac-e553-4a67-9dc1-39c9af985bf8" />
This helped me a lot to figure out phase4



## The problems I faced
Firstly, the trees were keep overlapped. In Phase 4, when I tried to tile the trees, they were overlapping each other. This happened because the triangles in the tree were too big or didn’t fit properly in the grid cells.

<img width="394" height="408" alt="Screenshot 2025-10-21 at 9 19 37 AM" src="https://github.com/user-attachments/assets/d73c7e5d-d2d9-4193-9b68-e54c6845996a" />

Secondly, adjusting the grid size was hard. It was challenging to calculate the correct grid cell size and make sure the trees fit perfectly inside each cell. I took most of time to figure out this

## How I overcame them
I adjusted the size of the trees and made sure there was enough space between them. I used the scale() function to make the trees fit within the grid cells. I also added some space between each tree by adjusting the positions of the trees slightly.

I carefully calculated the size of each grid cell and used that to scale the trees correctly. By adjusting the scaleFactor in the function, I made sure the trees would fit within the cells and not overflow. I also searched from https://p5js.org/reference/p5/triangle to figure out to create triangle.
