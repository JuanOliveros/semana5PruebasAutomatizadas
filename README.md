## Semana 08 - pasos para la ejecución
### Link para ver el documento de la estrategía final de pruebas [AQUI](https://uniandes-my.sharepoint.com/:w:/g/personal/j_oliverosv_uniandes_edu_co/EfmhfW5OkrFNm9SNIKKhJM4B0S7Cgyj29EZIKSA5ZU3jug?e=axbqax).
### Link para ver el video de presentación 'Estrategía Final' [AQUI](https://uniandes-my.sharepoint.com/:v:/g/personal/j_oliverosv_uniandes_edu_co/EW0sIdpUbAVJkgKb7su1ZtQBQct-q_zlGBnuMkKNMCZY2g?e=lDNXnS).



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
### Pruebas Kraken
- Cada archivo feature, normalmentete contiene 2 escenarios.

##### Ejecución

El ghost se debe configurar para que corra en el puerto 2999 y no en el 2368.

```bash
bundle install
bundle exec kraken-mobile run
```
alternativo
` kraken-mobile run`

##### Funcionalidad 01

- Se valida que se pueda agregar la locación al staff.
- Se valida que se pueda agregar la url de facebook al staff.
- Se comprueba que el url site no permita carácteres especiales.
- Se comprueba que el Bio  site no permita carácteres especiales.
- Se valida que el twitter link no acepte facebook link.


-Vea el archivo en el repositorio versión Ghost 3.3.0 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/estrategiaGhost300/Pruebas%20E2E/addLocationStaff.feature).

-Vea el archivo en el repositorio versión Ghost 3.3.0 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/estrategiaGhost300/Pruebas%20E2E/addLocationStaff2.feature).

-Vea el archivo en el repositorio versión Ghost 3.3.0 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/estrategiaGhost300/Pruebas%20E2E/addLocationStaff3.feature)

-Vea el archivo en el repositorio versión Ghost 3.46.6 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/feat/FunWeek6_Version_3.46.6/addLocationStaff.feature).

-Vea el archivo en el repositorio versión Ghost 3.46.6 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/feat/FunWeek6_Version_3.46.6/addLocationStaff2.feature).

-Vea el archivo en el repositorio versión Ghost 3.46.6 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/feat/FunWeek6_Version_3.46.6/addLocationStaff3.feature).


##### Funcionalidad 02

- Se comprueba que se pueda expandir el titulo y la descipción.
- Se valida que el sitio se pueda convertir en privado.
- Se compureba que se pueda eliminar el logo.
- Se comprueba que se pueda eliminar el cover.
- Se valida que guarde un logo nuevo.

-Vea el archivo en el repositorio versión Ghost 3.3.0 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/estrategiaGhost300/Pruebas%20E2E/generalButtons1.feature).

-Vea el archivo en el repositorio versión Ghost 3.3.0 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/estrategiaGhost300/Pruebas%20E2E/generaDeletes2.feature).

-Vea el archivo en el repositorio versión Ghost 3.3.0 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/estrategiaGhost300/Pruebas%20E2E/generalSave3.feature).

-Vea el archivo en el repositorio versión Ghost 3.46.6 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/feat/FunWeek6_Version_3.46.6/generalButtons1.feature).

-Vea el archivo en el repositorio versión Ghost 3.46.6 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/feat/FunWeek6_Version_3.46.6/generaDeletes2.feature).

-Vea el archivo en el repositorio versión Ghost 3.46.6 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/feat/FunWeek6_Version_3.46.6/generalSave3.feature).


##### Funcionalidad 03

- Se comprueba que se pueda activar un miebro.
- Se valida que se pueda descargar el archivo routes.yaml.
- Se valida que se pueda descargar el archivo .json llamado current redirects.
- Se valida que exiata el link corercto en el texto 'Find Out More'.
- Se valida que exiata el link corercto en el texto 'Mailgun API'.


