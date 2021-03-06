## Semana 08 - Estrategía final
La estretagía final para la dos versiones Ghost la encuentra en la rama 'estrategiaGhost300'

Allí encontrará:
- Readme con los pasos de ejecución.
- Un archivo en word que contiene la estrategía (este archivo se debe descargar).
- Encontrará 4 carpetas: 
1. 'Pruebas exploratorias' que corresponde a las pruebas exploratorias.
2. 'Pruebas de reconocimiento' que corresponde a los archivos para ejecutar las pruebas de reconocimiento.
3. 'Pruebas E2E' que corresponde a las pruebas de extremo a axtremo.
4. 'Pruebas datos aleatorios' que corresponde a pruebas generadas con datos aleatorios desde faker.js





## Semana 07 - Pruebas con generación de datos automáticos y manuales

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

Nota: Para la ejecución del Ghost, es obligatorio tener Ghost instalado en el puerto: 2368 - versión 3.46.6

#### Funcionalidad 01 (Logging)
El objetivo de crear distintos escenarios con datos aleatorios de todo tipo, como: correos, contraseñas, colores, nomres de archivos, etc. Esta cantidad de combinaciones nos permite validar el acceso al admin del Ghost. En el código se puede detallar los escenario.

Vea el archivo en el repositorio  [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/Estrateg%C3%ADa%20din%C3%A1mica%20(60)%20Faker%20Cypress%20-%20Juan%20Oliveros/logging.js)

#### Funcionalidad 02 (PostTitle)

Esta funcionalidad nos permite crear un título para un post, aquí la idea es crear varios escenarios que nos de conocer el comportamiento del campo título frente al input de diferentes tipos de datos. Por ejemplo que pasa si el título tiene más de 40 caractéres, permite guardar? Qué pasa si el título tiene un dato tipo fecha? permite guardar?.
Y así con muchos más escenarios.

Vea el archivo en el repositorio  [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/Estrateg%C3%ADa%20din%C3%A1mica%20(60)%20Faker%20Cypress%20-%20Juan%20Oliveros/postTitle.js)



### Datapool Apriori  - Christian Loza
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



## Pruebas BDT con Playwright - Christian Loza Peralta 

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

##### Funcionalidades Semana 06

-  Gestión de hooks ([Ver aqui](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/playwright-testing/simple/testcase01.ts "Ver aqui"))
-  Nuevos miembros de staff ([Ver aqui](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/playwright-testing/simple/testcase02.ts "Ver aqui"))
-  Agregar nuevos items en diseño ([Ver aqui](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/playwright-testing/simple/testcase03.ts "Ver aqui"))

