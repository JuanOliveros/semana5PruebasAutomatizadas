
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



#####<H1> Pruebas Kraken - Juan Oliveros </H1>
En el siguiente link podrás recibir una introducción a las pruebas:
https://vimeo.com/518762289/4a934dddc8

##### Ejecución

```bash
bundle install
bundle exec kraken-mobile run
```
alternativo
` kraken-mobile run`

##### Bloque principal de pruebas kraken
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

