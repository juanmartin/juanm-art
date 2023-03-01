---
title: Museo AySA Virtual
date: "2020-09-10T07:45:00.000Z"
description: "Tour 360 del Museo de AySA."
categories: [code]
featuredImage: "./aysa.png"
draft: false
---

Recorrido virtual para el museo de AySA. Usamos [Pannelum](https://pannellum.org/). Lo hicimos junto con [Tomas Ciccola](https://gitlab.com/tomasciccola/).

<button onClick={ () => { window.open('https://www.aysa.com.ar/lobuenodelagua/recorrido', '_blank'); return false;}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5">
  AySA Web
</button>

<iframe width="100%" height="350px" src="https://aysatour.herokuapp.com/" frameborder="0"><a href="https://aysatour.herokuapp.com/">Recorrido AySA</a></iframe>

## EDIT 2023

Bueno, no funciona más lo de arriba. A partir del 28 de noviembre de 2022 Heroku se volvió completamente pago y esto estaba dentro de un free tier. Nadie se acordó y ahora revisando los posteos viejos me encontré con esto.

Por ahora no es necesario revivir esto, pero [acá está el repo](https://gitlab.com/tomasciccola/tourAysa). Cualquier cosa lo montamos en un Vercel/Netlify y listo.
