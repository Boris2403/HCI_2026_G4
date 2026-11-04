# Taller de aplicación al proyecto del grupo · Aula Abierta

1. Abran el proyecto que van a defender (**Aula Abierta**) y elijan una pantalla con una acción concreta (`src/index.html`, selección y reserva de taller de laboratorio). Se conserva la captura inicial con tamaño y versión en `evidencias/A-360.png` (boceto fijo `prototipos/prototipo-A.html` a 360 × 800 px).
2. **Ficha completada del proyecto:**
   - **Proyecto:** Aula Abierta (Sistema de reserva de talleres prácticos de laboratorio).
   - **Pantalla / ruta:** `src/index.html` (comparada contra `prototipos/prototipo-A.html`).
   - **Actor:** Estudiante universitario de la FISEI.
   - **Tarea:** Consultar horario y laboratorio del taller «Interfaces web accesibles», reservar un cupo y, en caso necesario, cancelar la reserva usando teclado o puntero.
   - **Dato que decide la acción:** Horario (`Jueves · 14:00 a 16:00`) y ubicación (`Laboratorio 2`) presentados dentro de `<dl>` antes del botón de acción.
   - **Resultado visible:** El panel `#estado` (`role="status"`) cambia a *«Reserva confirmada para Interfaces web accesibles. Jueves, 14:00, laboratorio 2.»*, el botón `#reservar` pasa a `disabled` con el texto *«Lugar reservado»* y se muestra el botón `#cancelar`.
   - **Cómo se corrige o deshace:** Al activar `#cancelar` (*«Cancelar reserva»*), se restaura `#reservar` como disponible, se oculta `#cancelar`, `#estado` informa *«Reserva cancelada. Puedes volver a reservar.»* y el foco regresa automáticamente a `#reservar`.
3. **Jerarquía en el HTML (`src/index.html`):** (1) Título `<h1>Elige tu taller</h1>` y `<h3>Interfaces web accesibles</h3>`, (2) Dato decisivo `<dl>` con horario y lugar, (3) Acción `<button id="reservar">`, y (4) Respuesta `<section class="resumen">` con `<p role="status" id="estado">` y `<button id="cancelar">`.
4. **Distribución adaptable (`src/estilos.css`):** Se aplica primero una sola columna en `.panel` (`display: grid; gap: 1.4rem`) para viewports móviles (`320 px` y `360 px`), y se activa una segunda columna (`grid-template-columns: 3fr 2fr`) a partir de `@media (min-width: 48rem)` (`768 px` y `1366 px`), respaldado con las capturas `evidencias/B-360.png`, `evidencias/B-768.png` y `evidencias/B-1366.png`.
5. **Estado en front-end (`src/reserva.js`):** La pantalla indica explícitamente en `.nota`: *«Simulación de clase. La reserva dura hasta que cierres o recargues esta página.»*
6. **Trazabilidad y verificación:** El recorrido completo con teclado (`Tab` y `Enter`) y en móvil (`320 px` y `360 px`) está documentado en `resultados/pruebas.md`, `resultados/checklist.md` e `informe/Informe_APE5.docx`.

| Ejemplo de traducción | Referencia | Proyecto del equipo (Aula Abierta · G4) |
|---|---|---|
| Actor y tarea | Estudiante reserva un taller | Estudiante consulta horario/laboratorio y reserva o cancela su cupo en «Interfaces web accesibles» (`src/index.html`) |
| Regla | Una reserva activa por sesión de la página | Una sola reserva activa por sesión (`reservar.disabled = true` al confirmar; foco trasladado al control disponible) |
| Aceptación | Tras confirmar, la acción duplicada queda bloqueada y aparece Cancelar | Al pulsar `Enter` en `#reservar`, se bloquea la acción duplicada, se anuncia el estado en `role="status"` y el foco pasa a `#cancelar`; en `320`, `360`, `768` y `1366 px` `scrollWidth == innerWidth` |
| Evidencia | `src/reserva.js` y `evidencias/B-360-reserva.png` | [`src/index.html`](../src/index.html), [`src/estilos.css`](../src/estilos.css), [`src/reserva.js`](../src/reserva.js), [`resultados/pruebas.md`](../resultados/pruebas.md) y [`evidencias/B-360-reserva.png`](../evidencias/B-360-reserva.png) |
