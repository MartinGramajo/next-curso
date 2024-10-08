# Primeros pasos en Next

### Habilitar TurboPack

En el archivo package.json dentro de la sección de los scripts agregamos en el "dev" lo siguiente:
"dev" : "next dev --turbo".
Nota: solo funciona en modo de desarrollo por estar en Beta.

### Archivos y directorios

#### archivos fuera de las carpetas

- tsconfig.json : archivo de configuración de como queremos que el compilador de TS trabaje.

- tailwind.config.ts: archivo de configuración de TW.

- README.MD: Descripción del proyecto. Se lo utiliza para dar instrucciones de como levantar el proyecto.

- postcss.config.js: ayuda para hacer las configuraciones de post css.

- package.json: descripción del proyecto en detalle. Contiene el nombre del proyecto, version, la privacidad, los scripts y las dependencias.

- package-lock.json: No se modifica manualmente pero especifica puntualmente como fueron construidos los módulos de node.

- next.config.mjs : configuración globales para como funciona y como se crea el proyecto en next.

- next-env.d.ts: los archivos d.ts son archivos de definición de TS. Archivo que no debe ser modificado.

- gitignore : son todos los archivos, directorios y extension de directorios que queremos que no se le den seguimientos, es decir, que no se suban con el proyecto cuando lo subimos a github.

- eslintrc.json: archivo de configuración por defecto de eslint.

#### Carpetas

- Public: contenido estático que vamos a crear o subir. por ejemplo el logo de next o vercel.

- node_modules: se encuentran todos los módulos de node. Todos los módulos de dependencias y dev dependency para correr nuestra aplicación. No se modifican. Esta carpeta tiene que estar si o si en el gitignore.

- app: Carpeta donde vamos a trabajar nuestro proyecto. Archivos dentro de esta carpeta:

1. globals.css: es nuestro archivo de estilo globales de la aplicación.
2. favicon.ico: es el icono que se encuentra en la ventana de nuestro archivo.
3. layout.tsx: es el root layout es el principal de mi proyecto. Podemos agregar etiquetas de manera globales como pasaba en el caso de nuestro ejemplo con el "hola de nuevo"
4. page.tsx

- .Next carpeta que no se le da seguimiento pero dependiendo de como este nuestra app ya sea en producción o desarrollo es producto de comandos de construcción. Por esta razón no se modifica la carpeta de forma manual.

### rutas adicionales

creación de paginas adicionales: en la carpeta APP vamos a crear una carpeta con el nombre de nuestra page en el caso del ejemplo utilizamos "about" con el archivo page.tsx este archivo siempre se utiliza para la creación de paginas.

Todos los componentes por defecto dentro de la carpeta app son _Server components_ es decir que son generados desde el lado del servidor. En clase se muestra un ejemplo con código JS, se desactiva con la consola el js de la pagina y de igual manera la expresión de js seguía mostrándose esto se debe a la naturaleza del componente ya que al ser generado del lado del servidor, este lo visualiza.

##### Palabras reservadas

Por ejemplo en nuestra app tenemos layout, page, loading, error.

### Metadata - Metatags

Como mínimo siempre debemos tener 2 meta: title y description.
Description (actualmente es el mas importante): le dará una breve descripción de la page en la cual estamos parados actualmente.
Title: indicara el nombre de la page en la cual estamos parado actualmente

Ahora bien el recurso que nos proporciona next para poder agregar meta a las distintas pages es el siguiente:

```js
" export const metadata: Metadata = {
title: "Next App",
description: "Generated with love by Vercel",
}; "
```

lo que hace next es verificar si tiene metadata, si tiene utiliza la especifica en la pagina, sino utiliza la del root layout.
