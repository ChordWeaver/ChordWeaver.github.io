# -*- coding: utf-8 -*-
"""Sellar los enlaces a la hoja de estilos y al JavaScript con su contenido.

GitHub Pages sirve todo con `Cache-Control: max-age=600`, así que el
navegador de alguien que ya entró se queda con la copia vieja de
`main.js`. Eso no es sólo "tarda en actualizar": los textos de la página
los escribe ese archivo, de modo que **el JavaScript viejo le pisa al HTML
nuevo el texto corregido**. Se vio en vivo: el servidor devolvía la
corrección y el navegador seguía mostrando la frase anterior.

La solución es que la URL cambie cuando cambia el archivo. Este script le
pega a cada enlace un `?v=` con los primeros ocho caracteres del hash de
su contenido: mismo contenido, misma URL y el caché sigue sirviendo; un
byte distinto, URL distinta y el navegador lo vuelve a pedir.

    python stamp.py

Correrlo **antes de cada commit** que toque `assets/css/style.css` o
`assets/js/main.js`. Es idempotente: si nada cambió, no toca nada y lo
dice.
"""

from __future__ import annotations

import hashlib
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent
PAGES = ["index.html", "notas.html"]
ASSETS = ["assets/css/style.css", "assets/js/main.js"]


def digest(path: pathlib.Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()[:8]


def main() -> int:
    stamps = {}
    for asset in ASSETS:
        target = ROOT / asset
        if not target.exists():
            print("falta %s" % asset)
            return 1
        stamps[asset] = digest(target)

    touched = 0
    for name in PAGES:
        page = ROOT / name
        if not page.exists():
            continue
        text = original = page.read_text(encoding="utf-8")
        for asset, stamp in stamps.items():
            # El enlace, con o sin un `?v=` de una corrida anterior.
            pattern = re.compile(re.escape(asset) + r'(\?v=[0-9a-f]+)?"')
            text = pattern.sub('%s?v=%s"' % (asset, stamp), text)
        if text != original:
            page.write_text(text, encoding="utf-8")
            touched += 1
            print("sellado: %s" % name)

    for asset, stamp in stamps.items():
        print("  %-22s v=%s" % (asset, stamp))
    if not touched:
        print("nada que cambiar: los sellos ya estaban al día")
    return 0


if __name__ == "__main__":
    sys.exit(main())
