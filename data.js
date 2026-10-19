/* Archivo Claudio Caveri — datos del catálogo.
   Fuente: carpeta "Archivo Claudio Caveri" (recopilación Esteban Caveri), fichas de obra .doc,
   láminas FICHA 0–42 "Celebrando la obra de Claudio Caveri" (E. Caveri, 2013),
   reportaje "Una obra en espiral" (A. Vaca Bononato) y Senda(s) de Caveri (J. P. Addesso). */

const TIPOS = {
  VI: { n: "Viviendas", c: "var(--t-vi)" },
  TE: { n: "Templos y capillas", c: "var(--t-te)" },
  RE: { n: "Retiros, seminarios, monasterios", c: "var(--t-re)" },
  CT: { n: "Comunidad Tierra y escuelas", c: "var(--t-ct)" },
  OP: { n: "Obra pública y ciudad", c: "var(--t-op)" },
  CO: { n: "Concursos y anteproyectos", c: "var(--t-co)" },
  MU: { n: "Mobiliario y oficios", c: "var(--t-mu)" }
};

const OBRAS = [
{ id:"gerli", n:"s/n", tipo:"TE", y:1950, yl:"1950", t:"Iglesia parroquial en Gerli", lugar:"Gerli, Avellaneda, Bs. As.", aut:"Claudio Caveri (agrupación Pedro de Monterau). Vitrales: Horacio Berreta", est:"proyecto",
  txt:"Proyecto de la etapa de la agrupación Pedro de Monterau, anterior a la sociedad con Eduardo Ellis. La maqueta salió del taller de la agrupación y los vitrales fueron diseñados por Horacio Berreta. Es la pieza más temprana que registra el archivo: todavía un prisma moderno, de nave alargada y bóveda rebajada.",
  fuente:"Revista Hacer, año II, n.º 2, 1950 (lámina FICHA 1)", imgs:["celebrando-caveri-gerli-capilla"], carpeta:"Capillas- Iglesias" },

{ id:"cordoba", n:"002", tipo:"CO", y:1951, yl:"1951", t:"Concurso Municipalidad de Córdoba", lugar:"Córdoba", aut:"Claudio Caveri con Eduardo (Polo) Ellis", est:"concurso", premio:"Tercer premio",
  txt:"Primer trabajo en común con Polo Ellis, hecho en el escritorio-estudio de la calle Esmeralda. El premio fue polémico: años después Alberto Prebisch, miembro del jurado, contó que se abrieron los sobres a pedido del comitente. Los dibujos que se conservan son reconstrucciones posteriores del propio Claudio, porque el material de aquellos años desapareció al morir su padre.",
  imgs:["concurso-cordoba","ficha-2"], carpeta:"concursos/002 concurso cordoba" },

{ id:"colonia-carne", n:"s/n", tipo:"CO", y:1952, yl:"1952", t:"Colonia de vacaciones de la Federación Gremial de la Industria de la Carne", lugar:"Los Reartes, Córdoba", aut:"Claudio V. Caveri y Eduardo J. Ellis", est:"concurso", premio:"Cuarto premio, Concurso Nacional",
  txt:"Concurso nacional de octubre de 1952. Publicado en la Revista de Arquitectura del 5 de octubre de 1953. Dato aportado al archivo por Luciano Rossi.",
  imgs:["colonia-de-vacaciones"], carpeta:"concursos/Concurso Sindicato de la Carne" },

{ id:"beccar", n:"001", tipo:"VI", y:1952, y1:1955, yl:"1952 · reforma 1955", t:"Casa propia en Beccar", lugar:"Beccar, San Isidro", aut:"Claudio Caveri", est:"construida",
  txt:"Casa de impronta miesiana, con columnas de perfiles Grey y un acceso franco y directo. En 1955 Caveri la reforma: cambia el acceso, abre nuevas expansiones y le da otro sentido. Ahí se vislumbra el casablanquismo. En 1958 la familia deja la casa y se muda a Moreno con el proyecto comunitario en marcha.",
  cita:["Año 1952, indudable impronta miesiana. Columnas perfiles Grey…","Esteban Caveri, FICHA 3"],
  imgs:["casa-beccar","ficha-3","ficha-6"], carpeta:"Casas y Viviendas/001 casa beccar" },

{ id:"siambon", n:"003", tipo:"RE", y:1954, yl:"1953–1954", t:"Monasterio benedictino de Siambón", lugar:"Siambón, Tucumán", aut:"Claudio Caveri", est:"construida",
  txt:"Proyecto de la capilla y asesoramiento sobre la imagen del conjunto, a partir de un trazado que ya estaba en etapa de cimentaciones. Colaboración con los benedictinos, en piedra y teja, al pie de los cerros tucumanos.",
  imgs:["siambon-vista","siambon-planta","ficha-4"], carpeta:"Casa de retiros Seminarios/003 siambon" },

{ id:"recondo", n:"s/n", tipo:"VI", y:1954, yl:"1954", t:"Casa Recondo", lugar:"Beccar, San Isidro", aut:"Claudio Caveri", est:"construida",
  txt:"Losas planas, gárgolas de hormigón y muros encalados: la transición entre la casa moderna de perfiles metálicos y el lenguaje blanco que vendrá.",
  imgs:["celebrando-caveri-recondo","ficha-5"], carpeta:"Casas y Viviendas/Casa Recondo" },

{ id:"urtizberea", n:"005", tipo:"VI", y:1954, y1:1957, yl:"1954–1957", t:"Casa Urtizberea", lugar:"Calle Clark, Lomas de San Isidro", aut:"Claudio Caveri y Eduardo Ellis", sup:"250 m²", est:"construida",
  txt:"Proyecto 1954, obra terminada en 1957 bajo la dirección de Caveri–Ellis. Las losas muestran la huella de las tablas de encofrado; el comedor reúne sillas de paja, crucifijo y cielorraso rugoso. Fotografías de época de Boggio Videla.",
  imgs:["c-caveri-e-ellis-casa-urtizberea-11-vista-comedor","planta-casa-urtiz","ficha-7"], carpeta:"Casas y Viviendas/005 Urtizberea" },

{ id:"fatima", n:"006", tipo:"TE", y:1955, y1:1957, yl:"1955–1957", t:"Iglesia Nuestra Señora de Fátima", alt:"Capilla Fátima de Martínez", lugar:"Av. del Libertador, Martínez", aut:"Claudio Caveri y Eduardo Ellis", sup:"1.250 m²", est:"construida", destacada:true,
  txt:"Un concurso para una iglesia en Martínez quedó desierto y Alberto Prebisch, del jurado, recomendó al comitente buscar a Caveri–Ellis. El resultado fue el ícono del grupo Casas Blancas y de la reacción antirracionalista argentina: una nave que desciende, cielorraso plegado, luz natural tamizada sobre mármol y cubiertas piramidales rojas. Hoy es monumento histórico provincial.",
  cita:["Fátima tiene un defecto: si le agregan algo la matás.","Claudio Caveri, reportaje de A. Vaca Bononato"],
  imgs:["iglesia-de-fatima-vista","vista-original-de-epoca","iglesia-de-fatima-interior","croquis-original-claudio-caveri","c-caveri-e-ellis-n-s-de-fatima-en-obra-03","detalle-cupula","iglesia-de-fatima-martinez-planta","ficha-8","inauguracion-fatima"],
  carpeta:"Capillas- Iglesias/006 fatima martinez" },

{ id:"ellis", n:"s/n", tipo:"VI", y:1956, yl:"década de 1950", t:"Casa Ellis", lugar:"Pacheco, Bs. As.", aut:"Proyecto y dirección: Eduardo Ellis, con consultas a Caveri", est:"construida",
  txt:"En algunos planos originales figura como proyectista Caveri–Ellis. Polo Ellis aclaró que la proyectó solo, aunque reconoció varias consultas con Claudio en el anteproyecto, cuando todavía estaban asociados de hecho. Por eso integra el archivo Caveri–Ellis.",
  cita:["Una persona muy íntegra, que de muchas maneras reflejaba su agradecimiento a Claudio por haberle enseñado arquitectura.","Esteban Caveri, 2014"],
  imgs:["casa-ellis","e-f-parra"], carpeta:"Casas y Viviendas/Casa ELLIS" },

{ id:"comunidad", n:"s/n", tipo:"CT", y:1958, y1:2006, yl:"1958 – continúa", t:"Comunidad Tierra", alt:"Escuela Integral Trujui", lugar:"Roldán 10702, Trujui, Moreno", aut:"Claudio Caveri y aportes diversos", sup:"4.000 m²", est:"construida", destacada:true,
  txt:"En 1958 se compran las tierras en Trujui; en julio de 1960 se instalan las familias pioneras Caveri y Brun, después de casi dos años en una casa-quinta alquilada. La arquitectura crece por suma de aportes: casa Brun, casa Caveri, casa Galeazzi, la torre tanque, conejeras, tambo, talleres, la escuela. El ideario fundacional era enriquecerse con las diferencias. La Comunidad se disuelve en 1975 y quedan las dos instituciones educativas de la Cooperativa Tierra. Arcos ojivales de ladrillo, cubiertas de ladrillo armado y ferrocemento, zócalos de colores justificados por mantenimiento.",
  cita:["Nada más atractivo para los chicos que montar esta arquitectura.","Esteban Caveri, FICHA 20"],
  imgs:["comunidad-2","comunidad-1","comunidad-3","cooperativa-tierra-planta-conjunto","primer-capilla-comunidad-tierrar","torre-comunidad","aerea-completa-egb","ficha-9","ficha-20","ficha-33","ficha-34"],
  carpeta:"Ex- Comunidad- CoopTierra" },

{ id:"casa-caveri", n:"007", tipo:"VI", y:1959, y1:1975, yl:"1959 – mediados de los 70", t:"Casa de Claudio Caveri en Trujui", lugar:"Comunidad Tierra, Trujui, Moreno", aut:"Claudio Caveri", est:"construida",
  txt:"La casa de Claudio y Delia Puiggari, número 2 en la foto aérea de 1963. Se completó promediando los setenta y se reformó según las necesidades comunitarias y luego familiares. Hastiales escalonados, postigos oscuros, escalera de ladrillo contra el muro curvo, el tilo del patio de acceso. Ahí lo entrevistó Vaca Bononato para el reportaje Una obra en espiral.",
  imgs:["casa-caveri-patio-acceso-tilo","casa-caveri-escalera-jardin","casa-caveri-vista-estar","casa-claudio-en-trujui-planta","mama-y-papa","ficha-10"], carpeta:"Casas y Viviendas/007 casa papa" },

{ id:"brun", n:"008", tipo:"VI", y:1960, yl:"1960", t:"Casa Brun", lugar:"Comunidad Tierra, Trujui, Moreno", aut:"Claudio Caveri", est:"construida",
  txt:"Casa de Emilio Brun y Silvia Blanco, la otra familia pionera de Comunidad Tierra. Al principio los Brun vivieron en la torre tanque.",
  imgs:["casa-brun","planta-casa-brun","ficha-11"], carpeta:"Casas y Viviendas/008 casa brun" },

{ id:"lacau", n:"022", tipo:"VI", y:1961, y1:1990, yl:"1961 · ampliación 1990", t:"Casa de campo Lacau", lugar:"Lincoln, Bs. As.", aut:"Claudio Caveri. Ampliación: Claudio y Esteban Caveri, Jorge Criscuolo", est:"construida",
  txt:"Casa de campo para la familia Lacau: teja colonial, chimeneas de remate redondeado, galería con rejas frente a la llanura. Treinta años después, padre e hijo proyectan su ampliación con un volumen poligonal.",
  imgs:["lacau","lacau-int","celebrando-caveri-lincoln","ficha-12","ficha-30"], carpeta:"Casas y Viviendas/022 Lacau" },

{ id:"escuela", n:"s/n", tipo:"CT", y:1962, yl:"1962 – años 2000", t:"Escuela primaria y jardín de Comunidad Tierra", lugar:"Trujui, Moreno", aut:"Claudio Caveri", est:"construida",
  txt:"Primeras aulas de 1962 con arcos ojivales encalados. El ferrocemento permitió adaptar los edificios a realidades cambiantes con bajo costo y mano de obra simple, a escala de los chicos. Hasta 2004, al volver en febrero, los docentes preguntaban: qué habrán hecho este verano.",
  cita:["Aquí recuerdo una crítica parecida a la escuela de Darmstadt del Arq. Hans Scharoun.","Esteban Caveri, FICHA 38"],
  imgs:["celebrando-caveri-escuela","corte-biblioteca-escuela-trujui","ficha-13","ficha-38"], carpeta:"Ex- Comunidad- CoopTierra/PLANOS Y DIBUJOS COOPERATIVA ESCUELAS" },

{ id:"biblioteca", n:"013", tipo:"CO", y:1962, yl:"1962", t:"Concurso Biblioteca Nacional", lugar:"Barrancas de la Recoleta, Buenos Aires", aut:"Claudio Caveri", est:"concurso",
  txt:"Anteproyecto escalonado sobre la barranca, con cubiertas piramidales rematadas en agujas y un gran patio octogonal. Su abordaje como arquitectura de ciudad recibió muchas críticas; Caveri volvió sobre ese concurso en Y América ¿qué?",
  imgs:["concurso-biblioteca-aerea","concurso-biblioteca-maqueta","ficha-13-bib"], carpeta:"concursos/013 concurso biblioteca" },

{ id:"moore", n:"011", tipo:"VI", y:1963, y1:1964, yl:"1963–1964", t:"Casa Moore", lugar:"Arana 170, Boulogne", aut:"Claudio Caveri", sup:"180 m²", est:"construida",
  txt:"Gran arco apuntado blanco sobre basamento de ladrillo, chimeneas puntiagudas y bóvedas interiores. Planta organizada en diagonal. Publicada en Nuestra Arquitectura 426; Caveri le dedicó una nota en Y América ¿qué?: A 40 años de la casa Moore.",
  imgs:["moore-vista","moore-interior","moore-vista-campo","planta","ficha-14"], carpeta:"Casas y Viviendas/011 Casa Moore" },

{ id:"santa-maria", n:"010", tipo:"TE", y:1964, y1:1966, yl:"1964–1966", t:"Iglesia Santa María", alt:"Parroquia Nuestra Señora de Guadalupe", lugar:"Güemes y Victorica, Moreno", aut:"Claudio Caveri", sup:"450 m²", est:"construida", destacada:true,
  txt:"Planta de contorno estrellado y cubierta en carpa que conduce las fuerzas hacia la tierra. Para Vaca Bononato integra, con Fátima y El Jacarandá, una trilogía brillante. La Prensa la reseñó en junio de 1969 como un templo de líneas irregulares.",
  cita:["Las fuerzas de la gravedad conducidas a la tierra, cavando en el medio de la luz.","A. Vaca Bononato, reportaje"],
  imgs:["capilla-santa-maria-moreno-vista","capilla-santa-maria-interior","20160224-131747","corte-sta-maria-guadalupe","planta-sta-maria-guadalupe","ficha-15","la-prensa-junio-1969-1"], carpeta:"Capillas- Iglesias/010 santa maria (Guadalupe)" },

{ id:"muebles", n:"s/n", tipo:"MU", y:1964, y1:1974, yl:"1964–1974", t:"Muebles Casas Blancas", lugar:"Taller de Comunidad Tierra", aut:"Claudio Caveri y taller comunitario", est:"construida",
  txt:"La carpintería que Claudio lideró fue durante largos períodos el sostén económico de la Comunidad. Atendía personalmente a los clientes, que esperaban hasta dos años sus muebles a medida. También se hacían tapices y mantas, herrajes, lámparas, candelabros y arañas.",
  imgs:["celebrando-caveri-muebles","ficha-19"], carpeta:"Fotografias Articulos y otros Claudio Caveri" },

{ id:"jacaranda", n:"018", tipo:"RE", y:1964, y1:1966, yl:"1964–1966", t:"El Jacarandá", alt:"Casa de ejercicios espirituales", lugar:"Reconquista, Santa Fe", aut:"Claudio Caveri. Dirección local: Ing. Nardelli, Arq. Villafañe", sup:"1.200 m²", est:"construida", destacada:true,
  txt:"Encargo del obispo Iriarte, que lo llevó a recorrer las afueras de Reconquista para que la casa no fuera distinta del modo de vida de algodoneros y hacheros. Claustro central vacío pero con abras, rodeado de pequeñas construcciones entrelazadas: capilla, biblioteca, refectorio, auditorio y dormitorios, en espiral centrípeta y centrífuga. Muros portantes y arcos ojivales de ladrillo común, manto de ferrocemento y ladrillo de revestimiento. Es la única obra completa de Caveri fuera de la provincia de Buenos Aires. En 2015 el MoMA la eligió para representarlo en Latin America in Construction 1955–1980. Desde 2016 se gestiona su declaratoria patrimonial.",
  cita:["Esteban, tenés que conocer El Jacarandá.","Claudio Caveri a su hijo, al terminar Maschwitz (2001)"],
  imgs:["50-el-jacaranda","71-el-jacaranda","3-desde-acceso","el-jacaranda-vista-patio","el-jacaranda-interior-galeria","el-jacaranda-interior-capilla","el-jacaranda-planta","p2191348","ficha-16","catalogo-moma-jacaranda"],
  carpeta:"Casa de retiros Seminarios/018 EL JACARANDA" },

{ id:"colegio-maximo", n:"015", tipo:"TE", y:1966, yl:"1966", t:"Reforma de la capilla del Colegio Máximo", lugar:"San Miguel, Bs. As.", aut:"Claudio Caveri", est:"construida",
  txt:"En los inicios de Comunidad Tierra hubo seminaristas del Colegio Máximo colaborando. La Comunidad se definió laica, pero sus miembros tenían lazos con los jesuitas y con la idea franciscana de vida austera y trabajo.",
  imgs:["ficha-17"], carpeta:"Capillas- Iglesias/015 capilla colegio. Maximo" },

{ id:"sum", n:"s/n", tipo:"CT", y:1966, yl:"1966", t:"SUM de la Comunidad", lugar:"Comunidad Tierra, Trujui", aut:"Claudio Caveri", est:"construida",
  txt:"Comedor, sala de estar, cocina y lavadero comunitarios, con los talleres detrás. Primeras experiencias con metal desplegado integral, origen de las cubiertas que, según Tello, rugen, contienen y exclaman.",
  imgs:["ficha-18"], carpeta:"Ex- Comunidad- CoopTierra" },

{ id:"etit", n:"s/n", tipo:"CT", y:1970, y1:2004, yl:"años 70 – 2000", t:"Escuela Técnica Integral Trujui (ETIT)", lugar:"Trujui, Moreno", aut:"Claudio Caveri, Esteban Caveri y comunidad educativa", est:"construida",
  txt:"Cuando la Comunidad empieza a disolverse, Claudio impulsa una escuela de oficios que se transforma en la Escuela Técnica. Él la dirige y enseña carpintería, electricidad, maestría mayor de obras y filosofía a los chicos del barrio. Aprender haciendo fue el eje, junto con la autoconstrucción que empezaba por la propia escuela. Las galerías conectan comedores convertidos en aulas, salas de lectura y biblioteca; el mural de Passarella sigue ahí.",
  imgs:["proyecto-galerias-etit10","ficha-34","ficha-33"], carpeta:"Ex- Comunidad- CoopTierra/Proyecto galerias" },

{ id:"autoconstruccion", n:"014 · 017 · 021", tipo:"VI", y:1974, y1:1980, yl:"1974–75 · 1980", t:"Viviendas por esfuerzo propio y ayuda mutua", lugar:"Calles Aeronáutica Argentina y Belisario Roldán, Trujui", aut:"Claudio Caveri con Jorge Rodríguez y Esteban Caveri", est:"construida",
  txt:"En terrenos de la Comunidad, un proyecto participativo que empezó con doce familias jóvenes, varias de docentes de la Escuela Integral Trujui; se concretaron cinco casas. Antes, en 1974–75, se habían levantado otras tres por autoconstrucción, entre ellas la casa Caracol y la casa de Mirta (Arlt). Plantas curvas y radiales, cubiertas en carpa.",
  imgs:["conjunto-trujui-vista1","conjunto-viviendas-autoconstruccion-trujui","casa-asselborn","casa-arlt","casa-caracol-monoambiente","casa-mirta-en-trujui-plantas","ficha-23"], carpeta:"Casas y Viviendas/CONJUNTO DE VIVIENDAS POR AUTOCONSTRUCCION" },

{ id:"maria-madre", n:"016", tipo:"TE", y:1979, yl:"1979", t:"Iglesia María Madre de la Iglesia", lugar:"Comunidad Tierra, Trujui, Moreno", aut:"Claudio Caveri. Frescos: Marta Caveri. Vitrales: Juan Sebastián Brun y Esteban Caveri", est:"construida",
  txt:"Ferrocemento de capa simple, estructuras reticuladas y nervaduras en forma de catenaria. Hoy pertenece al Obispado de Merlo–Moreno. Es la contracara de Fátima: admite agregados.",
  cita:["A la capilla de acá, en cambio, le ponés lo que quieras y ni se inmuta.","Claudio Caveri, reportaje"],
  imgs:["capilla-trujui-vista","capilla-trujui-corte","ficha-21"], carpeta:"Capillas- Iglesias/016 capilla trujui" },

{ id:"anfiteatro", n:"s/n", tipo:"CO", y:1980, yl:"1980", t:"Concurso Anfiteatro en San Miguel", lugar:"San Miguel, Bs. As.", aut:"Claudio Caveri", est:"concurso",
  txt:"Gran estructura triangular con nervaduras en abanico sobre una plaza; la revista local lo presentó como remodelación de la plaza de San Miguel.",
  imgs:["ficha-22","revista-san-miguel"], carpeta:"Libros y publicaciones/036 Textos digitalizados articulos varios/Imagenes LIBRO" },

{ id:"loteria", n:"032", tipo:"CO", y:1983, yl:"1983", t:"Concurso Lotería Nacional", lugar:"Buenos Aires", aut:"Claudio Caveri, Esteban Caveri, Jorge Rodríguez, Jorge Criscuolo", est:"concurso", premio:"No presentado",
  txt:"Quedaron solos padre e hijo con pocos días para la entrega y no lo presentaron. Lo completaron después como ejercicio, para volver sobre la arquitectura de ciudad tan criticada en la Biblioteca Nacional.",
  cita:["Finalmente quedamos muy conformes y nos divertimos.","Esteban Caveri, FICHA 25"],
  imgs:["concurso-loteria-perspectiva","ficha-25"], carpeta:"concursos/032 concurso loteria" },

{ id:"rufino", n:"033", tipo:"CO", y:1983, yl:"c. 1983", t:"Concurso Centro Cultural y Municipalidad de Rufino", lugar:"Rufino, Santa Fe", aut:"Claudio Caveri con Jorge Rodríguez y Esteban Caveri", est:"concurso",
  txt:"Cúpulas vidriadas, invernadero, auditorio en subsuelo y torre campanario. Para Esteban, junto con Lotería, la mejor experiencia proyectual compartida con su padre.",
  imgs:["concurso-rufino-peatonal","ficha-24"], carpeta:"concursos/033 concurso rufino" },

{ id:"estacion-moreno", n:"026", tipo:"OP", y:1983, yl:"1983", t:"Estación terminal de Moreno", lugar:"Bartolomé Mitre y M. Melo, Moreno", aut:"Claudio Caveri", est:"proyecto",
  txt:"Claudio inició gestiones ante la Nación para aprovechar terrenos ociosos del ferrocarril y adjuntó este anteproyecto, que se conoció recién a fines de los ochenta. La estación de transferencia que se construyó años después siguió otro camino.",
  cita:["Nadie es profeta en su tierra.","Esteban Caveri, FICHA 31"],
  imgs:["estacion-moreno1983","planta-estacion-moreno-1984-ret"], carpeta:"obra publica/026 Anteproy Estacion Moreno" },

{ id:"viviendas-moreno", n:"s/n", tipo:"OP", y:1984, yl:"1984", t:"Viviendas agrupadas de baja densidad", lugar:"Moreno", aut:"Claudio Caveri; colaboradores Esteban Caveri y Jorge Criscuolo", est:"proyecto",
  txt:"Anteproyecto para la Municipalidad de Moreno, cuando Caveri era funcionario municipal: unidades de dos plantas, techos de teja, pérgolas y cocheras sobre terreno en pendiente.",
  imgs:["ficha-26"], carpeta:"obra publica/proyectos barriales" },

{ id:"salatino", n:"019", tipo:"VI", y:1984, y1:1986, yl:"1984–1986", t:"Casa Salatino", lugar:"Calle San José, Bella Vista", aut:"Claudio y Esteban Caveri", sup:"350 m²", est:"construida",
  txt:"Volúmenes blancos curvos, aberturas de bordes redondeados, pérgolas y techos de teja. Fotografiada en 1985 y documentada con plantas de techos coloreadas.",
  imgs:["salatino-vista","salatino-interior","ficha-27"], carpeta:"Casas y Viviendas/019 casa salatino" },

{ id:"rodriguez", n:"s/n", tipo:"VI", y:1986, yl:"1986", t:"Casa Rodríguez", lugar:"Bella Vista", aut:"Estudio con Jorge Rodríguez; Claudio Caveri con participación menor", est:"construida",
  txt:"Entre 1986 y 1988 Esteban Caveri y Jorge Rodríguez forman estudio y hacen varias viviendas, algunas asociados con Enrique Brunati, mientras Claudio está en la función pública.",
  imgs:["ficha-28"], carpeta:"Libros y publicaciones/036 Textos digitalizados articulos varios/Imagenes LIBRO" },

{ id:"wissengrad", n:"023", tipo:"VI", y:null, yl:"s/f", t:"Casa Wissengrad", alt:"casa Adolfo", lugar:"s/d", aut:"Estudio Caveri", est:"proyecto",
  txt:"Fachadas, planta y maqueta en el archivo. Faltan año y ubicación: queda como registro a completar.",
  imgs:["casa-wissengrad","wissengrad-maqueta"], carpeta:"Casas y Viviendas/023 Casa Wissengrad" },

{ id:"ricci", n:"024", tipo:"VI", y:null, yl:"s/f", t:"Casa Bebe Ricci", lugar:"s/d", aut:"Estudio Caveri", est:"construida",
  txt:"Plantas, corte y fotografías actuales (2016) del patio. Falta datar el proyecto.",
  imgs:["casa-bebe"], carpeta:"Casas y Viviendas/024 Casa Bebe Ricci" },

{ id:"olmos", n:"023", tipo:"OP", y:1988, y1:1991, yl:"1988–1991", t:"Cárcel de mediana seguridad de Olmos", alt:"Anexo Olmos", lugar:"Av. 44, La Plata", aut:"Claudio y Esteban Caveri; colaborador Jorge Criscuolo", sup:"5.000 m²", est:"inconclusa",
  txt:"Dentro del Programa Olmos impulsado por Luis Brunati y llevado adelante con Ana Goitía de Cafiero, se proyecta una cárcel de recuperación construida con los propios internos, voluntarios, y con talleres revitalizados. Pabellones en espiral alrededor de un patio-jardín y estar-comedor circular, puertas de madera con cerradura. Tras la renuncia de Brunati las puertas llegaron con cerrojo carcelario; en mayo de 1990 un incendio en el pabellón de los voluntarios causó decenas de muertes. El equipo renunció y la obra quedó construida a la mitad, con cambios del Servicio Penitenciario.",
  cita:["La experiencia de la cárcel de recuperación… quedó trunca.","Claudio Caveri"],
  imgs:["olmos-vista-aerea","olmos-pabellon","planta-de-conjunto-olmos","olmos-profe","foto-arq-caveri-patio-pabellon-olmos","olmos","ficha-29","enlace-olmos"], carpeta:"obra publica/023 olmos" },

{ id:"hospital-moreno", n:"028", tipo:"OP", y:1990, yl:"1990", t:"Refuncionalización del Hospital de Moreno", lugar:"Moreno", aut:"Claudio Caveri; colaboraron Ana Bajcura, Graciela Carballo, Esteban Caveri, Jorge Criscuolo", est:"proyecto",
  txt:"Propuesta para recuperar el viejo hospital. Se construyó en cambio uno nuevo sobre una plaza y se demolieron muchos metros del antiguo. En funciones de gobierno (1985) Caveri impulsó también el parque Los Robles y un desarrollo turístico con Ana Bajcura.",
  imgs:["hospital-de-moreno-vista1","ficha-32"], carpeta:"obra publica/028 hospital moreno" },

{ id:"molinos", n:"020", tipo:"VI", y:1992, y1:1993, yl:"1992–1993", t:"Casa Molinos", alt:"casa Carmen Urtiz", lugar:"Alsina 500, San Isidro", aut:"Claudio y Esteban Caveri", sup:"120 m²", est:"construida",
  txt:"Un terreno de tres metros de frente. La casa se vuelve un camino: pasillo-raja, muro blanco curvo, tabiques verticales, pileta de forma orgánica.",
  cita:["Cuando la casa se transforma en un camino en busca del lugar.","FICHA 35"],
  imgs:["carmen-pileta","carmen-planta","ficha-35"], carpeta:"Casas y Viviendas/020 casa carmen urtiz" },

{ id:"capba", n:"025", tipo:"OP", y:1994, yl:"1994", t:"Sede del Colegio de Arquitectos, Distrito III", lugar:"Morón, Bs. As.", aut:"Claudio Caveri", est:"proyecto",
  txt:"Anteproyecto en esquina con bandas blancas ondulantes, tanque cilíndrico en la coronación y acceso con cubierta piramidal. Son los años del Taller Escuela de Arquitectura (TEA) del distrito.",
  imgs:["anteproyecto-colegio-de-arq","ficha-36"], carpeta:"obra publica/025 anteproy CAPBA MORON" },

{ id:"castelar", n:"s/n", tipo:"VI", y:1995, yl:"1995", t:"Vivienda y comercio en Cruce Castelar", lugar:"Moreno", aut:"Claudio Caveri", est:"proyecto",
  txt:"Dos locales al frente, patio central con fuente, pileta y tres dormitorios en planta alta; cubiertas ondulantes.",
  imgs:["ficha-37"], carpeta:"Libros y publicaciones/036 Textos digitalizados articulos varios/Imagenes LIBRO" },

{ id:"seminario-san-martin", n:"034", tipo:"CO", y:1998, yl:"1998", t:"Concurso Seminario San Martín", lugar:"San Martín, Bs. As.", aut:"Claudio y Esteban Caveri; col. Jorge Criscuolo", est:"concurso",
  txt:"Planteo abierto y plural inspirado en El Jacarandá: pabellones curvos en abanico, un árbol al centro y la capilla rematada en aguja como atractor.",
  cita:["Tipología con claustro central vacío, pero con abras, no enclaustrado.","Claudio Caveri, memoria del concurso"],
  imgs:["concurso-seminario-maqueta","ficha-39"], carpeta:"concursos/034 concurso semunari san martin" },

{ id:"goethe", n:"031", tipo:"CO", y:null, yl:"s/f", t:"Concurso Instituto Goethe", lugar:"San Isidro", aut:"Claudio y Esteban Caveri; col. Jorge Criscuolo", est:"concurso",
  txt:"Aulas agrupadas en sectores circulares y radiales, hall central de doble altura con lucernario piramidal.",
  imgs:["concurso-goethe-cortes-vista-acceso","ficha-40"], carpeta:"concursos/031 concurso goethe" },

{ id:"irenaika", n:"029", tipo:"RE", y:1999, y1:2002, yl:"1999–2002", t:"Irenaika, centro de recuperación integral de la persona", alt:"Seminario multirreligioso de Maschwitz", lugar:"Independencia y Mendoza, Ing. Maschwitz", aut:"Anteproyecto: Claudio Caveri. Proyecto y dirección: Estudio Caveri (Claudio y Esteban Caveri, Alejandro Faillace; col. Jorge Criscuolo)", sup:"3.000 m²", est:"construida", destacada:true,
  txt:"El padre Moreno, el mismo comitente de Fátima, pidió 40 habitaciones, aulas, un oratorio multirreligioso y un auditorio para 200 personas alrededor de un claustro. Caveri imaginó algo más abierto: un círculo y tres círculos que lo rodean, tres claustros que se unen en uno, pensados desde la Trinidad de Zubiri. El oratorio desciende como la choza de los yekuana, con un árbol de la vida que sostiene el techo. Comitente: Fundación Conciencia y Ciencia, Memorial Fidel y María Moreno.",
  cita:["Prefiero las ideas en formación, donde se pueda agregar y sacar.","Claudio Caveri, reportaje"],
  imgs:["a-claustro-central","maschwitz-vista-desde-el-lago","auditorio-1","sala-del-arbol4","dibujo8claustro","dibujo6planta-sector-1","croquis-interior-auditorio-maschwitz","ficha-41","summa-63"], carpeta:"Casa de retiros Seminarios/029 Maschwitz" },

{ id:"fatima-maschwitz", n:"027", tipo:"TE", y:2001, y1:2002, yl:"2001–2002", t:"Capilla Nuestra Señora de Fátima de Maschwitz", lugar:"Mendoza s/n, Ing. Maschwitz", aut:"Claudio y Esteban Caveri; Alejandro Faillace, arquitecto asociado. Murales: Marta Caveri", sup:"250 m²", est:"construida",
  txt:"La segunda Fátima, con forma de hipocampo. El padre Moreno pidió las ocho bienaventuranzas; Caveri las cruzó con las catorce estaciones del vía crucis y su hija Marta pintó una procesión que empieza enterrada, con los perseguidos por la justicia, y sube hasta la crucifixión. Así se armó la espiral: el descenso para el ascenso.",
  cita:["La espiral es una especie de círculo, pero un círculo no cerrado.","Claudio Caveri, reportaje"],
  imgs:["capilla-maschwitz","cupula-espiral","mural-via-crucis","roseton-vitraux","interior-vista-desde-coro","planta-croquis-capilla","ficha-42"], carpeta:"Capillas- Iglesias/027 Capilla Maschwitz" }
];

