# Proyecto 1 de Sistemas y Tecnologías Web
## Realizado por Martín España  Carné: 19258

# Descripción
Copy of [*Unreal Engine Web Page*](https://www.unrealengine.com/en-US/) on React Implementation.

# Tabla de Contenido
1. Instalación
2. Uso
3. Tecnología Utilizada
4. Créditos

# 1. Instalación 

### Paso 1
Para realizar la instalación del proyecto, se debe tener instalado [nodejs](https://nodejs.org/en/download/)
y un ambiente de trabajo cómodo (preferencia del usuario).

### Paso 2
Descargar/Clonar el repositorio de Github del siguiente link: https://github.com/martspain/WebPageProjectOne
en una carpeta local.

### Paso 3
Abrir el proyecto en un editor de texto o un entorno de desarrollo integrado (IDE).

### Paso 4
Abrir una consola en la ubicación (root) del proyecto.

### Paso 5
Ejecutar la instrucción **npm i** para instalar todos los paquetes requeridos por las dependencias en la carpeta **/node_modules/**.

### Paso 6
Si se desea utilizar el proyecto en modo de desarrollo se debe ejecutar en la consola la siguiente instrucción: **npm start**. 
De lo contrario, si se desea utilizar el proyecto en modo de producción (compilar el código y generar la carpeta dist)
se debe ejecutar la instrucción **npm run-script build**.

### Paso 7
Disfrutar del programa y de ser posible, aprender de él :D

# 2. Uso
Para utilizar la página se deben seguir las instrucciones de instalación. Luego de ello, la funcionalidad de la página no es mucha,
pues el objetivo principal es replicar la estética. Si se desea se puede comparar el proyecto con la página oficial de 
[Unreal Engine](https://www.unrealengine.com/en-US/).

# 3. Tecnología Utilizada

## Estilo
### Bootstrap V. 5.0.0-beta3
Para el estilo de la página y de muchos de los componentes, como por ejemplo el navbar se utilizaron varias librerías y tutoriales
propios de bootstrap. Algunas fuentes de consulta fueron las siguientes:
    - https://react-bootstrap.github.io/getting-started/introduction/
    - https://getbootstrap.com/docs/4.0/getting-started/introduction/
    - https://getbootstrap.com/docs/5.0/getting-started/introduction/

## Programación
### React V. 17.0.2
Para la programación por componentes se utilizó el framework de React para trabajar con javascript y muchas de las librerías que React ofrece.

## Manejo de Archivos
### Webpack V. 5.33.2
Para el manejo de archivos se utilizó Webpack, de modo que sus loaders permitieron utilziar archivos de estilo con extensión .scss, cargar archivos de imágenes, fuentes, etc.

## Compatibilidad entre navegadores
### Babel V. 7.13.15
Se utilizó babel junto con sus presets *preset-env* y *preset-react* para utilizar el babel-loader de webpack y compilar todo el código de javascript a versiones compatibles con varios navegadores.

## Manejo y Correción de Errores
### Eslint de Airbnb V. 7.24.0
Se utilizó el eslint propuesto por Airbnb para la correción y el manejo de errores y la mejora general del código. 

### Información Extra
Para más información sobre las dependencias utilizadas y sus versiones véase el siguiente [link](https://github.com/martspain/WebPageProjectOne/blob/main/package.json)

# 4. Créditos
Para realizar dropdowns que se activaran con un hover se utilizó como referencia la siguiente página: https://bootstrap-menu.com/detail-basic-hover.html

Además, se utilizaron muchos tutoriales y la documentación oficial de bootstrap, así como varios ejemplos de React.