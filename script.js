const dialogues = [
  "Hola 🐺",
  "Te preguntaras, que es esto?",
  "Jejeje ya lo sabras 😉",
  "Pero...",
  "Por qué?",
  "Ups, olvidé algo...",
  "Cuando hablabas de Stray Kids, sonabas muy entusiasmada",
  "Y no sabia la razón",
  "Hasta que fui a Alameda",
  "Entendi, el gusto no era solo tuyo, sino de tu prima tambien (que le habras hecho 😿)",
  "Fue de mi sorpresa ver que te compraste el Wolfchan",
  "...",
  "Algo me contagiaste de StrayKids 😅",
  "Y queria entender el porque",
  "Por ello, escuche toda la trayectoria de StrayKids y la califique :p",
  "Hmmm, la verdad que subestime mucho al grupo",
  "Gracias, Jazmin",
  "Comencemos!!!"
];

let currentDialogue = 0;
const dialogueText = document.getElementById("dialogue-text");
const wolfchanContainer = document.getElementById("wolfchan-container");
const lightstick = document.getElementById("lightstick");

document.getElementById("scene").addEventListener("click", () => {
  if (currentDialogue < dialogues.length) {
    dialogueText.textContent = dialogues[currentDialogue];

    if (currentDialogue === 0) {
      wolfchanContainer.style.right = "40%";
    } else if (currentDialogue === 5) {
      wolfchanContainer.style.right = "20px";
    } else if (currentDialogue === 6) {
      lightstick.style.display = "block";
      wolfchanContainer.style.right = "40%";
    }

    currentDialogue++;

    if (currentDialogue === dialogues.length) {
      setTimeout(showModal, 600);
    }
  }
});

let clickCount = 0;

const modal = document.getElementById("modal");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const sadMessage = document.getElementById("sadMessage");
const backBtn = document.getElementById("backBtn");

function showModal() {
  modal.style.display = "flex";
  setTimeout(() => {
    modal.classList.remove("hidden");
  }, 10);
}

yesBtn.addEventListener("click", () => {
  clickCount++;

  const container = document.querySelector(".modal-content");
  const maxX = container.clientWidth - yesBtn.offsetWidth;
  const maxY = container.clientHeight - yesBtn.offsetHeight;
  const randX = Math.random() * maxX;
  const randY = Math.random() * maxY;

  yesBtn.style.position = "absolute";
  yesBtn.style.left = `${randX}px`;
  yesBtn.style.top = `${randY}px`;

  const scale = Math.max(0.3, 1 - clickCount * 0.03);
  yesBtn.style.transform = `scale(${scale})`;

  if (clickCount >= 20) {
    mostrarMenuSecreto();
  }
});

function mostrarMenuSecreto() {
  document.body.innerHTML = "";
  document.body.style.backgroundColor = "black";
  document.body.style.display = "flex";
  document.body.style.flexDirection = "column";
  document.body.style.alignItems = "center";
  document.body.style.justifyContent = "center";
  document.body.style.height = "100vh";
  document.body.style.color = "white";
  document.body.style.fontFamily = '"Comic Sans MS", cursive, sans-serif';

  const menuDiv = document.createElement("div");
  menuDiv.id = "menuOpciones";
  menuDiv.style.display = "flex";
  menuDiv.style.flexDirection = "column";
  menuDiv.style.alignItems = "center";

  const img = document.createElement("img");
  img.src = "TODO/Logo-StrayKids.png";
  img.style.C = "750px";
  img.style.marginBottom = "125px";
  menuDiv.appendChild(img);

  const btn1 = document.createElement("button");
  btn1.textContent = "Benja ranking";
  Object.assign(btn1.style, {
    margin: "40px",
    padding: "40px 80px",
    backgroundColor: "#b388ff",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "2em",
    borderRadius: "20px",
    fontFamily: "Impact",
  });
  btn1.addEventListener("click", () => mostrarRanking(1));

  const btn2 = document.createElement("button");
  btn2.textContent = "Quiz 😈";
  Object.assign(btn2.style, {
    margin: "40px",
    padding: "40px 80px",
    backgroundColor: "#00e5ff",
    color: "black",
    border: "none",
    cursor: "pointer",
    fontSize: "2em",
    borderRadius: "20px",
    fontFamily: "Impact",
  });
  btn2.addEventListener("click", mostrarQuiz);

  const opciones = document.createElement("div");
  opciones.style.display = "flex";
  opciones.style.gap = "20px";
  opciones.style.marginTop = "20px";

  opciones.appendChild(btn1);
  opciones.appendChild(btn2);
  menuDiv.appendChild(img);
  menuDiv.appendChild(opciones);
  document.body.appendChild(menuDiv);
}

