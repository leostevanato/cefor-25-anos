# Como instalar e configurar React + Vite + Bootstrap:

## Instalar Vite + React (https://vitejs.dev/guide/):
```
npm create vite@latest nome-do-projeto -- --template react
```

## Instalar e configurar Bootstrap (https://getbootstrap.com/docs/5.2/getting-started/vite/):

Instalar o Bootstrap com o Popper, pois nossos dropdowns, popovers e tooltips dependem dele para seu posicionamento. Caso não vá usar esses componentes, pode omitir o Popper.
```
npm i --save bootstrap @popperjs/core
```

Instalar a dependência SASS para podermos importar e fazer o bundle do CSS do Bootstrap corretamente.
```
npm i --save-dev sass
```

Criar pastas e arquivos **src/js/main.js** e **src/scss/styles.scss**.
```
my-project/
├── src/
│   ├── js/
│   │   └── main.js
│   └── scss/
│       └── styles.scss
```

Abrir o arquivo **vite.config.js** e adicionar import path e o resolve conforme abaixo.
```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  }
})
```

Abrir o arquivo **src/scss/styles.scss** e adicionar o código abaixo para importar o SCSS do bootstrap.
```
@import "~bootstrap/scss/bootstrap";
```

Abrir o arquivo **src/js/main.js** e adicionar o código abaixo para importar o CSS e o JS do bootstrap.
O Popper será importado automaticamente via Bootstrap.

```
import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'
```

Abrir o arquivo **src/main.jsx** e importar o arquivo ***js/main.js***.
```
import './js/main.js'
```

Abrir o arquivo index.html (na raiz do projeto) e adicionar algum código Bootstrap para ver se vai funcionar. Por exemplo:
```
<button class="btn btn-primary">Primary button</button>
```

Exceutar o comando ```npm run dev```.

Divirta-se!