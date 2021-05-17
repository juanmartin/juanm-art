---
title: Alaveteli - Libertad de la Información
date: "2020-03-01T14:14:14.000Z"
description: "Montando un Alaveteli para la Argentina."
categories: [code]
featuredImage: "./derechoaldato.png"
draft: true
---

Me pidieron que implemente [Alaveteli](https://www.alaveteli.org) para tener un sitio donde poder centralizar los pedidos de información pública a la entidad correspondiente. Eso hace Alaveteli. Es un software hecho en Ruby en forma de webapp donde el usuario puede realizar una solicitud que se envía por email. Por ley deben ser respondidas en un plazo menor a 30 días aquí en Argentina.

Me pareció un **re** proyecto. Es una causa muy noble proveer a toda persona (sí, ya sé, con acceso a internet) a una plataforma única, fácil de usar, que no manipula data en el medio, si no que simplemente redirige tus dudas a donde corresponde. Entonces no hay chance de que te hagan rebotar en una marea de 0800s, robots y operadorxs que nunca atienden.

Estas solicitudes son públicas, es decir que si yo pregunto algo, vos también lo vas a poder ver, revisar el estado, la respuesta, **todo**.


## A lo técnico

La comunidad es copada y parecía fácil comenzar. Intentamos con AWS pero los desarrolladores dieron de baja la AMI para tener una especie de one-click installer de infraestructura de nube, o sea, te crea una instancia de EC2 con Ubuntu 18.04, te instala todo Alaveteli y sus dependencias, software para server, etc. Aún así mantuvimos AWS hasta que el dólar se empezó a disparar y nos pasamos a DonWeb. No migré nada dado que había logrado una instalación funcional pero aún no se había comenzado a cargar nada (por ejemplo las autoridades y sus emails, ni el diseño). En DonWeb lo instalé al toque con el *install script* que proveen. Usamos Ubuntu 18.04 en el servidor.




---

> Aún no puedo revelar el dominio para que entren, pronto lo largan y se podrá acceder y usar. 