|   |   |
| ------------ | ------------ |
| ![imagen](https://user-images.githubusercontent.com/15898160/109695637-21d7dc80-7b5a-11eb-813b-6dc31b690a30.png)| ![imagen](https://user-images.githubusercontent.com/15898160/109695672-2c927180-7b5a-11eb-991e-846e20ac06d0.png)|

##### Ejecución

```bash
npm install
node simple/NAMEFILE.ts

```

alternativo
`PWDEBUG=1 npm run test`

##### bloque principal de pruebas
El siguien bloque provee la ejecución de todas la pruebas, se inicia el navegador o navegadores de preferencia, se especifica la implementación, captura una imagen y finalmente cierra el navegador.

```javascript
const playwright = require('playwright');

(async () => {
    for (const browserType of ['chromium', 'firefox']) {
        const browser = await playwright[browserType].launch(({headless: false}));
        const context = await browser.newContext();
        const page = await browser.newPage();
		//code for implement testing
        await page.screenshot({ path: `image.png` });
        await browser.close();
    }
})();

```

Todas las pruebas estan hechas en el panel administrador de Ghost

##### Funcionalidad 01

- Se verifica la funcionalidad de login 
- Se comprueba que funcionan las validaciones
- Se comprueba la recuperación de cuenta con errores
- Se comprueba la recuperación de cuenta

Vea el archivo en el repositorio  [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/playwright-testing/simple/testLogin.ts)
##### Funcionalidad 02

- Comprobación de navegacion dentro del panel del administrador
- Comprobación de visualización de todas la paginas creadas
- Comprobación de la visualización de  etiquetas
- Comprobación  de la visulización de autores

Vea el archivo en el repositorio  [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/playwright-testing/simple/testItems01.ts)
##### Funcionalidad 03
- Comprobación de creación  de Post
- Comprobación de creación de nueva etiqueta para Post
- Cambiar el color de Newest de Ghost 
- Eliminar e color asignado en Newest 

Vea el archivo en el repositorio  [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/playwright-testing/simple/testItem02.ts)
##### Funcionalidad 04
- Comprobación de listado de post
- Modificar o crear post.
- Comprobar la visualización del post
- Comprobar  la creación de post en una fecha de determinada

Vea el archivo en el repositorio  [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/playwright-testing/simple/testGeneral.ts)
##### Funcionalidad 05
- Comprobación de configuraciones generales de ghost
- Subir imagen
-  Comprobación y agregación de Metadatos de descripción del sitio

Vea el archivo en el repositorio  [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/playwright-testing/simple/testConfig.ts)


## Pruebas BDT con Resemble.js - Juan Diego Oliveros semana 06

##### Nuevas funcionalidades, regresión y comparación.

Mediantes las pruebas de regresión, se puede comprabar que las dferencias hacen referencia a cambios de las veriones de los Ghost y también por personalización del usuario.
Se logro correr el Ghost versión  3.3.0 por el puerto 2999 y el Ghost versión 3.41.6 por el puerto: 2368.

![imagen](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/imagenes/ghostRun.JPG)


#### Tabla de comparación
|  Ghost 3.3.0 |   Ghost 3.41.6 |  visual regression |Result|
| ------------ | ------------ | ------------ |------------|
|  ![imagen](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/imagenes/1/01.png) |  ![imagen](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/imagenes/1/02.png) |  ![imagen](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/imagenes/1/diff_1.png) |**Failed **</br>The second image is 2.31% different compared to the first. |

|  Ghost 3.3.0 |   Ghost 3.41.6 |  visual regression |Result|
| ------------ | ------------ | ------------ |------------|
|![imagen](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/imagenes/2/01.png)|![imagen](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/imagenes/2/02.png)|![imagen](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/imagenes/2/diff_2.png)|**Failed **</br>The second image is 2.60% different compared to the first. |

|  Ghost 3.3.0 |   Ghost 3.41.6 |  visual regression |Result|
| ------------ | ------------ | ------------ |------------|
|![imagen](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/imagenes/3/01.png)|![imagen](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/imagenes/3/02.png)|![imagen](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/imagenes/3/diff_3.png)|**Failed **</br> The second image is 1.99% different compared to the first.|

|  Ghost 3.3.0 |   Ghost 3.41.6 |  visual regression |Result|
| ------------ | ------------ | ------------ |------------|
|![imagen](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/imagenes/4/01.png)|![imagen](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/imagenes/4/02.png)|![imagen](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/imagenes/4/diff_4.png)|**Failed **</br>The second image is 1.99% different compared to the first. |

|  Ghost 3.3.0 |   Ghost 3.41.6 |  visual regression |Result|
| ------------ | ------------ | ------------ |------------|
|![imagen](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/imagenes/5/01.png)|![imagen](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/imagenes/5/02.png)|![imagen](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/imagenes/5/diff_5.png)|**Failed **</br>The second image is 21.27% different compared to the first. And they have different dimensions. |

#####<H1> Pruebas Kraken - Juan Diego Oliveros - Funcionalidades semana 06 </H1>
- Cada archivo feature, normalmentete contiene 2 escenarios.

##### Funcionalidad 01

- Se valida que se pueda agregar la locación al staff.
- Se valida que se pueda agregar la url de facebook al staff.
- Se comprueba que el url site no permita carácteres especiales.
- Se comprueba que el Bio  site no permita carácteres especiales.
- Se valida que el twitter link no acepte facebook link.

-Vea el archivo en el repositorio versión Ghost 3.46.6 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/feat/FunWeek6_Version_3.46.6/addLocationStaff.feature).

-Vea el archivo en el repositorio versión Ghost 3.46.6 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/feat/FunWeek6_Version_3.46.6/addLocationStaff2.feature).

-Vea el archivo en el repositorio versión Ghost 3.46.6 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/feat/FunWeek6_Version_3.46.6/addLocationStaff3.feature).

-Vea el archivo en el repositorio versión Ghost 3.3.0 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/feat/FunWeek6_Version_3.3.0/addLocationStaff.feature).

-Vea el archivo en el repositorio versión Ghost 3.3.0 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/feat/FunWeek6_Version_3.3.0/addLocationStaff2.feature).

