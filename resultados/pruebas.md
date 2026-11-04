# Prueba técnica en Chromium

Capturas del viewport al 100 %. Se midió document.documentElement.scrollWidth.

| Caso | Viewport CSS | Ancho del documento | Desborde |
|---|---|---|---|
| A-360 | 360 × 800 | 960 px | Sí |
| B-320 | 320 × 720 | 320 px | No |
| B-360 | 360 × 800 | 360 px | No |
| B-768 | 768 × 1024 | 768 px | No |
| B-1366 | 1366 × 768 | 1366 px | No |

En las cuatro resoluciones B, Tab + Enter activó la reserva, deshabilitó el botón inicial y trasladó el foco a Cancelar. Enter canceló y habilitó otra reserva. Las capturas PNG están en evidencias/. El resultado describe el navegador probado. Los tiempos y errores de estudiantes deben medirse en clase.
