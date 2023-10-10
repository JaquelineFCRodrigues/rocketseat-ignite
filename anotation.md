# FUNDAMENTOS DO REACT

- SPA : Single Page Aplication
- Compilers : Compiladores de códigos (Exemplo: Babel).
- Bundlers: Pegam todos os arquivos js da aplicação e une em apenas um.

# COMPONENTES

- Componente é uma parte da aplicação que pode ser repetida várias vezes inclusive com informações diferentes.

- O *COMPONENTE* em React nada mais é do que uma *FUNÇÃO QUE RETORNA UM HTML*.

- Todos os componentes precisam ter a extensão .jsx (JavaScript + XML)

# DEFAULT EXPORTS vc NAMED EXPORTS

- Default Exports: 
    - Vantangens : É possível dar o nome pro componente na importação e não na exportação.

- Named Exports: 
    - Vantagens : Não deixa o código executar caso alguma nomemclatura esteja errada.

# PROPRIEDADES

- São INFORMAÇÕES que podemos passar para os COMPONENTES.

# CSS MODULES

# KEY no REACT

- Porque única?
- 3 momentos em que um componente é renderizado novamente no React:
    - Quando o estado altera;
    - Quando a propriedade altera;
    - Quando um componente pai renderiza novamente;

- A Key ajuda o react a entender o que já estava e o que não estava em tela.

- Porque não de devo usar o índice do array?

```js

const posts = [1, 2, 3, 4, 5]
//0, 1, 2, 3, 4

```

- Mesmo que mude o post de posição os índices não mudam de posição, o recat vai perceber a mudança e vai deduzir que tudo mudou renderizando tudo novamente.
Por isso não é recomendado usar o index.
