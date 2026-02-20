import { IMAGE } from "../constent/theme";

export const industryData = [
  {
    slug: "restaurantes",
    route: "/industria/restaurantes",
    title: "Restaurantes",
    description:
      "Optimiza el flujo operativo de tu cocina con estaciones claras: recepción, preparación, cocción y lavado.",
    heroImage: IMAGE.bnr1,
    keyStations: ["Recepción", "Prep", "Cocción", "Lavado"],
    stationImages: [IMAGE.galleryPic1, IMAGE.galleryPic2, IMAGE.galleryPic3, IMAGE.galleryPic4],
    sections: [
      {
        title: "Definición",
        paragraphs: [
          "Un restaurante es un establecimiento dedicado a la venta y consumo de alimentos preparados, en sala o para llevar, con una experiencia gastronómica definida.",
          "Para un chef, un restaurante es un ecosistema donde conviven creatividad culinaria, visión empresarial, gestión de equipos y una experiencia sensorial consistente.",
        ],
      },
      {
        title: "Cómo lo ve el Chef",
        bullets: [
          {
            title: "Experiencia sensorial",
            text: "Sabores, aromas, texturas y ambiente deben narrar una historia.",
          },
          {
            title: "Identidad y marca",
            text: "El menú y la cocina son la firma del chef; técnica y creatividad definen personalidad.",
          },
          {
            title: "Estructura y rentabilidad",
            text: "Control de costos, gestión de insumos y eficiencia operativa para sostener el negocio.",
          },
          {
            title: "Gestión de equipos",
            text: "La cocina funciona como una orquesta: liderazgo, disciplina y capacitación constante.",
          },
          {
            title: "Detalle y constancia",
            text: "Cada plato representa el estándar: precisión y repetibilidad en cada servicio.",
          },
        ],
      },
      {
        title: "Estaciones del restaurante",
        groups: [
          {
            title: "Brigada de cocina (producción)",
            items: [
              {
                title: "Garde Manger (cocina fría)",
                text: "Ensaladas, aperitivos fríos, guarniciones frías.",
              },
              {
                title: "Saucier (cocina caliente / salsas)",
                text: "Sopas, estofados, salteados y salsas complejas.",
              },
              {
                title: "Parrilla / Plancha (grill)",
                text: "Cocción de carnes, pescados y verduras a alta temperatura.",
              },
              {
                title: "Freidora (fry station)",
                text: "Producción de fritos para alto ritmo de servicio.",
              },
              {
                title: "Pâtissier (postres)",
                text: "Preparación y montaje de postres.",
              },
              {
                title: "Chef de línea / Emplatado",
                text: "Organiza órdenes y define toques finales antes de salir a sala.",
              },
            ],
          },
          {
            title: "Áreas de apoyo",
            items: [
              {
                title: "Almacén / Recepción",
                text: "Recepción, control e inventario de insumos.",
              },
              {
                title: "Preparación (prep)",
                text: "Corte y limpieza preliminar de alimentos.",
              },
              {
                title: "Lavado (stewarding)",
                text: "Limpieza de loza, cubiertos y utensilios.",
              },
            ],
          },
          {
            title: "Servicio (comedor)",
            items: [
              {
                title: "Estación del mesero",
                text: "Punto estratégico con vajilla, servilletas y complementos para agilizar atención.",
              },
              {
                title: "Bar / estación de bebidas",
                text: "Gestión de coctelería y bebidas.",
              },
            ],
          },
        ],
      },
      {
        title: "Refrigeración comercial por estación",
        subtitle:
          "Organización funcional para eficiencia y seguridad alimentaria, manteniendo la temperatura objetivo en cada punto del flujo.",
        groups: [
          {
            title: "Guías de temperatura",
            items: [
              {
                title: "Refrigeración",
                text: "0°C a 4°C (ideal 0.5°C a 4°C).",
              },
              {
                title: "Congelación",
                text: "-18°C (referencia de operación) y hasta -23.3°C según aplicación.",
              },
            ],
          },
          {
            title: "Mapa por estación",
            items: [
              {
                title: "Recepción y almacenamiento (almacén)",
                text: "Cámaras frigoríficas o verticales de alto volumen. Separar crudos (abajo) de listos/precocidos (arriba) para evitar contaminación cruzada.",
              },
              {
                title: "Preparación fría",
                text: "Mesas refrigeradas de preparación o bajo mesada para vegetales, salsas, quesos y embutidos al alcance.",
              },
              {
                title: "Preparación caliente (línea)",
                text: "Bases refrigeradas bajo equipos de cocción para manipulación rápida de proteínas sin recorridos largos.",
              },
              {
                title: "Servicio (emplatado)",
                text: "Mesas frías con insertos GN para ingredientes finales fríos durante el servicio.",
              },
              {
                title: "Bar y bebidas",
                text: "Bajo barra para bebidas, cervezas, vinos y cristalería.",
              },
            ],
          },
          {
            title: "Pautas de organización",
            items: [
              {
                title: "Orden interno",
                text: "Superior: cocinados/listos; medio: precocidos; inferior: crudos; cajones: vegetales.",
              },
              {
                title: "Ubicación",
                text: "Evitar instalar refrigeración junto a fuentes de calor (hornos, planchas) para mantener desempeño.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "estadios",
    route: "/industria/estadios",
    title: "Estaciones | Estadios",
    description:
      "Diseñado para velocidad y volumen: grab&go, cocción acelerada y servicio continuo en alto tráfico.",
    heroImage: IMAGE.bnr2,
    keyStations: ["Grab&Go", "Cocción acelerada", "Holding", "Despacho"],
  },
  {
    slug: "panaderia",
    route: "/industria/panaderia",
    title: "Panadería y Pastelería",
    description:
      "Control total de la masa: amasado, laminado y fermentación para consistencia diaria y escalabilidad.",
    heroImage: IMAGE.bnr3,
    keyStations: ["Amasado", "Laminado", "Fermentación", "Horneado"],
    stationImages: [IMAGE.galleryPic5, IMAGE.galleryPic6, IMAGE.galleryPic7, IMAGE.galleryPic8],
    sections: [
      {
        title: "Definición",
        paragraphs: [
          "La panificación es el conjunto de técnicas, procesos y ciencia para transformar harina, agua, sal y levadura en panes y derivados, controlando sabor, textura y aroma.",
          "La pastelería es el arte y la técnica de elaborar y presentar productos dulces con alta precisión y estética.",
        ],
      },
      {
        title: "Proceso fundamental de panificación",
        bullets: [
          {
            title: "Pesado y mezclado",
            text: "Medición e incorporación de ingredientes para iniciar formación de masa.",
          },
          {
            title: "Amasado",
            text: "Desarrolla la red de gluten (estructura y elasticidad).",
          },
          {
            title: "Fermentación",
            text: "Levaduras generan CO₂ y aromas; la masa crece y madura.",
          },
          {
            title: "División y formado",
            text: "Porcionado y forma final (panes, piezas pequeñas).",
          },
          {
            title: "Horneado",
            text: "Fija estructura, forma corteza y miga con control térmico.",
          },
          {
            title: "Enfriamiento",
            text: "Estabiliza el producto para consumo o venta.",
          },
        ],
      },
      {
        title: "Ciencia detrás del pan",
        paragraphs: [
          "La fermentación es un proceso bioquímico donde levaduras y lactobacilos consumen azúcares, generan gases y la red de gluten los atrapa para esponjar.",
          "Durante el horneado, el calor provoca evaporación de agua, desnaturalización de proteínas y gelatinización del almidón.",
        ],
      },
      {
        title: "Maquinaria y equipamiento por función",
        groups: [
          {
            title: "Preparación y mezclado",
            items: [
              {
                title: "Amasadoras (espiral / brazos)",
                text: "Mezcla homogénea y manejo de volúmenes; clave para el desarrollo de la masa.",
              },
              {
                title: "Batidoras planetarias",
                text: "Para masas livianas, cremas y repostería.",
              },
              {
                title: "Laminadoras",
                text: "Extienden masa uniformemente; esenciales para hojaldrados.",
              },
            ],
          },
          {
            title: "División y formado",
            items: [
              {
                title: "Divisoras",
                text: "Porcionado uniforme de masa (manual o automático).",
              },
              {
                title: "Formadoras / boleadoras",
                text: "Formado consistente de barras, bollos y piezas especiales.",
              },
            ],
          },
          {
            title: "Fermentación y cocción",
            items: [
              {
                title: "Cámaras de fermentación",
                text: "Control de temperatura y humedad para leudado constante.",
              },
              {
                title: "Hornos",
                text: "De piso, convección o carro rotativo; determinan productividad y consistencia.",
              },
            ],
          },
          {
            title: "Complementarios",
            items: [
              {
                title: "Rebanadoras industriales",
                text: "Automatizan el corte para escala y seguridad.",
              },
              {
                title: "Mesas de trabajo y carros",
                text: "Acero inoxidable y transporte de bandejas para flujo eficiente.",
              },
              {
                title: "Balanzas y utensilios",
                text: "Precisión para mantener calidad y repetibilidad.",
              },
            ],
          },
        ],
      },
      {
        title: "Hornos para panificación y pastelería",
        paragraphs: [
          "El horno es decisivo: no existe uno “mejor” universalmente, sino el ideal según producto, volumen, versatilidad y rentabilidad.",
        ],
        bullets: [
          {
            title: "Tubos de vapor",
            text: "Transferencia de calor principalmente por contacto con la superficie calentada.",
          },
          {
            title: "Eléctricos de piso",
            text: "Calor desde la cubierta y radiación por ondas electromagnéticas.",
          },
          {
            title: "Carro rotativo",
            text: "Convección de aire caliente para transferencia uniforme.",
          },
        ],
      },
      {
        title: "Amasadoras: tipos y criterio",
        paragraphs: [
          "El tipo de amasadora, velocidad, tiempo y volumen determinan el resultado final. Elegir bien reduce variabilidad y mejora productividad.",
        ],
        groups: [
          {
            title: "Amasadora de brazos",
            items: [
              {
                title: "Por qué se usa",
                text: "Imita el amasado manual; airea la masa sin sobrecalentarla.",
              },
              {
                title: "Ventajas",
                text: "Mejor oxigenación, menos fricción y calor, desarrollo óptimo del gluten, proceso suave.",
              },
              {
                title: "Recomendado para",
                text: "Panaderías artesanales, fermentaciones largas y masas hidratadas.",
              },
            ],
          },
          {
            title: "Amasadora de espiral",
            items: [
              {
                title: "Por qué se usa",
                text: "Alta velocidad y eficiencia para abastecer producción sin duplicar equipamiento.",
              },
              {
                title: "Características",
                text: "Rotación de cuba y gancho en simultáneo; trabaja con presión de arriba hacia abajo y menor oxidación.",
              },
            ],
          },
          {
            title: "DIOSNA (referencia de marca)",
            items: [
              {
                title: "Enfoque",
                text: "Soluciones de mezcla de alto rendimiento para industria panadera con fiabilidad a largo plazo.",
              },
              {
                title: "Sistema Wendel",
                text: "Herramientas contrarrotativas para acelerar el amasado y aumentar producción por unidad de tiempo.",
              },
            ],
          },
        ],
      },
      {
        title: "Pastelería profesional",
        groups: [
          {
            title: "Aspectos clave",
            items: [
              {
                title: "Técnica y precisión",
                text: "Medidas exactas y procesos controlados para lograr texturas y sabores específicos.",
              },
              {
                title: "Estética",
                text: "Presentación final como parte del valor del producto.",
              },
              {
                title: "Producción",
                text: "Optimización con maquinaria para consistencia y eficiencia.",
              },
            ],
          },
          {
            title: "Equipamiento típico",
            items: [
              {
                title: "Mezcla y amasado",
                text: "Batidoras planetarias, amasadoras y laminadoras.",
              },
              {
                title: "Cocción y frío",
                text: "Hornos de piso/rotativos/convección, cámaras de fermentación y vitrinas/armarios frigoríficos.",
              },
              {
                title: "Precisión y acabado",
                text: "Balanzas, dosificadoras/inyectoras, rociadoras de gelatina y bases giratorias.",
              },
              {
                title: "Auxiliares",
                text: "Mesas inox, carros/bandejas, espátulas, tamices y mangas.",
              },
            ],
          },
          {
            title: "Batidora planetaria (concepto)",
            items: [
              {
                title: "Movimiento planetario",
                text: "Las herramientas orbitan para mezclar e incorporar aire de forma uniforme.",
              },
              {
                title: "Versatilidad",
                text: "Intercambio de herramientas para múltiples aplicaciones con una sola máquina.",
              },
            ],
          },
          {
            title: "Laminadoras (hojaldres y croissants)",
            items: [
              {
                title: "Objetivo",
                text: "Laminado suave y consistente con control de temperatura y tiempos de reposo.",
              },
              {
                title: "Operación simple",
                text: "Manejo sencillo y amigable incluso para trabajadores semicalificados.",
              },
              {
                title: "Ajuste manual guiado",
                text: "La rueda de ajuste y la curva de laminado mecánica predefinida facilitan el ajuste manual.",
              },
              {
                title: "Automatización de distancia",
                text: "La distancia entre rodillos se configura automáticamente al cambiar la dirección de giro.",
              },
              {
                title: "RONDO (referencia de marca)",
                text: "Soluciones desde máquinas independientes hasta líneas industriales; enfoque en bandas homogéneas y operación continua.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "cocinas-industriales",
    route: "/industria/cocinas-industriales",
    title: "Cocinas Industriales",
    description:
      "Producción masiva con enfoque de ingeniería: cocción a gran escala, seguridad y repetibilidad.",
    heroImage: IMAGE.bnr4,
    keyStations: ["Preparación", "Cocción masiva", "Regeneración", "Lavado"],
    stationImages: [IMAGE.galleryPic9, IMAGE.galleryPic10, IMAGE.galleryPic11, IMAGE.galleryPic12],
    sections: [
      {
        title: "Definición",
        paragraphs: [
          "Una cocina industrial es un espacio profesional diseñado para la producción masiva, eficiente y segura de alimentos.",
          "Se caracteriza por equipos de gran potencia, uso intensivo continuo, materiales duraderos (principalmente acero inoxidable) y cumplimiento estricto de normas de higiene y seguridad.",
        ],
      },
      {
        title: "Características principales",
        bullets: [
          {
            title: "Alta capacidad",
            text: "Preparación de grandes volúmenes en poco tiempo.",
          },
          {
            title: "Equipamiento robusto",
            text: "Hornos de convección o combinados, cocinas industriales, freidoras y mesas de acero inoxidable.",
          },
          {
            title: "Normativa estricta",
            text: "Regulaciones de ventilación, seguridad y salubridad.",
          },
          {
            title: "Eficiencia de flujo",
            text: "Diseño que optimiza el trabajo y la organización del personal.",
          },
        ],
      },
      {
        title: "Refrigeración y conservación",
        subtitle:
          "La cadena de frío es crítica para la seguridad alimentaria y la frescura de ingredientes; la mayoría de equipos son de acero inoxidable.",
        groups: [
          {
            title: "Equipos esenciales",
            items: [
              {
                title: "Cámaras frigoríficas y de congelación",
                text: "Almacenamiento masivo de materias primas para logística y continuidad operativa.",
              },
              {
                title: "Refrigeradores y congeladores verticales",
                text: "Alta capacidad y organización; configuraciones de 1, 2 o 3 puertas.",
              },
              {
                title: "Abatidores de temperatura",
                text: "Enfriamiento rápido de alimentos cocidos para evitar proliferación bacteriana y optimizar producción.",
              },
              {
                title: "Mesas frías o ensaladeras",
                text: "Ingredientes refrigerados a mano durante la preparación (puertas y tapas).",
              },
              {
                title: "Vitrinas refrigeradas",
                text: "Conservación y exhibición con control de temperatura y humedad.",
              },
              {
                title: "Enfriadores de agua / productoras de hielo",
                text: "Soporte para procesos específicos de cocción y servicio.",
              },
            ],
          },
        ],
      },
      {
        title: "Mapa de equipamiento por línea",
        groups: [
          {
            title: "1) Cocción (línea de calor)",
            items: [
              {
                title: "Cocinas y hornillas industriales",
                text: "Gas o eléctricas; base para cocciones simultáneas.",
              },
              {
                title: "Hornos de convección o combinados",
                text: "Horneados uniformes y grandes volúmenes.",
              },
              {
                title: "Parrillas y planchas",
                text: "Sellado y preparaciones rápidas.",
              },
              {
                title: "Freidoras de alto rendimiento",
                text: "Diseñadas para alto flujo de pedidos.",
              },
              {
                title: "Marmitas y salamandras",
                text: "Guisos a gran escala y gratinados rápidos.",
              },
            ],
          },
          {
            title: "2) Frío (refrigeración y conservación)",
            items: [
              {
                title: "Refrigeradores y congeladores verticales",
                text: "Almacenamiento de fácil acceso.",
              },
              {
                title: "Mesas refrigeradas",
                text: "Preparación manteniendo cadena de frío.",
              },
              {
                title: "Cámaras frigoríficas",
                text: "Almacenamiento a granel en operaciones grandes.",
              },
            ],
          },
          {
            title: "3) Preparación y apoyo",
            items: [
              {
                title: "Mesas de acero inoxidable",
                text: "Superficies higiénicas para corte, mise en place y montaje.",
              },
              {
                title: "Procesadores y batidoras",
                text: "Salsas, cortes específicos y apoyo a repostería.",
              },
              {
                title: "Estanterías y almacenamiento",
                text: "Orden de secos, utensilios y flujo eficiente.",
              },
            ],
          },
          {
            title: "4) Lavado e higiene",
            items: [
              {
                title: "Lavavajillas industriales",
                text: "Ciclo rápido para alta rotación de vajilla.",
              },
              {
                title: "Fregaderos inox con prelavado",
                text: "Para ollas y utensilios pesados.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "hoteles-catering",
    route: "/industria/hoteles-catering",
    title: "Hoteles & Catering",
    description:
      "Logística y banquetes con control térmico: abatimiento, regeneración y transporte seguro.",
    heroImage: IMAGE.aboutPic2,
    keyStations: ["Abatimiento", "Regeneración", "Transporte", "Servicio"],
    stationImages: [IMAGE.galleryPic13, IMAGE.galleryPic14, IMAGE.galleryPic15, IMAGE.galleryPic16],
    sections: [
      {
        title: "Cocinas de hotel: complejidad y versatilidad",
        paragraphs: [
          "Las cocinas de hotel suelen atender operaciones a gran escala: desayunos buffet, room service, banquetes y múltiples restaurantes.",
          "Son un pilar del servicio: alta demanda, precisión y capacidad de respuesta sostenida.",
        ],
      },
      {
        title: "Catering: definición",
        paragraphs: [
          "El catering es un servicio profesional de suministro de comida y bebida para eventos (bodas, reuniones, fiestas) en ubicaciones específicas.",
          "Puede ser integral (incluye personal, montaje, limpieza) o limitado a la preparación y entrega de alimentos.",
        ],
      },
      {
        title: "Aspectos clave del catering",
        groups: [
          {
            title: "Tipos de servicio",
            items: [
              {
                title: "Integral",
                text: "Incluye personal, mantelería, montaje y limpieza.",
              },
              {
                title: "A domicilio / externo",
                text: "Preparación y entrega; a menudo sin personal de servicio.",
              },
              {
                title: "Institucional",
                text: "Comedores escolares, hospitales o empresas.",
              },
            ],
          },
          {
            title: "Componentes",
            items: [
              {
                title: "Operación completa",
                text: "Además de comida: camareros, cocineros, mobiliario y decoración según evento.",
              },
            ],
          },
          {
            title: "Tipos de menús",
            items: [
              {
                title: "Formatos",
                text: "Coffee breaks, cócteles, almuerzos, cenas, brunch o vinos de honor.",
              },
            ],
          },
          {
            title: "Funcionalidad",
            items: [
              {
                title: "Planificación",
                text: "Menú pactado para un grupo; no funciona como restaurante de platos individuales.",
              },
              {
                title: "Logística",
                text: "Permite alimentar reuniones y eventos sin cocinar in situ.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "supermercados",
    route: "/industria/supermercados",
    title: "Supermercados (Retail)",
    description:
      "Cadena de frío y exhibición: murales, islas y backroom para operación continua y venta.",
    heroImage: IMAGE.home3backgroundbg,
    keyStations: ["Backroom", "Exhibición", "Reposición", "Cadena de frío"],
    stationImages: [IMAGE.productPic1, IMAGE.productPic2, IMAGE.productPic3, IMAGE.productPic4],
    sections: [
      {
        title: "Dolores del negocio y cómo los resolvemos",
        bullets: [
          {
            title: "Variaciones de temperatura en murales",
            text:
              "Diseño y mantenimiento para enfriamiento homogéneo, control de humedad según familia de producto y alarmas de desviación.",
          },
          {
            title: "Energía y confort en pasillos fríos",
            text:
              "Selección de murales con puertas y LED, gestión de derrames de aire y confort del cliente sin afectar ventas.",
          },
          {
            title: "Merchandising y rotación",
            text:
              "Planogramas con FIFO/FEFO, estantería ajustada y visibilidad clara; limpieza y sanitización programada.",
          },
          {
            title: "Monitoreo y alertas",
            text:
              "Sensores y telemetría: registro continuo, alarmas inteligentes, análisis de compresores y condensadores para prevenir fallas.",
          },
        ],
      },
      {
        title: "Rangos recomendados de operación",
        groups: [
          {
            title: "Temperaturas por tipo",
            items: [
              { title: "Refrigerados", text: "1°C a 4°C (34°F a 40°F)." },
              { title: "Congelados", text: "≤ -18°C (0°F)." },
              {
                title: "Humedad",
                text: "Control según categoría (produce, lácteos, cárnicos) para evitar desecado o condensación.",
              },
            ],
          },
        ],
      },
      {
        title: "Mapa de equipamiento",
        groups: [
          {
            title: "Front of house (venta)",
            items: [
              {
                title: "Murales refrigerados",
                text: "Puerta de vidrio para eficiencia y confort; abiertos sólo donde el modelo de tráfico lo justifique.",
              },
              {
                title: "Islas (bunkers)",
                text: "Congelados y promociones; control de carga y accesibilidad.",
              },
              {
                title: "Vitrinas servicio completo",
                text: "Deli, panadería y carnicería con iluminación LED y control de humedad.",
              },
            ],
          },
          {
            title: "Backroom (operación)",
            items: [
              {
                title: "Cámaras de refrigeración y congelación",
                text: "Volumen y segregación por familia; rutas de reposición eficientes.",
              },
              {
                title: "Monitoreo remoto",
                text: "Registro continuo de casos y racks, AFDD para reducir fatiga de alarmas.",
              },
            ],
          },
        ],
      },
      {
        title: "Buenas prácticas operativas",
        bullets: [
          "FIFO/FEFO y chequeo de fechas; retiro inmediato de vencidos.",
          "Limpieza y sanitización de murales y juntas; programa documentado.",
          "Etiquetado claro de precios y ESL con hardware apto para baja temperatura.",
        ],
      },
    ],
  },
  {
    slug: "comida-rapida",
    route: "/industria/comida-rapida",
    title: "Comida Rápida (QSR)",
    description:
      "Estandarización para alto rendimiento: equipos rápidos, repetibles y fáciles de mantener.",
    heroImage: IMAGE.home2BackgrounImg,
    keyStations: ["Producción", "Holding", "Línea", "Entrega"],
    stationImages: [IMAGE.slideItem1, IMAGE.slideItem2, IMAGE.slideItem3, IMAGE.slideItem4],
    sections: [
      {
        title: "Dolores del negocio y soluciones",
        bullets: [
          {
            title: "Tiempos de servicio y exactitud",
            text:
              "Diseño de línea de ensamblaje, KDS y separación de expo/delivery para flujos paralelos sin colisiones.",
          },
          {
            title: "Consistencia de producto",
            text:
              "Recetas estandarizadas, equipos de cocción con controles programables, holding con rangos estables.",
          },
          {
            title: "Confiabilidad de equipos",
            text:
              "IoT y mantenimiento preventivo: telemetría en freidoras/rapid cook para anticipar fallas y reducir downtime.",
          },
        ],
      },
      {
        title: "Layout recomendado",
        groups: [
          {
            title: "Línea de ensamblaje",
            items: [
              { title: "Flujo", text: "Almacén → Prep → Cocción → Expo." },
              {
                title: "Expo",
                text: "Separar emplatado dine-in de empaque delivery y pick-up dedicado.",
              },
            ],
          },
        ],
      },
      {
        title: "Seguridad e higiene",
        bullets: [
          "Zonificación HACCP y evitar cruces crudo/cocido.",
          "Ventilación adecuada y manejo de grasas para continuidad.",
        ],
      },
    ],
  },
  {
    slug: "laboratorios",
    route: "/industria/laboratorios",
    title: "Laboratorios",
    description:
      "Precisión científica con estabilidad térmica: refrigeración biomédica y control crítico.",
    heroImage: IMAGE.aboutPic3,
    keyStations: ["Almacenamiento", "Monitoreo", "Contingencia", "Trazabilidad"],
    stationImages: [IMAGE.aboutPic3, IMAGE.galleryPic10, IMAGE.galleryPic11, IMAGE.galleryPic12],
    sections: [
      {
        title: "Rangos y requisitos",
        groups: [
          {
            title: "Temperatura",
            items: [
              {
                title: "Refrigerados",
                text: "2°C a 8°C (36°F–46°F).",
              },
              {
                title: "Congelados",
                text: "-50°C a -15°C (-58°F–+5°F).",
              },
            ],
          },
          {
            title: "Unidades y dispositivos",
            items: [
              {
                title: "Refrigeradores farmacéuticos",
                text: "Propósito biomédico; evitar unidades tipo “dormitorio”.",
              },
              {
                title: "Data loggers (DDL)",
                text: "Sonda amortiguada, ±0.5°C, certificado de calibración vigente y registro continuo.",
              },
            ],
          },
        ],
      },
      {
        title: "Monitoreo y SOP",
        bullets: [
          "Registro continuo cada 30 min y verificación diaria min/máx.",
          "SOP rutinarias y de emergencia: respuesta ante excursiones, respaldo y documentación.",
          "Estabilización de unidades nuevas: 2–7 días antes de uso, con registros dentro de rango consecutivos.",
        ],
      },
    ],
  },
  {
    slug: "carnicerias",
    route: "/industria/carnicerias",
    title: "Carnicerías",
    description:
      "Procesamiento y corte con higiene: sierras, rebanadoras y maduración controlada.",
    heroImage: IMAGE.aboutPic4,
    keyStations: ["Procesamiento", "Corte", "Maduración", "Exhibición"],
    stationImages: [IMAGE.galleryPic2, IMAGE.galleryPic1, IMAGE.galleryPic9, IMAGE.productPic5],
    sections: [
      {
        title: "Higiene y sanitización",
        bullets: [
          {
            title: "Limpieza frecuente",
            text:
              "Desarme de equipos (sierras, moledoras, slicers), químicos food-safe y lavado a presión de superficies.",
          },
          {
            title: "Zonas limpias vs. sucias",
            text:
              "Separación crudo/cocido y rutas sin cruces; lavamanos con pedal y agua caliente/fría.",
          },
          {
            title: "Personal y controles",
            text:
              "PPE, manos y uniformes limpios, control de plagas y auditorías internas con checklist.",
          },
        ],
      },
      {
        title: "Temperatura y cadena de frío",
        groups: [
          {
            title: "Almacenamiento",
            items: [
              { title: "Refrigeración", text: "1°C–4°C para bovino/ovino." },
              { title: "Congelación", text: "≤ -18°C; evitar fluctuaciones." },
              {
                title: "Procesamiento",
                text: "Salas a ~12°C cuando sea posible; sanitización cada 4 horas si más cálido.",
              },
            ],
          },
        ],
      },
      {
        title: "Infraestructura y materiales",
        bullets: [
          "Pisos y paredes impermeables, drenajes suficientes y luz adecuada.",
          "Superficies inox/plásticos; evitar madera por absorción y difícil sanitización.",
        ],
      },
    ],
  },
  {
    slug: "bares-cafeterias",
    route: "/industria/bares-cafeterias",
    title: "Bares & Cafeterías",
    description:
      "Bebidas, hielo y servicio: consistencia, velocidad y experiencia del cliente.",
    heroImage: IMAGE.aboutPic5,
    keyStations: ["Café", "Barras", "Hielo", "Servicio"],
    stationImages: [IMAGE.aboutPic5, IMAGE.productPic2, IMAGE.galleryPic6, IMAGE.galleryPic5],
    sections: [
      {
        title: "Dolores del negocio",
        bullets: [
          {
            title: "Volumen en poco espacio",
            text:
              "Diseños lineales y minimizar cruces; duplicar equipos en puntos críticos (ventanas/drive-thru).",
          },
          {
            title: "Consistencia de bebidas",
            text:
              "Equipos confiables para espresso/café, controles programables y accesorios adecuados (knock box, jets).",
          },
          {
            title: "Márgenes y organización",
            text:
              "Underbar: lavabos, pozos de hielo y speed rails; backbar visible para acceso rápido y control de inventario.",
          },
        ],
      },
      {
        title: "Refrigeración y mise en place",
        bullets: [
          "Bajo barra para leche, cremas y garnishes; mesas de preparación para frutas/kimia fresca.",
          "Merchandisers para impulso (bebidas frías, pastelería).",
        ],
      },
      {
        title: "Equipo típico",
        groups: [
          {
            title: "Bebidas",
            items: [
              { title: "Espresso y molinos", text: "Calidad y repetibilidad." },
              { title: "Brewers programables", text: "Volumen y sabor constante." },
              { title: "Blenders y nitro", text: "Mixología y cold brew de alto flujo." },
            ],
          },
          {
            title: "Bar",
            items: [
              {
                title: "Underbar/Backbar",
                text: "Pozos de hielo, lavabos, speed rails y estantería visible.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "otros",
    route: "/industria/otros",
    title: "Otros",
    description:
      "Soluciones transversales y proyectos especiales para requerimientos únicos.",
    heroImage: IMAGE.bannerImg1,
    keyStations: ["Diagnóstico", "Diseño", "Implementación", "Soporte"],
    stationImages: [IMAGE.bannerImg1, IMAGE.home4Ourwork1, IMAGE.home4Ourwork2, IMAGE.home4Ourwork3],
  },
];

export function getIndustryBySlug(slug) {
  return industryData.find((i) => i.slug === slug);
}
