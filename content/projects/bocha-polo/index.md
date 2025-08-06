---
title: Mundos Imaginarios en Bocha Polo
date: "2024-07-05T14:14:14.000Z"
description: "Desarrollo de experiencia inmersiva para chicxs."
categories: [academia]
featuredImage: "./bocha.jpg"
draft: false
---

![thumbnail sombras][thumbnail sombras]

Trabajé en el desarrollo y montaje de una experiencia inmersiva para chicxs, un laberinto que propone un recorrido por 7 experiencias audiovisuales interactivas.

Fui convocado por [Hola Plan](https://www.instagram.com/holaplan/?hl=en) para ser parte del equipo técnico <3, junto a gran elenco de gente que quiero y admiro mucho. Realicé tareas de todo tipo: diseño sonoro, programación, montaje, redes, configuración de equipos, etc. Una tarea especial fue el desarrollo de un control remoto webapp para manejar toda la instalación desde cualquier dispositivo conectado a la red local, lo que facilitó mucho el trabajo de los operadores.

<iframe width="315" height="560" src="https://www.youtube.com/embed/J4eia8-nzmI?si=op-_7-OhLq9qdTWQ" class="relative" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<Instagram instagramId="DK0jo-1AOF7" />

Si bien todxs hicimos de todo, hubo ciertas áreas donde metí más laburo. El pasillo de luces y sonido que se atraviesa luego de pasar por el xilofón/metalofón gigante fue uno de ellos. Cuenta con unos sensores de ultrasonido que detectan presencia y se usan como triggers para disparar unos sonidos y efecto de luces.

<YouTube youTubeId="e_pkH-Yxkng" />

<div className="w-full h-auto mb-6 object-cover rounded">
</div>

La iluminación de todas las salas la controlamos con unas interfaces USB - DMX, que no recomiendo porque lo ideal es que sean Ethernet, pero encontré un [software mágico para Windows en GitHub](https://github.com/nt2ds/ArtNetDMX?tab=readme-ov-file) que nos resolvió todo. Al principio me había puesto a programar una interfaz de control con Max/MSP pero finalmente fue más rápido usar Resolume Arena. Así que diseñé una serie de efectos, colores, transiciones para todas las salas con un (a veces uno para dos salas) Resolume por PC de sala. Lo divertido que fue usar material de video o sources de imagen del Arena para mover luces... fue bárbaro.

También colaboré junto a un músico que hizo el diseño y banda sonora de la experiencia, guiándolo en cómo conectar su material con las activaciones de sensores, juegos y demás triggers. Si bien él hizo la mayoría del material, hubo muchas decisiones estéticas que tomamos en conjunto; fue divertido hasta que se estiró demasiado y la seguí yo solo xD como por ejemplo los instrumentos (Ableton Live) del xilofón, y el procesamiento de voces de la sala con micrófonos en forma de flor 🌸 so cute.

Check it: <a href="https://imaginabocha.com.ar/" target="_blank" rel="noopener noreferrer">Imagina Bocha</a>.

[thumbnail sombras]: ./bocha.jpg "Sombras multicolor"
