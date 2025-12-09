
# Squid game-Room 456

### What I Did
For this project, I created an interactive 3D web scene using A-Frame, inspired by the visual atmosphere of Squid Game.
The main goal was to design a moment-based experience where nothing happens at first, and the entire scene “activates” only when the user interacts with it.
<img width="1033" height="530" alt="Screenshot 2025-12-09 at 7 52 17 AM" src="https://github.com/user-attachments/assets/3343c10f-780f-4806-a1a9-47c3c96653c2" />

When the user clicks anywhere on the screen, several elements appear and animate together:

The Squid Game logo fades into view

The logo begins a rhythmic scale animation, almost like a heartbeat

Its brightness subtly flickers

Background music starts playing

Ambient and directional lights shift and change to bring the space to life

The camera begins a slow “breathing” motion to give the environment a sense of depth and presence

The overall design takes inspiration from the indie project IBI, especially its use of silence, tension, and delayed activation.
My goal was to recreate a similar contrast — a quiet, empty beginning followed by a sudden transition into an immersive rhythmic space.



## How I did it
### Setting Up the Base A-Frame Scene

I started by setting up a basic A-Frame scene with a background sky texture and a camera.
The sky element wraps around the user to create a full 360° environment.

<a-sky src="background-image.jpg"></a-sky>

### Hiding the Logo Until the First Interaction

The Squid Game logo is rendered as a plane geometry.
It starts fully hidden (visible="false" and opacity: 0) so the scene initially feels empty and still.
This creates a strong contrast for the interactive moment.

### Triggering All Animations on Click

I attached a click event to the entire scene using JavaScript.
When the user clicks, multiple animations activate at the same time:

A fade-in animation reveals the logo

The logo begins a pulsation animation (scaling up and down smoothly)

Opacity oscillates slightly to create a subtle glimmer

The ambient and directional lights animate in intensity and color

The camera starts floating slowly to give the scene a breathing effect

This synchronized activation creates a sense of awakening — the moment the user interacts, the space becomes alive.

### Integrating Sound

For the audio, I used A-Frame’s <a-sound> component.
The track only starts playing after the user clicks, which reinforces the contrast between the silent opening and the activated state.
The sound choice matches the mysterious, ritual-like feeling I wanted to convey.

### Creating an "Outstanding" Style Through Atmosphere

Instead of building a complex 3D environment, I focused on atmosphere and pacing.
Much like IBI, this project uses minimal elements but arranges them in a way that feels intentional:

Ambient light gently oscillates to create tension

Directional light shifts color over time

Camera motion adds depth without distracting the viewer

The logo itself becomes a living symbol through rhythmic animation

By combining these effects, the project creates the sense that the world was dormant and begins to “wake up” only after the user interacts.
This deliberate pacing and mood design is what elevates the final result beyond a simple A-Frame demo.


## Problems I Faced & How did I overcame them
This project ended up having way more debugging moments than I expected. A lot of them came from very small mistakes that were surprisingly hard to catch while working inside A-Frame. Here are the main issues I ran into:

### The logo kept getting stretched or squished horizontally
<img width="1051" height="605" alt="Screenshot 2025-12-09 at 1 15 27 AM" src="https://github.com/user-attachments/assets/73281db8-de74-41bf-97de-dfbfa13a034e" />

At first, I tried drawing the circle, triangle, and square directly in A-Frame using <a-circle>, <a-triangle>, and <a-plane>.
But every time I placed them inside my scene, A-Frame kept scaling them in weird ways depending on the camera angle. The triangle especially kept warping or stretching. The shapes never looked like the clean, simple Squid Game symbols they were supposed to be.

I tried adjusting width, height, scale, and even camera FOV, but every fix just broke something else.
Eventually, I realized that the easiest way was simply using one PNG image rather than manually building the shapes with geometry.

### The logo image kept showing up twice
<img width="939" height="544" alt="Screenshot 2025-12-09 at 4 41 34 AM" src="https://github.com/user-attachments/assets/10f53cc5-1cb8-4e5a-ae89-17007dd86d22" />

This issue took me a long time to figure out because the duplication wasn't obvious in the code.
Turns out:
I had accidentally pasted the <a-entity id="logo">...</a-entity> block two times—once inside the <a-scene> and once outside of it.
When A-Frame rendered the page, both appeared on top of each other, slightly different sizes, which made everything look distorted and glitchy.

Once I deleted the second copy, the duplication disappeared.

### The logo PNG kept appearing distorted or at the wrong aspect ratio
<img width="2048" height="1123" alt="Screenshot 2025-12-09 at 5 14 10 AM" src="https://github.com/user-attachments/assets/d37c506c-ce33-44e7-ba4c-57a5bcd27fe1" />

Even after switching to the PNG, the logo looked too wide, too short, or compressed.
This happened because <a-image> and <a-entity geometry="plane"> handle aspect ratio differently.

A-Frame doesn’t automatically preserve an image’s natural proportions, so if I set width and height manually, it almost always distorted the original image.
The fix was:
geometry="primitive: plane; width: 4.5; height: 1.7"

I manually matched the JPG’s real aspect ratio until it visually looked correct. It took trial-and-error because I couldn't extract the PNG's exact dimensions inside A-Frame.

### The blinking animation didn’t work at all

The first time I tried to make the logo flicker between black and white, literally nothing happened.
It just stayed black. No blinking. No animation.

The reasons were:

PNGs with transparency don’t support material.color changes the same way meshes do.

A-Frame tried to apply color to the transparent parts, not the black lines.

material.opacity conflicts with transparent: true.

Eventually I realized that the only reliable way to "blink" the logo was:

adjusting opacity with a looping animation

OR overlaying a colored plane behind the image (I chose opacity first)

Once I switched to:

animation__blink="property: material.opacity; from: 1; to: 0.2; dur: 800; dir: alternate; loop: true"
the flicker finally worked.


## Outro
Wrapping up this project, I realized how much I learned simply by breaking things and fixing them again. What started as a small idea—just placing the Squid Game symbols in a 3D space—quickly turned into a long process of debugging, adjusting, and rethinking how interactive scenes behave in A-Frame. Even small mistakes completely changed the visuals, and I had to slowly understand how the scene, lighting, and assets worked together.

In the end, seeing the logo appear with the music and the interaction finally work the way I imagined felt rewarding. The project may look simple, but the path to get there taught me more about 3D environments and web interaction than I expected. If I continue this later, I’d love to add movement or deeper interaction—but for now, I’m satisfied with how it came together.