function mostrarRanking(pagina = 1) {
  document.body.innerHTML = "";
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  document.body.style.display = "flex";
  document.body.style.flexDirection = "column";
  document.body.style.alignItems = "center";
  document.body.style.justifyContent = "start";
  document.body.style.minHeight = "100vh";
  document.body.style.padding = "20px";
  document.body.style.fontFamily = '"Comic Sans MS", cursive, sans-serif';

  const titulo = document.createElement("h1");
  titulo.textContent = "🎵 Ranking de Álbumes 🎵";
  titulo.style.fontSize = "3em";
  titulo.style.marginBottom = "20px";
  document.body.appendChild(titulo);

  const albums = [
    { nombre: "Mixtape", imagen: "TODO/Mixtape.jpg", puntaje: "5", comentario: "4419 / YAYAYA / GLOW" },
    { nombre: "I Am NOT", imagen: "TODO/I-Am-NOT.jpg", puntaje: "5", comentario: "3rd Eye / Mirror/ District 9" },
    { nombre: "I Am WHO", imagen: "TODO/I-Am-WHO.jpg", puntaje: "4", comentario: "Awkward Silence / My Pace" },
    { nombre: "I Am YOU", imagen: "TODO/I-Am-YOU.jpg", puntaje: "5", comentario: "0325 / My Side / I am You" },
    { nombre: "Clé 1: MIROH", imagen: "TODO/Clé-1-MIROH.jpg", puntaje: "1", comentario: "MIROH" },
    { nombre: "Clé 2: Yellow Wood", imagen: "TODO/Clé-2-Yellow-Wood.jpg", puntaje: "1", comentario: "Mix tape #2" },
    { nombre: "Clé: LEVANTER", imagen: "TODO/Clé-LEVANTER.jpg", puntaje: "5", comentario: "Booster / You Can STAY / Levanter" },
    { nombre: "GO LIVE", imagen: "TODO/Go-Live.jpg", puntaje: "6", comentario: "Mixtape:On Track / God's Menu / Another Day" },
    { nombre: "IN LIFE", imagen: "TODO/In-Life.jpg", puntaje: "10", comentario: "B me / Back Door / Ex" },
    { nombre: "ALL IN", imagen: "TODO/All-In.jpg", puntaje: "1", comentario: "FAM" },
    { nombre: "NOEASY", imagen: "TODO/NOEASY.jpg", puntaje: "3", comentario: "CHEESE / DOMINO" },
    { nombre: "SKZ2021", imagen: "TODO/SKZ2021.jpg", puntaje: "7", comentario: "Insomnia / 3rd Eye / Awaken" },
    { nombre: "ODDINARY", imagen: "TODO/ODDINARY.jpg", puntaje: "8", comentario: "Waiting For Us / MANIAC / Muddy Water" },
    { nombre: "MAXIDENT", imagen: "TODO/MAXIDENT.jpg", puntaje: "10", comentario: "Give Me Your TMI / CHILL / Can't Stop" },
    { nombre: "SKZ-REPLAY Disco 1", imagen: "TODO/SKZ-REPLAY.jpg", puntaje: "6", comentario: "Limbo (Lee Know) / Deep end (Felix) / Stars and Raindrops (Seungmin)" },
    { nombre: "SKZ-REPLAY Disco 2", imagen: "TODO/SKZ-REPLAY.jpg", puntaje: "8", comentario: "ice.cream (Hyunjin) / miss you (Hyunjin) / Close (HAN)" },
    { nombre: "THE SOUND", imagen: "TODO/The-Sound.jpg", puntaje: "7", comentario: "THE SOUND / Lost Me / There" },
    { nombre: "5-STAR", imagen: "TODO/5-STAR.jpg", puntaje: "8", comentario: "Collision / S-CLASS / Mixtape: Time Out" },
    { nombre: "ROCK-STAR", imagen: "TODO/Rock-Star.jpg", puntaje: "5", comentario: "Leave / LALALALA (Rock Ver.) / Social Path" },
    { nombre: "ATE", imagen: "TODO/ATE.jpg", puntaje: "10", comentario: "I like it / twilight / Chk Chk Boom" },
    { nombre: "GIANT", imagen: "TODO/GIANT.jpg", puntaje: "7", comentario: "愛をくれたのに、なぜ (English Ver.) / NIGHT (English Ver.) / Christmas Love" },
    { nombre: "HOP", imagen: "TODO/HOP.jpg", puntaje: "9", comentario: "As we are (Seungmin) / Walkin On Water / Youth (Lee Know)" },
  ];

  const albumsPorPagina = 6;
  const totalPaginas = Math.ceil(albums.length / albumsPorPagina);
  const inicio = (pagina - 1) * albumsPorPagina;
  const fin = inicio + albumsPorPagina;
  const albumsPagina = albums.slice(inicio, fin);

  const gridContainer = document.createElement("div");
  gridContainer.classList.add("fade-in");
  gridContainer.style.display = "grid";
  gridContainer.style.gridTemplateColumns = "repeat(3, 1fr)"; // Asegura que siempre haya 3 columnas
  gridContainer.style.gap = "25px";
  gridContainer.style.justifyItems = "center";
  gridContainer.style.marginBottom = "40px";
  gridContainer.style.width = "100%";
  gridContainer.style.maxWidth = "1000px";

  albumsPagina.forEach(album => {
    const albumDiv = document.createElement("div");
    albumDiv.style.textAlign = "center";
    albumDiv.style.width = "180px";
    albumDiv.style.backgroundColor = "#1c1c1c";
    albumDiv.style.padding = "10px";
    albumDiv.style.borderRadius = "10px";
    albumDiv.style.boxShadow = "0 0 8px rgba(255,255,255,0.2)";
    albumDiv.style.cursor = "pointer";
    albumDiv.style.transition = "transform 0.2s ease";
    albumDiv.addEventListener("mouseenter", () => albumDiv.style.transform = "scale(1.05)");
    albumDiv.addEventListener("mouseleave", () => albumDiv.style.transform = "scale(1)");

    const nombre = document.createElement("h3");
    nombre.textContent = album.nombre;
    nombre.style.fontSize = "1em";

    const img = document.createElement("img");
    img.src = album.imagen;
    img.alt = album.nombre;
    img.style.width = "100%";
    img.style.borderRadius = "10px";
    img.style.marginBottom = "5px";

    albumDiv.appendChild(img);
    albumDiv.appendChild(nombre);
    gridContainer.appendChild(albumDiv);

    albumDiv.addEventListener("click", () => {
      mostrarDetalleAlbum(album);
    });
  });

  document.body.appendChild(gridContainer);

  const controlDiv = document.createElement("div");
  controlDiv.style.display = "flex";
  controlDiv.style.gap = "20px";
  controlDiv.style.marginTop = "30px";

  if (pagina > 1) {
    const prevBtn = document.createElement("button");
    prevBtn.textContent = "⬅️ Anterior";
    prevBtn.className = "volver-boton";
    prevBtn.addEventListener("click", () => mostrarRanking(pagina - 1));
    controlDiv.appendChild(prevBtn);
  }

  if (pagina < totalPaginas) {
    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Siguiente ➡️";
    nextBtn.className = "volver-boton";
    nextBtn.addEventListener("click", () => mostrarRanking(pagina + 1));
    controlDiv.appendChild(nextBtn);
  }

  document.body.appendChild(controlDiv);

  const volverBtn = document.createElement("button");
  volverBtn.textContent = "Volver al menú";
  volverBtn.className = "volver-boton";
  volverBtn.style.position = "fixed";
  volverBtn.style.bottom = "20px";
  volverBtn.style.left = "20px";
  volverBtn.style.zIndex = "10000";
  document.body.appendChild(volverBtn);
  volverBtn.addEventListener("click", mostrarMenuSecreto);
}

