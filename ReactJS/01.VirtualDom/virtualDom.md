# VIRTUAL DOM NO REACT.

- Contexto do problema das atualizações na interface;

        1 -  Antes do React, era difícil fazer atualizações na interface com JS.

        2 - Existem muitas interações e mudanças na interface (ex: Facebook).

        3 - As ferramentas da época não resolviam bem esse problema.

## O que é o Virtual DOM?

* Cópia virtual do DOM em memória.
* React faz as alterações nessa cópia virtual.
* Depois, compara com o DOM real e renderiza as partes modificadas.
* Estratégia: capturar as modificações, descartar o DOM e renderizar novamente.


## Funcionamento
* React não renderiza tudo novamente, apenas o necessário.
* Remove o que não deve mais estar no DOM.
* Renderiza apenas as partes modificadas.
* Ex: ao mudar um texto, remove o antigo e renderiza o novo.


## Performance

* Inicialmente houve preocupação com performance.
* Mas a estratégia do React foi bem-sucedida.
* Outros frameworks copiaram essa abordagem.
* Ainda é uma estratégia performática em comparação a outros frameworks.
* Porém, novas abordagens podem surgir para resolver novos problemas.