const LIBROS = [
 { id:"hombre", y:1967, ord:"1", t:"El hombre a través de la arquitectura", ed:"Ed. Lohlé, Buenos Aires", cov:"pdf-el-hombre-a-traves-de-la-arquitectura-ed-lohle-1967", pdf:true,
   d:"Primer libro. Incluye la imagen de Chesterton que ordena toda su obra: el teatro medieval dividido en cielo, tierra e infierno, y un Dios que nació en un establo. Ahí se cruzan Nietzsche y Chesterton: lo vital está debajo de los pies." },
 { id:"sistemas74", y:1974, ord:"2", t:"Los sistemas sociales a través de la arquitectura", ed:"Comunidad del Sur, Montevideo", cov:"pdf-los-sistemas-ed-comunidad-del-sur-1974", pdf:true,
   d:"Editado en Uruguay. Problemas de aduana impidieron su ingreso a Buenos Aires; el archivo conserva una maqueta y el original digitalizado." },
 { id:"sistemas76", y:1976, ord:"3", t:"Los sistemas sociales… Organización popular", ed:"Edición de 1976", cov:null, pdf:true,
   d:"Segunda versión del estudio sobre sistemas sociales y arquitectura, orientada a la organización popular." },
 { id:"ficcion", y:1987, ord:"4", t:"Ficción y realismo mágico en nuestra arquitectura", ed:"Ed. CP67, Buenos Aires", cov:"pdf-ficcion-y-realismo-magico-en-nuestra-arquitectura-ed-cp67-1987", pdf:true,
   d:"Primero de la serie de ensayos que Y América ¿qué? quiso reunir alrededor del ser y el estar." },
 { id:"surtectura", y:1991, ord:"5", t:"Surtectura", ed:"Ed. Carlos Calle, Buenos Aires", cov:"surtectura", pdf:true,
   d:"Después de la experiencia política y del Plan Olmos, Claudio retoma la teoría. Abre con un cuentosayo, Una visita a Eurolandia; sigue con De Fátima a Olmos y el vacío semántico de Dios; cierra con ¿Fábula o historia?" },
 { id:"nacpop", y:1993, ord:"6", t:"Nac & Pop. Caminos y vías muertas en la arquitectura americana", ed:"Cuadernos del CAPBA", cov:"pdf-nac-pop-capba-iii", pdf:true,
   d:"Nacido de las jornadas del Taller Escuela de Arquitectura (TEA) del Distrito III, con Petrilli, Gómez, A. González y Horacio Giró." },
 { id:"urbanismo", y:1994, ord:"7", t:"Urbanismo europeo y pre-recinto americano", ed:"Cuadernos del CAPBA", cov:"urbanismo-europeo-y-pre", pdf:true,
   d:"Otro mensaje de las jornadas del TEA. Contrapone el urbanismo de recinto europeo con un pre-recinto americano." },
 { id:"paradojas", y:1995, ord:"8", t:"La arquitectura y las paradojas del sentido", ed:"ETIT, fotoduplicado", cov:"pdf-la-arquitectura-y-las-paradojas-del-sentido-ed-etit-1995", pdf:true,
   d:"Sin editorial interesada, Caveri lo publicó como pudo, fotoduplicado en la Escuela Técnica. Esteban lo ofrece ahora libre y gratuito en PDF." },
 { id:"mirar", y:2001, ord:"9", t:"Mirar desde aquí o la visión oscura de la arquitectura", ed:"Ed. Syntaxis, Buenos Aires", cov:"pdf-mirar-desde-aqui", pdf:true,
   d:"La mirada situada como punto de partida: mirar desde aquí y no desde un afuera universal." },
 { id:"frontera", y:2002, ord:"10", t:"Una frontera caliente", ed:"Ed. Syntaxis, Buenos Aires", cov:"una-frontera-caliente", pdf:true,
   d:"La frontera como lugar de contacto y conflicto. Josep Maria Montaner, al leerlo, le objetó que dejaba desdibujada la potencia hegemónica de los Estados Unidos; esa objeción dio origen al libro siguiente." },
 { id:"america", y:2006, ord:"11", t:"Y América ¿qué? Balance entre el ser y el estar como destino del hacer americano y su reflejo en la arquitectura", ed:"Ed. Syntaxis, Buenos Aires", cov:"pdf-y-america-que-ed-sintaxis-2006", pdf:true,
   d:"Discute el artículo de Roberto Fernández que hacía de Kusch un continuador de Heidegger y de Comunidad Tierra un escape romántico. Reúne los ensayos anteriores alrededor del ser y el estar, con anexos sobre Fátima, la casa Moore, la Biblioteca Nacional y Olmos." }
];