function mostrarQuiz() {
  const preguntas = [
    {
      pregunta: "¿Qué integrante es?",
      tipo: "imagen",
      imagen: "TODO/BangChan.jpg",
      opciones: ["Felix", "Bang Chan", "Lee Know", "Hyunjin"],
      respuestaCorrecta: "Bang Chan"
    },
    {
      pregunta: "¿Qué integrante es?",
      tipo: "imagen",
      imagen: "TODO/FELIX.jpg",
      opciones: ["Hyunjin", "Felix", "I.N.", "Seungmin"],
      respuestaCorrecta: "Felix"
    },
    {
      pregunta: "¿Qué integrante es?",
      tipo: "imagen",
      imagen: "TODO/Han.jpg",
      opciones: ["Han", "Lee Know", "Bang Chan", "Changbin"],
      respuestaCorrecta: "Han"
    },
    {
      pregunta: "¿Qué integrante es?",
      tipo: "imagen",
      imagen: "TODO/Hyunjin.jpg",
      opciones: ["Seungmin", "Hyunjin", "I.N.", "Felix"],
      respuestaCorrecta: "Hyunjin"
    },
    {
      pregunta: "¿Qué integrante es?",
      tipo: "imagen",
      imagen: "TODO/I.N..jpg",
      opciones: ["I.N.", "Changbin", "Lee Know", "Hyunjin"],
      respuestaCorrecta: "I.N."
    },
    {
      pregunta: "¿Qué canción es?",
      tipo: "audio",
      audio: "TODO/Stray Kids Chk Chk Boom.mp3",
      opciones: ["Chk Chk Boom", "Hall of Fame", "Blind Spot", "Social Path"],
      respuestaCorrecta: "Chk Chk Boom"
    },
    {
      pregunta: "¿Qué canción es?",
      tipo: "audio",
      audio: "TODO/Stray Kids Walkin On Water MV.mp3",
      opciones: ["FAM", "ZONE", "Waiting For Us", "Walkin On Water"],
      respuestaCorrecta: "Walkin On Water"
    },
    {
      pregunta: "¿Qué canción es?",
      tipo: "audio",
      audio: "TODO/편 My Side.mp3",
      opciones: ["Charmer", "My Side", "Case 143", "Scars"],
      respuestaCorrecta: "My Side"
    },
    {
      pregunta: "¿Qué canción es?",
      tipo: "audio",
      audio: "TODO/해장국 Hero's Soup.mp3",
      opciones: ["Maze of Memories", "Hero's Soup",  "Drive", "Get Cool"],
      respuestaCorrecta: "Hero's Soup"
    },
    {
      pregunta: "¿Qué miembro produjo completamente solo la canción 'I Am You' (versión demo)?",
      opciones: ["Bang Chan", "Han", "Changbin", "Felix"],
      respuestaCorrecta: "Han"  
    },
    {
      pregunta: "En el video musical de 'MIROH', ¿cuál es el número que aparece en la placa del auto que usa Bang Chan?",
      opciones: ["0423", "2000", "1010", "0325"],
      respuestaCorrecta: "0325"
    },
    {
      pregunta: "¿Qué significa el número 325 para Stray Kids?",
      opciones: ["Fecha de debut", "Es un número de la suerte", "Es un código de su agencia", "Nada"],
      respuestaCorrecta: "Fecha de debut"
    },
    {
      pregunta: "¿En qué canción mencionan la frase '내 꿈은 좀 거칠어 (my dream is kind of rough)'?",
      opciones: ["TOP", "My Pace", "Victory Song", "Awaken"],
      respuestaCorrecta: "My Pace"
    },
    {
      pregunta: "¿Cuál fue el primer mixtape solo que lanzó Changbin?",
      opciones: ["Streetlight", "Mirror", "DOODLE", "Limbo"],
      respuestaCorrecta: "Streetlight"
    },
    {
      pregunta: "¿Qué canción de Stray Kids está inspirada en el cuento clásico de 'El flautista de Hamelín'?",
      opciones: ["Side Effects", "VENOM", "Hellevator", "Red Lights"],
      respuestaCorrecta: "Side Effects"
    },
    {
      pregunta: "Durante la era 'Clé 1: MIROH', ¿qué símbolo aparece repetidamente en sus teasers y cuál es su posible significado?",
      opciones: ["Serpiente", "Laberinto", "Corazón", "Dragón"],
      respuestaCorrecta: "Laberinto"
    },
    {
      pregunta: "¿Te gusta Stray Kids?",
      opciones: ["Sí", "No"],
      respuestaCorrecta: "Sí"
    }
  ];

  let preguntaActual = 0;
  let puntaje = 0;

  function crearBarraProgreso() {
    const contenedor = document.createElement("div");
    contenedor.style.width = "100%";
    contenedor.style.height = "20px";
    contenedor.style.backgroundColor = "#333";
    contenedor.style.marginBottom = "20px";
    contenedor.style.borderRadius = "10px";
    contenedor.style.overflow = "hidden";

    const barra = document.createElement("div");
    barra.id = "barra-progreso";
    barra.style.height = "100%";
    barra.style.width = "0%";
    barra.style.backgroundColor = "#00ff99";
    barra.style.transition = "width 0.4s ease";

    contenedor.appendChild(barra);
    return contenedor;
  }

  function actualizarProgreso() {
    const porcentaje = ((preguntaActual) / preguntas.length) * 100;
    const barra = document.getElementById("barra-progreso");
    if (barra) barra.style.width = `${porcentaje}%`;
  }

  function mostrarPregunta() {
    document.body.innerHTML = "";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.alignItems = "center";
    document.body.style.justifyContent = "flex-start";
    document.body.style.height = "100vh";
    document.body.style.fontFamily = '"Comic Sans MS", cursive, sans-serif';
    document.body.style.padding = "30px";
    document.body.style.textAlign = "center";

    document.body.appendChild(crearBarraProgreso());
    actualizarProgreso();

    const pregunta = preguntas[preguntaActual];

    const titulo = document.createElement("h1");
    titulo.textContent = `🧠 Pregunta ${preguntaActual + 1} de ${preguntas.length}`;
    titulo.style.fontSize = "2.5em";
    titulo.style.marginBottom = "20px";
    document.body.appendChild(titulo);

    const texto = document.createElement("p");
    texto.textContent = pregunta.pregunta;
    texto.style.fontSize = "1.5em";
    texto.style.marginBottom = "20px";
    document.body.appendChild(texto);

    if (pregunta.tipo === "imagen") {
      const img = document.createElement("img");
      img.src = pregunta.imagen;
      img.style.width = "250px";
      img.style.borderRadius = "10px";
      img.style.marginBottom = "20px";
      document.body.appendChild(img);
    }

    if (pregunta.tipo === "audio") {
      const audio = document.createElement("audio");
      audio.src = pregunta.audio;
      audio.controls = true;
      audio.style.marginBottom = "20px";
      document.body.appendChild(audio);
    }

    const opcionesGrid = document.createElement("div");
    opcionesGrid.style.display = "grid";
    opcionesGrid.style.gridTemplateColumns = "1fr 1fr";
    opcionesGrid.style.gap = "15px";
    opcionesGrid.style.marginBottom = "30px";
    opcionesGrid.style.width = "100%";
    opcionesGrid.style.maxWidth = "500px";

    pregunta.opciones.forEach(opcion => {
      const boton = document.createElement("button");
      boton.textContent = opcion;
      boton.style.padding = "12px";
      boton.style.fontSize = "1em";
      boton.style.cursor = "pointer";
      boton.style.borderRadius = "10px";
      boton.style.border = "none";
      boton.style.backgroundColor = "#444";
      boton.style.color = "white";
      boton.style.transition = "background-color 0.3s ease";
      boton.addEventListener("mouseenter", () => {
        boton.style.backgroundColor = "#666";
      });
      boton.addEventListener("mouseleave", () => {
        boton.style.backgroundColor = "#444";
      });
      boton.addEventListener("click", () => {
        if (opcion === pregunta.respuestaCorrecta) {
          puntaje++;
        }
        preguntaActual++;
        if (preguntaActual < preguntas.length) {
          mostrarPregunta();
        } else {
          mostrarResultado();
        }
      });
      opcionesGrid.appendChild(boton);
    });

    document.body.appendChild(opcionesGrid);

    const volverBtn = document.createElement("button");
    volverBtn.textContent = "Volver al menú";
    volverBtn.className = "volver-boton";
    volverBtn.style.marginTop = "40px";
    volverBtn.addEventListener("click", mostrarMenuSecreto);
    document.body.appendChild(volverBtn);
  }

  function mostrarResultado() {
    document.body.innerHTML = "";

    const resultado = document.createElement("h1");
    resultado.textContent = "Aqui no hay nada que ver btw bien completando el quiz 😼";
    resultado.style.fontSize = "3em";
    resultado.style.marginBottom = "20px";

    const texto = document.createElement("p");
    texto.textContent = `Puntaje: ${puntaje} de ${preguntas.length}`;
    texto.style.fontSize = "1.5em";

    const volverBtn = document.createElement("button");
    volverBtn.textContent = "Volver al menú";
    volverBtn.className = "volver-boton";
    volverBtn.style.marginTop = "30px";
    volverBtn.addEventListener("click", mostrarMenuSecreto);

    document.body.appendChild(resultado);
    document.body.appendChild(texto);
    document.body.appendChild(volverBtn);
  }

  mostrarPregunta();
}

