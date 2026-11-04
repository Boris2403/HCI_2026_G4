# Plan de GitHub · APE 5 G4 (Aula Abierta)

**Objetivo de entrega.** Un repositorio compartido (`https://github.com/Boris2403/HCI_2026_G4`), cuatro issues de trabajo (`#1` a `#4`) y cuatro pull requests con autor y revisor identificables.

## 1. Estado de entregables verificables (Aula Abierta · G4)

| Orden | Entregable | Estado | Archivo verificado en el repositorio |
|---:|---|---|---|
| 1 | Ficha del proyecto con actor, acción, regla y criterio de aceptación | Completado | [`docs/proyecto.md`](proyecto.md) |
| 2 | Prototipo inicial (Versión A), captura a 360 px y decisiones HCI | Completado | [`prototipos/prototipo-A.html`](../prototipos/prototipo-A.html), [`evidencias/A-360.png`](../evidencias/A-360.png), [`docs/investigacion.md`](investigacion.md) |
| 3 | Versión B ejecutable con HTML5 semántico, CSS *mobile-first* y estados JS | Completado | [`src/index.html`](../src/index.html), [`src/estilos.css`](../src/estilos.css), [`src/reserva.js`](../src/reserva.js) |
| 4 | Pruebas con teclado y mediciones a 320, 360, 768 y 1366 px | Completado | [`resultados/pruebas.md`](../resultados/pruebas.md) y [`evidencias/`](../evidencias/) |
| 5 | Material de exposición (180 y 120 min), preguntas, checklist e informe | Completado | [`docs/clases.md`](clases.md), [`docs/preguntas.md`](preguntas.md), [`resultados/checklist.md`](../resultados/checklist.md), [`presentaciones/`](../presentaciones/), [`informe/Informe_APE5.docx`](../informe/Informe_APE5.docx) |
| 6 | Distribución por integrante lista para subir a GitHub | Completado | 4 ramas e issues detalladas en las secciones 2 y 3 |

## 2. Preparación del repositorio (`https://github.com/Boris2403/HCI_2026_G4`)

1. **Repositorio activo:** `https://github.com/Boris2403/HCI_2026_G4` (creado por Boris Vinces, con rama principal `main`). Boris invita a Vladimir González, Sebastián Acaro y Santiago Mora en **Settings → Collaborators**.
2. En **Issues → New issue**, crear en orden las cuatro fichas del apartado 3 (`#1` Vladimir, `#2` Boris, `#3` Sebastián, `#4` Santiago) y asignar a cada responsable en **Assignees**.
3. Cada integrante clona el repositorio, crea su rama desde `main`, copia únicamente sus archivos asignados, hace commit y publica su rama:
   - **Vladimir González:** rama `plan-clases` (`README.md`, `docs/clases.md`, `docs/proyecto.md`, `docs/plan-github.md`, `presentaciones/`)
   - **Boris Vinces:** rama `prototipo-html` (`prototipos/prototipo-A.html`, `docs/investigacion.md`, `src/index.html`)
   - **Sebastián Acaro:** rama `interfaz-responsive` (`src/estilos.css`, `src/reserva.js`, `docs/preguntas.md`)
   - **Santiago Mora:** rama `pruebas-informe` (`evidencias/`, `resultados/`, `docs/conclusiones.md`, `informe/Informe_APE5.docx`)

## 3. Fichas listas para copiar en GitHub (Issues y Pull Requests)

---

### Issue #1 y PR · Vladimir González

**Responsable:** Vladimir González · **Revisor del PR:** Boris Vinces · **Rama:** `plan-clases`

**Título del Issue #1:** `Planificar las dos fases y vincularlas con el proyecto Aula Abierta`

