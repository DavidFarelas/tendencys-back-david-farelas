# Backend realizado por [@DavidFarelas](https://github.com/DavidFarelas) para la prueba técnica de tendencys 
## Tecnologías utilizadas
- [node.js]
- [express]
- [Joi]
- [mongodb]
- [uuid]


## Explicación
- Se crearon los 3 modelos requeridos.
- Se crearon los CRUD's completos de los 3 módulos requeridos (Applications, Authorizations y Logs).
- Los pasos que sigue el servidor para resolver la petición de un cliente es: 
    1. Verifica que el token se encuentre en la solicitud, hace la validación de sintaxis y verifica que exista en la base de datos.
    2. En caso de que sea una solicitud para crear o editar un registro, se validan todos los campos de la solicitud.
    3. El controlador manda a llamar al servicio donde se resuelve la petición del usuario y devuelve la respuesta exitosa o un error, esto se devuelve al cliente.
    > Nota: En caso que haya algún tipo de error en el token o con la validación de la información recibida, se devuelve al cliente un status determinado con la explicación del error.
 -  Dos registros de `Applications` no pueden tener el mismo nombre.
 -  El token de cada `Applications` se genera automáticamente cuando se crea un nuevo registro.
 -  A cada `Authorizations` le corresponde solamente un `applications_id`, no se pueden repetir.
 -  Si no existe ningún registro de `Applications` cuando se quiere obtener un token, se crea uno nuevo.
 -  Cuando se solicita un token, obtiene uno de manera aleatoria de los que se encuentran registrados en el servidor.

## Instalación

Instalar las dependencias necesarias.
```sh
npm i
npm run start
```

En caso de querer ejecutar el servidor en modo desarrollo 
```sh
npm run dev
```
El servidor se ejecuta en el puerto 3000

```sh
localhost:3000
```
## Pruebas
El token puede obtenerse al consultar la ruta `/api/authorizations/auth`. Este devuelve un token obtenido de la base de datos. Si es la primera vez que se inicia el servidor, se genera un registro nuevo de manera automática en ese momento.
Es necesario ingresar como parámetro de cabecera el atributo `auth-token` y como valor el token recibido previamente, de lo contrario la solicitud será rechazada.
La única ruta que no se encuentra protegida es `/api/authorizations/auth`, por lo que es necesario enviar el token en cada solicitud para todas las demás rutas.

[//]: # (References)


   [node.js]: <http://nodejs.org>
   [express]: <https://expressjs.com>
   [Joi]: <https://joi.dev>
   [mongodb]: <https://www.mongodb.com/>
   [uuid]: <https://www.npmjs.com/package/uuidv4>
   
