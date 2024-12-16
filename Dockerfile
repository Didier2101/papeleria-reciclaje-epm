# Etapa de construcción
FROM node:alpine AS build

WORKDIR /app

# Copiar archivos necesarios
COPY package*.json ./
COPY tsconfig*.json ./

# Instalar dependencias
RUN npm install

COPY . ./
# Construir la aplicación
RUN npm run build

# Etapa de producción
FROM node:alpine AS production

WORKDIR /app

# Instalar un servidor estático como 'serve'
RUN npm install -g serve

# Copiar los archivos construidos desde la etapa anterior
COPY --from=build /app/dist /app/dist

EXPOSE 3000

# Usar 'serve' para servir la aplicación en producción
CMD ["serve", "-s", "dist", "-l", "3000"]
