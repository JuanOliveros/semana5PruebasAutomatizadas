## Semana 08 - pasos para la ejecución
## Pruebas exploratorias:
En la carpeta pruebas exploratorias, econtrará un archivo de excel que contiene el listado de pruebas ejecutadas en en el ghost. En el mismo excel existe una columna con el link del video que cada una de las funcionalidades revisadas, allí se explica si la funcionalidad exitosamente o no.

Para esas funcionalidades se crearon distintos escenarios que también se pueden evidenciar en los videos.

## Pruebas de reconocimiento:
Instrucciones:
- Crear un carpeta para el proyecto - (en terminal como mkdir test).
- Ubiquese en la carpeta que creó y ejecute el siguiente comando - (npm init) (enter a todo).
- En la misma carpeta ejecute el siguiente comando para instalar Cypress (npm install -g cypress).
- En la misma ubicación de la carpeta ejecute el siguiente comando para instalar Faker (npm install faker).
- Ejecute 'cypress open' en la consola, allí se crearan unas carpetas.
- En la carpeta integration>examples, agregue el archivo 'monkey_testing.spec.js' que está ubicado en la carpeta 'Pruebas de reconocimiento'
- Sobre el archivo anteriormente creado, sobre cypress oprima run.

## Pruebas de extremo a extremo:
### Pruebas Kraken - Juan Diego Oliveros - Funcionalidades semana 06 </H1>
- Cada archivo feature, normalmentete contiene 2 escenarios.

##### Funcionalidad 01

- Se valida que se pueda agregar la locación al staff.
- Se valida que se pueda agregar la url de facebook al staff.
- Se comprueba que el url site no permita carácteres especiales.
- Se comprueba que el Bio  site no permita carácteres especiales.
- Se valida que el twitter link no acepte facebook link.


-Vea el archivo en el repositorio versión Ghost 3.3.0 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/estrategiaGhost300/Pruebas%20E2E/addLocationStaff.feature).

-Vea el archivo en el repositorio versión Ghost 3.3.0 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/estrategiaGhost300/Pruebas%20E2E/addLocationStaff2.feature).

-Vea el archivo en el repositorio versión Ghost 3.3.0 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/estrategiaGhost300/Pruebas%20E2E/addLocationStaff3.feature)

##### Funcionalidad 02

- Se comprueba que se pueda expandir el titulo y la descipción.
- Se valida que el sitio se pueda convertir en privado.
- Se compureba que se pueda eliminar el logo.
- Se comprueba que se pueda eliminar el cover.
- Se valida que guarde un logo nuevo.

-Vea el archivo en el repositorio versión Ghost 3.3.0 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/estrategiaGhost300/Pruebas%20E2E/generalButtons1.feature).

-Vea el archivo en el repositorio versión Ghost 3.3.0 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/estrategiaGhost300/Pruebas%20E2E/generaDeletes2.feature).

-Vea el archivo en el repositorio versión Ghost 3.3.0 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/estrategiaGhost300/Pruebas%20E2E/generalSave3.feature)

##### Funcionalidad 03

- Se comprueba que se pueda activar un miebro.
- Se valida que se pueda descargar el archivo routes.yaml.
- Se valida que se pueda descargar el archivo .json llamado current redirects.
- Se valida que exiata el link corercto en el texto 'Find Out More'.
- Se valida que exiata el link corercto en el texto 'Mailgun API'.


-Vea el archivo en el repositorio versión Ghost 3.3.0 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/estrategiaGhost300/Pruebas%20E2E/LabsEnableDownloadYaml.feature).

-Vea el archivo en el repositorio versión Ghost 3.3.0 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/estrategiaGhost300/Pruebas%20E2E/LabsDownloadJsonNewTab.feature).

-Vea el archivo en el repositorio versión Ghost 3.3.0 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/estrategiaGhost300/Pruebas%20E2E/LabsMailgunAPI.feature)



## Pruebas de datos aleatorios:
### Estrátegia dinámica - Juan Oliveros
Para la estrátegía dinámica se realizó con la librería Faker en Cypress:
Instrucciones:
- Crear un carpeta para el proyecto - (en terminal como mkdir test).
- Ubiquese en la carpeta que creó y ejecute el siguiente comando - (npm init) (enter a todo).
- En la misma carpeta ejecute el siguiente comando para instalar Cypress (npm install -g cypress).
- En la misma ubicación de la carpeta ejecute el siguiente comando para instalar Faker (npm install faker).
- Ejecute 'cypress open' en la consola, allí se crearan unas carpetas.
- En la carpeta integration>examples, agregue los dos archivos js que están en la carpeta (Estrategía dinámica (60) Faker Cypress - Juan Oliveros)
- Ejecute cada uno de los archivos.

Nota: Para la ejecución del Ghost, es obligatorio tener Ghost instalado en el puerto: 2999 - versión 3.0.0

#### Funcionalidad 01 (Logging)
El objetivo de crear distintos escenarios con datos aleatorios de todo tipo, como: correos, contraseñas, colores, nomres de archivos, etc. Esta cantidad de combinaciones nos permite validar el acceso al admin del Ghost. En el código se puede detallar los escenario.

Vea el archivo en el repositorio  [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/Estrateg%C3%ADa%20din%C3%A1mica%20(60)%20Faker%20Cypress%20-%20Juan%20Oliveros/logging.js)

#### Funcionalidad 02 (PostTitle)

Esta funcionalidad nos permite crear un título para un post, aquí la idea es crear varios escenarios que nos de conocer el comportamiento del campo título frente al input de diferentes tipos de datos. Por ejemplo que pasa si el título tiene más de 40 caractéres, permite guardar? Qué pasa si el título tiene un dato tipo fecha? permite guardar?.
Y así con muchos más escenarios.

Vea el archivo en el repositorio  [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/Estrateg%C3%ADa%20din%C3%A1mica%20(60)%20Faker%20Cypress%20-%20Juan%20Oliveros/postTitle.js)



