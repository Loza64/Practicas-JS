[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/VbaFduOm)
# Primer examen parcial - Programación Web

- [Primer examen parcial - Programación Web](#primer-examen-parcial---programación-web)
  - [Indicaciones generales](#indicaciones-generales)
    - [Dinámica de la evaluación](#dinámica-de-la-evaluación)
    - [Referencia espacio temporal de la evaluación](#referencia-espacio-temporal-de-la-evaluación)
    - [Sobre trabajo en equipo](#sobre-trabajo-en-equipo)
    - [Entrega de la evaluación](#entrega-de-la-evaluación)
    - [Sobre material de apoyo](#sobre-material-de-apoyo)
    - [Sobre archivos blindados](#sobre-archivos-blindados)
    - [Sobre plagio](#sobre-plagio)
  - [Material brindado](#material-brindado)
    - [Capeta design](#capeta-design)
    - [Carpeta assets/sass](#carpeta-assetssass)
    - [Carpeta assets/images](#carpeta-assetsimages)
  - [Requisitos de entrega](#requisitos-de-entrega)
  - [Criterios de evaluación por sección de la página](#criterios-de-evaluación-por-sección-de-la-página)
    - [Diseño y Estilo](#diseño-y-estilo)
    - [Modularización y Reutilización](#modularización-y-reutilización)
    - [Posicionamiento y Ordenamiento](#posicionamiento-y-ordenamiento)
    - [Cumplimiento del Responsive](#cumplimiento-del-responsive)
    - [Uso Correcto de la Especificidad en Selectores](#uso-correcto-de-la-especificidad-en-selectores)
    - [Interacciones del Usuario](#interacciones-del-usuario)


## Indicaciones generales

### Dinámica de la evaluación

La evaluación consiste en replicar una *Landing page*, aplicando los estilos correspondientes para garantizar que las animaciones, responsive, orden y estructura del contenido sea lo mas fiel posible al material de referencia.

Para ello se hará uso de la librería para preprocesamiento de estilos "SASS". Garantizando la modularización, reutilización y optimización de código.

Dentro de la carpeta *design* de este repositorio podrán encontrar los diseños para los diversos dispositivos a los que, el sitio web, deberá de adaptarse.

Además se han incluido capturas de pantalla de las interacciones que el usuario puede realizar sobre el sitio, y como los estilos deben de adaptarse a estas

### Referencia espacio temporal de la evaluación

La evaluación debe de realizarse en los espacios designados por el docente, que para este caso son los laboratorios de computación del departamento de electrónica e informática.

El tiempo de realización de la prueba es de **2.00 horas** de reloj. Iniciará a la 13:30 y finalizará a las 15:30.

### Sobre trabajo en equipo

La evaluación se debe realizar se debe realizar en los equipos de proyecto, seleccionados al inicio de la materia.

Además, en todo momento se tiene que llevar control exhaustivo de versionamiento de código, utilizando la herramienta git. **Todos los integrantes deberán aportar al repositorio de forma equitativa,** garantizando al menos 5 commits descriptivos y semánticos por integrante.

Para esta evaluación no se requerirá la administración exhaustiva por ramas. Pueden trabajar en la rama principal. 

### Entrega de la evaluación

La entrega deberá realizarse sobre este mismo repositorio. Teniendo como hora límite las 15:30 para realizar el último commit.

### Sobre material de apoyo

Durante la evaluación se puede utilizar cualquier material de apoyo que se tenga a disposición, como referencia.

Se puede hacer uso de Inteligencias Artificiales como Chat GPT, Bard AI, Bing, siempre y cuando se referencie en la evaluación donde se utilizó, y que esto no represente mas del 20% de la solución de cualquier sección. 

### Sobre archivos blindados 

Dentro del repositorio se revisará que los siguientes archivos no se modifiquen en ningún commit:

- *index.html*
- *.gitignore*

La modificación de estos archivos anulará la entrega de la evaluación

### Sobre plagio

El material de apoyo a utilizar, debe de ser solo referencia y no una solución de la evaluación.

Cualquier indicio de copia directa de código se tomará como plagio. Además, los repositorios de entrega son privados, por lo que, no deberían de existir dos soluciones parecidas entre los grupos de trabajo.

**No se permite la plática entre personas que no sean del mismo equipo, y los diálogos entre integrantes debe de ser a un volumen bajo**

## Material brindado

### Capeta design

Contiene los resultados en tres viewport distintos, para poder utilizar de referencia al momento de la construcción del resultado final.

Además incluye las interacciones que el usuario puede realizar en el sitio web, y como reaccionan los estilos a este.

### Carpeta assets/sass

Contiene tres archivos no organizados:

- *_normalize.scss*: Archivo general para la normalización de estilos
- *_variables.scss*: Variables generales del proyecto
- *_theme.scss*: Variables específicas del tema a utilizar en el sitio web

### Carpeta assets/images

Contiene todas las imágenes que se utilizarán como recursos del sitio web.

## Requisitos de entrega

Los requisitos de entrega, como tal no son parte de la rúbrica de evaluación, pero cualquier incumplimiento de estos requisitos, anulará la entrega de la evaluación.   

- Estructura ordenada de código en SASS, garantizando la modularización del proyecto en sus componentes principales (archivos generales, componentes, y herramientas, por lo menos).
- Facilitar la reutilización de código haciendo uso de variables y mixins
- Facilitar la construcción de selectores con anidaciones, y uso de operadores relativos.
- No modificar los archivos blindados del proyecto
- Al menos 5 commits por integrante.
- No se puede utilizar Javascript
- Al ejecutar el comando `sass assets/sass/main.scss assets/css/style.css` se aplican los estilos en el sitio web.
- El nombre del equipo en github corresponde a la siguente template: `Equipo <##> - Sec. <##> - <Nombre del equipo>`

## Criterios de evaluación por sección de la página

Estos criterios se aplicarán a todas las secciones del sitio web que se enumeren en la rubrica, por lo que se debe garantizar su cumplimiento, haciendo uso de todos los conocimientos generados en clases, laboratorios, tareas y lecturas extra.

### Diseño y Estilo

1. **Apariencia Visual:** Evaluar la estética general de los estilos aplicados. Debe ser visualmente atractiva y coherente con el tema de la página. Puntuar uso de colores, fuentes y elementos visuales.

2. **Coherencia de Estilos:** Verificar la consistencia de los estilos utilizados en la sección, como colores, tamaños de texto y espaciado. Los estilos deben ser uniformes y agradables a la vista.

### Modularización y Reutilización

1. **Uso de Variables y Mixins:** Evaluar si se han utilizado variables y mixins de Sass u otras técnicas de modularización para estilos comunes. Debe evitarse la duplicación innecesaria de código.

### Posicionamiento y Ordenamiento

1. **Posicionamiento de Elementos:** Evaluar si los estilos aplicados posicionan correctamente los elementos en la sección. Deben seguir un diseño coherente y bien estructurado. Para esto se debe hacer uso de técnicas modernas de flexbox y grid.

### Cumplimiento del Responsive

1. **Adaptación a Diferentes Pantallas:** Comprobar si los estilos aplicados permiten que la sección se adapte adecuadamente a diferentes tamaños de pantalla, garantizando que los elementos se reorganicen o ajusten según sea necesario.

### Uso Correcto de la Especificidad en Selectores

1. **Especificidad de Selectores:** Evaluar si se ha utilizado correctamente la especificidad en los selectores CSS. Deben evitarse selectores demasiado específicos o poco específicos que puedan causar problemas de cascada o anulación de estilos.

### Interacciones del Usuario

1. **Interacciones Interactivas:** Evaluar cualquier interacción interactiva en la sección, como efectos de hover, transiciones o efectos al hacer clic en elementos. Asegurarse de que las interacciones sean agradables y funcionen correctamente.
