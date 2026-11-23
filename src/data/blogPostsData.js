import blogRetail from "../assets/images/gen/blog-retail.webp";
import blogQsr from "../assets/images/gen/blog-qsr.webp";
import blogPanaderia from "../assets/images/gen/blog-panaderia.webp";
import blogBares from "../assets/images/gen/blog-bares.webp";
import blogLaboratorios from "../assets/images/gen/blog-laboratorios.webp";
import blogCarnicerias from "../assets/images/gen/blog-carnicerias.webp";
import blogRestaurantes from "../assets/images/gen/blog-restaurantes.webp";
import blogEnergia from "../assets/images/gen/blog-energia.webp";
import blogRoi from "../assets/images/gen/blog-roi.webp";
// 23-nov-2026: portadas de los artículos de conservación (dibujos genéricos, sin marca).
import blogConservacion from "../assets/images/gen/blog-conservacion-verano.webp";
import blogPerecibles from "../assets/images/gen/blog-alimentos-perecibles.webp";
import blogTemperaturas from "../assets/images/gen/blog-temperaturas-frio.webp";
import blogBpm from "../assets/images/gen/blog-bpm-haccp.webp";

export const blogPosts = [
  // 23-nov-2026 · Artículos del keyword research del 20-nov (Planificador de Google Ads, Perú):
  // «alimentos perecibles» 720/mes, «conservación de alimentos» 390, «temperatura de refrigeración»
  // 170, «bpm y haccp» 170. Cifras de FDA, USDA, FAO, ENFEN y MINSA, con la fuente al pie de cada
  // artículo. La norma de restaurantes (RM 822-2018/MINSA) se nombra sin citar sus cifras porque
  // su texto completo no se pudo leer. OK de Enrique al documento de borradores: «2. ok».
  {
    slug: "conservacion-de-alimentos-en-tu-negocio",
    title: "Conservación de alimentos en tu negocio: cómo no perder mercadería con el calor del verano",
    miga: "Conservación de alimentos",
    date: "Nov 2026",
    img: blogConservacion,
    excerpt: "Qué temperaturas mantener, cuánto aguanta un alimento fuera del frío y cómo revisar tu refrigeración antes del verano.",
    seo: {
      title: "Conservación de alimentos en tu negocio en verano",
      description: "Con el calor del verano la mercadería se pierde más rápido. Qué temperaturas mantener, cuánto aguanta un alimento fuera del frío y cómo revisar tu frío.",
    },
    cta: {
      texto: "Pide el precio por WhatsApp",
      mensaje: "Hola B&P TECH, leí el artículo de conservación de alimentos y quiero el precio de un refrigerador para ___.",
      titulo: "¿Tu refrigeración no aguanta el calor?",
      bajada: "Cuéntanos qué guardas y cuánto espacio tienes, y te ayudamos a elegir el equipo.",
      equipos: "/equipos/refrigeracion",
      equiposTexto: "Ver refrigeración",
    },
    intro: [
      "Este verano va a poner a prueba la cadena de frío de cada cocina y cada tienda. El ENFEN prevé que la temperatura del aire siga muy por encima de lo habitual en toda la costa, con posibles récords en el verano de 2027.",
      "Para un negocio de comida, eso no es solo calor: es mercadería que se malogra antes, refrigeradoras trabajando al límite y clientes en riesgo si algo falla. Esta guía resume qué controlar para no perder producto.",
    ],
    cuerpo: [
      {
        titulo: "El calor acorta el tiempo que tienes",
        parrafos: [
          "Los alimentos perecibles no deben quedarse entre 4 °C y 60 °C, la llamada «zona de peligro». Según el Servicio de Inocuidad de los Alimentos de EE. UU. (FSIS), ahí las bacterias pueden duplicarse en solo 20 minutos.",
          "La regla práctica: ningún alimento perecible debe pasar más de 2 horas fuera del frío. Si el ambiente supera los 32 °C, el límite baja a 1 hora. En verano se llega a ese límite sin darse cuenta: una caja que espera en la puerta, una bandeja olvidada en la mesa.",
        ],
      },
      {
        titulo: "Dónde se pierde la mercadería",
        lista: {
          ordenada: true,
          items: [
            { lead: "En la recepción.", text: "El pedido llega y espera al sol o en el pasillo. Lo refrigerado y lo congelado se guardan primero, antes de revisar lo seco." },
            { lead: "En el almacén frío.", text: "Una refrigeradora llena hasta el tope no deja circular el aire, y cada vez que se abre la puerta pierde frío. Guarda dejando espacio entre los productos." },
            { lead: "En la preparación.", text: "Lo que se saca para trabajar vuelve al frío apenas se termina. La mise en place no se queda horas sobre la mesa." },
            { lead: "En la exhibición.", text: "Vitrinas y exhibidores reciben sol, luz y puertas abiertas todo el día. Revisa su temperatura en las horas de más calor." },
          ],
        },
      },
      {
        titulo: "Las temperaturas que tienes que mantener",
        tabla: {
          columnas: ["Equipo o momento", "Temperatura"],
          filas: [
            ["Refrigerador", "4 °C o menos"],
            ["Congelador", "−18 °C o menos"],
            ["Zona de peligro, que hay que evitar", "Entre 4 °C y 60 °C"],
            ["Tiempo máximo fuera del frío", "2 horas; 1 hora si el ambiente pasa de 32 °C"],
          ],
        },
        despues: [
          "En el Perú, los restaurantes se rigen por la Norma Sanitaria para Restaurantes y Servicios Afines (RM N.° 822-2018/MINSA). Revisa con tu responsable de calidad qué controles y registros te exige.",
        ],
      },
      {
        titulo: "Cómo saber si tu refrigeración aguanta el verano",
        lista: {
          ordenada: false,
          items: [
            { lead: "Pon un termómetro adentro", text: "y míralo a la misma hora todos los días, también en la tarde, cuando hace más calor." },
            { lead: "Mira cuánto tarda en recuperarse", text: "después de una hora de mucho abrir y cerrar. Si sigue por encima de 4 °C, está al límite." },
            { lead: "Escucha el compresor.", text: "Si casi no se detiene en las horas de calor, el equipo está trabajando al máximo." },
            { lead: "Revisa los empaques de las puertas.", text: "Si una hoja de papel sale sin resistencia con la puerta cerrada, el frío se escapa." },
            { lead: "Limpia el condensador y deja espacio alrededor.", text: "Con polvo o pegado a la pared, el equipo rinde menos." },
            { lead: "Aléjalo del calor:", text: "nada de refrigeradoras junto a hornos, freidoras o ventanas con sol." },
          ],
        },
      },
      {
        titulo: "Cuándo conviene cambiar de equipo",
        parrafos: [
          "Si tu refrigerador no baja de 4 °C en las horas de calor aunque esté limpio y bien ubicado, el problema es el equipo. Un equipo doméstico no está hecho para el trabajo diario de una cocina profesional.",
          "En B&P Tech trabajamos refrigeración TRUE, fabricada en Estados Unidos y pensada para trabajar dentro del calor de una cocina: exhibidores, refrigeradores verticales y bajo mesada que mantienen entre 0,6 y 3,3 °C. Mira los modelos en [refrigeración comercial](/equipos/refrigeracion) y [congelación](/equipos/congelacion), y pide el precio por WhatsApp.",
        ],
      },
    ],
    faqs: [
      { q: "¿A qué temperatura debe estar el refrigerador de un restaurante?", a: "A 4 °C o menos, según la FDA y el USDA de Estados Unidos. El congelador, a −18 °C o menos." },
      { q: "¿Cuánto tiempo puede estar un alimento fuera del refrigerador?", a: "Hasta 2 horas en total. Si el ambiente pasa de 32 °C, hasta 1 hora." },
      { q: "¿Qué norma sanitaria aplica a los restaurantes en el Perú?", a: "La Norma Sanitaria para Restaurantes y Servicios Afines, aprobada por la RM N.° 822-2018/MINSA, que reemplazó a la RM N.° 363-2005/MINSA." },
    ],
    fuentes: [{ texto: "Comunicado oficial N.° 20-2026 del ENFEN, citado por Gestión", url: "https://gestion.pe/peru/el-nino-costero-extraordinario-se-extendera-hasta-febrero-de-2027-advierte-el-enfen-noticia/" }, { texto: "USDA FSIS, zona de peligro", url: "https://www.fsis.usda.gov/es/node/3295" }, { texto: "FDA, tabla de almacenamiento en refrigerador y congelador (2018)", url: "https://fda.gov/media/74435/download" }, { texto: "RM N.° 822-2018/MINSA en El Peruano", url: "https://busquedas.elperuano.pe/dispositivo/NL/1689230-3" }],
  },
  {
    slug: "alimentos-perecibles-cuanto-duran",
    title: "Alimentos perecibles: cuánto duran en refrigeración y congelación",
    miga: "Alimentos perecibles",
    date: "Nov 2026",
    img: blogPerecibles,
    excerpt: "Cuánto duran la carne, el pollo, el pescado, los embutidos y los huevos en el refrigerador y en el congelador, en una tabla para negocios.",
    seo: {
      title: "Alimentos perecibles: cuánto duran en refrigeración",
      description: "Cuánto duran la carne, el pollo, el pescado, los embutidos y los huevos en el refrigerador y en el congelador: tabla para negocios de comida, con fuentes.",
    },
    cta: {
      texto: "Pide el precio por WhatsApp",
      mensaje: "Hola B&P TECH, leí el artículo de alimentos perecibles y quiero el precio de una congeladora o un refrigerador para ___.",
      titulo: "¿Necesitas más frío para tu mercadería?",
      bajada: "Te ayudamos a elegir refrigeradores y congeladoras según lo que guardas.",
      equipos: "/equipos/congelacion",
      equiposTexto: "Ver congelación",
    },
    intro: [
      "Un alimento perecible es el que se malogra rápido si no se guarda en frío: carnes, pollo, pescados y mariscos, embutidos, huevos y comidas preparadas. Para un negocio, saber cuánto dura cada uno es la diferencia entre rotar la mercadería y botarla.",
      "La tabla resume los tiempos que publica la FDA de Estados Unidos, con el refrigerador a 4 °C o menos y el congelador a −18 °C o menos.",
    ],
    cuerpo: [
      {
        titulo: "Cuánto dura cada alimento",
        tabla: {
          columnas: ["Alimento", "En refrigeración (4 °C o menos)", "En congelación (−18 °C o menos)"],
          filas: [
            ["Carne molida", "1 a 2 días", "3 a 4 meses"],
            ["Bistecs", "3 a 5 días", "6 a 12 meses"],
            ["Chuletas", "3 a 5 días", "4 a 6 meses"],
            ["Piezas enteras para hornear", "3 a 5 días", "4 a 12 meses"],
            ["Pollo o pavo entero", "1 a 2 días", "1 año"],
            ["Pollo o pavo en presas", "1 a 2 días", "9 meses"],
            ["Pescado graso (salmón, atún, caballa)", "1 a 2 días", "2 a 3 meses"],
            ["Pescado magro (lenguado, bacalao)", "1 a 2 días", "6 a 8 meses"],
            ["Camarones, conchas y calamares", "1 a 2 días", "3 a 6 meses"],
            ["Jamón cocido entero", "7 días", "1 a 2 meses"],
            ["Embutidos abiertos o tajados", "3 a 5 días", "1 a 2 meses"],
            ["Embutidos sin abrir", "2 semanas", "1 a 2 meses"],
            ["Tocino", "1 semana", "1 mes"],
            ["Salchichas abiertas", "1 semana", "1 a 2 meses"],
            ["Huevos crudos con cáscara", "3 a 5 semanas", "No se congelan con cáscara"],
            ["Huevo duro", "1 semana", "No se congela"],
            ["Comidas cocidas y sobras", "3 a 4 días", "2 a 3 meses"],
            ["Sopas y guisos", "3 a 4 días", "2 a 3 meses"],
          ],
        },
      },
      {
        titulo: "El congelador conserva, pero no para siempre",
        parrafos: [
          "Según la FDA, un alimento que se mantiene a −18 °C o menos queda seguro indefinidamente. Los tiempos de la tabla son de calidad: pasado ese plazo, la carne pierde jugo, textura y sabor.",
          "Por eso, cuando alguien pregunta cuánto dura la carne congelada, la respuesta tiene dos partes. Segura, mientras el congelador no falle; buena para vender, entre 3 meses (carne molida) y 1 año (un pollo entero).",
        ],
      },
      {
        titulo: "Tres reglas para que nada se pase",
        lista: {
          ordenada: true,
          items: [
            { lead: "Rotula todo con la fecha de ingreso", text: "y usa primero lo que entró primero." },
            { lead: "Descongela en el refrigerador, no sobre la mesa.", text: "Sobre la mesa, la superficie del alimento pasa horas entre 4 °C y 60 °C, la zona donde las bacterias se multiplican." },
            { lead: "Vigila la temperatura del equipo, no solo la fecha.", text: "Los tiempos de la tabla valen solo si el refrigerador está a 4 °C o menos y el congelador a −18 °C o menos." },
          ],
        },
        despues: [
          "Si tus equipos no sostienen esas temperaturas en verano, los plazos se acortan. En B&P Tech trabajamos [refrigeradores TRUE](/equipos/refrigeracion) que mantienen entre 0,6 y 3,3 °C y [congeladoras TRUE](/equipos/congelacion) para conservar a −18 °C. Pídenos el precio por WhatsApp.",
        ],
      },
    ],
    faqs: [
      { q: "¿Qué son los alimentos perecibles?", a: "Los que se malogran rápido fuera del frío: carnes, pollo, pescados y mariscos, embutidos, huevos, lácteos y comidas preparadas." },
      { q: "¿Cuánto dura la carne congelada?", a: "A −18 °C o menos es segura indefinidamente. Para conservar la calidad, la FDA recomienda usar la carne molida en 3 a 4 meses y los bistecs en 6 a 12 meses." },
      { q: "¿Cuánto dura el pescado en el refrigerador?", a: "De 1 a 2 días, tanto el pescado graso como el magro. Congelado, de 2 a 3 meses el graso y de 6 a 8 meses el magro." },
    ],
    fuentes: [{ texto: "FDA, tabla de almacenamiento en refrigerador y congelador (2018)", url: "https://fda.gov/media/74435/download" }, { texto: "FoodSafety.gov, tabla de almacenamiento en frío", url: "https://www.foodsafety.gov/food-safety-charts/cold-food-storage-charts" }, { texto: "USDA FSIS, zona de peligro", url: "https://www.fsis.usda.gov/es/node/3295" }],
  },
  {
    slug: "temperatura-de-refrigeracion-y-congelacion",
    title: "Temperatura de refrigeración y congelación: los grados correctos para tu negocio",
    miga: "Temperatura de refrigeración",
    date: "Nov 2026",
    img: blogTemperaturas,
    excerpt: "A cuántos grados debe estar el refrigerador y el congelador de un negocio de comida, cómo medirlo bien y qué hacer si se pasa.",
    seo: {
      title: "Temperatura de refrigeración y congelación",
      description: "A cuántos grados debe estar el refrigerador y el congelador de un negocio de comida, cómo medirlo bien y qué hacer si se pasa: guía con fuentes.",
    },
    cta: {
      texto: "Pide el precio por WhatsApp",
      mensaje: "Hola B&P TECH, leí el artículo de temperatura de refrigeración y quiero el precio de un refrigerador para ___.",
      titulo: "¿Tu refrigerador no baja de 4 °C?",
      bajada: "Te ayudamos a elegir un equipo que sostenga la temperatura en el calor de tu cocina.",
      equipos: "/equipos/refrigeracion",
      equiposTexto: "Ver refrigeración",
    },
    intro: [
      "El refrigerador de un negocio debe estar a 4 °C o menos y el congelador a −18 °C o menos. Son las cifras de referencia de la FDA y el USDA de Estados Unidos, y sobre ellas se calculan los tiempos de conservación de cada alimento.",
      "Lo difícil no es saber el número, sino mantenerlo todo el día, con la puerta abriéndose y el calor del verano encima.",
    ],
    cuerpo: [
      {
        titulo: "Los grados correctos para cada caso",
        tabla: {
          columnas: ["Qué guardas", "Dónde", "Temperatura"],
          filas: [
            ["Carnes, pollo, pescado y mariscos crudos", "Refrigerador", "4 °C o menos"],
            ["Lácteos, huevos y embutidos", "Refrigerador", "4 °C o menos"],
            ["Comidas preparadas y sobras", "Refrigerador", "4 °C o menos"],
            ["Productos congelados", "Congelador", "−18 °C o menos"],
            ["Comida caliente en servicio", "Baño maría o mantenedor", "Por encima de 60 °C"],
            ["Vacunas y medicamentos", "Refrigerador de farmacia", "Entre 2 y 8 °C"],
          ],
        },
        despues: [
          "Entre 4 °C y 60 °C está la «zona de peligro»: según el USDA, ahí las bacterias pueden duplicarse en solo 20 minutos. Por eso lo frío se mantiene frío, lo caliente se mantiene caliente, y nada pasa más de 2 horas en el medio.",
        ],
      },
      {
        titulo: "Por qué un refrigerador de cocina no sirve para vacunas",
        parrafos: [
          "Las vacunas y los medicamentos refrigerados tienen un rango más estrecho: entre 2 y 8 °C. Un refrigerador de farmacia está hecho para sostener ese rango y avisar cuando se sale de él, con alarmas de temperatura, de puerta abierta y de falla de energía.",
          "Si tu negocio es una farmacia, una clínica o un laboratorio, mira nuestra página de [cadena de frío con TRUE Scientific](/equipos/cadena-de-frio).",
        ],
      },
      {
        titulo: "Cómo medir la temperatura sin engañarte",
        lista: {
          ordenada: false,
          items: [
            { lead: "Usa un termómetro dentro del equipo,", text: "en el centro y no en la puerta, que es la zona que más cambia." },
            { lead: "Mide a la misma hora todos los días", text: "y anótalo. Agrega una medición en la tarde, cuando hace más calor." },
            { lead: "No midas justo después de abrir.", text: "El aire se calienta en segundos y vuelve a bajar en minutos; el producto cambia más lento. Por eso los equipos de farmacia miden con un sensor dentro de una botella con líquido, que imita la temperatura del producto." },
            { lead: "Ordena por dentro:", text: "lo crudo abajo y lo listo para servir arriba, para que nada gotee sobre lo que ya no se va a cocinar." },
          ],
        },
      },
      {
        titulo: "Qué hacer si el refrigerador marca más de 4 °C",
        lista: {
          ordenada: true,
          items: [
            { text: "Revisa que la puerta cierre bien y que nada bloquee la salida del aire frío." },
            { text: "Pasa los productos más delicados (carnes, pescados, lácteos) a otro equipo que sí esté en temperatura." },
            { text: "Si un alimento perecible estuvo más de 2 horas por encima de 4 °C, descártalo." },
            { text: "Si el problema se repite, llama al técnico: puede ser el condensador sucio, un empaque gastado o un equipo que no da más." },
          ],
        },
        despues: [
          "Los refrigeradores TRUE que trabajamos en B&P Tech mantienen entre 0,6 y 3,3 °C, con margen por debajo de los 4 °C. Mira los modelos en [refrigeración comercial](/equipos/refrigeracion) y pide el precio por WhatsApp.",
        ],
      },
    ],
    faqs: [
      { q: "¿A cuántos grados debe estar una refrigeradora comercial?", a: "A 4 °C o menos. El congelador, a −18 °C o menos." },
      { q: "¿Qué es la zona de peligro de los alimentos?", a: "El rango entre 4 °C y 60 °C, donde las bacterias se multiplican más rápido. Un alimento perecible no debe pasar más de 2 horas ahí, o 1 hora si el ambiente supera los 32 °C." },
      { q: "¿Dónde se pone el termómetro en el refrigerador?", a: "En el centro del equipo, no en la puerta, y se lee a la misma hora todos los días." },
    ],
    fuentes: [{ texto: "USDA FSIS, zona de peligro", url: "https://www.fsis.usda.gov/es/node/3295" }, { texto: "FDA, tabla de almacenamiento en refrigerador y congelador (2018)", url: "https://fda.gov/media/74435/download" }, { texto: "TRUE Scientific", url: "https://www.truemfg.com/scientific/" }],
  },
  {
    slug: "bpm-y-haccp-en-restaurantes",
    title: "BPM y HACCP en restaurantes: cómo controlar la temperatura de tus alimentos",
    miga: "BPM y HACCP",
    date: "Nov 2026",
    img: blogBpm,
    excerpt: "Qué son las BPM y el HACCP, qué norma aplica a tu negocio en el Perú y cómo llevar un registro diario de temperatura.",
    seo: {
      title: "BPM y HACCP en restaurantes: control de temperatura",
      description: "Qué son las BPM y el HACCP, qué norma aplica a tu negocio en el Perú y cómo convertir la temperatura en un punto de control con registro diario.",
    },
    cta: {
      texto: "Pide el precio por WhatsApp",
      mensaje: "Hola B&P TECH, leí el artículo de BPM y HACCP y quiero el precio de un refrigerador para ___.",
      titulo: "¿Tu registro dice que el frío no alcanza?",
      bajada: "Cuéntanos qué equipo te falla y te ayudamos a elegir el reemplazo.",
      equipos: "/equipos/refrigeracion",
      equiposTexto: "Ver refrigeración",
    },
    intro: [
      "Las BPM y el HACCP son dos formas de ordenar lo mismo: que la comida que sale de tu cocina no enferme a nadie. Las BPM son las buenas prácticas de todos los días; el HACCP es un método para encontrar los puntos donde un error se paga caro y vigilarlos.",
      "En una cocina, el punto que más se descuida en verano es la temperatura. Este artículo explica las dos ideas y cómo aplicarlas al frío.",
    ],
    cuerpo: [
      {
        titulo: "Qué son las BPM",
        parrafos: [
          "En un restaurante, BPM son las Buenas Prácticas de Manipulación: higiene del personal, limpieza y desinfección, control de proveedores, orden en el almacén y control de temperaturas. En la industria, la misma sigla se usa para las Buenas Prácticas de Manufactura.",
          "Son la base: sin BPM, ningún plan HACCP funciona.",
        ],
      },
      {
        titulo: "Qué es el HACCP y sus siete principios",
        parrafos: [
          "HACCP son las siglas en inglés de Análisis de Peligros y Puntos Críticos de Control. El Codex Alimentarius, de la FAO y la OMS, lo resume en siete principios:",
        ],
        lista: {
          ordenada: true,
          items: [
            { text: "Realizar un análisis de peligros." },
            { text: "Determinar los puntos críticos de control (PCC)." },
            { text: "Establecer los límites críticos." },
            { text: "Vigilar el control de cada PCC." },
            { text: "Definir las medidas correctivas para cuando un PCC no está bajo control." },
            { text: "Comprobar que el sistema funciona." },
            { text: "Documentar los procedimientos y llevar registros." },
          ],
        },
        despues: [
          "Un punto crítico de control es la fase donde un control es esencial para prevenir, eliminar o reducir un peligro. El límite crítico es el valor que separa lo aceptable de lo inaceptable en esa fase.",
        ],
      },
      {
        titulo: "Qué norma aplica a tu negocio en el Perú",
        lista: {
          ordenada: false,
          items: [
            { lead: "Fabricación de alimentos y bebidas:", text: "la Norma Sanitaria para la Aplicación del Sistema HACCP (RM N.° 449-2006/MINSA). En 2026, el Indecopi declaró barrera burocrática ilegal el plazo de dos años de vigencia del certificado de validación técnica del plan HACCP." },
            { lead: "Restaurantes y servicios afines:", text: "la Norma Sanitaria para Restaurantes y Servicios Afines (RM N.° 822-2018/MINSA)." },
          ],
        },
        despues: [
          "Aunque tu negocio no esté obligado a tener un plan HACCP, aplicar su lógica a la temperatura te ordena la cocina. Revisa con tu responsable de calidad qué registros te exige tu norma.",
        ],
      },
      {
        titulo: "La temperatura como punto crítico de control",
        parrafos: ["Así se ve el frío de una cocina con los principios del HACCP:"],
        tabla: {
          columnas: ["Principio", "En tu refrigerador"],
          filas: [
            ["Peligro", "Bacterias que se multiplican entre 4 °C y 60 °C"],
            ["Punto crítico", "Almacenamiento en frío de carnes, pescados, lácteos y comidas preparadas"],
            ["Límite crítico", "4 °C o menos en refrigeración; −18 °C o menos en congelación"],
            ["Vigilancia", "Lectura del termómetro a la misma hora, mañana y tarde"],
            ["Medida correctiva", "Si pasa de 4 °C: revisar puerta y carga, mover el producto, llamar al técnico; descartar lo que estuvo más de 2 horas arriba de 4 °C"],
            ["Comprobación", "Revisar el registro cada semana y comparar el termómetro con uno de referencia"],
            ["Registro", "Una hoja por equipo, como la de abajo"],
          ],
        },
      },
      {
        titulo: "Un registro de temperatura que puedes copiar",
        tabla: {
          columnas: ["Fecha", "Hora", "Equipo", "Temperatura (°C)", "Responsable", "Acción si se pasó"],
          filas: [
            ["2/12", "9:00", "Refrigerador de carnes", "3", "Jefe de cocina", "—"],
            ["2/12", "16:00", "Refrigerador de carnes", "6", "Jefe de cocina", "Puerta mal cerrada; se movió el producto"],
          ],
        },
        despues: [
          "Un registro así toma un minuto por equipo y te muestra antes que nadie cuándo un refrigerador empieza a fallar.",
          "Si el registro te muestra que tu equipo no sostiene la temperatura en las horas de calor, mira los [refrigeradores TRUE](/equipos/refrigeracion), que mantienen entre 0,6 y 3,3 °C. Y si estás revisando la higiene de toda la cocina, también trabajamos [lavavajillas industriales](/equipos/lavavajillas).",
        ],
      },
    ],
    faqs: [
      { q: "¿Qué diferencia hay entre BPM y HACCP?", a: "Las BPM son las prácticas básicas de higiene y orden de todos los días. El HACCP es un método que identifica los puntos críticos del proceso y los vigila con límites, registros y medidas correctivas." },
      { q: "¿El HACCP es obligatorio para un restaurante en el Perú?", a: "La norma de HACCP del MINSA (RM N.° 449-2006/MINSA) es para la fabricación de alimentos y bebidas. Los restaurantes se rigen por la RM N.° 822-2018/MINSA; consulta con tu responsable de calidad qué te exige." },
      { q: "¿Qué es un punto crítico de control?", a: "La fase del proceso donde un control es esencial para prevenir, eliminar o reducir un peligro, por ejemplo el almacenamiento en frío." },
    ],
    fuentes: [{ texto: "FAO, sistema HACCP (Codex Alimentarius)", url: "https://openknowledge.fao.org/server/api/core/bitstreams/b8905990-5fc3-45a1-a361-23b116932160/content/y5307s03.htm" }, { texto: "RM N.° 449-2006/MINSA (FAOLEX)", url: "https://faolex.fao.org/docs/pdf/per64139.pdf" }, { texto: "Resolución N.° 0184-2026/SEL-INDECOPI en El Peruano", url: "https://busquedas.elperuano.pe/dispositivo/NL/2523308-1" }, { texto: "RM N.° 822-2018/MINSA en El Peruano", url: "https://busquedas.elperuano.pe/dispositivo/NL/1689230-3" }, { texto: "USDA FSIS, zona de peligro", url: "https://www.fsis.usda.gov/es/node/3295" }],
  },
  {
    slug: "cadena-de-frio-retail-puertas-vs-abiertos",
    title: "Cadena de frío en retail: murales con puertas vs abiertos",
    date: "Feb 2026",
    img: blogRetail,
    excerpt: "Cómo estabilizar temperatura, reducir mermas y mejorar confort del cliente en supermercados.",
    sections: [
      { h: "Dolores del negocio", p: "Fluctuaciones de temperatura, mermas, pasillos fríos y visibilidad irregular del producto." },
      { h: "Soluciones", p: "Murales con puertas, iluminación LED, control de humedad por categoría y monitoreo remoto con alarmas inteligentes." },
      { h: "Resultados", p: "Menos merma, exhibición consistente y mejor experiencia de compra." }
    ]
  },
  {
    slug: "diseno-de-linea-qsr-velocidad-y-consistencia",
    title: "Diseño de línea para QSR: velocidad y consistencia",
    date: "Feb 2026",
    img: blogQsr,
    excerpt: "Líneas de ensamblaje, KDS y separación expo/delivery para tiempos de ticket predecibles.",
    sections: [
      { h: "Contexto", p: "Los picos de demanda requieren un flujo sin cruces y roles claros." },
      { h: "Claves de diseño", p: "Almacén → prep → cocción → expo; KDS y pick-up dedicado para delivery." },
      { h: "Impacto", p: "Menos errores, mejor ritmo y satisfacción del cliente." }
    ]
  },
  {
    slug: "panaderia-hornos-y-fermentacion-consistente",
    title: "Panadería: hornos y fermentación consistente",
    date: "Feb 2026",
    img: blogPanaderia,
    excerpt: "Elegir el horno y controlar fermentación para calidad diaria repetible.",
    sections: [
      { h: "Hornos", p: "Piso, carro rotativo o convección según producto, volumen y versatilidad." },
      { h: "Fermentación", p: "Control de temperatura y humedad para leudado constante." },
      { h: "Equipos clave", p: "Amasadoras (brazos/espiral), laminadoras y fermentadoras." }
    ]
  },
  {
    slug: "bares-y-cafeterias-estaciones-eficientes",
    title: "Bares & cafeterías: estaciones eficientes y repetibles",
    date: "Feb 2026",
    img: blogBares,
    excerpt: "Underbar/backbar, refrigeración de insumos y flujo en poco espacio.",
    sections: [
      { h: "Dolores", p: "Volumen alto en espacio limitado y consistencia de bebidas." },
      { h: "Organización", p: "Pozos de hielo, lavabos, speed rails y backbar visible para acceso rápido." },
      { h: "Refrigeración", p: "Bajo barra para lácteos y garnishes, merchandisers para impulso." }
    ]
  },
  {
    slug: "laboratorios-cumplimiento-y-monitoreo-ddl",
    title: "Laboratorios: cumplimiento y monitoreo DDL",
    date: "Feb 2026",
    img: blogLaboratorios,
    excerpt: "Rangos CDC, data loggers con sonda amortiguada y SOP de emergencia.",
    sections: [
      { h: "Rangos", p: "Refrigerados 2–8°C; congelados -50 a -15°C." },
      { h: "Monitoreo", p: "Digital data loggers con ±0.5°C y registro continuo." },
      { h: "SOP", p: "Estabilización de unidades nuevas y respuesta ante excursiones." }
    ]
  },
  {
    slug: "carnicerias-higiene-y-cadena-de-frio",
    title: "Carnicerías: higiene y cadena de frío",
    date: "Feb 2026",
    img: blogCarnicerias,
    excerpt: "Sanitización, separación de zonas y materiales adecuados para operación segura.",
    sections: [
      { h: "Higiene", p: "Desarme de equipos, químicos food-safe y lavado a presión de superficies." },
      { h: "Temperaturas", p: "Refrigeración 1–4°C; congelación ≤ -18°C; salas a ~12°C cuando sea posible." },
      { h: "Infraestructura", p: "Pisos/paredes impermeables, drenajes y luz adecuada." }
    ]
  },
  {
    slug: "restaurantes-refrigeracion-por-estacion",
    title: "Restaurantes: refrigeración por estación",
    date: "Feb 2026",
    img: blogRestaurantes,
    excerpt: "Recepción, prep, línea y bar con equipos de frío en el punto correcto.",
    sections: [
      { h: "Mapa de frío", p: "Almacén, mesas frías de prep, bases bajo cocción y bar." },
      { h: "Organización interna", p: "Arriba cocinados/listos; medio precocidos; abajo crudos; cajones vegetales." },
      { h: "Ubicación", p: "Evitar fuentes de calor que afecten desempeño." }
    ]
  },
  {
    slug: "energia-y-eficiencia-en-retail",
    title: "Energía y eficiencia en retail",
    date: "Feb 2026",
    img: blogEnergia,
    excerpt: "Reducción de consumo en casos refrigerados y monitoreo proactivo.",
    sections: [
      { h: "Consumo en supermercados", p: "Refrigeración puede superar 60% del uso eléctrico." },
      { h: "Medidas", p: "Puertas en casos, LED, mantenimiento de sellos y AFDD." },
      { h: "Beneficio", p: "Menor costo operativo y estabilidad térmica." }
    ]
  },
  {
    slug: "roi-de-equipamiento-confiable",
    title: "ROI del equipamiento confiable",
    date: "Feb 2026",
    img: blogRoi,
    excerpt: "Menos downtime, calidad repetible y soporte que protege ingresos.",
    sections: [
      { h: "Costo oculto del barato", p: "Fallas y variabilidad que erosionan margen y reputación." },
      { h: "Confiabilidad y mantenimiento", p: "Programas preventivos e IoT para anticipar fallas." },
      { h: "Resultado", p: "Producción estable y retorno acelerado." }
    ]
  }
];

export function getPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug);
}
