# chordweaver.github.io

La página de presentación de [ChordWeaver](https://github.com/ChordWeaver/chordweaver),
publicada en <https://chordweaver.github.io>.

Es un sitio estático, sin build y sin dependencias: un `index.html`, una hoja de
estilos y un archivo de JavaScript. Se abre haciendo doble click en `index.html`
y se ve exactamente igual que publicada.

```
index.html            la página entera
assets/css/style.css  los estilos; la paleta es la del programa
assets/js/main.js     idioma, gráfico de voces, lupa y apariciones
assets/img/           capturas del programa, sacadas del programa real
```

## El idioma

La página abre en el idioma del navegador —español o inglés— y el botón `ES/EN`
lo cambia. Los dos textos viven en `STRINGS`, en `assets/js/main.js`; el HTML
trae el español escrito para que se lea aunque el JavaScript no cargue.
Al agregar un texto hay que ponerlo en **los dos** diccionarios: hay un chequeo
de claves faltantes en el historial de commits que se puede repetir.

## El gráfico de voces

No es un dibujo: son las alturas MIDI de una salida real del programa —ocho
acordes en barroco a cuatro voces— y el total de movimiento se calcula en el
navegador a partir de esas mismas notas. Si se cambian las notas, el número
cambia solo y no puede quedar mintiendo.

## El caché

GitHub Pages sirve todo con `Cache-Control: max-age=600`. Como los textos de la
página los escribe `main.js`, un navegador que se quedó con la copia vieja de
ese archivo **le pisa al HTML nuevo el texto corregido**: el servidor devuelve
la corrección y el visitante sigue leyendo la frase anterior. Pasó de verdad.

Por eso los enlaces a la hoja de estilos y al JavaScript llevan un `?v=` con el
hash de su propio contenido, y hay un script que lo sella:

```bash
python stamp.py
```

**Correrlo antes de cada commit que toque `assets/css/style.css` o
`assets/js/main.js`.** Es idempotente: si nada cambió, no toca nada. Mismo
contenido, misma URL y el caché sigue sirviendo; un byte distinto, URL distinta
y el navegador lo vuelve a pedir.

## Al sacar una versión nueva

Hay que tocar tres cosas: el número y el peso en `hero.meta.*` y `dl.btn` de los
dos diccionarios, el `SHA-256` en `index.html`, y los dos `href` que apuntan al
`.zip`. El enlace usa `/releases/latest/download/`, así que apunta siempre a la
última release, pero el nombre del archivo lleva la versión adentro.

## Licencia

MIT, igual que el programa.