**Descripción del Issue #1:**
```markdown
## Objetivo
Planificar las dos fases (180 min y 120 min) y vincularlas con el proyecto **Aula Abierta**, en la pantalla `src/index.html` (reserva de talleres prácticos de laboratorio).

## Archivos previstos
`README.md`, `docs/clases.md`, `docs/proyecto.md`, `docs/plan-github.md` y `presentaciones/` (`Fase_1.pptx`, `Fase_2.pptx`)

## Tareas
- [x] Registrar nombre del proyecto (Aula Abierta), actor (Estudiante), tarea (Reservar y cancelar cupo en taller), ruta real (`src/index.html`) y resultado esperado.
- [x] Asignar responsable, duración y producto a cada actividad de las sesiones de 180 y 120 minutos en `docs/clases.md`.
- [x] Alinear ambas presentaciones (`presentaciones/Fase_1.pptx` y `presentaciones/Fase_2.pptx`) con la pantalla escogida y la rúbrica.

## Criterios de aceptación
- [x] El cronograma suma 180 y 120 minutos y las actividades producen evidencias identificables.
- [x] El revisor puede abrir ambos PPTX y localizar el requisito del proyecto en `docs/proyecto.md`.

## Evidencia de cierre
Archivos `README.md`, `docs/clases.md`, `docs/proyecto.md`, `docs/plan-github.md`, `presentaciones/Fase_1.pptx` y `presentaciones/Fase_2.pptx`.
```

**Título del Pull Request (Vladimir):** `Documenta las dos fases y el requisito de la pantalla Aula Abierta`

**Descripción del Pull Request (Vladimir):**
```markdown
Closes #1

## Cambio realizado
Se documentó la planificación docente de las dos sesiones (Fase 1 de 180 min y Fase 2 de 120 min), la ficha de aplicación del proyecto **Aula Abierta** sobre `src/index.html`, el README general con la distribución del equipo y las dos presentaciones PPTX.
Archivos principales: `README.md`, `docs/clases.md`, `docs/proyecto.md`, `docs/plan-github.md` y `presentaciones/`.

## Cómo reproducir la revisión
Abrir ambos PPTX en `presentaciones/` y verificar los tramos de cada fase en `docs/clases.md`. Revisar la ficha en `docs/proyecto.md` y comprobar la correspondencia entre actor, tarea, regla de negocio y criterio de aceptación.

## Resultado observado
Fase 1: 180 min (8 bloques); Fase 2: 120 min (8 bloques). Pantalla: `src/index.html`. Requisito: una reserva activa por sesión con confirmación en texto (`role="status"`) y cancelación accesible por teclado.

## Evidencia
- Ficha del proyecto: `docs/proyecto.md`
- Guion de clases: `docs/clases.md`
- Presentaciones: `presentaciones/Fase_1.pptx` y `presentaciones/Fase_2.pptx`

## Revisión solicitada
@Boris2403 (Boris Vinces): comprobar los criterios del Issue #1 y aprobar el merge.
```

---

### Issue #2 y PR · Boris Vinces

**Responsable:** Boris Vinces (`@Boris2403`) · **Revisor del PR:** Sebastián Acaro · **Rama:** `prototipo-html`

**Título del Issue #2:** `Documentar el prototipo inicial y construir el HTML semántico`

**Descripción del Issue #2:**
```markdown
## Objetivo
Documentar el prototipo inicial de ancho fijo y construir el HTML5 semántico para **Aula Abierta**, en `prototipos/prototipo-A.html` y `src/index.html`.

## Archivos previstos
`prototipos/prototipo-A.html`, `docs/investigacion.md` y `src/index.html`

## Tareas
- [x] Conservar el boceto inicial (`prototipos/prototipo-A.html`, 960 px fijos) y describir la dificultad de desborde observada a 360 px.
- [x] Identificar dato decisivo (horario y laboratorio en `<dl>`), acción (`#reservar`) y región de estado (`#estado` con `role="status"`).
- [x] Implementar títulos jerárquicos, regiones semánticas (`header`, `main`, `section`, `article`, `dl`) y controles nativos (`button`), justificando las decisiones HCI en `docs/investigacion.md`.

