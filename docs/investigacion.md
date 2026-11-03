# Base de conocimiento y decisiones
La interacción humano-computador (HCI) estudia cómo las personas completan tareas mediante sistemas interactivos. Aquí la unidad de diseño es la reserva completa: identificar el taller, revisar su horario, reservar y reconocer el resultado.
| Concepto | Decisión en Aula Abierta | Cómo cuestionarla |
|---|---|---|
| Jerarquía y reconocimiento | La tarjeta conserva título, horario, lugar y acción en ese orden. | ¿Una persona encuentra el horario antes de confirmar? |
| Visibilidad del estado | El panel Mi reserva comunica confirmación y cancelación con texto; role="status" identifica el cambio dinámico. | ¿Se distingue el estado sin depender del color? Verificar el anuncio con lector de pantalla antes de afirmar compatibilidad. |
| Control y prevención | La reserva desactiva la acción duplicada y ofrece cancelar. | Intentar reservar dos veces y volver al estado disponible. |
| Semántica HTML5 | main delimita el contenido principal; section agrupa la oferta; article describe el taller; button ejecuta una acción. | Deshabilitar el CSS y comprobar si la lectura sigue siendo coherente. |
| Componente | La tarjeta agrupa los datos y la acción de un taller. El panel de estado tiene una responsabilidad distinta. | Cambiar un título por otro más largo y verificar la distribución. |
| Mobile first | Una columna por defecto y dos a partir de 48rem. CSS Grid altera la distribución conservando el orden del documento. | Probar a ambos lados del punto de corte y reducir hasta 320 px. |
| Acceso por teclado | Botones nativos, foco visible y traslado explícito al control disponible tras la acción. | Completar y deshacer la reserva sin ratón. |

## Fuentes y uso docente
- Guía UTA, APE 5. Diseño de Interfaces Web, ciclo julio–diciembre 2026, p. 1. Contrastar esta síntesis con el material privado del aula antes de exponer.
- MDN, [Diseño web adaptable](https://developer.mozilla.org/es/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) y [Fundamentos de las media queries](https://developer.mozilla.org/es/docs/Learn_web_development/Core/CSS_layout/Media_queries).
- MDN, [HTML como base para la accesibilidad](https://developer.mozilla.org/es/docs/Learn_web_development/Core/Accessibility/HTML).
- Eduardo Fierro Pro, [Media queries en responsive web design, desde 11:07](https://www.youtube.com/watch?v=LPPXvRImbZE&t=667s). Proyectar el segmento sobre comprobación del diseño. Pausar y pedir a dos estudiantes que encuentren el ancho exacto en que cambia la cuadrícula del ejemplo.
