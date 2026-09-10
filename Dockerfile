# La carpeta build/ llega ya construida y prerenderizada desde el flujo de
# GitHub Actions (.github/workflows/deploy.yml): alli se compila el proyecto y
# se genera un index.html por ruta con Chromium. Aqui solo se empaqueta.
#
# Se hace asi porque el prerenderizado necesita un navegador, y meterlo dentro
# de esta imagen la engordaria varios cientos de megas para usarlo una sola vez.
#
# Para construir a mano:  npm ci && npm run build:seo && docker build -t byp .
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY build /usr/share/nginx/html
# Si build/ no trae las rutas prerenderizadas, la imagen no se publica.
RUN test -f /usr/share/nginx/html/index.html \
 && test -f /usr/share/nginx/html/industrias/cocinas-industriales/index.html \
 || (echo "ERROR: falta el prerenderizado. Ejecuta 'npm run build:seo' antes de construir la imagen." && exit 1)
