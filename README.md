# Calendar Backend

Este es el backend para la aplicación MERN-calendar. Aquí encontrarás todo el código necesario para hacer funcionar el servidor y la base de datos.

## Requisitos previos
Antes de ejecutar el backend, asegúrate de tener lo siguiente instalado en tu sistema:

Node.js (versión 12 o superior)
MongoDB (versión 4 o superior)

# Configuración
Para empezar, clona este repositorio en tu máquina local:

```
git@github.com:Mateo-Alvarez1/CRUD-Backend.git
```

Luego, entra en el directorio del proyecto e instala las dependencias:

```
cd mern-calendar-backend
npm install
```

A continuación, copia el archivo .env.example y nómbralo .env. En este archivo se encuentran las variables de entorno necesarias para la conexión con la base de datos y la configuración del servidor. Asegúrate de reemplazar los valores por defecto con tus propias credenciales.
```
cp .env.example .env
```
## Ejecución
Una vez que hayas completado la configuración, puedes iniciar el servidor con el siguiente comando:

```
npm start
```

Esto iniciará el servidor en el puerto 5000. Si deseas cambiar el puerto, modifica la variable PORT en el archivo .env.
