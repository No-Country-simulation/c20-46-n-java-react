
## MindMates - README

![MindMates Logo](https://drive.google.com/file/d/15h3y0yog4ZRIisRO5AApeSSWLhvGpZfv/view?usp=drive_link)  
*(Nota: Sustituir el enlace por la URL real de la imagen del logo si está disponible.)*

### 1. **Introducción**
MindMates es una plataforma digital diseñada para brindar apoyo emocional y psicológico a personas que se sienten aisladas o abrumadas por situaciones difíciles en sus vidas. La aplicación permite a los usuarios conectar con otros que compartan experiencias similares, participar en conversaciones en tiempo real, gestionar sus actividades y acceder a recursos valiosos, todo en un entorno seguro y amigable.

### 2. **Audiencia**
MindMates está dirigido a:
- Personas que buscan apoyo emocional o psicológico.
- Individuos afectados por la pandemia de COVID-19 y otras situaciones que han provocado aislamiento social.
- Aquellos que desean compartir experiencias y encontrar una comunidad de apoyo.
- Profesionales de la salud interesados en plataformas digitales de bienestar.

### 3. **Casos de Uso**
- **Caso 1: Usuario busca apoyo emocional inmediato.**
  - El usuario se conecta a la plataforma, inicia una conversación en tiempo real con otro miembro de la comunidad y recibe el apoyo necesario.
  
- **Caso 2: Usuario organiza sus actividades de bienestar.**
  - El usuario utiliza la agenda de la plataforma para planificar sesiones de autocuidado, eventos de grupo y recordatorios de actividades de bienestar.
  
- **Caso 3: Usuario accede a recursos informativos.**
  - El usuario navega por el blog de recursos para leer artículos sobre salud mental, ver videos motivacionales y participar en discusiones relacionadas.

### 4. **Requerimientos Funcionales**
- **Registro e Inicio de Sesión:**
  - Permitir a los usuarios registrarse e iniciar sesión utilizando email o cuenta de Google.
  - Validar los datos de usuario antes de completar el registro.

- **Gestión de Agenda:**
  - Crear, editar y eliminar eventos en una agenda personalizada.
  - Configurar recordatorios y notificaciones para los eventos.

- **Comunicación en Tiempo Real:**
  - Ofrecer chat en tiempo real mediante tecnología WebSocket.
  - Notificar a los usuarios cuando sus contactos estén disponibles para chatear.

- **Blog de Recursos:**
  - Proveer acceso a artículos, videos y otros recursos útiles para el bienestar emocional.
  - Permitir a los usuarios buscar y filtrar contenido por categorías y tags.

### 5. **Uso**
Una vez que la aplicación esté en funcionamiento, puedes acceder a MindMates desde tu navegador web en `http://localhost:3000`. A continuación, podrás registrarte, iniciar sesión, gestionar tu agenda, navegar por el blog de recursos y comunicarte en tiempo real con otros usuarios.

### 6. **Despliegue**
Para desplegar MindMates en un entorno de producción, sigue estos pasos:

1. **Configura las variables de entorno** en un archivo `.env` similar al que se usa en desarrollo.
2. **Construye el proyecto para producción:**
   ```bash
   npm run build
   ```
3. **Configura un servidor web** para servir los archivos estáticos generados.
4. **Configura la base de datos** MongoDB en un entorno de producción.
5. **Inicia la aplicación** en el servidor utilizando un proceso administrador como PM2:
   ```bash
   pm2 start npm --name "MindMates" -- start
   ```

### 7. **Equipo**
| Nombre                      | Rol                   | LinkedIn                                           |
|-----------------------------|-----------------------|---------------------------------------------------|
| Cristian Siles               | FrontEnd Developer    | [LinkedIn Cristian](https://www.linkedin.com/in/cristiansiles)   |
| Diego Jorges                 | FrontEnd Developer    | [LinkedIn Diego](https://www.linkedin.com/in/diegojorges)        |
| Francisco Jesus Sonocalla    | BackEnd Developer     | [LinkedIn Francisco](https://www.linkedin.com/in/franciscojesussonocalla) |
| Rodrigo Santillan            | BackEnd Developer     | [LinkedIn Rodrigo](https://www.linkedin.com/in/rodrigosantillan) |
| Jorge Suarez                 | Tester QA, PM         | [LinkedIn Jorge](https://www.linkedin.com/in/jorgesuareztech)        |
| Jorge G                      | Team Leader           | [LinkedIn Jorge G](https://www.linkedin.com/in/jorgeg)           |

### 8. **Instalación y Configuración**
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

### 9. **Contribuciones**
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

### 10. **Licencia**
MindMates se distribuye bajo la Licencia MIT. Para más detalles, consulta el archivo `LICENSE`.

### 11. **Contacto**
Para cualquier consulta o sugerencia, puedes contactarnos a través de [contacto@mindmates.com](mailto:contacto@mindmates.com).