function mostrarDetalleAlbum(album) {
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100vw";
  overlay.style.height = "100vh";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.zIndex = "9999";

  const popup = document.createElement("div");
  popup.style.backgroundColor = "#222";
  popup.style.padding = "30px";
  popup.style.borderRadius = "20px";
  popup.style.textAlign = "center";
  popup.style.color = "white";
  popup.style.maxWidth = "500px";
  popup.style.width = "90%";

  const img = document.createElement("img");
  img.src = album.imagen;
  img.style.width = "100%";
  img.style.borderRadius = "12px";
  img.style.marginBottom = "20px";

  const titulo = document.createElement("h2");
  titulo.textContent = album.nombre;

  const puntaje = document.createElement("p");
  puntaje.innerHTML = `⭐️ Puntaje: <strong>${album.puntaje || "..."}/10</strong>`;

  const comentario = document.createElement("p");
  comentario.textContent = album.comentario || "Comentario personal...";

  const cerrarBtn = document.createElement("button");
  cerrarBtn.textContent = "Cerrar";
  cerrarBtn.className = "volver-boton";
  cerrarBtn.style.marginTop = "20px";
  cerrarBtn.addEventListener("click", () => {
    overlay.remove();
  });

  popup.appendChild(img);
  popup.appendChild(titulo);
  popup.appendChild(puntaje);
  popup.appendChild(comentario);
  popup.appendChild(cerrarBtn);
  overlay.appendChild(popup);
  document.body.appendChild(overlay);
}

noBtn.addEventListener("click", () => {
  noBtn.style.transform = "scale(1.5)";
  yesBtn.classList.add("hidden");
  noBtn.classList.add("hidden");
  sadMessage.classList.remove("hidden");
});

backBtn.addEventListener("click", () => {
  sadMessage.classList.add("hidden");
  yesBtn.classList.remove("hidden");
  noBtn.classList.remove("hidden");
  noBtn.style.transform = "scale(1)";
});