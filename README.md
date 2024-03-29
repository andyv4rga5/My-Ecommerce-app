# Ecommerce de Tienda Virtual 
[Imagen del icono de la App](https://drive.google.com/file/d/1cvFMoK8g23ijDa6tNoKy_ojHnYMIS4ts/view?usp=sharing)

## Descripción del Proyecto

Esta aplicación móvil, desarrollada con React Native y Expo, ofrece una completa experiencia de compra en línea. Diseñada para facilitar a los usuarios la exploración y adquisición de productos de manera intuitiva, la aplicación cuenta con funciones avanzadas que mejoran la interacción y satisfacción del usuario.

## Tabla de Contenidos
- [Características](#características)
- [Requisitos](#requisitos)
- [Seguridad](#seguridad)
- [Instalación](#instalación)
- [Uso](#uso)
- [Contribución](#contribución)

## Características Destacadas
1. **Autenticación de Usuarios:**
   - Registro e inicio de sesión de usuarios.
      * Ofrece la capacidad de mostrar mensajes de error asociados con la entrada de datos.
      * Los mensajes de error se pueden personalizar según los requisitos específicos del formulario.

2. **Navegación y Categorías de Productos:**
   - Navegación entre pantallas y organización de productos por categorías.

3. **Visualización de Productos:**
   - Visualización de listas de productos y detalles de cada producto.

4. **Carrito de Compras:**
   - Agregar productos al carrito y visualizar el total de la compra.

5. **Proceso de Pedido:**
   - Realización de pedidos con información detallada.

6. **Perfil de Usuario:**
   - Perfiles de usuario con información personal.

7. **Selección de Imagen de Perfil:**
   - Funcionalidad para seleccionar o capturar una imagen para el perfil.

8. **Vista previa del Mapa:** 
   - Visualiza la ubicación en un mapa estático antes de realizar ciertas acciones, como confirmar la ubicación en tu perfil.

9. **Ubicación del Usuario:**
   - Recopilación y visualización de información sobre la ubicación del usuario.

10. **Estilo Visual Agradable:**
   - Utiliza una paleta de colores consistente para una experiencia visual armoniosa y agradable.

#### Tecnologías y Herramientas Utilizadas

La aplicación hace uso de tecnologías modernas, como Redux para el manejo del estado global, integración con bases de datos SQLite para almacenamiento local y servicios Expo para funcionalidades avanzadas.


## Requisitos
Asegúrate de tener instalados los siguientes componentes antes de comenzar:

1. **Expo CLI:**
   - Instala Expo CLI globalmente usando el siguiente comando:
     ```bash
     npm install -g expo-cli
     ```

3. **Expo Go:**
   - Para probar la aplicación en un dispositivo físico, instala Expo Go desde la tienda de aplicaciones de tu dispositivo.

4. **Emulador :**

    [Imagen de referecia Android Studio](https://drive.google.com/file/d/1yd98khrOZVJRVg-rZPktf8rEtSxxbyFb/view?usp=sharing)
   - Configura un emulador de Android o iOS si planeas probar la aplicación en un entorno emulado.

   - La instalación de Android Studio puede ser extensa, y para facilitar este proceso, se proporciona un material de apoyo. A continuación, se presenta una breve descripción, y puedes consultar la presentación completa en [Google Presentación](https://docs.google.com/presentation/d/1r9nS4tTdvPJyxgnNedTCrGHLT1zp7pEhlyICESBE8jc/edit?usp=sharing).

   _Este material fue desarrollado por **Coder House** y el profesor **Pablo Macías**, y se utiliza aquí con sus respectivos créditos y permisos. Las imágenes de referencia presentadas en la presentación son propiedad de Coder House y se utilizan con fines educativos y de orientación aclarando que se modificó para evitar compartir todo el contenido original evitando difundir material privado._

5. **Dependencias del Proyecto:**
   - Después de clonar el repositorio, instala las dependencias locales que puedes encontrar en el siguiente punto ejecutando:
     ```bash
     npm install + "el complemento"
     ```
   - Para el caso de las librerias o bibliotecas de expo el comando de ejecución:
     ```bash
     npx expo + " el complemento"
     ```

6. **Bibliotecas adicionales:**
   - Asegúrate de tener las siguientes bibliotecas instaladas, utilizadas en el proyecto:
     - `@react-navigation/bottom-tabs`
       - Gestiona la navegación por pestañas en React Navigation.
     - `@react-navigation/native`
       - Biblioteca principal de React Navigation para la navegación en React Native. 
     - `@reduxjs/toolkit`
       - Facilita la gestión del estado global con Redux.
     - `expo`
       -  Marco y plataforma para el desarrollo de aplicaciones React Native.
     - `expo-file-system`
       - Ofrece un sistema de archivos para aplicaciones Expo.
     - `expo-font`
       - Facilita la carga de fuentes personalizadas en aplicaciones Expo.
     - `expo-image-picker`
       - Permite acceder a la cámara y la galería para seleccionar imágenes.
     - `expo-linear-gradient`
       - Es una libreria de Expo que permite la implementación de gradientes lineales en aplicaciones Expo. Puedes utilizarlo para agregar fondos y efectos visuales.
     - `expo-location`
       - Proporciona acceso a la información de ubicación del dispositivo.
     - `expo-sqlite`
       - Ofrece una interfaz para trabajar con bases de datos SQLite en Expo.
     - `expo-status-bar`
       - Componente para controlar la barra de estado en aplicaciones Expo.
     - `geolib`
       - Biblioteca para cálculos geoespaciales.
     - `react`
       - Biblioteca principal de React para construir interfaces de usuario.
     - `react-native`
       - Marco para construir aplicaciones móviles con React.
     - `react-native-screens`
       - es una biblioteca que mejora el rendimiento de la navegación en React Native. Especialmente útiles en navegadores de pila.
     - `react-native-swiper`
       - es una biblioteca que ofrece un componente de swiper para React Native. Permite la creación de interfaces de usuario interactivas con la capacidad de deslizar entre diferentes elementos, para el ejemplo en el proyecto se usa para un carrusel.
     - `react-native-vector-icons`
       -Proporciona iconos personalizables para React Native.
     - `react-redux`
       - Facilita la integración de Redux con aplicaciones React.
     - `yup`
       - es una biblioteca de validación de esquemas para JavaScript. Se utiliza comúnmente en aplicaciones React y React Native para validar y asegurar que los datos cumplan con ciertos criterios antes de ser procesados o almacenados. Yup proporciona una forma sencilla y declarativa de definir y aplicar reglas de validación a los datos del usuario.

7. **DevDependencies:**
   - Asegúrate de tener las devDependencies necesarias para desarrollo.
8. **Permisos de Ubicación:**
   - Asegúrate de que la aplicación tenga los permisos necesarios para acceder a la ubicación del dispositivo.
   - Los usuarios deben otorgar permisos para que la aplicación funcione correctamente.

## Seguridad
La seguridad es una consideración fundamental en nuestra aplicación. A continuación, se detallan algunas prácticas y consideraciones relacionadas con la seguridad:

1. **Manejo de Sesiones y Tokens:**
   - La información de autenticación, incluidos los tokens, se almacena de forma segura utilizando SQLite. Esto garantiza la confidencialidad y la integridad de los datos de autenticación.

2. **Seguridad en la Comunicación:**
   - La aplicación utiliza protocolos seguros para la comunicación, como HTTPS, para proteger los datos durante la transmisión entre el cliente y el servidor.

3. **Validación de Datos de Usuario:**
   - Antes de procesar o almacenar datos proporcionados por los usuarios, se aplican reglas de validación utilizando la biblioteca `yup`. Esto ayuda a prevenir posibles ataques de entrada maliciosa.

4. **Protección de Datos del Usuario:**
   - Se implementan medidas para proteger la privacidad y seguridad de los datos del usuario. La información sensible se maneja con precaución y no se comparte innecesariamente.

Recuerda siempre seguir las mejores prácticas de seguridad y realizar auditorías periódicas para garantizar la integridad y la protección continua de los datos del usuario.

## Instalación
1. Clona el repositorio.
2. Instala las dependencias con `npm install`.
3. Configura la API de Google Maps:
   Obtén una clave de API de Google Maps siguiendo las instrucciones en [Google Cloud Console](https://console.cloud.google.com/)
4. Crea un archivo `.env` en la raíz del proyecto que incluya las clave que acceder al servicio API en Google Cloud.
5. Configuración de API Key:
   - Antes de utilizar el componente, asegúrate de configurar correctamente la API Key de Google Maps en el archivo LocationSelector.jsx tal cual como se configuro en el archivo `.env`. Esto es esencial para obtener datos de ubicación y mostrar el mapa estático.
6. Ejecuta la aplicación con `npm start`.
7. Asegúrate de tener configurado un emulador o dispositivo físico para probar la aplicación.
8. Para dispositivos físicos, asegúrate de tener Expo Go instalado y escanea el código QR generado.

## Uso
- **Autenticación de Usuarios:**

  Regístrate e inicia sesión utilizando las pantallas de autenticación proporcionadas. Completa los formularios con la información requerida y sigue las indicaciones. También, cuenta con un estado que se limpia al realizar el cierre de sesión con la acción logout.

- **Navegación y Categorías de Productos:**

  Explora las categorías de productos navegando a través de las pestañas principales. Descubre productos y navega entre diferentes categorías para encontrar lo que necesitas.

- **Visualización de Productos:**

  Explora las listas de productos y obtén detalles específicos de cada producto. Desliza o navega a través de las pantallas para ver imágenes, descripciones y precios.

- **Búsqueda de Productos:**
  Utiliza el componente de búsqueda para encontrar rápidamente productos específicos. Ingresa términos de búsqueda y visualiza los resultados de manera eficiente.

- **Carrito de Compras:**

  Agrega productos al carrito directamente desde la pantalla de visualización de productos. Revisa los elementos en tu carrito, donde puedes ver y ajustar las cantidades.

- **Proceso de Pedido:**

  Completa el proceso de pedido desde tu carrito. Proporciona la información requerida para la entrega y confirma tu pedido.

- **Perfil de Usuario:**

  Personaliza tu perfil agregando o cambiando tu imagen. Explora y actualiza tu información personal según sea necesario.

- **Selección de Imagen de Perfil:**

  Selecciona o actualiza tu imagen de perfil desde la pantalla correspondiente. Sigue las indicaciones para capturar o elegir una imagen.

- **Ubicación del Usuario:**

  La aplicación puede utilizar y mostrar información sobre tu ubicación. Observa cómo se integra la información de ubicación en diferentes secciones de la aplicación, como en tu perfil en donde puedes visualizar previamente antes de confirmar la ubicación un mapa estático utilizando la API de Google Maps.

- **Cierre de Sesión:**
  Para el caso de salir de la aplicacion contamos con un botón que funciona para cerrar la sesión del usuario logueado para eliminar el registro o sesión activa.

## Contribución
Todas las contribuciones son bienvenidas. Abre un problema para discutir cambios importantes y sigue las reglas de estilo del proyecto.

## Estructura de Carpetas
A continuación se presenta la estructura de carpetas del proyecto para una posible orientación para futuros colaboradoes del proyecto:
[Imagen de referencia de la estructura de carpetas](https://drive.google.com/file/d/1S_FL1oMu2PC-MWkGJNHpiCWrZ4WR08Vz/view?usp=sharing)