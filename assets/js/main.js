/* ChordWeaver — sitio de presentación.
   Cuatro cosas: el idioma, el gráfico de conducción de voces, la lupa de las
   capturas y las apariciones al scrollear. Sin dependencias, igual que el
   programa que presenta. */

(function () {
  'use strict';

  /* ═══════════════════════════  IDIOMA  ═══════════════════════════ */

  var STRINGS = {
    es: {
      'doc.title': 'ChordWeaver — conducción de voces por algoritmo genético',
      'notes.title': 'ChordWeaver — Notas del parche',
      'notes.kicker': 'Notas del parche',
      'notes.h1': 'Todo lo que <em>cambió</em>',
      'notes.lede': 'De la versión más reciente a la más antigua, con lo que se agregó, se mejoró y se corrigió en cada una.',
      'notes.download': 'Descargar 1.3.2',
      'notes.back': '← Volver al inicio',
      'notes.releases': 'Releases',
      'notes.all': 'Todas las versiones en GitHub →',
      'notes.g1': 'Nuevas funciones',
      'notes.g2': 'Cambios importantes',
      'notes.g3': 'Cambios relevantes',
      'notes.g4': 'Cambios menores',
      'notes.g5': 'Mejoras importantes',
      'notes.g6': 'Mejoras menores',
      'skip': 'Saltar al contenido',

      'nav.modes': 'Los tres modos',
      'nav.how': 'Cómo funciona',
      'nav.power': 'Qué más hace',
      'nav.download': 'Descargar',
      'nav.notes': 'Novedades',
      'nav.tools': 'Las herramientas',
      'six.kicker': 'Armonía',
      'six.title': 'Hasta seis voces',
      'six.body': 'Si seis voces cantan un acorde de tres notas, tres de ellas repiten una nota que ya canta otra. Qué nota se dobla cambia cómo suena el acorde, y el programa lo decide acorde por acorde. Los tres modos tienen una opción para que las voces que sobran agreguen una sexta o una novena en lugar de doblar.',
      'six.body2': 'En el G7 del gráfico, la sensible (Si) aparece una sola vez. El barroco castiga duplicarla, y el modo coral la castiga más todavía.',
      'demo6.title': 'Nueve acordes a seis voces',
      'demo6.sub': 'Soprano, mezzo, alto, tenor, barítono y bajo. Señalá o tocá un nombre de la leyenda para resaltar esa voz.',
      'demo6.note': 'de movimiento en total. Ninguna voz cruza a otra, no hay unísonos y el salto más grande es una quinta.',
      'alt.chart6': 'Gráfico de las seis voces moviéndose entre nueve acordes',
      'alt.misterio': 'Un valle de noche, con la luna y una figura a lo lejos',
      'dl.notes': 'Qué cambió en esta versión →',
      'dl.update': 'Cómo actualizar desde una versión anterior sin perder el progreso →',
      'foot.notes': 'Notas del parche',
      'foot.update': 'Cómo actualizar',

      'hero.eyebrow': 'Código abierto · Licencia MIT · Windows',
      'hero.hook': 'Tus acordes, tu melodía o una hoja en blanco.',
      'hero.lede': 'ChordWeaver escribe cualquiera de las tres a varias voces. Un algoritmo genético decide qué nota canta cada voz y en qué octava, con el menor movimiento que permitan las reglas del género que elijas.',
      'hero.sub': 'Una vez elegidos los acordes, el algoritmo no los cambia ni los reordena. Sólo decide cómo se reparten entre las voces.',
      'hero.download': 'Descargar 1.3.2',
      'hero.source': 'Ver el código',
      'hero.meta.version': 'Versión 1.3.2',
      'hero.meta.size': '29 MB',
      'hero.meta.install': 'Sin instalador',
      'hero.meta.python': 'Sin Python',

      'how.kicker': 'Cómo funciona',
      'how.title': 'Qué decide el programa',
      'how.body': 'Un acorde de <em>Do mayor</em> tiene tres notas. A cuatro voces una de ellas se dobla, y cada voz puede cantar su nota en más de una octava. En una progresión entera las combinaciones son demasiadas para probarlas de a una. ChordWeaver las explora con un algoritmo genético y te muestra las tres mejores.',

      'demo.title': 'Una salida real del programa',
      'demo.sub': 'Ocho acordes a cuatro voces, con las reglas del barroco. Señalá o tocá un nombre de la leyenda para resaltar esa voz.',
      'demo.note': 'de movimiento en total, sumando las cuatro voces. El salto más grande es una cuarta, y el bajo se mueve cinco semitonos en toda la pieza.',

      'modes.kicker': 'Los tres modos',
      'modes.title': 'Tres maneras de empezar',
      'modes.body': 'Los tres modos terminan en una progresión escrita a varias voces, lista para exportar. Lo que cambia es quién pone los acordes. En la pantalla inicial, cada tarjeta muestra qué ponés vos y qué escribe el programa.',
      'mode.1.name': 'Organizador',
      'mode.1.tag': 'Vos ponés los acordes',
      'mode.1.body': 'Escribís la progresión en cifrado americano, o la importás de un archivo MusicXML, y el programa reparte las voces. Con el candado podés fijar el reparto de un acorde, y los de alrededor se acomodan a ese.',
      'mode.2.name': 'Generador',
      'mode.2.tag': 'El programa pone los acordes',
      'mode.2.body': 'Elegís la tonalidad, el modo, el acorde inicial y el final, y qué acordes prestados permitís. El programa escribe la progresión (qué grado sigue a cuál, dónde caen las cadencias, cuándo usa un préstamo) y después la reparte entre las voces.',
      'mode.3.name': 'Armonizador',
      'mode.3.tag': 'Vos ponés la melodía',
      'mode.3.body': 'Escribís una melodía en el pentagrama, con el mouse o con el piano de abajo, y el programa busca acordes que la acompañen. Las notas doradas muestran de antemano cuáles van a llevar acorde. Las que salen de la escala se pintan de naranja.',
      'mode.3.note': 'En el Armonizador, una nota fuera de la escala que sube un semitono lleva la dominante de la nota siguiente (V/x). En barroco y en jazz puede llevar en su lugar el acorde de séptimo grado de esa nota (vii°/x). En jazz, la que baja un semitono lleva la sustitución tritonal. Si la melodía termina en la relativa menor, el programa armoniza en menor.',
      'tools.kicker': 'Las herramientas',
      'score.kicker': 'El resultado',
      'score.title': 'Escrito en partitura',
      'score.body': 'Las tres mejores soluciones se ven escritas en un sistema de dos pentagramas, con el cifrado arriba de cada acorde y un color por voz. La tabla con el nombre de cada nota queda a un click.',
      'score.body2': 'Todos los pentagramas del programa, del Armonizador al analizador, se dibujan con Bravura, la fuente de referencia del estándar musical SMuFL. Las figuras, las claves y los accidentes se ven como en una partitura impresa.',
      'tools.title': 'Tres herramientas que no componen',
      'tools.body': 'Además de los tres modos hay tres herramientas que no escriben música. El experimentador descompone el sonido de una nota en sus armónicos. El analizador hace el camino inverso al resto del programa, porque recibe una partitura ya escrita y la analiza. La escuelita enseña lectura musical y armonía con ejercicios que corrige el programa.',
      'tool.1.name': 'Experimentador de armónicos',
      'tool.1.tag': 'De qué está hecha una nota',
      'tool.1.body': 'Una nota afinada no suena en una sola frecuencia. Suena en la suya y en sus múltiplos enteros, los armónicos, y el peso de cada uno explica buena parte de la diferencia entre un violín y una flauta. El experimentador muestra los doce primeros como barras que podés apagar, subir, bajar o desplazar de su frecuencia exacta. Trae ocho recetas para empezar (seno, diente de sierra, cuadrada, triangular, cuerda pulsada, clarinete, órgano y voz cantada), y todas son la misma serie con barras de distinta altura.',
      'tool.1.note': 'El gráfico y el sintetizador leen los mismos datos, así que el dibujo coincide con lo que se escucha. El timbre se guarda como <code>.wav</code> afinado y con el bucle marcado. Sirve para cargarlo en un sampler o como timbre de reproducción del propio programa.',
      'tool.2.name': 'Analizador',
      'tool.2.beta': 'beta',
      'tool.2.tag': 'Vos traés la partitura',
      'tool.2.body': 'Escribís la música en un sistema de dos pentagramas, o la importás de un MusicXML, y el programa nombra cada acorde con su inversión, su cifrado, su grado y su función en la tonalidad. También señala lo que pasa entre las voces (quintas y octavas paralelas, quintas ocultas, cruces, saltos de tritono) y separa las notas del acorde de las de adorno. Las cadencias quedan marcadas en el compás donde caen.',
      'tool.2.note': 'Para las paralelas y las quintas ocultas usa el mismo código con el que el algoritmo genético evalúa sus soluciones, y las juzga según el estilo que elijas. En jazz y en gregoriano no son falta. Trae los primeros ocho compases del Preludio BWV 846 de Bach para probarlo sin buscar un archivo.',
      'tool.3.name': 'Escuelita',
      'tool.3.tag': 'Aprender escribiendo',
      'tool.3.body': 'Son ocho unidades con cincuenta y tres ejercicios en total. Las tres primeras enseñan a leer en clave de sol y de fa, las figuras y el compás, y a reconocer intervalos de oído. Las otras cinco son movimientos de las voces, armonías, cadencias, estilos y serie armónica. En unos ejercicios mirás o escuchás y elegís una respuesta. En otros escribís o corregís un fragmento en el pentagrama, y el programa corrige lo que entregás. Si algo está mal, te dice en qué compás.',
      'tool.3.note': 'Cada lección cita el apartado del libro que la explica, y se abre cuando aprobaste la anterior. Si elegís mal, la corrección te dice qué tiene de malo tu respuesta y dónde mirar, sin revelar la buena. Para leer más rápido hay una práctica libre de notas sueltas, que lleva la racha y el tiempo por nota. Al aprobar las ocho unidades hay una graduación con su propia escena y el logro «Nace una leyenda».',
      'an.title': 'La precisión del analizador',
      'an.body': 'Para medirla, sus lecturas se compararon acorde por acorde con análisis de referencia. Estos números salen de esa comparación.',
      'an.n1': 'de los acordes de ocho corales de Bach, leídos igual que en el análisis de referencia',
      'an.n2': 'era lo que acertaba en los mismos corales antes de la versión 1.2',
      'an.n3': 'piezas comparables con la tonalidad bien leída',
      'an.foot': 'Lee anacrusas y compases partidos por una repetición. Con más de cuatro voces se queda en cada momento con el bajo, la voz más aguda y las dos del medio que más aportan al acorde, así que también analiza partituras de piano. Dos voces que se mueven en tiempos distintos no cuentan como paralelas.',
      'rules.kicker': 'Las reglas',
      'rules.title': 'Las reglas de cada género',
      'rules.body': 'El género influye en dos partes del trabajo. Cuando el programa elige los acordes, define qué cadencias se premian, cuánto se premia que la dominante resuelva por quinta, cuánto cuesta un acorde de color y qué préstamos vienen activados. Cuando reparte las voces, define qué movimientos se prohíben, cuáles se premian y con qué peso. El algoritmo minimiza la suma de los dos costos, y un dial regula cuánto pesa cada uno.',

      'genre.1.name': 'Barroco',
      'genre.1.body': 'Contrapunto de la práctica común. Prohíbe las quintas y octavas paralelas, premia el movimiento contrario y castiga los saltos de tritono y de séptima. Incluye el <strong>modo coral</strong>, que aplica las mismas reglas con más fuerza.',
      'genre.2.name': 'Gregoriano',
      'genre.2.body': 'Escritura modal, anterior a la tonalidad. Casi todo el movimiento es por grado conjunto, el ámbito es estrecho y el tritono está prohibido. Permite las quintas y octavas paralelas, que en el organum eran la norma.',
      'genre.3.name': 'Jazz',
      'genre.3.body': 'Armonía extendida. Premia que la tercera y la séptima de cada acorde pasen por grado conjunto al acorde siguiente, mantiene las notas comunes y evita las novenas menores.',

      'audit.title': 'Lo que cambia cada género, medido',
      'audit.body': 'El código incluye <code>audit.py</code>, que corre las mismas progresiones con cada género y otra vez con las reglas de estilo apagadas, para comparar. Estos números salen de esas corridas (cuatro progresiones, dos semillas). La tabla completa está en el README del programa, también con los casos en que un género se diferencia poco.',
      'audit.n1': 'de los enlaces en barroco tienen las voces extremas en movimiento contrario u oblicuo',
      'audit.n2': 'de las séptimas resuelven bajando en modo coral',
      'audit.n3': 'quintas y octavas paralelas con la regla activada',
      'audit.foot': 'En el gregoriano las quintas y octavas paralelas no cuentan como error. El estilo premia que la vox organalis acompañe a la vox principalis una cuarta, una quinta o una octava por debajo, como en el organum.',

      'power.kicker': 'Qué más hace',
      'power.title': 'Otras funciones',

      'f.1.t': 'De tres a seis voces',
      'f.1.b': 'Soprano, mezzo, alto, tenor, barítono y bajo. El registro de cada voz se puede editar si tu coro no entra en los valores de fábrica.',
      'f.2.t': 'MusicXML y MIDI',
      'f.2.b': 'Exporta en los dos formatos. Los archivos se abren en MuseScore, Sibelius, Finale o cualquier otro editor de partituras.',
      'f.3.t': 'Timbres de reproducción',
      'f.3.b': 'Cada solución tiene su botón para escucharla. En la configuración se elige el timbre entre cuerda pulsada, órgano, cuerdas frotadas, clave y coro, y una flauta dulce escolar incluida como broma. También puede usar un archivo WAV como timbre.',
      'f.4.t': 'Tres soluciones',
      'f.4.b': 'La mejor y las dos que le siguen, en partitura o en tabla, para comparar en qué se diferencian.',
      'f.5.t': 'Señala lo que encuentra',
      'f.5.b': 'Si en una solución aparece una cadencia rota, un 6/4 cadencial o una sexta en lugar de quinta, el resultado lo señala y lo explica en una línea.',
      'f.6.t': 'Notas de paso y adornos',
      'f.6.b': 'Rellena saltos con notas de paso por grado conjunto y puede agregar adornos de época sobre el resultado.',
      'f.7.t': 'Préstamos y dominantes aplicadas',
      'f.7.b': 'Napolitana, bVII, sustituto tritonal y dominantes aplicadas, con un control para decidir cuánto se usan.',
      'f.8.t': 'Importa partituras',
      'f.8.b': 'Lee archivos MusicXML, también los <code>.mxl</code> comprimidos, y toma sus acordes, su ritmo y sus compases.',
      'f.9.t': 'Historial',
      'f.9.b': 'Las últimas diez producciones quedan guardadas y se pueden volver a escuchar sin generarlas de nuevo.',
      'f.10.t': 'Línea de comandos',
      'f.10.b': 'Desde el código fuente, <code>cli.py</code> usa el mismo motor sin abrir la ventana. Acepta los acordes, el género, las voces y los mismos interruptores de reglas.',
      'f.11.t': 'Portable',
      'f.11.b': 'No tiene instalador y guarda todo en su propia carpeta. Funciona desde un pendrive, y para desinstalarlo alcanza con borrar la carpeta.',
      'f.12.t': 'Motor sin dependencias',
      'f.12.b': 'El motor usa sólo la librería estándar de Python. No necesita <code>music21</code>, <code>numpy</code> ni librerías de audio.',
      'f.13.t': 'Avisa cuando hay versión nueva',
      'f.13.b': 'Al abrirse consulta si salió una versión nueva y te avisa antes de entrar. Sin conexión abre igual.',
      'f.14.t': 'Timbres propios',
      'f.14.b': 'Lo que armes en el experimentador se guarda como <code>.wav</code> afinado y con bucle. Sirve como instrumento en un sampler y como timbre de reproducción del programa.',
      'f.15.t': 'El progreso, en archivos a la vista',
      'f.15.b': 'Logros, libro, sendero, escuelita e historial se guardan en archivos de texto al lado del programa. Para actualizar, se copian a la carpeta nueva.',
      'f.16.t': 'Atajos de voces',
      'f.16.b': 'Canto (SATB), piano y cuarteto de cuerdas. Cada atajo marca las cuatro voces y les asigna el registro en un solo paso.',
      'f.17.t': 'En castellano y en inglés',
      'f.17.b': 'La primera vez que lo abrís te pregunta el idioma. Después se cambia desde la configuración, sin cerrar el programa.',
      'f.18.t': 'Tutorial y guías',
      'f.18.b': 'La primera vez hay un recorrido guiado, y las pantallas de acordes, melodía, tonalidad y reglas tienen su propia guía. Los dos se pueden repetir desde la configuración.',
      'f.19.t': 'Modo profesional',
      'f.19.b': 'Se activa en la configuración y quita las visitas, las apariciones y el modo historia. Quedan sólo las herramientas de trabajo, y al desactivarlo todo vuelve a su estado anterior.',
      'learn.kicker': 'Aprender',
      'learn.title': 'Un libro de teoría incluido',
      'learn.body': 'El programa trae un libro de teoría escrito para quien no estudió música. Cubre armonía, conducción de voces, el origen de cada estilo y las cadencias que el programa reconoce, con instrucciones para que aparezcan en tus resultados.',
      'learn.body2': 'La mayoría de los apartados empiezan cerrados y se escriben cuando hacés algo en el programa. Por ejemplo, la primera vez que un resultado tiene un 6/4 cadencial se abre el apartado que lo explica. Son ochenta apartados y cincuenta y un logros.',
      'learn.body3': 'Las lecciones de la escuelita citan el apartado que les corresponde, y desde ahí se abre el libro en esa página.',
      'myth.kicker': 'Algo más',
      'myth.title': 'Con el tiempo,<br>el programa te va a ofrecer algo',
      'myth.p1': 'No dice qué. Se enciende un botón dorado en la pantalla inicial, y si no lo tocás vuelve a aparecer otro día. Lo que pase después depende de lo que contestes. Hay tres respuestas posibles y cada una lleva a un camino distinto.',
      'myth.p2': 'Cada camino se recorre usando el programa como siempre, escribiendo acordes, generando progresiones y armonizando melodías. Algunos tramos tocan piezas que el programa ya trae escritas, y cada tramo escribe en el libro un apartado que hasta entonces tenía el título tapado.',
      'myth.p3': 'El programa no lo anuncia, y esta página no va a contar más.',

      'gal.kicker': 'Por dentro',
      'gal.title': 'Siete pantallas del programa',
      'gal.1': 'Las mismas soluciones en tabla, con el nombre de cada nota y lo que el programa reconoció',
      'gal.2': 'La elección de género, con lo que cada uno prohíbe y premia',
      'gal.3': 'Los logros, agrupados por estrella',
      'gal.4': 'Las tres mejores soluciones en partitura, cada una con su botón para escucharla',
      'gal.5': 'Las voces y sus registros, con los atajos para canto, piano y cuarteto de cuerdas',
      'gal.6': 'La configuración, con el idioma, los parámetros de la búsqueda y el timbre',
      'upd.doc.title': 'Actualizar ChordWeaver sin perder el progreso',
      'upd.kicker': 'Actualizar',
      'upd.title': 'Actualizar <em>sin perder nada</em>',
      'upd.steps.title': 'Los cinco pasos',
      'upd.body': 'ChordWeaver no tiene instalador. Todo está en una carpeta, y tu progreso se guarda en siete archivos <code>.json</code> al lado del programa, no en el registro de Windows ni en <code>AppData</code>. Para actualizar, copiás esos archivos y la carpeta <code>output/</code> a la versión nueva.',
      'upd.s1': 'Descargá el <code>.zip</code> nuevo y descomprimilo en una carpeta nueva, <strong>al lado</strong> de la que ya tenías y no encima.',
      'upd.s2': 'Cerrá ChordWeaver si está abierto, para que no escriba archivos mientras copiás.',
      'upd.s3': 'Copiá los siete <code>.json</code> y la carpeta <code>output/</code> de la carpeta vieja a la nueva. Si te pregunta, elegí reemplazar.',
      'upd.s4': 'Abrí <code>ChordWeaver.exe</code> en la carpeta nueva y comprobá que estén los logros, el libro, el sendero, la escuelita y las últimas diez producciones.',
      'upd.s5': 'Cuando confirmes que está todo, borrá la carpeta vieja.',
      'upd.files.title': 'Qué guarda cada archivo',
      'upd.files.lede': 'Los siete <code>.json</code> están al lado de <code>ChordWeaver.exe</code> y se abren con cualquier editor de texto. El <code>.zip</code> no trae ninguno. El programa los crea cuando tiene algo para guardar.',
      'upd.f.ach': 'Los logros, las estrellas y los títulos ganados.',
      'upd.f.history': 'Las últimas diez producciones, listas para volver a escucharlas.',
      'upd.f.story': 'Por dónde va el sendero y qué contestaste.',
      'upd.f.visitors': 'Qué visitas recibiste y qué encuentros ya viste.',
      'upd.f.eggs': 'Los secretos que ya encontraste.',
      'upd.f.school': 'Los ejercicios aprobados de la escuelita y si ya viste la graduación. Es nuevo en la 1.2.',
      'upd.f.settings': 'El idioma, el timbre, el tamaño de letra, los parámetros de la búsqueda y qué guías ya viste.',
      'upd.f.output': 'Las partituras en MusicXML y MIDI que exportaste a la carpeta que propone el programa.',
      'upd.files.foot': 'Los archivos de una versión anterior sirven en la nueva. Una preferencia que ya no existe se ignora, y una nueva arranca con su valor de fábrica. La versión nueva abre aunque falte alguno, así que si te olvidaste uno lo podés copiar después, con el programa cerrado. El <code>chordweaver.log</code> que puede haber al lado del programa no hace falta copiarlo. Es un registro técnico y la versión nueva arma el suyo.',
      'upd.notice.title': 'El aviso de versión nueva',
      'upd.notice.body': 'Desde la 1.1, el programa consulta al abrirse si hay una versión más nueva. Si la hay, muestra un cartel con dos botones antes de abrir la ventana principal. <em>Actualizar</em> abre la página de ChordWeaver en el navegador y no abre el programa, para que puedas reemplazar la carpeta. <em>Ahora no</em> cierra el cartel y el programa se abre como siempre. Consulta una vez por arranque y no descarga nada. Sin conexión, el programa abre igual y sin aviso.',
      'upd.faq.title': 'Problemas frecuentes',
      'upd.q1': 'Lo descomprimí encima de la carpeta vieja.',
      'upd.a1': 'Tu progreso no se pierde. El <code>.zip</code> no trae ningún <code>.json</code>, así que tus archivos quedan intactos y sólo se reemplaza el programa. Abrilo y comprobá que estén los logros.',
      'upd.q2': 'Cambié de computadora.',
      'upd.a2': 'Copiá la carpeta entera a la computadora nueva. No hay nada instalado fuera de ella.',
      'upd.q3': 'Abrí la versión nueva y no está mi progreso.',
      'upd.a3': 'Cerrá el programa y revisá que los <code>.json</code> estén <strong>al lado</strong> del <code>.exe</code> y no dentro de una subcarpeta. Si el programa no encuentra un archivo, crea uno nuevo y vacío, pero no toca el que quedó en otro lado. Mové los tuyos al lugar correcto, elegí reemplazar y volvé a abrirlo.',
      'upd.q4': 'El programa no me avisó de la versión nueva.',
      'upd.a4': 'El aviso necesita conexión a internet y existe desde la 1.1. Si tenés la 1.0.1, las versiones nuevas se anuncian acá. La lista completa está en <a href="notas.html">las notas del parche</a>.',
      'upd.q5': 'Toqué «Ahora no» en el aviso y el programa no abrió.',
      'upd.a5': 'Era un error de la 1.1 y la 1.1.1, y la 1.2 lo corrige. Cerrá la ventana que haya quedado abierta y actualizá con los cinco pasos de arriba.',
      'upd.q6': 'Uso como timbre un WAV que está en la carpeta vieja.',
      'upd.a6': 'La configuración guarda la ubicación del archivo. Antes de borrar la carpeta vieja, mové el WAV a otro lugar y volvé a elegirlo en la configuración. Si el archivo ya no está, el programa suena con el timbre de siempre y la configuración te dice por qué.',
      'upd.foot': 'Ver qué trae cada versión →',

      'dl.title': 'Descarga',
      'dl.body': 'Descomprimí el <code>.zip</code> donde quieras y abrí <code>ChordWeaver.exe</code>. No hay instalador, no toca el registro de Windows y guarda tus datos en su propia carpeta.',
      'dl.btn': 'Descargar 1.3.2',
      'dl.f1': 'Requisitos',
      'dl.f1v': 'Windows de 64 bits. No hace falta Python.',
      'dl.f2': 'Licencia',
      'dl.f3': 'SHA-256',
      'dl.f4': 'Tamaño',
      'dl.f4v': '29 MB, en un <code>.zip</code>',
      'dl.alt': 'Para ejecutarlo desde el código fuente:',

      'foot.note': 'Software libre bajo licencia MIT.',
      'foot.repo': 'Código en GitHub',
      'foot.discord': 'Discord oficial',
      'foot.releases': 'Todas las versiones',
      'foot.issues': 'Reportar un problema',
      'foot.contrib': 'Cómo contribuir',

      'alt.modos': 'La pantalla inicial de ChordWeaver. Arriba, los tres modos, cada uno con lo que ponés vos y lo que escribe el programa. Debajo, las tres herramientas, y al pie los logros y el libro',
      'alt.acordes': 'La pantalla de acordes, con ocho acordes repartidos en cuatro compases y la progresión entera resumida arriba',
      'alt.tonalidad': 'La pantalla de tonalidad del Generador, con el acorde inicial y el final, las notas de paso y los intercambios modales',
      'alt.melodia': 'El pentagrama del Armonizador con una melodía en Do mayor. Las tres notas con sostenido salen de la escala y están en naranja. Las que van a llevar acorde tienen un halo dorado',
      'alt.libro': 'El libro de teoría abierto en «Los cuatro movimientos», del capítulo sobre cómo se mueven las voces, con ejemplos en pentagrama',
      'alt.partitura': 'Un resultado del Armonizador en partitura. La melodía va arriba, el cifrado encima de cada acorde y los grados debajo, entre ellos vii°/V, vii°/ii y vii°/vi',
      'alt.chart': 'Gráfico de las cuatro voces moviéndose entre ocho acordes',
      'alt.laboratorio': 'El experimentador de armónicos, con las doce barras de la serie y los controles de vibrato',
      'alt.analizador': 'El analizador con el coral BWV 281 de Bach importado. Arriba la partitura con el cifrado, en el medio la tonalidad y dos cadencias auténticas, y abajo los acordes, el contrapunto y los adornos',
      'alt.escuelita': 'La escuelita en la lección de la cadencia rota. Arriba, el avance por las ocho unidades. El ejercicio entregado termina en una cadencia auténtica y la corrección lo señala en los compases 3 y 4',
      'chart.total': '{n} semitonos',
      'chart.close': 'Cerrar'
    },

    en: {
      'doc.title': 'ChordWeaver — voice leading with a genetic algorithm',
      'notes.title': 'ChordWeaver — Patch notes',
      'notes.kicker': 'Patch notes',
      'notes.h1': 'Everything that <em>changed</em>',
      'notes.lede': 'Newest version first, with what was added, improved and fixed in each one.',
      'notes.download': 'Download 1.3.2',
      'notes.back': '← Back to home',
      'notes.releases': 'Releases',
      'notes.all': 'All releases on GitHub →',
      'notes.g1': 'New features',
      'notes.g2': 'Major changes',
      'notes.g3': 'Notable changes',
      'notes.g4': 'Minor changes',
      'notes.g5': 'Major improvements',
      'notes.g6': 'Minor improvements',
      'skip': 'Skip to content',

      'nav.modes': 'The three modes',
      'nav.how': 'How it works',
      'nav.power': 'What else it does',
      'nav.download': 'Download',
      'nav.notes': 'What’s new',
      'nav.tools': 'The tools',
      'six.kicker': 'Harmony',
      'six.title': 'Up to six voices',
      'six.body': 'When six voices sing a three-note chord, three of them repeat a note another voice already has. Which note gets doubled changes how the chord sounds, and the program decides it chord by chord. All three modes have an option to let the spare voices add a sixth or a ninth instead of doubling.',
      'six.body2': 'In the G7 in the chart, the leading tone (B) appears only once. Baroque penalizes doubling it, and chorale mode penalizes it even more.',
      'demo6.title': 'Nine chords in six voices',
      'demo6.sub': 'Soprano, mezzo, alto, tenor, baritone and bass. Hover over or tap a name in the legend to highlight that voice.',
      'demo6.note': 'of movement in total. No voice crosses another, there are no unisons, and the largest leap is a fifth.',
      'alt.chart6': 'Chart of six voices moving across nine chords',
      'alt.misterio': 'A valley at night, with the moon and a figure in the distance',
      'dl.notes': 'What changed in this version →',
      'dl.update': 'How to update from an older version without losing your progress →',
      'foot.notes': 'Patch notes',
      'foot.update': 'How to update',

      'hero.eyebrow': 'Open source · MIT License · Windows',
      'hero.hook': 'Your chords, your melody or a blank page.',
      'hero.lede': 'ChordWeaver writes any of the three out for several voices. A genetic algorithm decides which note each voice sings and in which octave, keeping the movement as small as the rules of your chosen genre allow.',
      'hero.sub': 'Once the chords are chosen, the algorithm never changes or reorders them. It only decides how they are spread across the voices.',
      'hero.download': 'Download 1.3.2',
      'hero.source': 'View the source',
      'hero.meta.version': 'Version 1.3.2',
      'hero.meta.size': '29 MB',
      'hero.meta.install': 'No installer',
      'hero.meta.python': 'No Python needed',

      'how.kicker': 'How it works',
      'how.title': 'What the program decides',
      'how.body': 'A <em>C major</em> chord has three notes. In four-part writing one of them gets doubled, and each voice can sing its note in more than one octave. Across a whole progression there are far too many combinations to try one by one. ChordWeaver searches them with a genetic algorithm and shows you the best three.',

      'demo.title': 'Real output from the program',
      'demo.sub': 'Eight chords in four voices, with baroque rules. Hover over or tap a name in the legend to highlight that voice.',
      'demo.note': 'of movement in total, across all four voices. The largest leap is a fourth, and the bass moves five semitones over the whole piece.',

      'modes.kicker': 'The three modes',
      'modes.title': 'Three ways to start',
      'modes.body': 'All three modes end with a progression written out for several voices, ready to export. The difference is who supplies the chords. On the home screen, each card shows what you put in and what the program writes.',
      'mode.1.name': 'Organizer',
      'mode.1.tag': 'You bring the chords',
      'mode.1.body': 'Type the progression as chord symbols, or import it from a MusicXML file, and the program distributes the voices. The padlock fixes the voicing of a chord, and the chords around it adjust to fit.',
      'mode.2.name': 'Generator',
      'mode.2.tag': 'The program brings the chords',
      'mode.2.body': 'Choose the key, the mode, the first and last chords, and which borrowed chords are allowed. The program writes the progression (which degree follows which, where the cadences fall, when to borrow) and then distributes it across the voices.',
      'mode.3.name': 'Harmonizer',
      'mode.3.tag': 'You bring the melody',
      'mode.3.body': 'Write a melody on the staff, with the mouse or the piano below it, and the program finds chords to go with it. Gold notes show in advance which ones will get a chord. Notes outside the scale turn orange.',
      'mode.3.note': 'In the Harmonizer, a note outside the scale that rises a semitone gets the dominant of the next note (V/x). In baroque and jazz it can get that note’s leading-tone chord (vii°/x) instead. In jazz, a note that falls a semitone gets the tritone substitution. If the melody ends on the relative minor, the program harmonizes it in minor.',
      'tools.kicker': 'The tools',
      'score.kicker': 'The result',
      'score.title': 'Written out as a score',
      'score.body': 'The best three solutions are written out on a grand staff, with the chord symbol above each chord and one color per voice. The table with the name of every note is one click away.',
      'score.body2': 'Every staff in the program, from the Harmonizer to the Analyzer, is drawn with Bravura, the reference font of the SMuFL music standard. Notes, clefs and accidentals look as they do in a printed score.',
      'tools.title': 'Three tools that don’t compose',
      'tools.body': 'Besides the three modes there are three tools that don’t write music. The workbench breaks the sound of a note down into its harmonics. The Analyzer works in the opposite direction from the rest of the program, taking a score that already exists and analyzing it. The Schoolhouse teaches music reading and harmony with exercises the program marks.',
      'tool.1.name': 'Harmonics workbench',
      'tool.1.tag': 'What a note is made of',
      'tool.1.body': 'A pitched note doesn’t sound at a single frequency. It sounds at its own and at whole-number multiples of it, the harmonics, and the strength of each one accounts for much of the difference between a violin and a flute. The workbench shows the first twelve as bars you can mute, raise, lower or shift off their exact frequency. It comes with eight presets to start from (sine, sawtooth, square, triangle, plucked string, clarinet, organ and sung voice), and all of them are the same series with bars of different heights.',
      'tool.1.note': 'The chart and the synthesizer read the same data, so the drawing always matches what you hear. The timbre saves as a tuned <code>.wav</code> with the loop marked inside. You can load it into a sampler or use it as the program’s own playback timbre.',
      'tool.2.name': 'Analyzer',
      'tool.2.beta': 'beta',
      'tool.2.tag': 'You bring the score',
      'tool.2.body': 'Write music on a grand staff, or import a MusicXML file, and the program names each chord with its inversion, figured bass, scale degree and function in the key. It also points out what happens between the voices (parallel fifths and octaves, hidden fifths, crossings, tritone leaps) and tells chord tones apart from ornaments. Cadences are marked in the bar where they land.',
      'tool.2.note': 'For parallels and hidden fifths it uses the same code the genetic algorithm uses to score its solutions, and judges them by the style you choose. In jazz and Gregorian they aren’t errors. It includes the first eight bars of Bach’s Prelude BWV 846, so you can try it without hunting for a file.',
      'tool.3.name': 'Schoolhouse',
      'tool.3.tag': 'Learn by writing',
      'tool.3.body': 'Eight units with fifty-three exercises in all. The first three teach reading in treble and bass clef, note values and time signatures, and recognizing intervals by ear. The other five are voice motion, harmony, cadences, styles and the harmonic series. In some exercises you look or listen and pick an answer. In others you write or fix a passage on the staff, and the program marks what you hand in. If something is wrong, it tells you which bar.',
      'tool.3.note': 'Each lesson quotes the book section that explains it, and opens once you’ve passed the one before. If you pick wrong, the feedback tells you what’s wrong with your answer and where to look, without giving away the right one. To read faster there’s free practice with single notes, which keeps your streak and your time per note. Pass all eight units and there’s a graduation with its own scene and the “A Legend Is Born” achievement.',
      'an.title': 'The Analyzer’s accuracy',
      'an.body': 'To measure it, its readings were compared chord by chord with reference analyses. These figures come from that comparison.',
      'an.n1': 'of the chords in eight Bach chorales, read the same as in the reference analysis',
      'an.n2': 'was its score on the same chorales before version 1.2',
      'an.n3': 'comparable pieces with the key read correctly',
      'an.foot': 'It reads pickups and bars split across a repeat. With more than four voices it keeps, at each moment, the bass, the top voice and the two inner voices that add the most to the chord, so it also analyzes piano scores. Two voices moving at different times don’t count as parallels.',
      'rules.kicker': 'The rules',
      'rules.title': 'Each genre’s rules',
      'rules.body': 'The genre affects two parts of the work. When the program chooses the chords, it sets which cadences are rewarded, how much a dominant resolving down a fifth is rewarded, what a color chord costs and which borrowed chords are on by default. When it distributes the voices, it sets which motions are forbidden, which are rewarded and how much each one weighs. The algorithm minimizes the sum of both costs, and a dial sets how much each one counts.',

      'genre.1.name': 'Baroque',
      'genre.1.body': 'Common-practice counterpoint. Forbids parallel fifths and octaves, rewards contrary motion and penalizes tritone and seventh leaps. Includes <strong>chorale mode</strong>, which applies the same rules more strictly.',
      'genre.2.name': 'Gregorian',
      'genre.2.body': 'Modal writing from before tonality. Motion is mostly stepwise, the range is narrow and the tritone is forbidden. Parallel fifths and octaves are allowed, since in organum they were the norm.',
      'genre.3.name': 'Jazz',
      'genre.3.body': 'Extended harmony. Rewards the third and seventh of each chord moving by step into the next chord, keeps common tones and avoids minor ninths.',

      'audit.title': 'What each genre changes, measured',
      'audit.body': 'The source includes <code>audit.py</code>, which runs the same progressions through each genre and again with the style rules switched off, for comparison. These figures come from those runs (four progressions, two seeds). The full table is in the program’s README, including the cases where a genre barely stands out.',
      'audit.n1': 'of chord changes in baroque have the outer voices in contrary or oblique motion',
      'audit.n2': 'of sevenths resolve downward in chorale mode',
      'audit.n3': 'parallel fifths and octaves with the rule switched on',
      'audit.foot': 'In Gregorian, parallel fifths and octaves don’t count as errors. The style rewards the vox organalis following the vox principalis a fourth, a fifth or an octave below, as in organum.',

      'power.kicker': 'What else it does',
      'power.title': 'Other features',

      'f.1.t': 'Three to six voices',
      'f.1.b': 'Soprano, mezzo, alto, tenor, baritone and bass. Each voice’s range can be edited if your choir doesn’t fit the defaults.',
      'f.2.t': 'MusicXML and MIDI',
      'f.2.b': 'Exports to both formats. The files open in MuseScore, Sibelius, Finale or any other notation program.',
      'f.3.t': 'Playback timbres',
      'f.3.b': 'Each solution has its own play button. In the settings you pick the timbre from plucked string, organ, bowed strings, harpsichord and choir, plus a school recorder included as a joke. It can also use a WAV file as the timbre.',
      'f.4.t': 'Three solutions',
      'f.4.b': 'The best one and the two runners-up, as a score or as a table, so you can compare how they differ.',
      'f.5.t': 'Points out what it finds',
      'f.5.b': 'If a solution contains a deceptive cadence, a cadential 6/4 or a sixth in place of a fifth, the result screen points it out and explains it in one line.',
      'f.6.t': 'Passing notes and ornaments',
      'f.6.b': 'Fills leaps with stepwise passing notes and can add period ornaments to the result.',
      'f.7.t': 'Borrowed chords and secondary dominants',
      'f.7.b': 'Neapolitan, bVII, tritone substitution and secondary dominants, with a control for how often they are used.',
      'f.8.t': 'Score import',
      'f.8.b': 'Reads MusicXML files, compressed <code>.mxl</code> included, and takes their chords, rhythm and bars.',
      'f.9.t': 'History',
      'f.9.b': 'Your last ten productions are saved and can be played again without regenerating them.',
      'f.10.t': 'Command line',
      'f.10.b': 'From the source code, <code>cli.py</code> runs the same engine without opening a window. It takes the chords, the genre, the voices and the same rule switches.',
      'f.11.t': 'Portable',
      'f.11.b': 'No installer, and it keeps everything in its own folder. It runs from a USB stick, and uninstalling it means deleting the folder.',
      'f.12.t': 'No engine dependencies',
      'f.12.b': 'The engine uses only the Python standard library. No <code>music21</code>, no <code>numpy</code>, no audio libraries.',
      'f.13.t': 'Update notice',
      'f.13.b': 'On startup it checks for a newer version and tells you before the main window opens. With no connection it opens as usual.',
      'f.14.t': 'Your own timbres',
      'f.14.b': 'Whatever you build in the workbench saves as a tuned, looped <code>.wav</code>. It works as an instrument in a sampler and as the program’s playback timbre.',
      'f.15.t': 'Progress you can see',
      'f.15.b': 'Achievements, book, path, Schoolhouse and history are saved as text files next to the program. To update, you copy them to the new folder.',
      'f.16.t': 'Voice presets',
      'f.16.b': 'Choir (SATB), piano and string quartet. Each preset ticks the four voices and sets their ranges in one step.',
      'f.17.t': 'Spanish and English',
      'f.17.b': 'The first time you open it, it asks for your language. After that you change it in the settings, without closing the program.',
      'f.18.t': 'Tutorial and guides',
      'f.18.b': 'The first time there’s a guided tour. The chords, melody, key and rules screens also have a guide of their own. Both can be replayed from the settings.',
      'f.19.t': 'Professional mode',
      'f.19.b': 'Turn it on in the settings to remove the visits, the apparitions and Story Mode. Only the working tools remain, and turning it off restores everything as it was.',
      'learn.kicker': 'Learn',
      'learn.title': 'A built-in theory book',
      'learn.body': 'The program includes a theory book written for people who never studied music. It covers harmony, voice leading, where each style comes from and the cadences the program recognizes, with instructions for getting them into your results.',
      'learn.body2': 'Most sections start locked and get written as you do things in the program. For example, the first time a result contains a cadential 6/4, the section that explains it opens up. There are eighty sections and fifty-one achievements.',
      'learn.body3': 'Schoolhouse lessons quote the section that goes with them, and open the book right at that page.',
      'myth.kicker': 'Something else',
      'myth.title': 'Over time,<br>the program will offer you something',
      'myth.p1': 'It doesn’t say what. A gold button lights up on the home screen, and if you don’t press it, it comes back another day. What happens next depends on your answer. There are three possible answers, and each one leads down a different path.',
      'myth.p2': 'You follow each path by using the program as usual, writing chords, generating progressions and harmonizing melodies. Some stages play pieces the program already has written out, and each stage adds a section to the book whose title was hidden until then.',
      'myth.p3': 'The program doesn’t announce any of this, and this page won’t say more.',

      'gal.kicker': 'Inside',
      'gal.title': 'Seven screens from the program',
      'gal.1': 'The same solutions as a table, with the name of every note and what the program recognized',
      'gal.2': 'Choosing a genre, with what each one forbids and rewards',
      'gal.3': 'Achievements, grouped by star',
      'gal.4': 'The best three solutions as a score, each with its own play button',
      'gal.5': 'The voices and their ranges, with presets for choir, piano and string quartet',
      'gal.6': 'The settings, with the language, the search parameters and the timbre',
      'upd.doc.title': 'Updating ChordWeaver without losing your progress',
      'upd.kicker': 'Updating',
      'upd.title': 'Update <em>without losing anything</em>',
      'upd.steps.title': 'Five steps',
      'upd.body': 'ChordWeaver has no installer. Everything lives in one folder, and your progress is saved in seven <code>.json</code> files next to the program, not in the Windows registry or in <code>AppData</code>. To update, you copy those files and the <code>output/</code> folder into the new version.',
      'upd.s1': 'Download the new <code>.zip</code> and unzip it into a new folder <strong>next to</strong> the one you already have, not on top of it.',
      'upd.s2': 'Close ChordWeaver if it’s open, so it doesn’t write files while you copy.',
      'upd.s3': 'Copy the seven <code>.json</code> files and the <code>output/</code> folder from the old folder into the new one. If asked, choose to replace.',
      'upd.s4': 'Open <code>ChordWeaver.exe</code> in the new folder and check that your achievements, the book, the path, the Schoolhouse and your last ten productions are there.',
      'upd.s5': 'Once you’ve checked everything, delete the old folder.',
      'upd.files.title': 'What each file holds',
      'upd.files.lede': 'The seven <code>.json</code> files sit next to <code>ChordWeaver.exe</code> and open in any text editor. The <code>.zip</code> contains none of them. The program creates them when it has something to save.',
      'upd.f.ach': 'Achievements, stars and earned titles.',
      'upd.f.history': 'Your last ten productions, ready to play again.',
      'upd.f.story': 'How far along the path you are, and what you answered.',
      'upd.f.visitors': 'Who has visited you and which encounters you’ve seen.',
      'upd.f.eggs': 'The secrets you’ve found.',
      'upd.f.school': 'The Schoolhouse exercises you’ve passed and whether you’ve seen the graduation. New in 1.2.',
      'upd.f.settings': 'Language, timbre, font size, search parameters and which guides you’ve already seen.',
      'upd.f.output': 'The MusicXML and MIDI scores you exported to the folder the program suggests.',
      'upd.files.foot': 'Files from an older version work in the new one. A setting that no longer exists is ignored, and a new one starts at its default. The new version opens even if a file is missing, so you can copy a forgotten one later, with the program closed. The <code>chordweaver.log</code> that may be next to the program doesn’t need copying. It’s a technical log and the new version starts its own.',
      'upd.notice.title': 'The update notice',
      'upd.notice.body': 'Since 1.1, the program checks for a newer version when it opens. If there is one, it shows a notice with two buttons before the main window appears. <em>Update</em> opens the ChordWeaver website in your browser and doesn’t open the program, so you can replace the folder. <em>Not now</em> closes the notice and the program opens as usual. It checks once per launch and never downloads anything. With no connection, the program opens normally and shows no notice.',
      'upd.faq.title': 'Common problems',
      'upd.q1': 'I unzipped it over the old folder.',
      'upd.a1': 'Your progress is safe. The <code>.zip</code> contains no <code>.json</code> files, so yours stay intact and only the program is replaced. Open it and check that your achievements are there.',
      'upd.q2': 'I switched computers.',
      'upd.a2': 'Copy the whole folder to the new computer. Nothing is installed outside it.',
      'upd.q3': 'I opened the new version and my progress isn’t there.',
      'upd.a3': 'Close the program and check that the <code>.json</code> files are <strong>next to</strong> the <code>.exe</code>, not inside a subfolder. If the program can’t find a file, it creates a new, empty one, but it doesn’t touch the one left somewhere else. Move yours to the right place, choose to replace, and open the program again.',
      'upd.q4': 'The program didn’t tell me about the new version.',
      'upd.a4': 'The notice needs an internet connection and only exists from 1.1 on. If you have 1.0.1, new versions are announced here. The full list is in <a href="notas.html">the patch notes</a>.',
      'upd.q5': 'I clicked “Not now” on the notice and the program didn’t open.',
      'upd.a5': 'That was a bug in 1.1 and 1.1.1, and 1.2 fixes it. Close any window that was left open and update with the five steps above.',
      'upd.q6': 'My timbre is a WAV that lives in the old folder.',
      'upd.a6': 'The settings store the file’s location. Before deleting the old folder, move the WAV somewhere else and choose it again in the settings. If the file is gone, the program plays with the default timbre and the settings tell you why.',
      'upd.foot': 'See what each version brings →',

      'dl.title': 'Download',
      'dl.body': 'Unzip the <code>.zip</code> anywhere and run <code>ChordWeaver.exe</code>. There’s no installer, it doesn’t touch the Windows registry, and it keeps your data in its own folder.',
      'dl.btn': 'Download 1.3.2',
      'dl.f1': 'Requirements',
      'dl.f1v': '64-bit Windows. Python not required.',
      'dl.f2': 'License',
      'dl.f3': 'SHA-256',
      'dl.f4': 'Size',
      'dl.f4v': '29 MB, as a <code>.zip</code>',
      'dl.alt': 'To run it from source:',

      'foot.note': 'Free software under the MIT License.',
      'foot.repo': 'Source on GitHub',
      'foot.discord': 'Official Discord',
      'foot.releases': 'All releases',
      'foot.issues': 'Report a problem',
      'foot.contrib': 'How to contribute',

      'alt.modos': 'ChordWeaver’s home screen. At the top, the three modes, each showing what you put in and what the program writes. Below, the three tools, and at the bottom the achievements and the book',
      'alt.acordes': 'The chords screen, with eight chords spread over four bars and the whole progression summarized at the top',
      'alt.tonalidad': 'The Generator’s key screen, with the first and last chords, passing notes and modal interchange',
      'alt.melodia': 'The Harmonizer staff with a melody in C major. The three notes with a sharp are outside the scale and show in orange. The ones that will get a chord have a gold halo',
      'alt.libro': 'The theory book open at “The four motions”, in the chapter on how the voices move, with examples on the staff',
      'alt.partitura': 'A Harmonizer result as a score. The melody is on top, the chord symbols above each chord and the scale degrees below, including V/V, V/ii and V/vi',
      'alt.chart': 'Chart of four voices moving across eight chords',
      'alt.laboratorio': 'The harmonics workbench, with the twelve bars of the series and the vibrato controls',
      'alt.analizador': 'The Analyzer with Bach’s chorale BWV 281 imported. The score with chord symbols at the top, the key and two authentic cadences in the middle, and the chords, counterpoint and ornaments below',
      'alt.escuelita': 'The Schoolhouse at the deceptive cadence lesson. At the top, progress through the eight units. The submitted exercise ends on an authentic cadence, and the feedback points to bars 3 and 4',
      'chart.total': '{n} semitones',
      'chart.close': 'Close'
    }
  };

  var lang = 'es';

  function pick() {
    var saved = null;
    try { saved = localStorage.getItem('cw-lang'); } catch (e) { /* modo privado */ }
    if (saved === 'es' || saved === 'en') { return saved; }
    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || 'es';
    return nav.toLowerCase().indexOf('es') === 0 ? 'es' : 'en';
  }

  function shotFor(path, code) {
    var plain = path.replace('assets/img/en/', 'assets/img/');
    return code === 'en' ? plain.replace('assets/img/', 'assets/img/en/') : plain;
  }

  function apply(next) {
    lang = next;
    var dict = STRINGS[next];

    document.documentElement.lang = next;
    // Cada página declara con qué clave se titula. Sin esto, la página de
    // novedades se quedaba con el título del índice apenas corría el JS.
    document.title = dict[document.body.getAttribute('data-title') || 'doc.title']
                     || dict['doc.title'];

    // innerHTML y no textContent: varias frases llevan <em>, <code> o un <br>
    // que es parte de cómo está cortado el título. Todo esto lo escribimos
    // acá mismo, no viene de ningún lado.
    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n]'), function (el) {
      var v = dict[el.getAttribute('data-i18n')];
      if (v != null) { el.innerHTML = v; }
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n-alt]'), function (el) {
      var v = dict[el.getAttribute('data-i18n-alt')];
      if (v != null) { el.alt = v; }
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n-aria]'), function (el) {
      var v = dict[el.getAttribute('data-i18n-aria')];
      if (v != null) { el.setAttribute('aria-label', v); }
    });

    // Las capturas muestran el programa en el idioma de la página. Las de
    // castellano están en assets/img/ y las de inglés, con los mismos
    // nombres, en assets/img/en/. Se cambian la imagen y lo que abre la
    // galería al ampliarla.
    Array.prototype.forEach.call(document.querySelectorAll('img[src*="assets/img/"]'), function (img) {
      var src = img.getAttribute('src'), want = shotFor(src, next);
      if (want !== src) { img.setAttribute('src', want); }
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-full*="assets/img/"]'), function (el) {
      el.setAttribute('data-full', shotFor(el.getAttribute('data-full'), next));
    });

    // Bloques enteros escritos en el HTML, uno por idioma. Las notas del
    // parche son cientos de líneas: como claves de diccionario serían
    // ilegibles y cualquier corrección habría que hacerla escapando comillas.
    Array.prototype.forEach.call(document.querySelectorAll('[data-lang-block]'), function (el) {
      el.hidden = el.getAttribute('data-lang-block') !== next;
    });

    Array.prototype.forEach.call(document.querySelectorAll('.lang-opt'), function (el) {
      el.classList.toggle('on', el.getAttribute('data-lang') === next);
    });

    var close = document.getElementById('lb-close');
    if (close) { close.setAttribute('aria-label', dict['chart.close']); }

    drawCharts();
    try { localStorage.setItem('cw-lang', next); } catch (e) { /* modo privado */ }
  }

  /* ════════════════════  GRÁFICOS DE VOCES  ═══════════════════════ */

  // Los dos son salidas reales del programa, con la búsqueda de fábrica
  // (200x300) y las reglas del barroco. Las alturas son MIDI (do central =
  // 60). El movimiento total se calcula abajo a partir de estas mismas
  // notas, así que si alguien las cambia el número se corrige solo y no
  // puede quedar mintiendo.
  var CHARTS = {
    four: {
      host: 'chart', legend: 'chart-legend', total: 'chart-total',
      lo: 41, hi: 76,
      chords: ['C', 'Am', 'Dm7', 'G7', 'Em', 'Am', 'F', 'G'],
      voices: [
        { es: 'Soprano', en: 'Soprano', colour: '#5b8fd6', midi: [67, 69, 69, 74, 71, 72, 72, 71] },
        { es: 'Alto',    en: 'Alto',    colour: '#b07fd6', midi: [64, 64, 62, 65, 64, 64, 65, 67] },
        { es: 'Tenor',   en: 'Tenor',   colour: '#4fae96', midi: [55, 52, 53, 55, 55, 57, 60, 62] },
        { es: 'Bajo',    en: 'Bass',    colour: '#e8c97a', midi: [48, 48, 48, 47, 47, 45, 45, 43] }
      ]
    },
    six: {
      host: 'chart6', legend: 'chart6-legend', total: 'chart6-total',
      lo: 38, hi: 84,
      chords: ['C', 'Am', 'F', 'G', 'Em', 'Am', 'Dm7', 'G7', 'C'],
      voices: [
        { es: 'Soprano',  en: 'Soprano',  colour: '#6fa0e2', midi: [76, 76, 81, 79, 76, 76, 69, 74, 72] },
        { es: 'Mezzo',    en: 'Mezzo',    colour: '#8f8ade', midi: [72, 72, 72, 71, 64, 64, 65, 67, 67] },
        { es: 'Alto',     en: 'Alto',     colour: '#b07fd6', midi: [60, 60, 65, 62, 59, 60, 60, 59, 60] },
        { es: 'Tenor',    en: 'Tenor',    colour: '#4fae96', midi: [55, 57, 60, 55, 55, 57, 57, 53, 55] },
        { es: 'Barítono', en: 'Baritone', colour: '#9ac088', midi: [52, 52, 53, 47, 52, 52, 50, 50, 52] },
        { es: 'Bajo',     en: 'Bass',     colour: '#e8c97a', midi: [48, 45, 41, 43, 47, 45, 45, 43, 48] }
      ]
    }
  };

  var NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

  function noteName(midi) {
    return NAMES[((midi % 12) + 12) % 12] + (Math.floor(midi / 12) - 1);
  }

  function totalMovement(data) {
    var sum = 0;
    data.voices.forEach(function (v) {
      for (var i = 1; i < v.midi.length; i++) { sum += Math.abs(v.midi[i] - v.midi[i - 1]); }
    });
    return sum;
  }

  function drawChart(data) {
    var host = document.getElementById(data.host);
    if (!host) { return; }

    var many = data.voices.length > 4;
    var W = 980, H = many ? 440 : 340;
    // padL tiene que dar para el nombre de voz más largo escrito a la
    // izquierda del eje: con 58 la S de «Soprano» se salía del lienzo.
    var padL = many ? 92 : 78, padR = 26, padT = 26, padB = 46;
    var stepX = (W - padL - padR) / (data.chords.length - 1);
    var x = function (i) { return padL + i * stepX; };
    var y = function (m) {
      return padT + (data.hi - m) / (data.hi - data.lo) * (H - padT - padB);
    };

    var svg = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg">';

    for (var i = 0; i < data.chords.length; i++) {
      svg += '<line x1="' + x(i) + '" y1="' + padT + '" x2="' + x(i) + '" y2="' + (H - padB) +
             '" stroke="#2c3038" stroke-width="1"/>';
      svg += '<text x="' + x(i) + '" y="' + (H - padB + 26) + '" fill="#a8b0bc" font-size="14" ' +
             'font-family="Inter, system-ui, sans-serif" font-weight="600" text-anchor="middle">' +
             data.chords[i] + '</text>';
    }

    // Dónde va el nombre de cada voz, separado del de al lado para que dos
    // que arrancan cerca --- soprano en G4 y alto en E4, tres semitonos ---
    // no escriban una encima de la otra.
    var labelY = data.voices.map(function (v) { return y(v.midi[0]); });
    var order = labelY.map(function (yy, i) { return i; })
                      .sort(function (a, b) { return labelY[a] - labelY[b]; });
    for (var k = 1; k < order.length; k++) {
      var prev = labelY[order[k - 1]], cur = labelY[order[k]];
      if (cur - prev < 15) { labelY[order[k]] = prev + 15; }
    }

    data.voices.forEach(function (v, vi) {
      var d = v.midi.map(function (m, i) { return (i ? 'L' : 'M') + x(i) + ' ' + y(m); }).join(' ');
      svg += '<path class="voice-line v' + vi + '" d="' + d + '" fill="none" stroke="' + v.colour +
             '" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>';
      v.midi.forEach(function (m, i) {
        svg += '<circle class="voice-dot v' + vi + '" cx="' + x(i) + '" cy="' + y(m) +
               '" r="4" fill="#16181c" stroke="' + v.colour + '" stroke-width="2.2"/>';
        // A seis voces las notas se aprietan y los nombres se pisan entre
        // líneas vecinas: ahí el nombre queda sólo en los dos extremos.
        if (!many || i === 0 || i === v.midi.length - 1) {
          svg += '<text class="note-text v' + vi + '" x="' + x(i) + '" y="' + (y(m) - 11) +
                 '" fill="' + v.colour + '" font-size="11" opacity=".82" ' +
                 'font-family="Inter, system-ui, sans-serif" text-anchor="middle">' +
                 noteName(m) + '</text>';
        }
      });
      svg += '<text x="' + (padL - 14) + '" y="' + (labelY[vi] + 4) + '" fill="' + v.colour +
             '" font-size="12" font-weight="600" ' +
             'font-family="Inter, system-ui, sans-serif" text-anchor="end">' + v[lang] + '</text>';
    });

    svg += '</svg>';
    host.innerHTML = svg;

    var legend = document.getElementById(data.legend);
    if (legend) {
      legend.innerHTML = data.voices.map(function (v, vi) {
        return '<li data-voice="' + vi + '"><span class="swatch" style="background:' + v.colour +
               '"></span>' + v[lang] + '</li>';
      }).join('');
    }

    var total = document.getElementById(data.total);
    if (total) {
      total.textContent = STRINGS[lang]['chart.total'].replace('{n}', totalMovement(data));
    }

    wireChart(host, legend);
  }

  function drawCharts() {
    drawChart(CHARTS.four);
    drawChart(CHARTS.six);
  }

  function wireChart(host, legend) {
    // El bloque que contiene a este gráfico y no al otro: con dos en la
    // página, buscar `.demo` a secas apagaba las voces de los dos.
    var demo = host.parentNode;
    while (demo && demo.classList && !demo.classList.contains('demo')) {
      demo = demo.parentNode;
    }
    if (!demo || !demo.classList || !legend) { return; }

    function focus(vi) {
      demo.classList.toggle('focus', vi !== null);
      var marks = demo.querySelectorAll('.voice-line, .voice-dot, .note-text');
      Array.prototype.forEach.call(marks, function (el) {
        el.classList.toggle('on', vi !== null && el.classList.contains('v' + vi));
      });
    }

    Array.prototype.forEach.call(legend.children, function (li) {
      var vi = +li.getAttribute('data-voice');
      li.addEventListener('mouseenter', function () { focus(vi); });
      li.addEventListener('mouseleave', function () { focus(null); });
    });
    demo.addEventListener('mouseleave', function () { focus(null); });
  }

  /* ══════════════════════════  LIGHTBOX  ══════════════════════════ */

  function wireLightbox() {
    var box = document.getElementById('lightbox');
    var img = document.getElementById('lb-img');
    var close = document.getElementById('lb-close');
    if (!box || !img) { return; }

    var opener = null;

    function open(src, alt) {
      opener = document.activeElement;
      img.src = src;
      img.alt = alt || '';
      box.hidden = false;
      document.body.style.overflow = 'hidden';
      close.focus();
    }
    function shut() {
      box.hidden = true;
      img.src = '';
      document.body.style.overflow = '';
      // Devolver el foco a donde estaba: sin esto el teclado vuelve al
      // principio del documento y hay que tabular la página entera.
      if (opener && opener.focus) { opener.focus(); }
      opener = null;
    }

    Array.prototype.forEach.call(document.querySelectorAll('.gal'), function (btn) {
      btn.addEventListener('click', function () {
        var caption = btn.querySelector('span');
        open(btn.getAttribute('data-full'), caption ? caption.textContent : '');
      });
    });

    // Todas las demás capturas también se amplían: las de las tarjetas de
    // modo, la del libro y la del modo historia. Son del mismo tamaño que
    // las de la galería y al lado del texto se ven demasiado chicas para
    // leer lo que muestran. La galería usa un <button> de verdad; acá el
    // marcado es una imagen suelta, así que se le da el papel y el teclado
    // a mano en vez de reescribir el HTML de cada una.
    Array.prototype.forEach.call(
      document.querySelectorAll('.shot img, .mystic-shot img'),
      function (img) {
        img.classList.add('zoomable');
        img.setAttribute('role', 'button');
        img.setAttribute('tabindex', '0');
        img.addEventListener('click', function () { open(img.src, img.alt); });
        img.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            open(img.src, img.alt);
          }
        });
      });
    close.addEventListener('click', shut);
    box.addEventListener('click', function (e) { if (e.target === box) { shut(); } });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !box.hidden) { shut(); }
    });
  }

  /* ═══════════════════════  APARICIONES / NAV  ════════════════════ */

  function wireReveal() {
    var items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      Array.prototype.forEach.call(items, function (el) { el.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }
        // Un escalón por elemento dentro de la misma fila: la grilla entra
        // en cascada en vez de aparecer toda de golpe.
        var siblings = entry.target.parentNode ? entry.target.parentNode.children : [];
        var idx = Array.prototype.indexOf.call(siblings, entry.target);
        entry.target.style.transitionDelay = Math.min(idx, 6) * 55 + 'ms';
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    Array.prototype.forEach.call(items, function (el) { io.observe(el); });

    // Y una red por si el observador no llega a disparar nunca --- pasa en
    // capturas automaticas y en navegadores con el motor de animacion
    // congelado. Que la pagina aparezca de golpe es feo; que no aparezca es
    // que no hay pagina.
    setTimeout(function () {
      Array.prototype.forEach.call(items, function (el) { el.classList.add('in'); });
    }, 2500);
  }

  /* ═══════════════════  EL LOGO, SEGUN DONDE ESTES  ═══════════════ */

  function hex(value) {
    var n = parseInt(value.slice(1), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }

  function mix(a, b, amount) {
    var ca = hex(a), cb = hex(b), out = '#';
    for (var i = 0; i < 3; i++) {
      var v = Math.round(ca[i] + (cb[i] - ca[i]) * amount);
      out += ('0' + v.toString(16)).slice(-2);
    }
    return out;
  }

  // Los tres colores de los tres modos, en el orden en que la aplicación
  // los presenta: Organizador, Generador, Armonizador. Bajando por la
  // página el logotipo los recorre, que es la misma idea que adentro del
  // programa --- ahí el color del modo tiñe el riel de progreso entero.
  var BRAND_STOPS = ['#5b8fd6', '#b07fd6', '#4fae96'];

  function wireBrand() {
    var root = document.documentElement;
    var pending = false;

    function paint() {
      pending = false;
      var doc = document.documentElement;
      var max = (document.body.scrollHeight || doc.scrollHeight) - window.innerHeight;
      var p = max > 8 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      var span = p * (BRAND_STOPS.length - 1);
      var i = Math.min(BRAND_STOPS.length - 2, Math.floor(span));
      root.style.setProperty('--brand', mix(BRAND_STOPS[i], BRAND_STOPS[i + 1], span - i));
    }

    function onScroll() {
      // Un solo repintado por cuadro: `scroll` dispara muchísimo más
      // seguido que lo que la pantalla puede mostrar.
      if (!pending) { pending = true; window.requestAnimationFrame(paint); }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    paint();
  }

  function wireNav() {
    var nav = document.getElementById('nav');
    if (!nav) { return; }
    var onScroll = function () { nav.classList.toggle('stuck', window.scrollY > 12); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ════════════════════════════  INICIO  ══════════════════════════ */

  document.addEventListener('DOMContentLoaded', function () {
    apply(pick());

    var toggle = document.getElementById('lang-toggle');
    if (toggle) {
      toggle.addEventListener('click', function () { apply(lang === 'es' ? 'en' : 'es'); });
    }

    wireLightbox();
    wireReveal();
    wireNav();
    wireBrand();
  });
})();
