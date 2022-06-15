const contenedor    = document.getElementById("test");
const botonRes      = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");

const preguntas = [
  {
    pregunta: "1. ¿Cuál es la capital de Argentina?",
    respuestas: {
      a: "La Plata",
      b: "CABA",
      c: "Rosario",
      d: "Viedma",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "2. ¿Cuál es la capital de Brasil?",
    respuestas: {
      a: "Brasilia",
      b: "Rio de Janeiro",
      c: "Sao Pablo",
      d: "Fortaleza",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "3. ¿Cuál es la capital de Uruguay?",
    respuestas: {
      a: "Paysandú",
      b: "Rivera",
      c: "Rosario",
      d: "Montevideo",
    },
    respuestaCorrecta: "d",
  },
  {
    pregunta: "4. ¿Cuál es la capital de Paraguay?",
    respuestas: {
      a: "Chilavert",
      b: "Chipá",
      c: "Asunción",
      d: "Tereré",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "5. ¿Cuál es la capital de Bolivia?",
    respuestas: {
      a: "La Paz",
      b: "Sucre",
      c: "Cochabamba",
      d: "Potosí",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "6. ¿Cuál es la capital de Chile?",
    respuestas: {
      a: "Antofagasta",
      b: "Medel",
      c: "Valdivia",
      d: "Santiago de Chile",
    },
    respuestaCorrecta: "d",
  },
  {
    pregunta: "7. ¿Cuál es la capital de Ecuador?",
    respuestas: {
      a: "Guayaquil",
      b: "Ibarra",
      c: "Quito",
      d: "Loja",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "8. ¿Cuál es la capital de Venezuela?",
    respuestas: {
      a: "Caracas",
      b: "Maracaibo",
      c: "Maracay",
      d: "Barquisimento",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "9. ¿Cuál es la capital de Colombia?",
    respuestas: {
      a: "Fusagasugá",
      b: "Bogotá",
      c: "Medellín",
      d: "Cartagena",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "10. ¿Cuál es la capital de Perú?",
    respuestas: {
      a: "Cusco",
      b: "Arequipa",
      c: "Lima",
      d: "Gareca",
    },
    respuestaCorrecta: "c",
  },
];

function mostrarTest() {
  const preguntasYrespuestas = [];

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const respuestas = [];

    for(letraRespuesta in preguntaActual.respuestas) {
      respuestas.push(
        `<label>
                <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}" />
                ${letraRespuesta}: ${preguntaActual.respuestas[letraRespuesta]}
        </label>`
      );
    }
    preguntasYrespuestas.push(
      `<div class="cuestion"> ${preguntaActual.pregunta} </div>
       <div class="respuestas"> ${respuestas.join('')}   </div>
      `
    );
  });

  contenedor.innerHTML = preguntasYrespuestas.join('');
}

mostrarTest();

function mostrarResultado() {
  const respuestas = contenedor.querySelectorAll(".respuestas");
  let respuestasCorrectas = 0;

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const todasLasRespuestas = respuestas[numeroDePregunta];
    const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
    const respuestaElegida   = (todasLasRespuestas.querySelector(checkboxRespuestas) || {}).value;

    if(respuestaElegida == preguntaActual.respuestaCorrecta) {
      respuestasCorrectas++;

      respuestas[numeroDePregunta].style.color = 'green';
    } else {
      respuestas[numeroDePregunta].style.color = 'red'
    }
  });

  resultadoTest.innerHTML = 'Le pegaste a ' + respuestasCorrectas + ' de ' + preguntas.length;

}


botonRes.addEventListener('click', mostrarResultado);