## Criterios de aceptación
- [x] El boceto A (`prototipos/prototipo-A.html`) permite reproducir el desborde horizontal a 360 px.
- [x] Al abrir `src/index.html` sin CSS se comprende la secuencia de lectura y el control principal recibe foco por teclado (`Tab`).

## Evidencia de cierre
Archivos `prototipos/prototipo-A.html`, `docs/investigacion.md` y `src/index.html`.
```

**Título del Pull Request (Boris):** `Implementa la estructura semántica de la pantalla Aula Abierta`

**Descripción del Pull Request (Boris):**
```markdown
Closes #2

## Cambio realizado
Se incorporó el boceto estático de escritorio (`prototipos/prototipo-A.html` de 960 px), la base de conocimiento con la justificación de las decisiones HCI (`docs/investigacion.md`) y la estructura HTML5 semántica en `src/index.html` usando `<header>`, `<main>`, `<section>`, `<article>`, `<dl>` y `<button>` nativos junto con `role="status"` para anunciar el estado de la reserva.
Archivos principales: `prototipos/prototipo-A.html`, `docs/investigacion.md` y `src/index.html`.

## Cómo reproducir la revisión
1. Abrir `prototipos/prototipo-A.html` en un viewport de 360 px y observar el desborde horizontal (`960 px`) que oculta el panel «Mi reserva».
2. Abrir `src/index.html`, verificar el orden de lectura de encabezados (`h1`, `h2`, `h3`), la lista de definiciones (`<dl>` con Horario y Lugar) y pulsar `Tab` hasta enfocar `#reservar`.

## Resultado observado
Orden observado: Encabezado → Título principal (`h1`) → Oferta de taller (`h2`/`h3`) → Datos decisivos (`Horario` y `Lugar`) → Botón `Reservar un lugar` → Sección `Mi reserva` (`role="status"`). Control enfocado con `Tab`: `<button id="reservar">`. Dificultad inicial en A: desborde de 600 px a 360 px de ancho.

## Evidencia
- Boceto inicial: `prototipos/prototipo-A.html`
- Estructura semántica: `src/index.html`
- Fundamentación HCI: `docs/investigacion.md`

## Revisión solicitada
Sebastián Acaro: comprobar los criterios del Issue #2 y registrar la revisión.
```

---

### Issue #3 y PR · Sebastián Acaro

**Responsable:** Sebastián Acaro · **Revisor del PR:** Santiago Mora · **Rama:** `interfaz-responsive`

**Título del Issue #3:** `Implementar la distribución adaptable y los estados de la acción`

**Descripción del Issue #3:**
```markdown
## Objetivo
Implementar la distribución adaptable (*mobile-first*) y los estados interactivos de reserva y cancelación para **Aula Abierta** en `src/estilos.css` y `src/reserva.js`.

## Archivos previstos
`src/estilos.css`, `src/reserva.js` y `docs/preguntas.md`

## Tareas
- [x] Integrar la hoja de estilos `src/estilos.css` sobre el HTML semántico de `src/index.html`.
- [x] Implementar una columna base en `.panel`, punto de corte en `@media (min-width: 48rem)` (`768 px`) para dos columnas (`3fr 2fr`) y estados de confirmación/cancelación con traslado de foco en `src/reserva.js`.
- [x] Documentar el banco de preguntas de clase y el acta de defensa ante G3 en `docs/preguntas.md`.

## Criterios de aceptación
- [x] La acción principal (`#reservar`) se completa con teclado (`Tab` + `Enter`), bloquea duplicados (`disabled`) y muestra el estado en `#estado`.
- [x] El estado se conserva al redimensionar entre 320, 360, 768 y 1366 px, y `#cancelar` revierte la acción devolviendo el foco a `#reservar`.

## Evidencia de cierre
Archivos `src/estilos.css`, `src/reserva.js` y `docs/preguntas.md`.
```

**Título del Pull Request (Sebastián):** `Adapta la interfaz a móvil y conecta la acción principal`

**Descripción del Pull Request (Sebastián):**
```markdown
Closes #3

