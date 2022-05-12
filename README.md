# VisualThinkingAPI
Ejercicio 5 Semana 4 Backend Launch X

Este repo es un code challenge para la semana 4 de backend en launch X.

## Instalación
Para instalar localmente este proyecto, copia el enlace del repositorio: [Link repo](https://github.com/DianaMagallanes/VisualThinkingAPI) ó dentro de la página del repo puedes dar clic en el botón de _Code_ y despues dar clic en el botón de copiar:
![imagen](https://user-images.githubusercontent.com/28024862/168127558-77ece41c-1c36-4288-99fd-51990ddcf3c1.png)
Una vez que tengas el link del repo copiado, en tu línea de comandos/terminal corre el siguiente comando de git:
```
git clone https://github.com/DianaMagallanes/VisualThinkingAPI
```
Ya que has clonado el repo de manera local, se deben instalar las dependencias que utiliza el proyecto, para esto ejecuta:
```
npm install
```
Una vez que se terminan de instalar las dependencias necesarias, puedes correr el proyecto con el siguiente comando:
```
npm run server
```
En tu navegador entra a [localhost:3000](http://localhost:3000/) y verifica que se muestre el siguiente mensaje:
![imagen](https://user-images.githubusercontent.com/28024862/168131062-ef2181fd-c3ab-41ae-b7c7-cd6b81f7d871.png)


## Requerimientos
- Endpoint para consultar todos los estudiantes con todos sus campos.
- Endpoint para consultar los emails de todos los estudiantes que tengan certificación.
- Endpoint para consultar todos los estudiantes que tengan credits mayor a 500.


## Dependencias
- Jest versión 26.0.0 (Para realizar pruebas unitarias). [Documentación](https://jestjs.io/docs/26.x/getting-started/) 
- ESLint versión 8.14.0 (Para realizar corregir inconsistencias/errores en escritura). [Documentación](https://eslint.org/docs/user-guide/getting-started/)
- Express versión 4.18.0 (Como server). [Documentación](https://expressjs.com/en/starter/installing.html/)

### Versión de Node
v16.14.2 [Documentación](https://nodejs.org/docs/v16.14.2/api/)

## Diseño de componentes
<div align="center"><img src="https://user-images.githubusercontent.com/28024862/166128140-4563d3cf-e81b-4a95-8197-0561195b34c3.png"></div>

## Estructura proyecto
1.  En la raiz de nuestro repo encontraremos 2 archivos json. El archivo **visualPartners.json** es donde se encontrara toda la información que estamos utilizando para nuestra API. _El archivo **visualPartnersTest.json** contiene información a utilizar en las pruebas._
2.  En la carpeta **lib** tenemos:
    -   Carpeta **controllers** contiene archivo: **PartnerController.js** donde se manda a **PartnerService.js**  la información que **Reader.js** obtuvo, y que recibira la información ya modificada de acuerdo a las operaciones indicadas en **PartnerService.js**.
    -   Carpeta **services** contiene archivo: **PartnerService.js** donde se realizaran las operaciones solicitadas en los requerimientos.
    -   Carpeta **utils** contiene archivo: **Reader.js** donde se lee la información del archivo **visualPartners.json**.
    -   Archivo **server.js** donde se hace la configuración del servidor express y se especifican los endpoints solicitados en los requerimientos. Aquí se recibe la información de **PartnerController.js** y se muestra en el endpoint indicado.

3.  En la carpeta **test** tenemos una estructura de archivos y carpetas que es un reflejo de la carpeta **lib**. En esta carpeta estan todos los archivos de pruebas realizadas.
4.  En la carpeta **.github/worklows** se encuentra el archivo **test.yml** que es donde se tiene el código que permite automatizar nuestras pruebas. Nota: se correran las pruebas automáticamente cada vez que hagamos un push a nuestro repo en github gracias a github actions:
![imagen](https://user-images.githubusercontent.com/28024862/168136482-e7fec657-09c0-40f4-affa-3511f6e9bbf7.png)





## Endpoints

| **endpoint**  |  **image** |   
|---|---|
|  **/v1/students** <br> Toda la información de todos los estudiantes. |   <img height="30%" src="https://user-images.githubusercontent.com/28024862/166127947-1c44db61-c2b5-4729-9517-b5a2285c520a.png">  |
|  **/v1/estudents/emails** <br>  Lista de correos de los estudiantes con certificación.|  <img height="30%"  src="https://user-images.githubusercontent.com/28024862/166127915-35b14115-c3a1-4697-bb7f-120000c79fa1.png">   |
|  **/v1/students/credits/** <br> Estudiantes con más de 500 creditos. |   <img height="30%" src="https://user-images.githubusercontent.com/28024862/166127959-1a83f894-fea5-49e6-b98d-859d6b058ca6.png">  |

    
   

