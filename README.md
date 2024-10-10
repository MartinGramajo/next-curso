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

### Layouts y Layouts anidados

El layout.tsx es un _Higher-Order Component (HOC)_ es un patron de React que permite re utilizar la lógica entre componentes. Básicamente, es una función que toma un componente y retorna un nuevo componente, envolviendo el componente original con funcionalidad adicional.

Lo que coloquemos en nuestro layout.tsx impactara en todas las paginas.

- ejercicio en clase: como podemos colocar el mismo estilo que tenemos en about a contact y pricing pero no home page?
  Para ello utilizamos la anidación de layouts: es crear un nuevo layout. El cual tenemos que tener en cuenta en que nivel lo vamos a crear, ya que si lo creamos en la carpeta about va a comprender como _children_ es todo el árbol de componente que se desprenda después del layout , en nuestro caso, nuestro children seria page.tsx.
  Por lo cual si queremos utilizar el layout y que tenga lo mismo estilo tanto contact como pricing podemos crear una nueva carpeta que tenga las 3 pages y adentro el layout para que los comprenda como su children.

Pero ahora surge otro problema: al colocar de esa forma estaremos modificando la ruta por ende para llegar a cada una de la page tendríamos que colocar la palabra "general" (esta palabra es meramente indicativa podemos ponerle cualquier nombre) => "general/about", "general/contact" y "general/pricing"

**como quitamos ese general de la ruta** colocando entre paréntesis el nombre de la carpeta (general)
esto le indica a next, no quiero que general sea parte de mi url pero que los agrupe a las 3 pages

### Barra de navegación

- funcionalidad compartida en toda la aplicación tenemos que crear en la raíz del proyecto la carpeta _components_
- carpeta _components_ contiene todos los componentes siguiendo las reglas de creación de componentes en react con la funcionalidad compartida por ejemplo una barra de navegación. En clase lo que hicimos fue hacer el componente Navbar.tsx

NOTA: si queremos que nuestra pagina haga un full refresh usaremos las etiquetas <a>. Pero Next nos recomienda otra forma de hacer la navegación.

### next/Link

es un componente proporcionado por Next.js que se utiliza para crear enlaces entre diferentes páginas de una aplicación Next.js.
Es una forma optimizada y eficiente de navegar en una aplicación de React, ya que habilita la precarga automática de las páginas a las que se vincula, lo que mejora el rendimiento y la experiencia del usuario.

#### características de next/link

- Navegación en el lado del cliente
- Precarga automática
- Compatibilidad con rutas dinámicas

### @primer/octicons-react

Paquete de iconos que utilizamos en clase.
Para su instalación:
npm i @primer/octicons-react

### Server Components - Teoría - ventajas - Async await

1. Por defecto todos son _server component_ a menos que especifiquemos lo contrario.

2. _Evitar Efectos_ useEffect entre otros hooks que disparan acciones del lado del cliente, NO SE PUEDEN USAR EN SERVER COMPONENTS. Si es necesario, especificar "use client"

3._Renderizado estático_ es la opción por defecto en Next, esto mejora el performance y reduce enormemente la cantidad de contenido enviado al cliente.

4._Fetch cache_ Llamadas a Fetch, realizaran un cache de forma forzada por defecto a menos que se especifique lo contrario. Fetch en Next tiene propiedades para revalidar, mantener en cache y nunca mantenerlo en cache.

la idea que todo lo que pueda ser generado por _server component_ lo dejemos de esa forma y unicamente las piezas que realmente necesitemos que sean interactivas le vamos a poner el 'use client'.

_REGLA_: si lo vemos como un árbol, todo va a ser server component, es decir, contenido generado desde el lado del servidor pero ciertas hojas serán use client, en este caso, seria el contenido generado del lado del cliente.

### usePathname - activeLink

es un hook de Next.js que forma parte de los hooks de enrutamiento de next/navigation. Se utiliza para obtener la ruta actual de la aplicación, es decir, la URL que se está mostrando en ese momento.

activeLink es nuestro primer component cuyo contenido es generado del lado del cliente al especificar en su primer linea que se trata de un 'use client'.

### Preparar el proyecto para publicarlo

#### Generando la build de producción

Dentro del archivo package.json tenemos una serie de script

```js
"   "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },"
```

- _BUILD_ Compila la aplicación para producción. Next.js genera una versión optimizada del proyecto, empaquetando todos los recursos, generando páginas estáticas (si es posible), y preparando el código para ser desplegado en producción.

Se ejecuta antes de desplegar la aplicación en un entorno de producción para que esté lista para funcionar eficientemente.

comando ===> npm run build

NOTA: el archivo de build se encuentra en la carpeta .next!

- _START_ Inicia el servidor de Next.js en modo de producción. Utiliza el código compilado durante el proceso de next build, permitiendo que la aplicación funcione optimizada en un entorno real de producción.

Se utiliza una vez que has construido la aplicación y deseas ejecutarla en un servidor en vivo.

comando ===> npm start

#### Prefetch

es una técnica que optimiza la navegación en aplicaciones web. Básicamente, permite que las páginas sean precargadas en segundo plano antes de que el usuario haga clic en un enlace. Esto resulta en tiempos de carga mucho más rápidos cuando el usuario efectivamente navega hacia esas páginas.

Por defecto, Next.js realiza el prefetch automático de los recursos cuando un enlace con la etiqueta Link aparece en la pantalla. El archivo JavaScript necesario para esa página se descarga anticipadamente en segundo plano, mejorando la experiencia del usuario al hacer la transición entre páginas.

```js
"
function Home() {
  return (
    <div>
      <h1>Inicio</h1>
      <Link href="/about" prefetch={false}> {/* Prefetch es opcional */}
        <a>Ir a About</a>
      </Link>
    </div>
  );
}"
```

### Subir repositorio a github

Cuando analizamos la estructura del proyecto vimos que teníamos un archivo llamado _gitignore_ en ese archivo están todos los elementos del proyecto que no queremos que se suban en nuestro controlador de versiones git.
En esta clase aprendimos los comandos para el uso/subir el proyecto en github.

### Desplegando en vercel