## Cambio realizado
Se implementó el diseño *mobile-first* en `src/estilos.css` (una columna por defecto en `.panel`, dos columnas `3fr 2fr` desde `48rem` / `768 px`, botones con `min-height: 44px` y `:focus-visible` de alto contraste) y la lógica de estados en `src/reserva.js` (confirmación, prevención de doble reserva con `disabled`, cancelación reversible y gestión explícita de `.focus()`). Además, se documentaron las preguntas y el acta QA/UX en `docs/preguntas.md`.
Archivos principales: `src/estilos.css`, `src/reserva.js` y `docs/preguntas.md`.

## Cómo reproducir la revisión
Abrir `src/index.html` a 360 px, completar la reserva con `Tab` + `Enter`, verificar que `#reservar` queda deshabilitado y el foco pasa a `#cancelar`. Redimensionar a 767 px (1 columna) y 768 / 1366 px (2 columnas), y pulsar `Enter` en `#cancelar` para restaurar el estado inicial.

## Resultado observado
Punto de corte: `48rem` (`768 px`). Estado confirmado: «Reserva confirmada para Interfaces web accesibles. Jueves, 14:00, laboratorio 2.». Foco automático: pasa a `#cancelar` al confirmar y regresa a `#reservar` al cancelar. Incidencias: 0 desbordes horizontales.

## Evidencia
- Hoja de estilos adaptable: `src/estilos.css`
- Controlador de estado y foco: `src/reserva.js`
- Preguntas y acta de defensa G3/G4: `docs/preguntas.md`

## Revisión solicitada
Santiago Mora: comprobar los criterios del Issue #3 y aprobar el merge.
```

---

### Issue #4 y PR · Santiago Mora

**Responsable:** Santiago Mora · **Revisor del PR:** Vladimir González · **Rama:** `pruebas-informe`

**Título del Issue #4:** `Validar la versión integrada y documentar la defensa`

**Descripción del Issue #4:**
```markdown
## Objetivo
Validar la versión integrada de **Aula Abierta** en cuatro resoluciones y documentar las evidencias, conclusiones e informe final.

## Archivos previstos
`evidencias/`, `resultados/pruebas.md`, `resultados/checklist.md`, `docs/conclusiones.md` e `informe/Informe_APE5.docx`

## Tareas
- [x] Probar la versión integrada a 320, 360, 768 y 1366 px midiendo `document.documentElement.scrollWidth` y comprobando la interacción por teclado.
- [x] Registrar las capturas en `evidencias/` (`A-360.png`, `B-320.png`, `B-360.png`, `B-360-reserva.png`, `B-768.png`, `B-1366.png`) y las tablas en `resultados/pruebas.md` y `resultados/checklist.md`.
- [x] Actualizar `docs/conclusiones.md` e `informe/Informe_APE5.docx` distinguiendo pruebas técnicas de observaciones con participantes.

## Criterios de aceptación
- [x] Cada medición en `resultados/pruebas.md` y `resultados/checklist.md` identifica versión, viewport, ancho de documento, desborde y captura PNG.
- [x] `docs/conclusiones.md` e `informe/Informe_APE5.docx` incluyen el análisis completo del proyecto Aula Abierta y el acta de defensa.

## Evidencia de cierre
Archivos en `evidencias/`, `resultados/pruebas.md`, `resultados/checklist.md`, `docs/conclusiones.md` e `informe/Informe_APE5.docx`.
```

**Título del Pull Request (Santiago):** `Registra pruebas responsive y resultados de la defensa`

**Descripción del Pull Request (Santiago):**
```markdown
Closes #4

