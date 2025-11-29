import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHome(): string {
    return '¡Bienvenido a la aplicación de CI/CD con Azure App Services! La integración continua está funcionando correctamente.';
  }

  getInfo(): string {
    return 'Esta aplicación demuestra CI/CD con GitHub Actions y Azure App Services. Cada push a main despliega automáticamente.';
  }

  getStatus(): string {
    return 'Nuevo endpoint agregado mediante Pull Request. Funcionando correctamente';
  }
}
