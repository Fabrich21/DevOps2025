# Ejercicio B - CI/CD con GitHub Actions y Azure App Service

## Descripción
Aplicación backend simple con NestJS configurada para Integración Continua y Despliegue Continuo usando GitHub Actions y Azure App Services.

## Características de la aplicación
- **Sin dependencias externas**: No usa bases de datos, microservicios ni otros servicios externos
- **Endpoints simples**: Dos rutas que devuelven cadenas de texto
- **Preparada para Azure**: Configuración del puerto dinámica para Azure App Service

## Endpoints disponibles

### Ruta inicial (/)
```
GET /
```
Devuelve: "¡Bienvenido a la aplicación de CI/CD con Azure App Services! La integración continua está funcionando correctamente."

### Ruta de información (/info)
```
GET /info
```
Devuelve: "Esta aplicación demuestra CI/CD con GitHub Actions y Azure App Services. Cada push a main despliega automáticamente."

## Estructura del proyecto

```
Ejercicio B/
├── .github/
│   └── workflows/
│       └── azure-deploy.yml    # Workflow de GitHub Actions
├── src/
│   ├── main.ts                 # Punto de entrada
│   ├── app.module.ts           # Módulo principal
│   ├── app.controller.ts       # Controlador con rutas
│   └── app.service.ts          # Servicio con lógica
├── package.json
├── tsconfig.json
├── tsconfig.build.json
├── nest-cli.json
└── .gitignore
```
Ahora la prueba