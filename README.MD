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

``` js
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

``` scss
@import "~bootstrap/scss/bootstrap";
```

Abrir o arquivo **src/js/main.js** e adicionar o código abaixo para importar o CSS e o JS do bootstrap. O Popper será importado automaticamente via Bootstrap.

``` js
import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'
```

Abrir o arquivo **src/main.jsx** e importar o arquivo ***js/main.js***.

``` jsx
import './js/main.js'
```

Abrir o arquivo index.html (na raiz do projeto) e adicionar algum código Bootstrap para ver se vai funcionar. Por exemplo:

``` html
<button class="btn btn-primary">Primary button</button>
```

Exceutar o comando ```npm run dev```.

Divirta-se!


## Como fazer a build e enviar ao servidor web:

Se o projeto for ser hospedado em uma subpasta no servidor (Ex: https://ead.camara.leg.br/cefor25anos/), devemos inidcar a subpasta **/cefor25anos/** como base. Nesse caso, devemos adicionar as seguintes linhas ao arquivo **vite.config.js** contendo o nome da subpasta. Devemos colocar / no início e fim do nome da pasta.

``` js
base: '/cefor25anos/',
server: {
  base: '/cefor25anos/'
}
```

Subpastas que estejam dentro da pasta src e que não façam parte do padrão não são copiadas pra pasta dist automaticamente. Uma forma de resolver isso é usar a pasta **public**, pois tudo que está nela é copiado pra raiz da pasta dist. Arquivos estáticos, como por exemplo imagens, arquivos js e css prontos, podem ser colocados na pasta public, mesmo que eles estejam dentro de subpastas. Arquivos dinâmicos, como por exemplo scss, não podem ser colocados nessa pasta, pois não serão compilados.

Rodar o comando `npm run build` para gerar a pasta **dist**.

Rodar o comando `npm run preview` para testar se tudo está funcionando.

Enviar o conteudo da pasta **dist** para a pasta **/cefor25anos/** no servidor.

Fim.