## Cambio realizado
Se ejecutaron las pruebas técnicas en Chromium a 320, 360, 768 y 1366 px comparando el prototipo A (`scrollWidth = 960 px` a 360 px, con desborde) frente a la versión B (`scrollWidth == innerWidth` en los 4 anchos, sin desborde). Se incorporaron las 6 capturas en `evidencias/`, el registro de mediciones en `resultados/pruebas.md`, la matriz R1–R8 y pruebas piloto en `resultados/checklist.md`, las conclusiones en `docs/conclusiones.md` y el informe final en `informe/Informe_APE5.docx`.
Archivos principales: `evidencias/`, `resultados/`, `docs/conclusiones.md` e `informe/Informe_APE5.docx`.

## Cómo reproducir la revisión
Abrir `src/index.html` en DevTools a 320 × 720, 360 × 800, 768 × 1024 y 1366 × 768 px al 100 % de zoom, verificar `document.documentElement.scrollWidth` en consola y contrastar con `resultados/pruebas.md`, las capturas de `evidencias/` y el documento `informe/Informe_APE5.docx`.

## Resultado observado
Desborde en A (360 px): Sí (`960 px`). Desborde en B (320, 360, 768 y 1366 px): No (`320`, `360`, `768` y `1366 px` respectivamente). Interacción por teclado (`Tab` + `Enter`) verificada en las 4 resoluciones.

## Evidencia
- Capturas: `evidencias/A-360.png`, `evidencias/B-320.png`, `evidencias/B-360.png`, `evidencias/B-360-reserva.png`, `evidencias/B-768.png`, `evidencias/B-1366.png`
- Mediciones y checklist: `resultados/pruebas.md` y `resultados/checklist.md`
- Conclusiones e informe: `docs/conclusiones.md` e `informe/Informe_APE5.docx`

## Revisión solicitada
Vladimir González: comprobar los criterios del Issue #4 y aprobar el merge.
```

---

## 4. Plantilla de comentario para los revisores de cada PR

Cuando a cada integrante le toque revisar el PR de su compañero en GitHub (**Files changed → Review changes → Approve**), puede pegar este formato adaptado:

- **Boris revisando el PR #1 de Vladimir:**
  > «Revisé `README.md`, `docs/clases.md`, `docs/proyecto.md` y las presentaciones `Fase_1.pptx` y `Fase_2.pptx`. El cronograma cubre los 180 y 120 minutos y la ficha del proyecto Aula Abierta vincula correctamente actor, tarea, regla y evidencias. Apruebo.»
- **Sebastián revisando el PR #2 de Boris:**
  > «Probé `prototipos/prototipo-A.html` a 360 px (comprobando el desborde de 960 px) y `src/index.html` sin estilos. La jerarquía semántica (`main`, `section`, `article`, `dl`, `button`) se lee en orden y `#reservar` recibe foco con `Tab`. Apruebo.»
- **Santiago revisando el PR #3 de Sebastián:**
  > «Probé `src/estilos.css` y `src/reserva.js` en 360, 767, 768 y 1366 px. El cambio de 1 a 2 columnas ocurre en `48rem` (`768 px`), `Tab + Enter` confirma y bloquea duplicados, y cancelar devuelve el foco a `#reservar`. Apruebo.»
- **Vladimir revisando el PR #4 de Santiago:**
  > «Contrasté las 6 capturas de `evidencias/`, las mediciones de `resultados/pruebas.md`, el checklist R1–R8 (`resultados/checklist.md`), `docs/conclusiones.md` y el informe `informe/Informe_APE5.docx`. Todos los criterios están completos y verificados. Apruebo.»

| Integrante | Rol | Rama | Issue | Pull Request | Revisor |
|---|---|---|---:|---:|---|
| Vladimir González | Coordinación y planificación | `plan-clases` | #1 | PR #1 | Boris Vinces |
| Boris Vinces | Prototipo A y HTML5 semántico | `prototipo-html` | #2 | PR #2 | Sebastián Acaro |
| Sebastián Acaro | CSS responsive y estados JS | `interfaz-responsive` | #3 | PR #3 | Santiago Mora |
| Santiago Mora | Pruebas QA, capturas e informe | `pruebas-informe` | #4 | PR #4 | Vladimir González |
