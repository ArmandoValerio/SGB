# Sistema de Inventario para Biblioteca Escolar
[![Versión](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/ArmandoValerio/SGB/releases/tag/v1.0.0)
## Descripción
Este proyecto consiste en el desarrollo de una aplicación web que optimize la realización y verfifcación del inventario de libros fisicos de una biblioteca.
El proposito de este es facilitar la gestion de los libros fisicos que hay en una biblioteca, permitiendo dar de alta, dar de baja y consultar la información de cada libro;
principalmente esta pensado para ser implementado en la biblioteca de la UT de Tehuacán.
## Características
- **Autenticación** email y password
- **Escaneo inteligente**: ISBN → Google Books API | Sin ISBN → Manual
- **Dashboard** con filtros (categoría, carrera, stock bajo)
- **CRUD completo**
## Roles
| Nombre              | Rol              |
|---------------------|------------------|
| Rita Gonzales       | Frontend         |
| Martin Moreno       | QA               |
| Irvin Isael         | Backend          |
| Armando Valerio     | DevOps / CI/CD   |
| Fernando Spencer   | Tech Lead        |
## Arquitectura del proyecto
Por el momento, el proyecto se está manejando de forma **desacoplada**, separando el frontend y el backend en repositorios independientes para facilitar el desarrollo y mantenimiento.

- **Frontend:** https://github.com/Rita026/Frontend-biblioteca
- **Backend:** https://github.com/IRVINISAEL/backend-biblioteca

A futuro, se contempla la posibilidad de utilizar este repositorio principal como un **monorepo**, donde se integren tanto el frontend como el backend, con el objetivo de simplificar la gestión y el despliegue del proyecto.
## Documentación
Toda la documentación requerida (y la que se irá solicitando a lo largo del proyecto) se encuentra centralizada en la carpeta [`docs`](./docs).
## Instalación
Primero selecciona la carpeta en la que desees tener el proyecto y abre un cmd sobre esa carpeta.
### Pasos de Instalación
1.  Clona el repositorio:
    ```bash
    git clone https://github.com/ArmandoValerio/SGB.git
    ```
2.  Navega al directorio del proyecto:
    ```bash
    cd SGB
    ```
## Dockerizacion 
1.  Ejecuta el siguiente comando en la terminal del proyecto:
    ```bash
    docker build -t "sgb" .
    ```
2.  Ya con el proceso finalizado, ejecuta el siguiente comando:
    ```bash
    docker-compose up --build
    ```
3.- Y con el proceso activo visita la pagina http://localhost:3005