-Vea el archivo en el repositorio versión Ghost 3.3.0 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/feat/FunWeek6_Version_3.3.0/addLocationStaff3.feature)

##### Funcionalidad 02

- Se comprueba que se pueda expandir el titulo y la descipción.
- Se valida que el sitio se pueda convertir en privado.
- Se compureba que se pueda eliminar el logo.
- Se comprueba que se pueda eliminar el cover.
- Se valida que guarde un logo nuevo.

-Vea el archivo en el repositorio versión Ghost 3.46.6 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/feat/FunWeek6_Version_3.46.6/generalButtons1.feature).

-Vea el archivo en el repositorio versión Ghost 3.46.6 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/feat/FunWeek6_Version_3.46.6/generaDeletes2.feature).

-Vea el archivo en el repositorio versión Ghost 3.46.6 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/feat/FunWeek6_Version_3.46.6/generalSave3.feature).

-Vea el archivo en el repositorio versión Ghost 3.3.0 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/feat/FunWeek6_Version_3.3.3/generalButtons1.feature).

-Vea el archivo en el repositorio versión Ghost 3.3.0 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/feat/FunWeek6_Version_3.3.0/generaDeletes2.feature).

-Vea el archivo en el repositorio versión Ghost 3.3.0 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/feat/FunWeek6_Version_3.3.0/generalSave3.feature)

##### Funcionalidad 03

- Se comprueba que se pueda activar un miebro.
- Se valida que se pueda descargar el archivo routes.yaml.
- Se valida que se pueda descargar el archivo .json llamado current redirects.
- Se valida que exiata el link corercto en el texto 'Find Out More'.
- Se valida que exiata el link corercto en el texto 'Mailgun API'.

-Vea el archivo en el repositorio versión Ghost 3.46.6 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/feat/FunWeek6_Version_3.46.6/LabsEnableDownloadYaml.feature).

-Vea el archivo en el repositorio versión Ghost 3.46.6 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/feat/FunWeek6_Version_3.46.6/LabsDownloadJsonNewTab.feature).

-Vea el archivo en el repositorio versión Ghost 3.46.6 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/feat/FunWeek6_Version_3.46.6/LabsMailgunAPI.feature).

-Vea el archivo en el repositorio versión Ghost 3.3.0 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/feat/FunWeek6_Version_3.3.0/LabsEnableDownloadYaml.feature).

-Vea el archivo en el repositorio versión Ghost 3.3.0 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/feat/FunWeek6_Version_3.3.0/LabsDownloadJsonNewTab.feature).

-Vea el archivo en el repositorio versión Ghost 3.3.0 [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/feat/FunWeek6_Version_3.3.0/LabsMailgunAPI.feature)

#####<H1> Pruebas Kraken - Juan Diego Oliveros - Funcionalidades semana 05 </H1>
En el siguiente link podrás recibir una introducción a las pruebas:
https://vimeo.com/518762289/4a934dddc8

##### Ejecución

```bash
bundle install
bundle exec kraken-mobile run
```
alternativo
` kraken-mobile run`

##### Bloque principal de pruebas kraken Actividad semana 05
Inicialmente debes hacer git clone al archivo funcioanlidadesKraken y correr los comandos desde este directorio.
el link del step_definition:  [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/features/web/step_definitions/web_steps.rb)

##### Funcionalidad 01

- Se valida la funcionalidad de login correcta.
- Se valida la funcionalidad de login incorrecta.
Vea el archivo en el repositorio.  [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/features/loggin.feature)

##### Funcionalidad 02
- Se valida que el usuario pueda agragr un título al post.
- El usuario agragar caracteres especiales al título del post.
Vea el archivo en el repositorio.  [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/features/TitlePost.feature)

##### Funcionalidad 03
- Validar que el usuario tenga habilitada la opción de eliminar  un tag.
- Validar que el usuario pueda eliminar definitivamente el tag.
Vea el archivo en el repositorio.  [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/features/deleteTag.feature)

##### Funcionalidad 04
- Validar que el usuario tega habilitada la opción de añadir un path de navegación.
- Eliminar un path de navegación.
Vea el archivo en el repositorio.  [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/features/deleteAddNavegation.feature)

##### Funcionalidad 05
- Validar que se logre ver un preview del post en borrador.
- Poder editar el path del draft del post.

Vea el archivo en el repositorio.  [AQUI](https://github.com/JuanOliveros/semana5PruebasAutomatizadas/blob/main/funcionalidadesKraken/features/previewDraft.feature)