const INEDITOS = [
 ["América o el lugar del pliegue","2007 · 2010","doc y pdf; diapositivas con epígrafe de Deleuze"],
 ["Del espacio vacío y el tiempo nómade de las máquinas deseantes al espacio cosa y el tiempo como arraigo y misterio","s/f","pdf ilustrado, 52 MB"],
 ["Crisis del poder y la arquitectura como espejo","s/f","pdf"],
 ["Metodología y campo de la realidad","s/f","pdf"],
 ["Sintaxis de la arquitectura","s/f","pdf"],
 ["¿Qué es eso de urbanizar?","s/f","doc y pdf, dos versiones"],
 ["Replegar","s/f","doc ilustrado, 180 MB"],
 ["La desconstrucción como juego rebelde contra lo antiguo","s/f","pdf"],
 ["El arquitecto Peter Eisenman","s/f","doc; base de la referencia R6 de Y América ¿qué?"],
 ["América en búsqueda de su propio relato","s/f","pdf"]
];

const SOBRE = [
 ["Maestros de la Arquitectura Argentina: Claudio Caveri","Alejandro Vaca Bononato","Clarín – IAA FADU UBA, 2014","pdf-claudio-caveri-ed-clarin-uba-2014"],
 ["Latin America in Construction: Architecture 1955–1980","The Museum of Modern Art","Nueva York, 2015. El Jacarandá representa a Caveri","catalogo-moma-jacaranda"],
 ["Fátima, monumento histórico","Amigos de Fátima","Buenos Aires, 2002","pdf-fatima-monumento-historico-ed-amigos-de-fatima-2002"],
 ["Arquitectos iberoamericanos, siglo XX","Fomento Cultural Banamex","México, 2006","banamex"],
 ["Diccionario de arquitectura en la Argentina","Clarín Arquitectura","Buenos Aires, 2004","pdf-diccionario-de-arq"],
 ["Vanguardias argentinas","Clarín Arquitectura","s/f","pdf-vanguardias"],
 ["Una obra en espiral. Reportaje a Claudio Caveri","Alejandro Vaca Bononato","c. 2003, Comunidad Tierra",null]
];

