# Preguntas para usar en clase
Mostrar primero la pregunta y revelar la pauta después de escuchar una justificación.
| Momento | Pregunta | Respuesta esperada / evidencia solicitada |
|---|---|---|
| Diagnóstico | En el boceto A a 360 px, ¿qué debes hacer para leer Mi reserva? | Desplazarse horizontalmente (`scrollWidth = 960 px` sobre `360 px`). Mostrar el borde derecho en `evidencias/A-360.png` y contrastar con el ancho registrado en `resultados/pruebas.md`. |
| Conceptos | ¿Por qué Reservar es un `button` y no un enlace? | Cambia el estado local de la interfaz sin navegar a otro documento. Un `<button>` nativo recibe foco con `Tab` y se activa con `Enter` o `Espacio`. |
| Diseño | ¿Qué información conservarías al reducir la pantalla? | Identidad del taller, horario, lugar, acción principal y estado de la reserva. La prioridad se deriva de la tarea del estudiante. |
| Código | ¿Qué regla se aplica a 767 px y cuál a 768 px si 1rem equivale a 16 px? | Una columna a `767 px` (regla base `.panel { display: grid; }`); dos columnas (`3fr 2fr`) a `768 px` (`@media (min-width: 48rem)`). Inspeccionar en DevTools. |
| Proyecto | ¿Qué representa aquí una reserva duplicada y cómo la evita el prototipo? | Una segunda activación mientras ya está reservada la plaza; se evita con `reservar.disabled = true` en `src/reserva.js`. En un sistema multiusuario haría falta validación en servidor. |
| Evaluación | ¿Una captura demuestra que un usuario completa la tarea más rápido? | No; solo demuestra la distribución visual y ausencia de desborde. Para comparar rapidez hacen falta tareas equivalentes, participantes y tiempos medidos (`resultados/checklist.md`). |
| Salida | Si el ancho cabe pero la persona no reconoce el resultado, ¿qué probarías? | Observar si localiza el panel `#estado` en móvil sin instrucciones y si comprende el mensaje textual; ensayar ubicación o contraste con otro participante. |

## Tarjeta del grupo retador (G3 → G4)
**Pregunta técnica 1.** ¿Qué cambia al cruzar el punto de corte (`48rem` / `768 px`) y qué permanece en el mismo orden para quien usa `Tab`?
- **Respuesta y evidencia de G4:** En [`src/estilos.css`](../src/estilos.css) cambia únicamente `grid-template-columns: 3fr 2fr` dentro de `@media (min-width: 48rem)`. El orden del DOM en [`src/index.html`](../src/index.html) (`#reservar` seguido de `#estado` y `#cancelar`) permanece intacto en todas las resoluciones.

**Pregunta técnica 2.** ¿Qué evita una reserva repetida y dónde queda el foco después de cancelar?
- **Respuesta y evidencia de G4:** En [`src/reserva.js`](../src/reserva.js), `actualizarReserva(true)` asigna `reservar.disabled = true`, descubre `#cancelar` (`hidden = false`) y ejecuta `cancelar.focus()`. Al cancelar (`actualizarReserva(false)`), reactiva `#reservar`, oculta `#cancelar` y ejecuta `reservar.focus()`.

**Objeción.** «Afirman que B mejora la experiencia, pero solo veo que la pantalla cabe».
- **Respuesta de G4:** Distinguimos evidencia técnica de evidencia con usuarios. Técnicamente demostramos en [`resultados/pruebas.md`](../resultados/pruebas.md) que el desborde horizontal pasa de `600 px` (`960 px` en viewport de `360 px`) a `0 px` en `320`, `360`, `768` y `1366 px`, y que la tarea es operable 100 % con teclado. La mejora en comprensión y tiempo de tarea se valida y acota mediante la tabla de observación con participantes en [`resultados/checklist.md`](../resultados/checklist.md).

## Acta de clase (Defensa G4 ante G3)
| Campo | Registro |
|---|---|
| **Grupo expositor** | Grupo 4 (Vladimir González, Boris Vinces, Sebastián Acaro, Santiago Mora) |
| **Grupo retador (QA/UX)** | Grupo 3 (G3) |
| **Pregunta técnica 1** | ¿Cómo garantizan que el cambio de 1 a 2 columnas a `768 px` no altere el recorrido por teclado (`Tab`)? |
| **Respuesta de G4 (P1)** | Se inspeccionó `src/estilos.css` (`@media (min-width: 48rem)`) mostrando que solo cambia `grid-template-columns: 3fr 2fr` sin usar `order` ni mover nodos del DOM en `src/index.html`. |
| **Pregunta técnica 2** | ¿Cómo se bloquea el doble envío y qué ocurre con el foco al confirmar y al cancelar? |
| **Respuesta de G4 (P2)** | Se demostró en vivo en `src/reserva.js` que `reservar.disabled = true` impide reenviar y `(activa ? cancelar : reservar).focus()` traslada el foco al único botón válido en cada estado. |
| **Objeción de G3** | «Que no haya scroll horizontal en 360 px no demuestra por sí solo que el usuario entienda que ya reservó». |
| **Respuesta de G4 (Objeción)** | Se delimitó el alcance: las capturas (`evidencias/`) prueban el ajuste geométrico (`R2`), mientras que la visibilidad del estado se refuerza con cambio de texto en botón + `role="status"` y se contrasta con la prueba de observación en aula (`resultados/checklist.md`). |
| **Archivos mostrados** | `prototipos/prototipo-A.html`, `src/index.html`, `src/estilos.css`, `src/reserva.js`, `resultados/pruebas.md` y `resultados/checklist.md` |
| **Acción pendiente y responsable** | Incorporar las filas adicionales de observación en vivo durante la sesión presencial · Responsable: Santiago Mora |
