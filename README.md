# APE 5 · Diseño de interfaces web · Aula Abierta
Universidad Técnica de Ambato · Interacción Humano/Computador · 5A · G4 · Semana 13, del 4 al 10 de noviembre de 2026.

**Repositorio oficial del grupo:** [https://github.com/Boris2403/HCI_2026_G4](https://github.com/Boris2403/HCI_2026_G4)

**Problema.** El panel de una reserva («Mi reserva») queda fuera del primer ancho visible en el boceto fijo de escritorio (`960 px` sobre un viewport móvil de `360 px`). **Objetivo.** Implementar y defender una interfaz móvil y de escritorio para **Aula Abierta** que conserve los datos de decisión (horario y laboratorio), permita reservar sin duplicados y comunique el resultado de forma accesible.

**Inicio rápido.** Clonar el repositorio o extraer el paquete completo. Abrir [`prototipos/prototipo-A.html`](prototipos/prototipo-A.html) y [`src/index.html`](src/index.html) en dos pestañas. Abrir las herramientas de desarrollo (`F12`) y activar la barra de dispositivos (`Ctrl + Shift + M`). Fijar el zoom al 100 %, elegir `360 px` y comparar ambos. En la versión B (`src/index.html`) pulsar `Tab` y `Enter` para reservar y `Enter` para cancelar. Repetir a `320`, `768` y `1366 px`. La demo funciona sin instalación y simula la reserva en memoria durante la sesión.

**Procedimiento y herramientas.** Del boceto fijo (`prototipos/prototipo-A.html`) se pasó a HTML5 semántico (`src/index.html`), CSS Grid *mobile-first* con punto de corte en `48rem` / `768 px` (`src/estilos.css`) y JavaScript para la gestión de estado y foco (`src/reserva.js`). Se comprobó el recorrido por teclado y se midió `document.documentElement.scrollWidth` en Chromium. Los conceptos HCI aplicados fueron jerarquía visual, visibilidad del estado (`role="status"`), prevención de reservas duplicadas (`disabled`) y control por el usuario (cancelación reversible).

**Resultados y conclusiones.** El prototipo A desborda a `360 px` (`scrollWidth = 960 px`); la versión B cabe sin desborde (`scrollWidth == innerWidth`) a `320`, `360`, `768` y `1366 px` y admite reserva y cancelación 100 % con teclado. Véanse [pruebas](resultados/pruebas.md), [checklist](resultados/checklist.md), [conclusiones](docs/conclusiones.md) y la [ficha de aplicación al proyecto Aula Abierta](docs/proyecto.md).

## Distribución y orden de subida
| Persona | Responsabilidad docente | Rama | Issue | Archivos bajo su responsabilidad | Revisión cruzada |
|---|---|---|---:|---|---|
| Vladimir González | Coordinar, explicar el reto, conducir la defensa | `plan-clases` | #1 | `README.md`, `docs/clases.md`, `docs/proyecto.md`, `docs/plan-github.md`, `presentaciones/` | Revisa a Santiago Mora |
| Boris Vinces | Explicar semántica y guiar el boceto | `prototipo-html` | #2 | `prototipos/prototipo-A.html`, `docs/investigacion.md`, `src/index.html` | Revisa a Vladimir González |
| Sebastián Acaro | Implementar estilos e interacción y hacer la demo | `interfaz-responsive` | #3 | `src/estilos.css`, `src/reserva.js`, `docs/preguntas.md` | Revisa a Boris Vinces |
| Santiago Mora | Reproducir pruebas y registrar la defensa | `pruebas-informe` | #4 | `evidencias/`, `resultados/`, `docs/conclusiones.md`, `informe/Informe_APE5.docx` | Revisa a Sebastián Acaro |

## Flujo de trabajo en GitHub (`Boris2403/HCI_2026_G4`)
1. Boris Vinces (`Boris2403`) mantiene el repositorio `https://github.com/Boris2403/HCI_2026_G4`, invita a sus tres compañeros como colaboradores y se crean los cuatro issues (`#1` a `#4`) usando las fichas de [`docs/plan-github.md`](docs/plan-github.md).
2. Cada integrante clona el repositorio y crea su rama desde `main`: `plan-clases`, `prototipo-html`, `interfaz-responsive` y `pruebas-informe`.
3. Cada autor copia **únicamente sus archivos asignados** conservando las rutas del repositorio y realiza su commit desde su cuenta de GitHub.
4. Ejemplo desde el clon para Boris Vinces:
```sh
git switch -c prototipo-html
git add prototipos/prototipo-A.html docs/investigacion.md src/index.html
git commit -m "Documenta el prototipo e implementa la estructura semántica (Closes #2)"
git push -u origin prototipo-html
```
5. Cada integrante abre su Pull Request hacia `main` indicando qué cambió, cómo se probó y `Closes #N`. El revisor asignado comprueba el cambio y aprueba la fusión.
6. Tras integrar las cuatro ramas en `main`, se verifica el funcionamiento completo del flujo.

## Material para exponer
En [`presentaciones/`](presentaciones/) se encuentran las diapositivas de [`Fase_1.pptx`](presentaciones/Fase_1.pptx) (180 min) y [`Fase_2.pptx`](presentaciones/Fase_2.pptx) (120 min), acompañadas por el [guion de cinco horas](docs/clases.md), [preguntas y acta QA/UX](docs/preguntas.md), [base de conocimiento y decisiones HCI](docs/investigacion.md) y el [informe editable UTA](informe/Informe_APE5.docx).

## Rúbrica del docente
| Criterio | Puntos | Qué mostrar | Evidencia en el repositorio |
|---|---:|---|---|
| Dominio conceptual | 0,50 | Justificar semántica, estado y punto de corte. | [`docs/investigacion.md`](docs/investigacion.md) |
| Aplicación al proyecto | 0,75 | Abrir la pantalla propia y vincularla con su requisito. | [`docs/proyecto.md`](docs/proyecto.md) y [`src/index.html`](src/index.html) |
| Construcción / implementación APE | 0,75 | Comparar el boceto con el flujo HTML/CSS funcional. | [`prototipos/prototipo-A.html`](prototipos/prototipo-A.html) vs [`src/`](src/) |
| Evidencia técnica / GitHub | 0,40 | Mostrar capturas, checklist, issues y contribuciones individuales. | [`evidencias/`](evidencias/), [`resultados/`](resultados/) e Issues/PRs |
| Exposición y defensa | 0,60 | Demostración en vivo y respuestas a G3. | [`docs/clases.md`](docs/clases.md) y [`docs/preguntas.md`](docs/preguntas.md) |
| **Total** | **3,00** | | |

Véase el [Plan de GitHub completo](docs/plan-github.md) con el detalle de los cuatro issues y cuatro pull requests.