-Vea el archivo en el repositorio versión Ghost 3.3.0 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/estrategiaGhost300/Pruebas%20E2E/LabsEnableDownloadYaml.feature).

-Vea el archivo en el repositorio versión Ghost 3.3.0 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/estrategiaGhost300/Pruebas%20E2E/LabsDownloadJsonNewTab.feature).

-Vea el archivo en el repositorio versión Ghost 3.3.0 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/estrategiaGhost300/Pruebas%20E2E/LabsMailgunAPI.feature).

-Vea el archivo en el repositorio versión Ghost 3.46.6 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/feat/FunWeek6_Version_3.46.6/LabsEnableDownloadYaml.feature).

-Vea el archivo en el repositorio versión Ghost 3.46.6 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/feat/FunWeek6_Version_3.46.6/LabsDownloadJsonNewTab.feature).

-Vea el archivo en el repositorio versión Ghost 3.46.6 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/feat/FunWeek6_Version_3.46.6/LabsMailgunAPI.feature).



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

#### Datapool Apriori  - Christian Loza
Se utiliza bubles para ejecutar bloques de código de manera rápida consumiendo servicio u obteniendo los datos dentro del proyecto.

Se requiere javascript y el microservicio creado en java.

```javascript
(async function () {
            try {
                const response = await fetch(PATHSERVICE + 'integration-data');
                let  myJson = await response.json();
                for (let i=0; i< myJson.length; i++) {
                    await page.click('text=Add custom integration');
                    await page.fill('[placeholder="Integration name..."]', myJson[i]);
                    delay(1000)
                    await page.click('text=Integrations');
                }

            } catch (error) {
                console.log('i found a  bug ');
                throw error
            }
        })().catch( e => { console.error(e) })
```
#### Funcionalidad 03(Add Member Staff)
Esta funcionalidad se prueba agregar miembros con diversos correos váidos y errones que determinan agregar usuarios. para este caso se usan valores de un array con elementos fijos el cual se utiliza datos del arreglo de forma aleatoria.
La prueba puede encontrar en el primer bloque de código [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/semana07/test-pruebas/simple/testcase01.ts "AQUI")

Para la configuración requiere Playwrigth utilice el comando: `npm install`  y ejecutar la prueba requiere ejecutar el comando `node simple/testcase01.ts`.