const PRENSA = [
 [1950,"Revista Hacer","año II, n.º 2","Iglesia parroquial en Gerli"],
 [1953,"Revista de Arquitectura","5 de octubre","Colonia de vacaciones, Los Reartes"],
 [1964,"Primera Plana","mayo","nota con reverso"],
 [1965,"Diario El Día, La Plata","4 de julio","notas I y II"],
 [1965,"Jubilee (EE. UU.)","","A middle class experiment in Argentina"],
 [1966,"Clarín Revista","30 de abril",""],
 [1966,"Vivir","n.º 66","páginas 8 a 11 (reed. 1968)"],
 [1968,"Gente","","artículos"],
 [1969,"La Prensa","junio","Irregularidad de líneas en la construcción de un templo"],
 [1974,"La Nación","","Comunidad Tierra, una experiencia vigente"],
 [1982,"Summa","n.º 180",""],
 [1983,"Clarín","","Caveri: aquella vieja magia blanca (Sabugo)"],
 [1984,"Nuestra Arquitectura","n.º 521, año 56",""],
 [1986,"Summa","n.º 231",""],
 [1988,"Clarín","22 de febrero y 13 de septiembre","Programa Olmos"],
 [1989,"Flash","","Olmos"],
 [1989,"Summa","n.º 265",""],
 [1991,"Carta de Damián Bayón","","correspondencia, también 1994"],
 [1995,"La Nación","","Damián Bayón (1915–1995)"],
 [2002,"Enlace (México)","año 12, n.º 5, mayo","Olmos"],
 [2002,"La Nación Arquitectura","","nota con reverso"],
 [2003,"Clarín","marzo",""],
 [2004,"Clarín","","Afiches, con contratapa"],
 [2004,"Summa+","n.º 63","Irenaika, Maschwitz"],
 [null,"Nuestra Arquitectura","n.º 353 y 426","casas Urtizberea y Moore"],
 [null,"Buenos Aires Herald · Tiempo Argentino · Todo Moreno · La Prensa · Sacriste","s/f","recortes sin fecha"]
];

