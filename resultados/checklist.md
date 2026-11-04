# Checklist para el ensayo y la entrega
| ID | Criterio de aceptación | Estado | Evidencia del proyecto (Aula Abierta · G4) |
|---|---|:---:|---|
| R1 | Título, horario, lugar y acción se conservan del boceto al HTML. | Cumplido | Comparación verificada entre [`prototipos/prototipo-A.html`](../prototipos/prototipo-A.html) y [`src/index.html`](../src/index.html) (`<h3>`, `<dl>`, `<button id="reservar">`). |
| R2 | A 320, 360, 768 y 1366 px el ancho del documento B no supera el viewport. | Cumplido | Ver [`resultados/pruebas.md`](pruebas.md) (`scrollWidth == innerWidth` en los 4 anchos) y capturas PNG en [`evidencias/`](../evidencias/). |
| R3 | Tab y Enter permiten reservar; aparece confirmación y se bloquea repetir. | Cumplido | Ver [`src/reserva.js`](../src/reserva.js), [`resultados/pruebas.md`](pruebas.md) y [`evidencias/B-360-reserva.png`](../evidencias/B-360-reserva.png). |
| R4 | Cancelar restaura la acción y el estado lo comunica con texto. | Cumplido | Ver `actualizarReserva(false)` en [`src/reserva.js`](../src/reserva.js): restaura `#reservar`, oculta `#cancelar` y actualiza `#estado` (`role="status"`). |
| R5 | La pantalla real del proyecto usa sus propios datos, nombres y reglas. | Cumplido | Ficha documentada en [`docs/proyecto.md`](../docs/proyecto.md) vinculada con [`src/index.html`](../src/index.html), [`src/estilos.css`](../src/estilos.css) y [`src/reserva.js`](../src/reserva.js). |
| R6 | Dos preguntas y una objeción reciben respuesta apoyada en evidencia. | Cumplido | Acta QA/UX G3 → G4 documentada con evidencia de código y pruebas en [`docs/preguntas.md`](../docs/preguntas.md). |
| R7 | Cada integrante presenta una aportación revisada. | Cumplido | 4 Issues y 4 Pull Requests distribuidos por integrante en `https://github.com/Boris2403/HCI_2026_G4` según [`docs/plan-github.md`](../docs/plan-github.md). |
| R8 | Entrega accesible al docente en los canales acordados. | Cumplido | Repositorio público `https://github.com/Boris2403/HCI_2026_G4` e informe editable en [`informe/Informe_APE5.docx`](../informe/Informe_APE5.docx). |

## Registro de intento con personas
Consigna neutral: «Necesitas asistir al taller del jueves. Averigua dónde se dicta, reserva un lugar y después cancélalo». No indicar qué botón usar. Iniciar al leer la consigna; detener al reconocer la cancelación. Contar activaciones equivocadas y solicitudes de ayuda. Registrar la primera dificultad observada.

| ID anónimo | Pantalla/versión | Ancho | Éxito sí/no | Segundos | Errores / ayudas | Dificultad y evidencia |
|---|---|---:|---|---:|---|---|
| P-01 (piloto) | Prototipo A (`prototipo-A.html`) | 360 px | No (parcial) | 34 s | 1 error / 1 ayuda | No visualizó el panel «Mi reserva» por quedar desplazado a `960 px` y el botón «Reservar un lugar» estaba deshabilitado (`evidencias/A-360.png`). |
| P-01 (piloto) | Versión B (`src/index.html`) | 360 px | Sí | 18 s | 0 errores / 0 ayudas | Localizó «Laboratorio 2» en `<dl>`, confirmó con `Tab + Enter` y reconoció el mensaje en «Mi reserva» sin scroll horizontal (`evidencias/B-360-reserva.png`). |
| P-02 (piloto) | Versión B (`src/index.html`) | 768 px | Sí | 15 s | 0 errores / 0 ayudas | Completó reserva y cancelación en vista de dos columnas; el traslado automático del foco a «Cancelar reserva» evitó buscar el botón. |
| P-03 (aula) | Versión B (`src/index.html`) | 360 px | *(Registrar en clase)* | — | — | Espacio reservado para observación en vivo durante la Fase 2. |

El boceto A es estático. Comparar A/B solo en tareas disponibles en ambos, como localizar el horario. Medir el flujo completo únicamente en versiones funcionales. Si se comparan dos versiones funcionales, alternar su orden entre participantes.
