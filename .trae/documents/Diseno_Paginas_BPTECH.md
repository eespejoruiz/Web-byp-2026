# Diseño de páginas — B&P TECH (desktop-first)

## Estilos globales (design tokens)
- Fondo: #0B1220 (oscuro) + secciones alternadas #0F1B33; superficies/cards: #111C35
- Texto: primario #FFFFFF; secundario #B7C0D8; bordes #223152
- Acento / CTA: #2F80FF (hover: #1C6BE6), éxito: #22C55E, alerta: #F59E0B
- Tipografía: Inter/Manrope; escala: H1 48/56, H2 32/40, H3 24/32, Body 16/24, Small 14/20
- Botones: primario sólido (accent), secundario outline, tertiary tipo link
- Links: subrayado en hover; focus visible (outline 2px accent)
- Layout base: contenedor max-width 1200px, gutters 24px; Grid 12 columnas (desktop)

## Componentes globales
- Header fijo (desktop): logo izquierda, navegación centro, CTA “Contactar” derecha.
- Mega-menú “Industrias”: panel ancho con 11 items (2–3 columnas), cada item con nombre + micro-descripción (opcional) y acceso directo.
- Footer: columnas (Industrias, Casos, Nosotros, Contacto) + legales.

---

## Página: Inicio (/)
### Meta
- Title: “B&P TECH | Soluciones tecnológicas por industria”
- Description: “Sitio corporativo B&P TECH: oferta por industrias y casos de éxito en video.”
- OG: og:title, og:description, og:image (hero)

### Estructura (stacked sections)
1. Hero (2 columnas):
   - Izquierda: headline + subcopy + CTAs (“Ver industrias”, “Ver casos”).
   - Derecha: imagen/visual (estático) con overlay.
2. Sección Industrias (grid):
   - 11 cards (3–4 por fila desktop). Card: título + breve texto + link.
3. Sección Casos destacados (carrusel o grid 3):
   - Card: thumbnail 16:9 + título + industria + duración.
4. CTA final: bloque de conversión con botón a /contacto.

---

## Página: Industria (detalle) (/industrias/:industriaSlug)
### Meta
- Title dinámico: “Industria | B&P TECH”
- Description dinámico por industria
- OG: imagen hero de industria

### Layout
- Hero full-width con breadcrumb (Inicio / Industrias / {Industria}).
- Contenido en 2 columnas: main (8) + aside (4) con CTA.

### Secciones
1. Overview: resumen de la industria y objetivos.
2. Capacidades / Soluciones: lista en cards (3 por fila).
3. Casos relacionados: grid de casos (2–3). Botón “Ver todos los casos”.
4. CTA persistente (aside): “Hablar con un especialista” -> /contacto (con industria preseleccionada).

---

## Página: Casos de Éxito (/casos)
### Meta
- Title: “Casos de Éxito | B&P TECH”
- Description: “Mini-documentales con resultados y aprendizajes.”

### Layout
- Header de página + toolbar de filtros.
- Grid responsivo (desktop 3 columnas) de cards 16:9.

### Secciones
1. Filtro por industria: selector (11 opciones) + botón limpiar.
2. Listado: card con thumbnail, título, industria, duración, CTA “Ver documental”.

---

## Página: Caso de Éxito (mini-documental) (/casos/:caseSlug)
### Meta
- Title dinámico: “Caso: {Título} | B&P TECH”
- OG: thumbnail del video

### Layout
- Hero: reproductor 16:9 centrado (max 960px) + título/sinopsis.
- Cuerpo: 2 columnas (main 8 / aside 4).

### Secciones
1. Reproductor: video (autoplay desactivado), controles visibles, poster.
2. Narrativa (main):
   - Reto
   - Solución
   - Resultados (con bullets)
3. Aside: ficha rápida (industria, fecha, duración) + CTA “Quiero un proyecto similar” -> /contacto.
4. Siguiente/Anterior caso (opcional): navegación simple al final.

---

## Página: Nosotros (/nosotros)
### Meta
- Title: “Nosotros | B&P TECH”
- Description: “Quiénes somos y cómo trabajamos.”

### Estructura
1. Hero: manifiesto/posicionamiento.
2. Bloque “Cómo trabajamos”: 3–4 cards (proceso, calidad, colaboración).
3. CTA a contacto.

---

## Página: Contacto (/contacto)
### Meta
- Title: “Contacto | B&P TECH”
- Description: “Contáctanos para evaluar tu necesidad por industria.”

### Layout
- 2 columnas: formulario (8) + datos (4).

### Formulario (campos mínimos)
- Nombre, Email, Empresa, Industria (selector 11), Mensaje, botón Enviar.
- Estados: loading, success, error; validación inline.
