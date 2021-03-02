


#### Pruebas BDT con Playwright - Christian Loza Peralta
![imagen](https://user-images.githubusercontent.com/15898160/109695637-21d7dc80-7b5a-11eb-813b-6dc31b690a30.png)
![imagen](https://user-images.githubusercontent.com/15898160/109695672-2c927180-7b5a-11eb-991e-846e20ac06d0.png)

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