const CHARLAS = ["América 3","Casa de ejercicios espirituales, Reconquista (Santa Fe)","Charla UBA, agosto 2007","Charla Arquitectura 1, USAL 2007","Clase Universo bloque","Charla Di Tella","Diseño y proyectos II","Europa 1","Europa 2","Implantación","Moreno, 5 de marzo","Olmos 20","Posmodernidad 4","Iglesias y capillas","Capilla Maschwitz","Casas y viviendas","Concursos de Claudio Caveri","Colegio de Arquitectos","Concurso Goethe","Forma–función","Gesell","Obra Maschwitz","Secuencia obra Maschwitz","Obras: seminarios, monasterio y otros","Olmos","Rosario","Santa Fe","Taller Galli","Un Belgrano (sic)","Proyecto integrador","San Juan","Universidad de Moreno","Presentación UBA (82 diapositivas)"];

const VIDEOS = [
 ["Arquitectos argentinos, temporada 1, capítulo 8","serie televisiva","mp4 · wmv, 1,2 GB"],
 ["Parroquia Guadalupe (Santa María de Moreno)","documental CM02","mp4 · wmv, 2 GB"],
 ["Homenaje a Claudio Caveri","registro","mpg, 634 MB"],
 ["Personajes de colección","programa","mpg, 1,3 GB"],
 ["Capilla de Maschwitz 1 y 2","registro de obra","avi · mp4 · mov"],
 ["Maschwitz","DVD","vob, 1,4 GB"],
 ["Presentación del libro Maschwitz","DVD","vob, 2,1 GB"],
 ["Visita de diputados a El Jacarandá","27 de junio de 2016","mov"]
];

