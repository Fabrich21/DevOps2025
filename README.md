# Ejercicio B - CI/CD con GitHub Actions y Azure App Service

## Descripción
Aplicación backend simple con Express.js configurada para Integración Continua y Despliegue Continuo usando GitHub Actions y Azure App Services.

## Características de la aplicación
- **Sin dependencias externas**: No usa bases de datos, microservicios ni otros servicios externos
- **Endpoints simples**: API REST con 4 endpoints
- **Preparada para Azure**: Configuración del puerto dinámica para Azure App Service

## Endpoints disponibles

### Ruta inicial (/)
```
GET /
```
Devuelve mensaje de bienvenida con timestamp

### Ruta de información (/info)
```
GET /info
```
Devuelve información del servidor (versión Node, memoria, plataforma)

### Ruta de estado (/status)
```
GET /status
```
Devuelve estado del servidor y uptime

### Ruta de salud (/health)
```
GET /health
```
Devuelve estado de salud del sistema con checks

## Estructura del proyecto

```
Ejercicio B/
├── .github/
│   └── workflows/
│       └── main_devops-ejerciciob-25.yml    # Workflow de GitHub Actions
├── server.js                   # Aplicación Express.js
├── package.json
└── .gitignore
```
