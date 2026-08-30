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
      'notes.lede': 'Una versión abajo de la otra, de la más nueva a la más vieja. Lo que está en la de arriba es lo que vas a encontrar si bajás el programa hoy.',
      'notes.download': 'Descargar 1.1.1 ALPHA',
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
      'six.title': 'A seis voces sobra gente para tres notas',
      'six.body': 'Un acorde de tres notas repartido entre seis voces obliga a doblar tres. Cuál se dobla y cuál queda sola no es un detalle de reparto: es armonía, y cambia el color del acorde. ChordWeaver lo decide uno por uno, y cuando el acorde ya está completo usa las voces que sobran para colorearlo —una sexta, una novena— en vez de repetir la séptima de punta a punta.',
      'six.body2': 'Y en el G7 de ahí arriba la sensible aparece una sola vez. Duplicarla es de las pocas cosas que la armonía de práctica común directamente no perdona, y es una regla que se puede apagar como todas las demás.',
      'demo6.title': 'Nueve acordes a seis voces',
      'demo6.sub': 'Soprano, mezzo, alto, tenor, barítono y bajo. Pasá el mouse por una voz.',
      'demo6.note': 'de movimiento total. Ninguna voz cruza a la de al lado, no hay un solo unísono en los nueve acordes, y el salto más grande de toda la pieza es una quinta.',
      'alt.chart6': 'Gráfico de las seis voces moviéndose entre nueve acordes',
      'alt.misterio': 'Un valle de noche, con la luna y una figura a lo lejos',
      'dl.notes': 'Ver todo lo que cambió en esta versión →',
      'dl.update': '¿Ya la tenías? Cómo actualizar sin perder el progreso →',
      'foot.notes': 'Notas del parche',
      'foot.update': 'Cómo actualizar',

      'hero.eyebrow': 'Código abierto · Licencia MIT · Windows',
      'hero.hook': 'Tus acordes, tu melodía, o una hoja en blanco.',
      'hero.lede': 'Un algoritmo genético convierte cualquiera de las tres en una progresión escrita a varias voces: qué nota canta cada una y en qué octava, con el mínimo movimiento que las reglas del género permitan.',
      'hero.sub': 'El acorde no se toca. Lo único que se reparte son las voces.',
      'hero.download': 'Descargar para Windows',
      'hero.source': 'Ver el código',
      'hero.meta.version': 'Versión 1.1.1 ALPHA',
      'hero.meta.size': '28 MB',
      'hero.meta.install': 'Sin instalador',
      'hero.meta.python': 'Sin Python',

      'how.kicker': 'Cómo funciona',
      'how.title': 'Un acorde no dice quién canta qué',
      'how.body': 'Un <em>Do mayor</em> son tres notas, pero cuatro voces tienen que repartírselas: alguien dobla, alguien salta una octava, alguien se queda quieto. Multiplicá eso por cada acorde de la pieza y por cada octava posible, y las combinaciones se cuentan de a millones. ChordWeaver las recorre con un algoritmo genético y se queda con las tres mejores.',

      'demo.title': 'Una salida real del programa',
      'demo.sub': 'Ocho acordes, cuatro voces, reglas del barroco. Pasá el mouse por una voz.',
      'demo.note': 'de movimiento total en ocho acordes: el salto más grande de la pieza es una cuarta, y el bajo entero se mueve cinco semitonos.',

      'modes.kicker': 'Los tres modos',
      'modes.title': 'Cambia cuánto ponés vos',
      'modes.body': 'Los tres terminan en lo mismo: una progresión escrita a varias voces, lista para exportar. Lo único que cambia es de dónde salen los acordes.',

      'mode.1.name': 'Organizador',
      'mode.1.tag': 'Vos ponés los acordes',
      'mode.1.body': 'Escribís la progresión en cifrado americano —o la importás de un MusicXML— y el programa reparte las voces. Podés fijar un acorde con el candado si querés esa disposición exacta y ninguna otra.',
      'mode.2.name': 'Generador',
      'mode.2.tag': 'Pone todo el programa',
      'mode.2.body': 'Elegís tonalidad, modo, con qué acorde empieza y con cuál termina, y cuántos acordes prestados de fuera de la escala tolerás. El programa escribe la armonía entera —qué grado sigue a cuál, dónde cae cada cadencia, qué se toma prestado— y recién después la reparte entre las voces.',
      'mode.3.name': 'Armonizador',
      'mode.3.tag': 'Vos ponés la melodía',
      'mode.3.body': 'Dibujás una línea en el pentagrama, con el mouse o con el piano de abajo, y el programa le busca los acordes que la sostienen. Las notas doradas te dicen de antemano cuáles van a llevar acorde.',

      'tools.kicker': 'Las herramientas',
      'tools.title': 'Y dos que no componen nada',
      'tools.body': 'Los tres modos de arriba escriben música. Estas dos no escriben una nota: una desarma el sonido de una nota sola hasta que no queda nada que desarmar, y la otra va en la dirección contraria a todo el resto del programa —recibe música que ya está escrita y le pone los nombres. En la pantalla inicial van justo abajo de los tres modos.',

      'tool.1.name': 'Experimentador de armónicos',
      'tool.1.tag': 'De qué está hecha una nota',
      'tool.1.body': 'Una nota no es una frecuencia sola: es la suya y además múltiplos enteros de la suya, y ese apilado es lo único que separa a un violín de una flauta tocando lo mismo. Acá están las doce barras, y se apagan de a una, se amplifican y se corren de su lugar exacto. Las recetas clásicas vienen puestas para desarmarlas —seno, diente de sierra, cuadrada, triangular, cuerda pulsada, clarinete, órgano y voz cantada—, porque una onda cuadrada no es otra forma de onda: es la misma serie con otras alturas de barra. Y el timbre que te quede se exporta a <code>.wav</code>.',
      'tool.1.note': 'El dibujo y el sintetizador leen la misma lista, así que el gráfico no puede mentir sobre lo que se escucha. Y el <code>.wav</code> no sale como un sonido cualquiera: sale afinado y con el bucle marcado adentro, o sea como muestra de sampler, listo para cargarlo en un instrumento.',
      'tool.2.name': 'Analizador',
      'tool.2.beta': 'beta',
      'tool.2.tag': 'Vos traés la partitura',
      'tool.2.body': 'Escribís la música en un sistema de dos pentagramas —o la traés de un MusicXML— y el programa te dice qué es cada acorde: en qué inversión está, con qué cifrado, qué grado de qué tonalidad y qué función cumple. Y lo que pasa entre las voces: quintas y octavas paralelas, quintas ocultas, cruces, saltos difíciles, y qué nota es de adorno y cuál es del acorde. Las cadencias las reconoce y te las marca en el compás donde caen.',
      'tool.2.note': 'Las reglas de paralelas no están escritas dos veces: el analizador le pide las suyas al mismo evaluador que usa el generador, así que no puede aprobar lo que el otro prohíbe. Y trae adentro los primeros ocho compases del Preludio BWV 846, para que haya algo que abrir el primer día.',

      'rules.kicker': 'Las reglas',
      'rules.title': 'Tres tradiciones, y todas se pueden discutir',
      'rules.body': 'El género manda sobre las dos mitades. Cuando es el programa el que elige los acordes, decide qué cadencias se premian, si una dominante está obligada a caer de quinta, cuánto cuesta un acorde de color y qué préstamos vienen prendidos de fábrica. Y en el reparto de las voces decide qué movimientos se prohíben, cuáles se premian y con cuánta fuerza. Lo que el algoritmo minimiza es la suma de las dos, y un dial decide cuánto pesa cada una.',

      'genre.1.name': 'Barroco',
      'genre.1.body': 'El contrapunto de la práctica común. Sin quintas ni octavas paralelas, premia el movimiento contrario, castiga los saltos de tritono y de séptima. Trae adentro el <strong>modo coral</strong>, que es lo mismo más severo.',
      'genre.2.name': 'Gregoriano',
      'genre.2.body': 'Escritura modal, anterior a la tonalidad. Casi todo el movimiento por grado conjunto, ámbito estrecho, tritono prohibido, y tolera las paralelas perfectas porque ahí son el organum y no un error.',
      'genre.3.name': 'Jazz',
      'genre.3.body': 'Armonía extendida. Lo que manda no es el bajo sino cómo se encadenan la tercera y la séptima de un acorde al siguiente. Mantiene las notas comunes y esquiva las novenas menores.',

      'audit.title': '¿Y de verdad suenan distinto?',
      'audit.body': 'Es la pregunta obvia, y el proyecto trae la herramienta para contestarla: <code>audit.py</code> corre las mismas progresiones con cada género y vuelve a correrlas con todas las reglas de estilo apagadas, para ver qué cambia de verdad. Los números están publicados, incluso donde no favorecen.',
      'audit.n1': 'de los enlaces en barroco tienen las dos voces extremas moviéndose para lados distintos, o una quieta',
      'audit.n2': 'de séptimas que resuelven bajando en modo coral',
      'audit.n3': 'quintas y octavas paralelas donde la regla está prendida',
      'audit.foot': 'Y el gregoriano no se mide con la misma vara: ahí las quintas y octavas paralelas no son un error que se perdona, son la forma misma. El estilo premia que la vox organalis siga a la vox principalis a la cuarta, a la quinta o a la octava, que es como se escribía el organum.',

      'power.kicker': 'Qué más hace',
      'power.title': 'No termina cuando aparece la partitura',

      'f.1.t': 'De tres a seis voces',
      'f.1.b': 'Soprano, mezzo, alto, tenor, barítono y bajo, con los registros editables voz por voz si tu coro no entra en el catálogo.',
      'f.2.t': 'MusicXML y MIDI',
      'f.2.b': 'Exporta a los dos, escritos a mano por el programa. Se abren en MuseScore, Sibelius, Finale o lo que uses.',
      'f.3.t': 'Se escucha ahí mismo',
      'f.3.b': 'Un botón por solución. El audio está sintetizado por el programa: no se empaqueta ni un solo archivo de sonido.',
      'f.4.t': 'Tres soluciones, no una',
      'f.4.b': 'La que eligió y las dos que quedaron cerca, para que puedas oír qué se negoció en cada una.',
      'f.5.t': 'Te dice qué encontró',
      'f.5.b': 'Cuando aparece una cadencia rota, un 6/4 cadencial o una sexta en lugar de quinta, te lo marca en la partitura y te explica en una línea qué es.',
      'f.6.t': 'Notas de paso y adornos',
      'f.6.b': 'Rellena los saltos de tercera con movimiento por grado conjunto, y agrega gestos de época sobre el resultado.',
      'f.7.t': 'Préstamos y dominantes aplicadas',
      'f.7.b': 'Napolitanas, bVII, sustitutos tritonales y dominantes aplicadas, con un dial para decir cuánto color querés.',
      'f.8.t': 'Importa partituras',
      'f.8.b': 'Lee un MusicXML —también los <code>.mxl</code> comprimidos— y se queda con sus acordes, su ritmo y sus compases.',
      'f.9.t': 'Historial de lo hecho',
      'f.9.b': 'Las últimas diez producciones quedan guardadas y se pueden volver a escuchar sin regenerar nada.',
      'f.10.t': 'Línea de comandos',
      'f.10.b': 'El mismo motor sin abrir la ventana: <code>cli.py</code> acepta los acordes, el género y todos los switches.',
      'f.11.t': 'Portable de verdad',
      'f.11.b': 'No hay instalador y no escribe fuera de su carpeta. Va en un pendrive y se desinstala tirándola a la papelera.',
      'f.12.t': 'El motor no tiene dependencias',
      'f.12.b': 'Librería estándar de Python y nada más. Ni <code>music21</code>, ni <code>numpy</code>, ni una librería de audio.',
      'f.13.t': 'Avisa cuando hay versión nueva',
      'f.13.b': 'Al abrirse pregunta si salió algo más nuevo y te lo dice antes de entrar. Sin internet no pasa nada: se abre igual.',
      'f.14.t': 'Un timbre, un instrumento',
      'f.14.b': 'Lo que armes en el experimentador se exporta como <code>.wav</code> afinado y con bucle: una muestra de sampler, no un sonido suelto.',
      'f.15.t': 'El progreso está a la vista',
      'f.15.b': 'Logros, libro, sendero e historial viven en archivos de texto al lado del programa. Se copian a la carpeta nueva y siguen donde estaban.',

      'learn.kicker': 'Y además enseña',
      'learn.title': 'Un libro que se escribe solo',
      'learn.body': 'Adentro del programa hay un libro de teoría escrito para alguien que no estudió música: armonía, conducción de voces, de dónde viene cada estilo y las cadencias que el programa reconoce, con la receta para que aparezcan.',
      'learn.body2': 'Pero no está escrito entero de entrada. Cada apartado está atado a algo que tenés que encontrar: el día que te salga una cadencia rota, esa noche el libro tiene un capítulo más. Son setenta y ocho apartados y cuarenta y nueve logros, y la única forma de llenarlo es componiendo.',

      'myth.kicker': 'Y hay algo más',
      'myth.title': 'Alguna vez, si te ve trabajar tranquilo,<br>el programa te va a ofrecer algo',
      'myth.p1': 'No dice qué es. Aparece un botón dorado en la pantalla inicial, y si no lo tocás hoy sigue ahí mañana. Lo que pase después depende de cómo contestes, y no hay una respuesta correcta: hay tres, y cada una lleva a otra parte.',
      'myth.p2': 'Lo que se recorre se recorre usando el programa normalmente — escribiendo acordes, generando progresiones, dibujando melodías. Al final de cada camino hay música que no elegiste vos, y un capítulo del libro que hasta entonces estuvo cerrado con el título tapado.',
      'myth.p3': 'Nada de esto se anuncia en ninguna pantalla. Esta página tampoco lo va a arruinar.',

      'gal.kicker': 'Por dentro',
      'gal.title': 'Siete pantallas, y siempre se puede volver',
      'gal.1': 'El resultado, con las cifras romanas y lo que el programa reconoció',
      'gal.2': 'La elección de género, con lo que cada uno prohíbe y premia',
      'gal.3': 'Cuarenta y nueve logros, tres estrellas, y ninguno dice cómo',
      'gal.4': 'Las tres mejores soluciones, cada una con su botón de escuchar',

      'upd.doc.title': 'Actualizar ChordWeaver sin perder el progreso',
      'upd.kicker': 'Actualizar',
      'upd.title': 'La versión nueva <em>no te borra nada</em>',
      'upd.steps.title': 'Los cinco pasos',
      'upd.body': 'ChordWeaver no se instala: es una carpeta. Eso, que en el día a día se nota poco, es exactamente lo que hace que actualizar sea copiar seis archivos y una carpeta de la vieja a la nueva. El progreso es tuyo y está a la vista —no en el registro de Windows, no escondido en un <code>AppData</code>.',
      'upd.s1': 'Bajá el <code>.zip</code> nuevo y descomprimilo <strong>al lado</strong> de la carpeta que ya tenías, no encima.',
      'upd.s2': 'Cerrá ChordWeaver si está abierto: los archivos de progreso se escriben al salir.',
      'upd.s3': 'Copiá de la carpeta vieja a la nueva los seis <code>.json</code> y la carpeta <code>output/</code>, y aceptá reemplazar.',
      'upd.s4': 'Abrí <code>ChordWeaver.exe</code> en la carpeta nueva. Están los logros, el libro por donde ibas, el sendero y las últimas diez producciones.',
      'upd.s5': 'Recién cuando compruebes que está todo, borrá la carpeta vieja.',
      'upd.files.title': 'Qué guarda cada archivo',
      'upd.files.lede': 'Los siete están sueltos al lado de <code>ChordWeaver.exe</code>, y se pueden abrir con cualquier editor de texto. Ninguno viene adentro del <code>.zip</code>: los escribe el programa la primera vez que lo abrís.',
      'upd.f.ach': 'Los logros, las estrellas y los títulos ganados.',
      'upd.f.history': 'Las últimas diez producciones, con su audio reproducible.',
      'upd.f.story': 'Por dónde va el sendero, y lo que ya contestaste.',
      'upd.f.visitors': 'Quién te visitó y qué encuentros ya viste.',
      'upd.f.eggs': 'Lo que encontraste sin que nadie te lo dijera.',
      'upd.f.settings': 'Género, voces, pesos, idioma, tamaño de letra y todo lo demás.',
      'upd.f.output': 'Los MusicXML, los MIDI y los WAV que exportaste.',
      'upd.files.foot': 'Copiar los seis juntos siempre funciona: una preferencia que la versión nueva todavía no conocía se ignora, y una que se agregó arranca en su valor de fábrica. Ningún archivo de la vieja le hace falta a la nueva para arrancar, así que si te olvidás uno lo podés copiar después.',
      'upd.notice.title': 'Y desde la 1.1 no hace falta que estés mirando',
      'upd.notice.body': 'Al abrirse, el programa pregunta si salió una versión más nueva. Si la hay, te lo dice <strong>antes</strong> de entrar, con un cartel de dos botones: <em>Actualizar</em> abre esta página y cierra el programa, y <em>Ahora no</em> te deja seguir donde estabas. Se pregunta una sola vez por arranque, no se descarga nada solo, y si no hay internet no pasa nada: el programa se abre igual, sin avisos y sin esperas.',
      'upd.faq.title': 'Si algo salió distinto',
      'upd.q1': 'Lo descomprimí encima de la carpeta vieja.',
      'upd.a1': 'No pasó nada. El <code>.zip</code> no trae ningún <code>.json</code> adentro, así que no hay con qué pisar tu progreso: lo único que se reemplazó fue el programa. Abrilo y fijate que estén los logros.',
      'upd.q2': 'Cambié de computadora.',
      'upd.a2': 'Copiá la carpeta entera y listo. No hay nada instalado del otro lado: ni registro, ni servicios, ni licencia atada a la máquina.',
      'upd.q3': 'Abrí la versión nueva y no está mi progreso.',
      'upd.a3': 'Cerrala sin tocar nada, comprobá que los <code>.json</code> hayan quedado <strong>al lado</strong> del <code>.exe</code> y no dentro de una subcarpeta, y volvé a abrirla. El programa no borra un archivo que no puede leer: lo deja donde está y arranca de cero, así que todavía está todo.',
      'upd.q4': 'El programa no me avisó de la versión nueva.',
      'upd.a4': 'El aviso necesita internet, y sólo lo trae la 1.1 en adelante: de la 1.0.1 hay que enterarse acá. Si tenés dudas, la lista de versiones está en <a href="notas.html">las notas del parche</a>.',
      'upd.foot': 'Ver qué trae cada versión →',

      'dl.title': 'Bajalo y probalo',
      'dl.body': 'Descomprimí el <code>.zip</code> donde quieras y ejecutá <code>ChordWeaver.exe</code>. No hay instalador, no toca el registro y no escribe nada fuera de su propia carpeta.',
      'dl.btn': 'ChordWeaver 1.1.1 ALPHA · Windows · 28 MB',
      'dl.f1': 'Requisitos',
      'dl.f1v': 'Windows 64 bits. No hace falta Python.',
      'dl.f2': 'Licencia',
      'dl.f3': 'SHA-256',
      'dl.alt': '¿Preferís correrlo desde el código?',

      'foot.note': 'Software libre bajo licencia MIT.',
      'foot.repo': 'Código en GitHub',
      'foot.discord': 'Discord oficial',
      'foot.releases': 'Todas las versiones',
      'foot.issues': 'Reportar un problema',
      'foot.contrib': 'Cómo contribuir',

      'alt.modos': 'La pantalla inicial de ChordWeaver: los tres modos arriba y las dos herramientas debajo',
      'alt.acordes': 'La pantalla de acordes, con la progresión escrita compás por compás',
      'alt.tonalidad': 'La pantalla de tonalidad, con los intercambios modales y las notas de paso',
      'alt.melodia': 'El pentagrama editable con una melodía dibujada y el piano debajo',
      'alt.libro': 'El libro de teoría abierto en el capítulo sobre conducción de voces',
      'alt.chart': 'Gráfico de las cuatro voces moviéndose entre ocho acordes',
      'alt.laboratorio': 'El experimentador de armónicos, con las doce barras de la serie y los controles de vibrato',
      'alt.analizador': 'El analizador, con la partitura arriba y los acordes, el contrapunto y los adornos abajo',

      'chart.total': '{n} semitonos',
      'chart.close': 'Cerrar'
    },

    en: {
      'doc.title': 'ChordWeaver — voice leading by genetic algorithm',
      'notes.title': 'ChordWeaver — Patch notes',
      'notes.kicker': 'Patch notes',
      'notes.h1': 'Everything that <em>changed</em>',
      'notes.lede': 'One version below the other, newest first. Whatever is in the top one is what you will find if you download the program today.',
      'notes.download': 'Download 1.1.1 ALPHA',
      'notes.back': '← Back to the start',
      'notes.releases': 'Releases',
      'notes.all': 'Every release on GitHub →',
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
      'nav.tools': 'The two tools',
      'six.kicker': 'Harmony',
      'six.title': 'Six voices are too many for three notes',
      'six.body': 'A three-note chord shared between six voices forces three of them to double. Which note gets doubled and which one stands alone is not a detail of the sharing out: it is harmony, and it changes the colour of the chord. ChordWeaver decides one by one, and when the chord is already complete it uses the spare voices to colour it — a sixth, a ninth — instead of repeating the seventh from end to end.',
      'six.body2': 'And in the G7 above, the leading tone appears exactly once. Doubling it is one of the few things common-practice harmony simply does not forgive — and it is a rule you can switch off like every other one.',
      'demo6.title': 'Nine chords in six voices',
      'demo6.sub': 'Soprano, mezzo, alto, tenor, baritone and bass. Hover over a voice.',
      'demo6.note': 'of total movement. No voice crosses its neighbour, there is not one unison across the nine chords, and the largest leap in the whole piece is a fifth.',
      'alt.chart6': 'A chart of six voices moving across nine chords',
      'alt.misterio': 'A valley at night, with the moon and a figure in the distance',
      'dl.notes': 'See everything that changed in this version →',
      'dl.update': 'Already had it? How to update without losing your progress →',
      'foot.notes': 'Patch notes',
      'foot.update': 'How to update',

      'hero.eyebrow': 'Open source · MIT licence · Windows',
      'hero.hook': 'Your chords, your melody, or a blank page.',
      'hero.lede': 'A genetic algorithm turns any of the three into a progression written for several voices: which note each one sings and in which octave, with the least movement the rules of the genre allow.',
      'hero.sub': 'The chord itself is never touched. All that gets shared out are the voices.',
      'hero.download': 'Download for Windows',
      'hero.source': 'View the source',
      'hero.meta.version': 'Version 1.1.1 ALPHA',
      'hero.meta.size': '28 MB',
      'hero.meta.install': 'No installer',
      'hero.meta.python': 'No Python needed',

      'how.kicker': 'How it works',
      'how.title': 'A chord never says who sings what',
      'how.body': 'A <em>C major</em> is three notes, but four voices have to share them: someone doubles, someone jumps an octave, someone stays put. Multiply that by every chord in the piece and every possible octave, and the combinations run into the millions. ChordWeaver searches them with a genetic algorithm and keeps the best three.',

      'demo.title': 'Real output from the program',
      'demo.sub': 'Eight chords, four voices, baroque rules. Hover over a voice.',
      'demo.note': 'of total movement across eight chords: the largest leap in the piece is a fourth, and the whole bass line moves five semitones.',

      'modes.kicker': 'The three modes',
      'modes.title': 'What changes is how much you put in',
      'modes.body': 'All three end in the same place: a progression written for several voices, ready to export. The only difference is where the chords come from.',

      'mode.1.name': 'Organiser',
      'mode.1.tag': 'You bring the chords',
      'mode.1.body': 'Write the progression in chord symbols — or import it from a MusicXML file — and the program distributes the voices. You can pin a chord with the padlock if you want that exact spacing and no other.',
      'mode.2.name': 'Generator',
      'mode.2.tag': 'The program brings everything',
      'mode.2.body': 'Choose the key, the mode, which chord it starts and ends on, and how many borrowed chords from outside the scale you will tolerate. The program writes the whole harmony — which degree follows which, where each cadence lands, what gets borrowed — and only then shares it out between the voices.',
      'mode.3.name': 'Harmoniser',
      'mode.3.tag': 'You bring the melody',
      'mode.3.body': 'Draw a line on the staff, with the mouse or the piano underneath, and the program finds the chords that hold it up. The golden notes tell you in advance which ones will carry a chord.',

      'tools.kicker': 'The two tools',
      'tools.title': 'And two that compose nothing',
      'tools.body': 'The three modes above write music. These two do not write a single note: one takes the sound of one note apart until there is nothing left to take apart, and the other runs in the opposite direction to the whole rest of the program — it receives music that is already written and gives it the names. On the opening screen they sit right below the three modes.',

      'tool.1.name': 'Harmonics lab',
      'tool.1.tag': 'What a note is made of',
      'tool.1.body': 'A note is not one frequency: it is its own and, on top of it, whole multiples of its own — and that stack is the only thing separating a violin from a flute playing the same note. Here are the twelve bars, and you switch them off one by one, amplify them, and drag them off their exact place. The classic recipes come loaded so you can take them apart — sine, sawtooth, square, triangle, plucked string, clarinet, organ and singing voice — because a square wave is not another waveform: it is the same series with the bars at different heights. And whatever timbre you end up with exports to <code>.wav</code>.',
      'tool.1.note': 'The drawing and the synthesiser read the same list, so the chart cannot lie about what you hear. And the <code>.wav</code> does not come out as just any sound: it comes out tuned and with the loop marked inside it — a sampler instrument, ready to load.',
      'tool.2.name': 'Analyser',
      'tool.2.beta': 'beta',
      'tool.2.tag': 'You bring the score',
      'tool.2.body': 'Write the music on a grand staff — or bring it in from a MusicXML file — and the program tells you what every chord is: which inversion it is in, its figured bass, which degree of which key, and what function it serves. And what is going on between the voices: parallel fifths and octaves, hidden fifths, crossings, awkward leaps, and which note is an ornament and which belongs to the chord. It recognises the cadences and marks them in the bar where they land.',
      'tool.2.note': 'The rules about parallels are not written twice: the analyser asks the same evaluator the generator uses, so it cannot approve what the other one forbids. And it ships with the first eight bars of Prelude BWV 846, so there is something to open on day one.',

      'rules.kicker': 'The rules',
      'rules.title': 'Three traditions, and every one of them is up for argument',
      'rules.body': 'The genre rules over both halves. When the program is the one choosing the chords, it decides which cadences are rewarded, whether a dominant is obliged to fall by a fifth, what a colour chord costs, and which borrowed chords arrive switched on. And in sharing out the voices it decides which motions are forbidden, which are rewarded, and how strongly. What the algorithm minimises is the sum of the two, and a dial decides how much each one weighs.',

      'genre.1.name': 'Baroque',
      'genre.1.body': 'The counterpoint of common practice. No parallel fifths or octaves, contrary motion rewarded, tritone and seventh leaps penalised. It carries <strong>chorale mode</strong> inside it, which is the same thing, stricter.',
      'genre.2.name': 'Gregorian',
      'genre.2.body': 'Modal writing, older than tonality. Almost everything moves by step, narrow ambitus, tritone forbidden — and parallel perfect intervals are allowed, because there they are organum and not a mistake.',
      'genre.3.name': 'Jazz',
      'genre.3.body': 'Extended harmony. What rules here is not the bass but how the third and the seventh of one chord connect to the next. Common tones are kept and minor ninths avoided.',

      'audit.title': 'But do they actually sound different?',
      'audit.body': 'It is the obvious question, and the project ships the tool that answers it: <code>audit.py</code> runs the same progressions through every genre and then runs them again with every style rule switched off, to see what actually changes. The numbers are published, including where they are unflattering.',
      'audit.n1': 'of the links in baroque have the two outer voices moving in different directions, or one of them standing still',
      'audit.n2': 'of sevenths resolving downwards in chorale mode',
      'audit.n3': 'parallel fifths and octaves wherever the rule is switched on',
      'audit.foot': 'And gregorian is not measured with the same yardstick: there, parallel fifths and octaves are not an error being forgiven, they are the form itself. The style rewards the vox organalis shadowing the vox principalis a fourth, a fifth or an octave below — which is how organum was written.',

      'power.kicker': 'What else it does',
      'power.title': 'It does not end when the score appears',

      'f.1.t': 'Three to six voices',
      'f.1.b': 'Soprano, mezzo, alto, tenor, baritone and bass, with editable ranges voice by voice if your choir does not fit the catalogue.',
      'f.2.t': 'MusicXML and MIDI',
      'f.2.b': 'Exports to both, written by hand by the program itself. They open in MuseScore, Sibelius, Finale or whatever you use.',
      'f.3.t': 'You can hear it right there',
      'f.3.b': 'One button per solution. The audio is synthesised by the program: not a single sound file is bundled.',
      'f.4.t': 'Three solutions, not one',
      'f.4.b': 'The one it chose and the two that came close, so you can hear what each of them traded away.',
      'f.5.t': 'It tells you what it found',
      'f.5.b': 'When a deceptive cadence, a cadential 6/4 or a sixth in place of a fifth turns up, it marks it on the score and explains in one line what it is.',
      'f.6.t': 'Passing notes and flourishes',
      'f.6.b': 'It fills leaps of a third with stepwise motion, and adds period gestures on top of the result.',
      'f.7.t': 'Borrowed chords and secondary dominants',
      'f.7.b': 'Neapolitans, bVII, tritone substitutions and secondary dominants, with a dial for how much colour you want.',
      'f.8.t': 'It imports scores',
      'f.8.b': 'Reads a MusicXML file — compressed <code>.mxl</code> too — and keeps its chords, its rhythm and its bars.',
      'f.9.t': 'A history of what you made',
      'f.9.b': 'The last ten productions are kept and can be played back without regenerating anything.',
      'f.10.t': 'Command line',
      'f.10.b': 'The same engine without opening a window: <code>cli.py</code> takes the chords, the genre and every switch.',
      'f.11.t': 'Genuinely portable',
      'f.11.b': 'No installer, and it writes nothing outside its own folder. It travels on a USB stick and uninstalls by going in the bin.',
      'f.12.t': 'The engine has no dependencies',
      'f.12.b': 'The Python standard library and nothing else. No <code>music21</code>, no <code>numpy</code>, no audio library.',
      'f.13.t': 'It tells you when there is a new version',
      'f.13.b': 'On opening it asks whether something newer came out and says so before you go in. With no internet nothing happens: it opens all the same.',
      'f.14.t': 'One timbre, one instrument',
      'f.14.b': 'Whatever you build in the lab exports as a <code>.wav</code> that is tuned and looped: a sampler instrument, not a loose sound.',
      'f.15.t': 'Your progress is in plain sight',
      'f.15.b': 'Achievements, book, path and history live in text files next to the program. Copy them into the new folder and they carry on where they were.',

      'learn.kicker': 'And it teaches',
      'learn.title': 'A book that writes itself',
      'learn.body': 'Inside the program there is a theory book written for someone who never studied music: harmony, voice leading, where each style comes from, and the cadences the program recognises — with the recipe for making them appear.',
      'learn.body2': 'But it does not arrive written. Every section is tied to something you have to find: the day a deceptive cadence comes out of your work, that night the book has one more chapter. Seventy-eight sections, forty-nine achievements, and the only way to fill it is by composing.',

      'myth.kicker': 'And there is something else',
      'myth.title': 'One day, if it sees you working quietly,<br>the program is going to offer you something',
      'myth.p1': 'It does not say what. A golden button appears on the opening screen, and if you do not touch it today it will still be there tomorrow. What happens next depends on how you answer, and there is no right answer: there are three, and each one leads somewhere else.',
      'myth.p2': 'Whatever you walk, you walk by using the program normally — writing chords, generating progressions, drawing melodies. At the end of each road there is music you did not choose, and a chapter of the book that until then was locked with its title hidden.',
      'myth.p3': 'None of this is announced on any screen. This page is not going to spoil it either.',

      'gal.kicker': 'Inside',
      'gal.title': 'Seven screens, and you can always go back',
      'gal.1': 'The result, with roman numerals and whatever the program recognised',
      'gal.2': 'Choosing a genre, with what each one forbids and rewards',
      'gal.3': 'Forty-nine achievements, three stars, and not one of them says how',
      'gal.4': 'The best three solutions, each with its own play button',

      'upd.doc.title': 'Updating ChordWeaver without losing your progress',
      'upd.kicker': 'Updating',
      'upd.title': 'The new version <em>erases nothing</em>',
      'upd.steps.title': 'The five steps',
      'upd.body': 'ChordWeaver does not install: it is a folder. That, which barely shows day to day, is exactly what makes updating a matter of copying six files and one folder from the old one into the new one. Your progress is yours and it is in plain sight — not in the Windows registry, not hidden away in some <code>AppData</code>.',
      'upd.s1': 'Download the new <code>.zip</code> and unpack it <strong>next to</strong> the folder you already had, not on top of it.',
      'upd.s2': 'Close ChordWeaver if it is open: the progress files are written on the way out.',
      'upd.s3': 'Copy the six <code>.json</code> files and the <code>output/</code> folder from the old folder into the new one, and let them replace.',
      'upd.s4': 'Run <code>ChordWeaver.exe</code> in the new folder. The achievements, the book where you left it, the path and the last ten productions are all there.',
      'upd.s5': 'Only once you have checked everything is there, delete the old folder.',
      'upd.files.title': 'What each file holds',
      'upd.files.lede': 'All seven sit loose next to <code>ChordWeaver.exe</code>, and open in any text editor. None of them comes inside the <code>.zip</code>: the program writes them the first time you open it.',
      'upd.f.ach': 'The achievements, the stars and the titles you earned.',
      'upd.f.history': 'The last ten productions, with their audio still playable.',
      'upd.f.story': 'How far along the path you are, and what you already answered.',
      'upd.f.visitors': 'Who came to see you and which encounters you have seen.',
      'upd.f.eggs': 'What you found without anybody telling you.',
      'upd.f.settings': 'Genre, voices, weights, language, font size and everything else.',
      'upd.f.output': 'The MusicXML, MIDI and WAV files you exported.',
      'upd.files.foot': 'Copying all six together always works: a preference the new version did not know about yet is ignored, and one that was added starts at its factory value. The new version needs nothing from the old one in order to start, so if you forget one you can copy it afterwards.',
      'upd.notice.title': 'And from 1.1 on you do not have to keep an eye out',
      'upd.notice.body': 'On opening, the program asks whether a newer version came out. If there is one, it tells you <strong>before</strong> you go in, with a two-button notice: <em>Update</em> opens this page and closes the program, and <em>Not now</em> leaves you where you were. It asks once per launch, it downloads nothing on its own, and with no internet nothing happens: the program opens all the same, with no notice and no wait.',
      'upd.faq.title': 'If something went differently',
      'upd.q1': 'I unpacked it on top of the old folder.',
      'upd.a1': 'Nothing happened. The <code>.zip</code> carries no <code>.json</code> inside it, so there is nothing there to overwrite your progress with: all that got replaced was the program. Open it and check the achievements are there.',
      'upd.q2': 'I changed computers.',
      'upd.a2': 'Copy the whole folder and that is it. There is nothing installed on the other side: no registry, no services, no licence tied to the machine.',
      'upd.q3': 'I opened the new version and my progress is not there.',
      'upd.a3': 'Close it without touching anything, check the <code>.json</code> files ended up <strong>next to</strong> the <code>.exe</code> and not inside a subfolder, and open it again. The program does not delete a file it cannot read: it leaves it where it is and starts from zero, so everything is still there.',
      'upd.q4': 'The program did not tell me about the new version.',
      'upd.a4': 'The notice needs internet, and only 1.1 onwards carries it: 1.0.1 is one you have to hear about here. If in doubt, the list of versions is in <a href="notas.html">the patch notes</a>.',
      'upd.foot': 'See what each version brings →',

      'dl.title': 'Take it and try it',
      'dl.body': 'Unzip the <code>.zip</code> wherever you like and run <code>ChordWeaver.exe</code>. There is no installer, it does not touch the registry, and it writes nothing outside its own folder.',
      'dl.btn': 'ChordWeaver 1.1.1 ALPHA · Windows · 28 MB',
      'dl.f1': 'Requirements',
      'dl.f1v': '64-bit Windows. Python not required.',
      'dl.f2': 'Licence',
      'dl.f3': 'SHA-256',
      'dl.alt': 'Would you rather run it from source?',

      'foot.note': 'Free software under the MIT licence.',
      'foot.repo': 'Source on GitHub',
      'foot.discord': 'Official Discord',
      'foot.releases': 'All releases',
      'foot.issues': 'Report a problem',
      'foot.contrib': 'How to contribute',

      'alt.modos': "ChordWeaver's opening screen: the three modes above and the two tools below",
      'alt.acordes': 'The chords screen, with the progression written bar by bar',
      'alt.tonalidad': 'The key screen, with modal interchange and passing notes',
      'alt.melodia': 'The editable staff with a melody drawn on it and the piano below',
      'alt.libro': 'The theory book open at the chapter on voice leading',
      'alt.chart': 'A chart of four voices moving across eight chords',
      'alt.laboratorio': 'The harmonics lab, with the twelve bars of the series and the vibrato controls',
      'alt.analizador': 'The analyser, with the score above and the chords, the counterpoint and the ornaments below',

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