const VIDA = [
 [1928,"Nace Claudio Caveri. Su padre, el arquitecto Claudio José Caveri, tiene estudio en la calle Esmeralda."],
 [1944,"A los 16 años Damián Bayón le da a leer Así hablaba Zaratustra. Bayón será su verdadero maestro; también le regala a Chesterton."],
 [1950,"Se recibe de arquitecto en la UBA. Estudia arte con Jorge Romero Brest y Damián Bayón. Proyecto para Gerli."],
 [1951,"Concurso de Córdoba con Eduardo Ellis: comienza la sociedad Caveri–Ellis."],
 [1955,"Breve paso por la docencia en la UBA; renuncia en desacuerdo con la conducción."],
 [1957,"Se inaugura Nuestra Señora de Fátima en Martínez."],
 [1958,"Con Delia Puiggari y la familia Brun compra tierras en Trujui: nace Comunidad Tierra."],
 [1962,"Primeras aulas de la escuela de la Comunidad. Concurso de la Biblioteca Nacional."],
 [1964,"Taller de Muebles Casas Blancas (hasta 1974)."],
 [1965,"El Jacarandá en obra en Reconquista. Santa María en Moreno."],
 [1967,"Publica El hombre a través de la arquitectura."],
 [1975,"Se disuelve Comunidad Tierra; continúan las escuelas de la Cooperativa Tierra, entre ellas la Escuela Técnica."],
 [1984,"Secretario de Obras Públicas y luego de Planeamiento de la Municipalidad de Moreno (hasta 1988)."],
 [1988,"Programa Olmos: cárcel de recuperación construida con los internos (hasta 1990)."],
 [1993,"Taller Escuela de Arquitectura (TEA), Distrito III del CAPBA. Cuadernos Nac & Pop (1993) y Urbanismo europeo (1994)."],
 [1999,"Anteproyecto de Irenaika en Maschwitz, su última obra."],
 [2006,"Publica Y América ¿qué?"],
 [2011,"Muere en Buenos Aires el 19 de septiembre."],
 [2013,"Esteban Caveri arma Celebrando la obra de Claudio Caveri: 43 fichas de obra."],
 [2014,"Clarín y el IAA–UBA lo incluyen en Maestros de la Arquitectura Argentina."],
 [2015,"El MoMA expone El Jacarandá en Latin America in Construction."],
 [2016,"Visita de la comisión de cultura de diputados de Santa Fe a El Jacarandá para declararlo patrimonio."],
 [2019,"Primer encuentro Senda(s) en la ETIT."]
];

