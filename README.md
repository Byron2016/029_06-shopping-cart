<div>
	<div>
		<img src=https://raw.githubusercontent.com/Byron2016/00_forImages/main/images/Logo_01_00.png align=left alt=MyLogo width=200>
	</div>
	&nbsp;
	<div>
		<h1>029_06-shopping-cart</h1>
	</div>
</div>

&nbsp;

# Table of contents

---

- [Table of contents](#table-of-contents)
- [Project Description](#project-description)
- [Technology stack](#technology-stack)
- [Technologies used](#technologies-used)
- [References](#references)
- [Brief explanation](#brief-explanation)
  - [Things to do](#things-to-do)
    - [Ecommerce](#ecommerce)
    - [Carrito:](#carrito)
- [Steps](#steps)

[⏪(Back to top)](#table-of-contents)

# Project Description

**029_06-shopping-cart** is a practice to understand concepts about **Redux, Context, useReducer** with Reactjs following Youtube Midudev's tutorial [Tienda y Carrito con React + Estado Global con useContext + Manejo de estado con useReducer](https://www.youtube.com/watch?v=B9tDYAZZxcE&list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29&index=7)
and the other help that you can find into **Reference** section.

# Technology stack

[⏪(Back to top)](#table-of-contents)
&nbsp;

# Technologies used

---

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

[⏪(Back to top)](#table-of-contents)

# References

---

- Shields.io

  - [Shields.io](https://shields.io/)

  - [Github Ileriayo markdown-badges](https://github.com/Ileriayo/markdown-badges)

  - [Github Ileriayo markdown-badges WebSite](https://ileriayo.github.io/markdown-badges/)

- Redux
  - [¿Qué es Redux? - Redux en menos de 5 Minutos (Redux Toolkit)](https://www.youtube.com/watch?v=j-jzI3wkkVk)
  -
- RxJS
  - [RxJS](https://rxjs.dev/guide/overview)

[⏪(Back to top)](#table-of-contents)

# Brief explanation

## Things to do

### Ecommerce

- [ ] Muestra una lista de productos que vienen de un JSON
- [ ] Añade un filtro por categoría
- [ ] Añade un filtro por precio

Haz uso de useContext para evitar pasar props innecesarias.

### Carrito:

- [ ] Haz que se puedan añadir los productos a un carrito.
- [ ] Haz que se puedan eliminar los productos del carrito.
- [ ] Haz que se puedan modificar la cantidad de productos del carrito.
- [ ] Sincroniza los cambios del carrito con la lista de productos.
- [ ] Guarda en un localStorage el carrito para que se recupere al recargar la página. (da puntos)

[⏪(Back to top)](#table-of-contents)

# Steps

- Installation

  - To practice I am going to simulate a **pnpm create vite** project structure

    - npm init -y
    - pnpm i -D vite @vitejs/plugin-react
    - pnpm i react react-dom
    - create a **.gitignore** file
    - create a **index.html** file

      ```html
      	....
      	  <head>
      	    ....
      	    <link rel="icon" type="image/svg+xml" 	href="/vite.			svg" />
      	  </head>
      	  <body>
      	    <div id="root"></div>
      	    <script type="module" src="./src/main.	jsx"></			script>
      	  </body>
      	</html>
      ```

    - create a **vite.config.js** file

      ```js
      	import { defineConfig } from 'vite'
      	import react from '@vitejs/pluging-react'
      	export default defineConfig({
      		plugins: export[react()]
      	})
      ```

    - create a **./src/main.jsx** file

      ```js
      import ReactDOM from "react-dom/client";
      import react from "react";

      const root = document.getElementById("root");
      ReactDOM.createRoot(root).render(<h1>Hola Mundo11</h1>);
      ```

    - create these files and call them from **./src/main.jsx**

      - **./src/App.jsx** file
      - **./src/App.css** file
      - **./src/index.css** file

      ```js
      ....
      import App from "./App";
      import "./index.css";

      const root = document.getElementById("root");
      ReactDOM.createRoot(root).render(
        <>
          <h1>Hi from main.jsx</h1>
          <App />
        </>
      );
      ```

    - linter and prettier

      - pnpm i -D eslint
      - pnpm i -D standard
      - pnpm i -D prettier eslint-config-prettier
      - create and configurete files

        - **.eslintignore**

        ```json
        node_modules
        ```

        - **.prettierignore**

        ```json
        node_modules
        pnpm-lock.yaml
        ```

        - **.prettierrc.json**

        ```json
        {
          "semi": false,
          "singleQuote": true
        }
        ```

      - add eslintConfig to **package.json** file.

        ```json
        ....
        "eslintConfig": {
          "extends": [ "./node_modules/@eslint/eslintrc.json"]
          }
        ```

      - add scripts to **package.json** file.

        ```json
        ....
        "scripts": {
          "dev": "vite",
          "lint": "eslint . --ext js,jsx",
          "lintf": "eslint . --ext js,jsx --fix",
          "prett": "prettier . --check",
          "prettw": "prettier . --write"
        },
        ```

- show a list of products.
-