#### Funcionalidad 04(Add Integrations)
Se prueba la funcionalidad  de las integraciones consumiendo un servicio, el archivo puede verse  [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/semana07/test-pruebas/simple/testcase01.ts "AQUI")
![imagen](https://user-images.githubusercontent.com/15898160/111100563-05528180-8516-11eb-8252-e601efd2ca6b.png)
Esta funcionalidad se prueba con un servicio REST implementado en Java [VER AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/tree/main/semana07/faker "VER AQUI"). 
Para su ejecución requiere ejecutar `mvn clean package` y luego ejecutar `java -jar target/faker-1.0-SNAPSHOT.jar` el puerto 9876 debe estar libre. 
La especificación del servicio puede verse en mediante el siguiente enlace: http://localhost:9876/api-specs/swagger.json

### Caso Aleatorio  - Christian Loza
#### Funcionalidad 05(Add Member Staff)
Este caso utiliza las  implementaciones  anteriores,  requiere las configuraciones señaladas anteriormente para su ejección.
Esta funcionalidad se prueba con un servicio REST implementado en Java [VER AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/tree/main/semana07/faker "VER AQUI"). 

#### Pruebas BDT con Playwright - Christian Loza Peralta 

##### Nuevas funcionalidades, regresión y comparación

Las pruebas realizadas en las nuevas funcionalides en comparación  no pasan las pruebas de  regresión debido a que las versiones especificadas en  uso no representan semenjanza en en el Ghost Admin.

![imagen](https://user-images.githubusercontent.com/15898160/110220401-86b17080-7e93-11eb-8e9e-3c2a13caef54.png)

##### Nueva funcionalidad agregada
Se agrego una funcionalidad para evitar problemas al cargar la página para conexiones lentas.
```javascript
function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    });
}

```
#### Reporte automático con BackstopJS
![imagen](https://user-images.githubusercontent.com/15898160/110229104-014eb000-7ed5-11eb-99e4-aa39c1950702.png)
![imagen](https://user-images.githubusercontent.com/15898160/110229283-52ab6f00-7ed6-11eb-8145-b97a9e6ee8bd.png)


[https://github.com/JuanOliveros/semana5PruebasAutomatizadas/tree/main/backstop-report](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/tree/main/backstop-report)

`backstop reference, test`

Para visualizar el reporte vaya a la ruta `backstop-report/backstop_data/html_report`  el archivo `index.html`



#### Tabla de comparación



|  Ghost 3.41.6 |   Ghost 3.3.0 |  visual regression |Result|
| ------------ | ------------ | ------------ |------------|
|  ![imagen](https://user-images.githubusercontent.com/15898160/110219787-405a1280-7e8f-11eb-9033-f90d924250f2.png) |  ![imagen](https://user-images.githubusercontent.com/15898160/110219799-54057900-7e8f-11eb-8dd3-fe91585839d1.png) |  ![imagen](https://user-images.githubusercontent.com/15898160/110219816-697aa300-7e8f-11eb-9674-eee9cd1d0b6d.png) |**Failed **</br>There are some elements that are not the same |

|  Ghost 3.41.6 |   Ghost 3.3.0 |  visual regression |Result|
| ------------ | ------------ | ------------ |------------|
|![imagen](https://user-images.githubusercontent.com/15898160/110220156-ba8b9680-7e91-11eb-8dbf-711668584387.png)|![imagen](https://user-images.githubusercontent.com/15898160/110220046-1275cd80-7e91-11eb-9516-9b95b4f9ce4d.png)|![imagen](https://user-images.githubusercontent.com/15898160/110220176-d0995700-7e91-11eb-8571-83bcb3196382.png)|**Failed **</br>There are some elements that are not the same |

|  Ghost 3.41.6 |   Ghost 3.3.0 |  visual regression |Result|
| ------------ | ------------ | ------------ |------------|
|![imagen](https://user-images.githubusercontent.com/15898160/110220230-1d7d2d80-7e92-11eb-8b85-2a5809141386.png)|![imagen](https://user-images.githubusercontent.com/15898160/110220231-20781e00-7e92-11eb-8621-9c9a771c54de.png)|![imagen](https://user-images.githubusercontent.com/15898160/110220234-22da7800-7e92-11eb-932d-0c61a85b9f2b.png)|**Passed **</br> |

|  Ghost 3.41.6 |   Ghost 3.3.0 |  visual regression |Result|
| ------------ | ------------ | ------------ |------------|
|![imagen](https://user-images.githubusercontent.com/15898160/110220316-d17eb880-7e92-11eb-8733-630b19c53aa1.png)|![imagen](https://user-images.githubusercontent.com/15898160/110220319-d479a900-7e92-11eb-8308-f7012a6254b4.png)|![imagen](https://user-images.githubusercontent.com/15898160/110220320-d5aad600-7e92-11eb-8fbb-84bf8c1a5376.png)|**Failed **</br>There are some elements that are not the same |

|  Ghost 3.41.6 |   Ghost 3.3.0 |  visual regression |Result|
| ------------ | ------------ | ------------ |------------|
|![imagen](https://user-images.githubusercontent.com/15898160/110220337-fb37df80-7e92-11eb-9273-e6ecd81cfefc.png)|![imagen](https://user-images.githubusercontent.com/15898160/110220340-fd01a300-7e92-11eb-8e9d-bfb93ca00958.png)|![imagen](https://user-images.githubusercontent.com/15898160/110220345-ff63fd00-7e92-11eb-9909-3db57e37e2cb.png)|**Failed **</br>There are some elements that are not the same |