const CONCEPTOS = [
 { id:"cavar", t:"Cavar", sub:"el descenso",
   q:["Donde estés cava profundamente; debajo de tus pies está la fuente.","Nietzsche, citado en el reportaje"],
   d:"Nietzsche y Chesterton coinciden para Caveri en algo: lo vital no está en el podio sino debajo de los pies. Si Dios nació en un establo, hay que buscarlo abajo. De ahí la nave que desciende en Fátima, el oratorio hundido de Maschwitz, el aprecio por Wright pegado a la tierra y por la cripta de Gaudí.",
   preg:"¿Bajar es todavía un gesto posible en una arquitectura que se mide en altura y en visibilidad?", obras:["fatima","irenaika","fatima-maschwitz","santa-maria"], libros:["hombre"] },
 { id:"estar", t:"Ser y estar", sub:"Kusch y Zubiri",
   q:["La arquitectura ES, no Está.","Claudio Caveri, reportaje"],
   d:"Ser viene de sedere: estar sentado, en reposo, con todo aclarado. Estar es estar de pie, en crecimiento e inquietud. Con Rodolfo Kusch y Xavier Zubiri, para quien Dios no es sino que está, Caveri lee la arquitectura moderna como un objeto autónomo sin raíces apoyado sobre una plataforma.",
   preg:"Si el estar es inacabado, ¿cómo se documenta y se conserva una obra que se pensó para seguir cambiando?", obras:["comunidad","escuela","maria-madre"], libros:["america","mirar"] },
 { id:"espacio-cosa", t:"Espacio cosa", sub:"contra el patio de objetos",
   q:["Ese espacio que no es una caja o un recipiente, donde se colocan objetos.","Claudio Caveri, reportaje"],
   d:"Desde el Renacimiento, Europa mira desde la posición del sol y la arquitectura se vuelve objeto sobre plazas planas y secas, hasta terminar en el shopping. Kusch llamó espacio cosa a otra experiencia: lo que queda entre vos, el otro y la pared que te empuja o te libera. El Jacarandá vacía el claustro pero lo abre.",
   preg:"¿Puede un archivo digital, que convierte todo en objeto visible, transmitir un espacio que solo existe entre los cuerpos?", obras:["jacaranda","seminario-san-martin","irenaika"], libros:["america","urbanismo"] },
 { id:"universo-bloque", t:"Universo bloque", sub:"la forma previa",
   q:["Tampoco debe ser un envase dentro del cual meter y meterse.","Claudio Caveri, reportaje"],
   d:"Lo americano debería ser algo abierto: nunca una figura previa de la que se deducen las partes, como el Pentágono, ni un contenedor. En la memoria del seminario de San Martín desecha el edificio compacto que englobe todas las funciones y deja que cada parte se conforme según su sentido.",
   preg:"¿No terminó la arquitectura contemporánea fabricando universos bloque de formas libres?", obras:["seminario-san-martin","comunidad","biblioteca"], libros:["nacpop","urbanismo"] },
 { id:"misterio", t:"Misterio", sub:"contra la transparencia total",
   q:["La razón es importante pero es un instrumento del hombre, es su linterna.","Claudio Caveri, reportaje"],
   d:"La linterna aclara algunas cosas y deja otras a oscuras, incluido quien la sostiene. Por eso Caveri busca la sorpresa: entradas de eje quebrado y laberínticas, barras a lo Barragán que ocultan y desocultan, gradientes de intimidad. La casa sin alcoba es inhabitable.",
   preg:"Hoy la transparencia es una exigencia ética de lo público. ¿Dónde está el límite entre la intimidad que defiende Caveri y el ocultamiento?", obras:["molinos","moore","fatima"], libros:["mirar","paradojas"] },
 { id:"contaminacion", t:"Contaminación y mestizaje", sub:"el cambalache",
   q:["La tierra es fructífera, germinante y contaminante.","Claudio Caveri, reportaje"],
   d:"Contra el purismo del Movimiento Moderno, que prohibió el ornamento como un acto de control, Caveri rescata al Berni que superpone chapa, pibe, escoba y chasis. Su propia Fátima le parece demasiado pura; la capilla de Trujui, en cambio, admite cualquier agregado.",
   preg:"¿Cómo se restaura una obra que fue pensada para aceptar agregados? ¿Qué agregado la completa y cuál la traiciona?", obras:["maria-madre","comunidad","fatima"], libros:["ficcion","nacpop"] },
 { id:"espiral", t:"Espiral", sub:"el círculo abierto",
   q:["Si el autor nos regala una obra en espiral, entonces hay esperanza todavía.","María Zambrano, epígrafe del reportaje"],
   d:"La espiral aparece en el pabellón de Olmos, en el claustro triple de Irenaika y en la capilla de Maschwitz, donde la procesión de las bienaventuranzas sube desde la tierra. Frente al Guggenheim de Wright, divergente como un big-bang, Caveri propone una espiral convergente que tiende a la unidad sin matar las diferencias.",
   preg:"Esta misma línea de tiempo se dibuja en espiral. ¿Ordena la vida de Caveri o la cierra en un relato demasiado prolijo?", obras:["fatima-maschwitz","olmos","irenaika"], libros:["paradojas"] },
 { id:"raices", t:"Echar raíces", sub:"cultura es cultivo",
   q:["¿Queremos construir cultura o consumir cultura?","Claudio Caveri, reportaje"],
   d:"Con Simone Weil, Caveri piensa que no tenemos raíces: somos nómadas y hay que echarlas. Arraigarse no es encerrarse en un gueto sino aceptar la tierra con sus prejuicios, su bondad y sus contaminaciones, y crear desde ahí. Un pueblo joven solo crea cultura trabajando.",
   preg:"¿Qué significa arraigarse para quienes hoy viven el nomadismo forzado del conurbano y la precariedad?", obras:["comunidad","etit","autoconstruccion"], libros:["america"] },
 { id:"frontera", t:"Frontera", sub:"convivir es enlazar",
   q:["La frontera genera mucho… conflicto.","Claudio Caveri, reportaje"],
   d:"La autonomía absoluta crea fronteras, y la superficie se vuelve pantalla o reja en vez de lugar de comunicación. Tolerar es aguantar; convivir es enlazar las diferencias. En Comunidad Tierra conviven elementos diversos, enlazados.",
   preg:"¿Quién decide hoy dónde está la frontera entre la obra de autor y la obra colectiva en Comunidad Tierra?", obras:["comunidad","olmos"], libros:["frontera"] },
 { id:"pliegue", t:"Pliegue y piel", sub:"Deleuze",
   q:["Lo más profundo es la piel.","diapositiva de Caveri, citando a Deleuze"],
   d:"La superficie importa porque hay un adentro y un afuera: es el lugar del contacto, como el rostro. El problema empieza cuando la superficie se vuelve espejo y ya no tiene adentro. Las cubiertas de ferrocemento, el manto-piel-pliegue de El Jacarandá, trabajan esa membrana.",
   preg:"¿Las pantallas en las que se lee este archivo son superficie con adentro o puro espejo?", obras:["jacaranda","sum","maria-madre"], libros:[] },
 { id:"surtectura", t:"Surtectura", sub:"una palabra para el sur",
   q:["Una visita a Eurolandia.","cuentosayo que abre Surtectura (1991)"],
   d:"El libro de 1991 nombra una arquitectura pensada desde el sur, después de Olmos y de la función pública. La palabra siguió su propio camino: hoy da nombre a una práctica y a una formación que leen el territorio pampeano desde ese mismo lugar.",
   preg:"Cuando una palabra de Caveri se vuelve marca de otra práctica, ¿se prolonga su pensamiento o se lo convierte en objeto?", obras:["olmos"], libros:["surtectura"] },
 { id:"hacer", t:"Aprender haciendo", sub:"autoconstrucción",
   q:["Algo que solo se crea laburando. Yo no conozco otra forma.","Claudio Caveri, reportaje"],
   d:"Caveri construyó sus casas con sus manos, trabajó de albañil y carpintero y dirigió una escuela técnica. La autoconstrucción empezaba por la propia escuela y siguió en las viviendas de ayuda mutua y en los pabellones de Olmos, levantados con los presos.",
   preg:"¿Qué queda de una arquitectura participativa cuando el archivo solo guarda los dibujos del arquitecto?", obras:["etit","autoconstruccion","olmos","muebles"], libros:["sistemas74","sistemas76"] }
];

const ENCUENTROS = [
 ["09-11-2019","ETIT, Escuela Técnica Integral Trujui"],
 ["16-10-2021","El Jacarandá, Reconquista"],
 ["10-09-2022","Las Moras, con Juan P. Gondar"],
 ["17-06-2023","Bragado, con Sergio Patiño"],
 ["2025","Jornada Senda(s), Universidad Nacional de Moreno"],
 ["2025","Jugar(se) en la frontera, Moreno"]
];
