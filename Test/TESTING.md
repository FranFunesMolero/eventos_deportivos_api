# Documentación de Pruebas API

Las pruebas se pueden hacer comodamente desde el navegador abriendo el index.html. Las pruebas se centran en la autenticación de usuarios y la gestión de eventos deportivos.

## Tabla de Contenidos

0. [Requisitos previos](#Requisitos-previos)
1. [Pruebas de Autenticación](#pruebas-de-autenticación)
   - [Registro de Usuario](#registro-de-usuario)
   - [Login de Usuario](#login-de-usuario)
2. [Pruebas de Gestión de Eventos](#pruebas-de-gestión-de-eventos)
   - [Crear Evento](#crear-evento)
   - [Obtener Todos los Eventos](#obtener-todos-los-eventos)
   - [Obtener Evento por ID](#obtener-evento-por-id)
   - [Actualizar Evento](#actualizar-evento)
   - [Eliminar Evento](#eliminar-evento)
   - [Obtener Próximos Eventos](#obtener-próximos-eventos)
   - [Filtrar Eventos por Deporte](#filtrar-eventos-por-deporte)
   - [Filtrar Eventos por Rango de Fechas](#filtrar-eventos-por-rango-de-fechas)

## Requisitos previos

Para realizar las pruebas, asegúrate de tener los siguientes requisitos previos:

1. **Node.js y npm**: Asegúrate de tener Node.js y npm instalados en tu sistema.

2. **Servidor en Ejecución**: El servidor de la API debe estar en ejecución.

3. **Base de Datos**: Asegúrate de que la base de datos esté creada, configurada, con las tablas y en funcionamiento. Añando el archivo basedatos.sql para agilizar la creacion.

4. **Variables de Entorno**: Configura las variables de entorno necesarias, como las credenciales de la base de datos y las claves secretas para JWT. Debes utilizar el archivo `.env` para esto.

5. **Dependencias Instaladas**: Asegúrate de haber instalado todas las dependencias del proyecto, las puedes consultar en el package.json.

6. **Herramienta de Pruebas**: Solo necesitas un navegador.

## Pruebas de Autenticación

### Registro de Usuario

**Endpoint:** `/api/users/register`  
**Método:** `POST`  
**Descripción:** Registra un nuevo usuario en el sistema.

**Cuerpo de la Solicitud:**

```json
{
  "username": "nuevo_usuario",
  "password": "contraseña_segura"
}
```

**Respuesta Esperada:**

```json
{
  "message": "Usuario registrado"
}
```

### Login de Usuario

**Endpoint:** `/api/users/login`  
**Método:** `POST`  
**Descripción:** Autentica a un usuario y devuelve un token JWT.

**Cuerpo de la Solicitud:**

```json
{
  "username": "usuario_existente",
  "password": "contraseña_correcta"
}
```

**Respuesta Esperada:**

```json
{
  "token": "jwt_token_generado"
}
```

## Pruebas de Gestión de Eventos

### Crear Evento

**Endpoint:** `/api/events`  
**Método:** `POST`  
**Descripción:** Crea un nuevo evento deportivo.

**Cuerpo de la Solicitud:**

```json
{
  "nombre": "Nombre del Evento",
  "descripcion": "Descripción del Evento",
  "fecha": "2023-12-31",
  "ubicacion": "Ubicación del Evento",
  "tipoDeporte": "Tipo de Deporte"
}
```

**Respuesta Esperada:**

```json
{
  "message": "Evento creado",
  "eventId": 1
}
```

### Obtener Todos los Eventos

**Endpoint:** `/api/events`  
**Método:** `GET`  
**Descripción:** Obtiene una lista de todos los eventos.

**Respuesta Esperada:**

```json
[
  {
    "id": 1,
    "nombre": "Nombre del Evento",
    "descripcion": "Descripción del Evento",
    "fecha": "2023-12-31",
    "ubicacion": "Ubicación del Evento",
    "tipoDeporte": "Tipo de Deporte",
    "organizador_id": 1
  }
]
```

### Obtener Evento por ID

**Endpoint:** `/api/events/:eventId`  
**Método:** `GET`  
**Descripción:** Obtiene los detalles de un evento específico por su ID.

**Respuesta Esperada:**

```json
{
  "id": 1,
  "nombre": "Nombre del Evento",
  "descripcion": "Descripción del Evento",
  "fecha": "2023-12-31",
  "ubicacion": "Ubicación del Evento",
  "tipoDeporte": "Tipo de Deporte",
  "organizador_id": 1
}
```

### Actualizar Evento

**Endpoint:** `/api/events/:eventId`  
**Método:** `PUT`  
**Descripción:** Actualiza los detalles de un evento específico.

**Cuerpo de la Solicitud:**

```json
{
  "nombre": "Nombre Actualizado",
  "descripcion": "Descripción Actualizada",
  "fecha": "2024-01-01",
  "ubicacion": "Ubicación Actualizada",
  "tipoDeporte": "Tipo de Deporte Actualizado"
}
```

**Respuesta Esperada:**

```json
{
  "message": "Evento actualizado"
}
```

### Eliminar Evento

**Endpoint:** `/api/events/:eventId`  
**Método:** `DELETE`  
**Descripción:** Elimina un evento específico por su ID.

**Respuesta Esperada:**

```json
{
  "message": "Evento eliminado"
}
```

### Obtener Próximos Eventos

**Endpoint:** `/api/events/upcoming`  
**Método:** `GET`  
**Descripción:** Obtiene una lista de los próximos eventos.

**Respuesta Esperada:**

```json
[
  {
    "id": 1,
    "nombre": "Nombre del Evento",
    "descripcion": "Descripción del Evento",
    "fecha": "2023-12-31",
    "ubicacion": "Ubicación del Evento",
    "tipoDeporte": "Tipo de Deporte",
    "organizador_id": 1
  }
]
```

### Filtrar Eventos por Deporte

**Endpoint:** `/api/events/filter`  
**Método:** `GET`  
**Descripción:** Filtra eventos por tipo de deporte.

**Parámetros de Consulta:**

- `type`: Tipo de deporte

**Respuesta Esperada:**

```json
[
  {
    "id": 1,
    "nombre": "Nombre del Evento",
    "descripcion": "Descripción del Evento",
    "fecha": "2023-12-31",
    "ubicacion": "Ubicación del Evento",
    "tipoDeporte": "Tipo de Deporte",
    "organizador_id": 1
  }
]
```

### Filtrar Eventos por Rango de Fechas

**Endpoint:** `/api/events/date`  
**Método:** `GET`  
**Descripción:** Filtra eventos por rango de fechas.

**Parámetros de Consulta:**

- `from`: Fecha de inicio (YYYY-MM-DD)
- `to`: Fecha de fin (YYYY-MM-DD)

**Respuesta Esperada:**

```json
[
  {
    "id": 1,
    "nombre": "Nombre del Evento",
    "descripcion": "Descripción del Evento",
    "fecha": "2023-12-31",
    "ubicacion": "Ubicación del Evento",
    "tipoDeporte": "Tipo de Deporte",
    "organizador_id": 1
  }
]
```
