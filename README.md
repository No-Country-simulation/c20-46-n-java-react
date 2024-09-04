
## MindMates - README

### 1. **Introducción**
MindMates es una plataforma digital diseñada para brindar apoyo emocional y psicológico a personas que se sienten aisladas o abrumadas por situaciones difíciles en sus vidas. La aplicación permite a los usuarios conectar con otros que compartan experiencias similares, participar en conversaciones en tiempo real, gestionar sus actividades y acceder a recursos valiosos, todo en un entorno seguro y amigable.

### 2. **Motivación**
El desarrollo de MindMates fue motivado por el aumento de problemas emocionales y psicológicos, exacerbados por la pandemia de COVID-19. La necesidad de conexión humana y apoyo en tiempos de aislamiento inspiró la creación de una herramienta que facilite la comunicación y el acompañamiento emocional.

### 3. **Características Principales**
- **Registro e Inicio de Sesión:**
  - Registro de usuarios con email y contraseña.
  - Opción para registrarse e iniciar sesión mediante Google.
  - Funcionalidad de recuperación de contraseña.
  
- **Gestión de Agenda:**
  - Crear, editar y eliminar eventos en una agenda personal.
  - Recordatorios y visualización de eventos en diferentes formatos (diario, semanal, mensual).

- **Blog de Recursos:**
  - Acceso a artículos, videos y recursos útiles para el bienestar emocional.
  - Funcionalidad de búsqueda y categorización de contenido.
  - Opción para comentar y compartir artículos.

- **Comunicación en Tiempo Real:**
  - Chat en tiempo real entre usuarios mediante tecnología WebSocket.
  - Historial de conversaciones guardado para futuras consultas.

### 4. **Tecnologías Utilizadas**
- **Front-End:**
  - HTML5, CSS3, JavaScript
  - React.js para la construcción de interfaces de usuario dinámicas
  - Bootstrap para un diseño responsive y moderno

- **Back-End:**
  - Node.js con Express.js para la gestión del servidor
  - MongoDB como base de datos para almacenamiento de usuarios y mensajes
  - WebSocket para la comunicación en tiempo real

- **Herramientas de Desarrollo:**
  - **Google Workspace**: Coordinación y gestión de documentos.
  - **Jira**: Gestión de proyectos y seguimiento de historias de usuario.
  - **Xray**: Integración de Jira para la gestión de pruebas.
  - **Trello**: Organización de tareas y colaboración en equipo.

### 5. **Instalación y Configuración**
Para ejecutar MindMates localmente, sigue estos pasos:

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/No-Country-simulation/c20-46-n-java-react.git
   ```
   
2. **Navega al directorio del proyecto:**
   ```bash
   cd c20-46-n-java-react
   ```

3. **Instala las dependencias:**
   ```bash
   npm install
   ```

4. **Configura las variables de entorno:**
   Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
   ```plaintext
   MONGODB_URI=<tu_conexion_mongodb>
   JWT_SECRET=<tu_secreto_jwt>
   ```

5. **Inicia la aplicación:**
   ```bash
   npm start
   ```

### 6. **Uso**
Una vez que la aplicación esté en funcionamiento, puedes acceder a MindMates desde tu navegador web en `http://localhost:3000`. A continuación, podrás registrarte, iniciar sesión, gestionar tu agenda, navegar por el blog de recursos y comunicarte en tiempo real con otros usuarios.

### 7. **Contribuciones**
Si deseas contribuir a MindMates, sigue estos pasos:

1. **Fork el repositorio.**
2. **Crea una nueva rama para tu característica:**
   ```bash
   git checkout -b feature/nueva-caracteristica
   ```
3. **Realiza tus cambios y haz commit:**
   ```bash
   git commit -m "Descripción de los cambios"
   ```
4. **Envía tus cambios al repositorio remoto:**
   ```bash
   git push origin feature/nueva-caracteristica
   ```
5. **Abre un Pull Request.**

### 8. **Licencia**
MindMates se distribuye bajo la Licencia MIT. Para más detalles, consulta el archivo `LICENSE`.

### 9. **Contacto**
Para cualquier consulta o sugerencia, puedes contactarnos a través de [contacto@mindmates.com](mailto:contacto@mindmates.com).

---
