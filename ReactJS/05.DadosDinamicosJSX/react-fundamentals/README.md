<h1>Dados Dinâmicos no JSX</h1>

<h3>Introdução</h3>

JSX (JavaScript XML) é uma extensão de sintaxe para JavaScript amplamente usada com o React. Ela permite escrever código semelhante a HTML dentro do JavaScript, facilitando a criação de interfaces de usuário. Uma das principais vantagens do JSX é a capacidade de integrar dados dinâmicos diretamente nas marcações, tornando as interfaces mais interativas e responsivas.

<h3>Conceitos Básicos</h3>

<h4>O que é JSX?</h4>

JSX é uma sintaxe que combina a estrutura de HTML com a flexibilidade do JavaScript. Apesar de parecer HTML, ele é transformado em chamadas de funções JavaScript pelo Babel, um compilador JavaScript.

<h4>Inserindo Dados Dinâmicos</h4>

Em JSX, qualquer expressão JavaScript válida pode ser inserida dentro de chaves {}. Isso inclui variáveis, operações matemáticas, funções e até mesmo expressões condicionais.

    const nome = "Maria";
    const elemento = <h1>Olá, {nome}!</h1>;

<h3>Variáveis e Expressões</h3>

<h4>Utilizando Variáveis</h4>

Variáveis podem ser facilmente integradas ao JSX para exibir dados dinâmicos. Veja um exemplo simples:

    const idade = 25;
    const elemento = <p>Você tem {idade} anos.</p>;

<h4>Operações Matemáticas e Lógicas</h4>
Você também pode realizar operações dentro das chaves:

    const a = 5;
    const b = 10;
    const soma = <p>{a} + {b} = {a + b}</p>;

<h4>Chamadas de Funções</h4>

Funções JavaScript podem ser chamadas dentro do JSX para processar ou formatar dados antes de exibi-los:

    function formatarNome(usuario) {
      return usuario.nome + ' ' + usuario.sobrenome;
    }

    const usuario = { nome: 'Maria', sobrenome: 'Silva' };
    const elemento = <h1>Olá, {formatarNome(usuario)}!</h1>;

<h4>Listas Dinâmicas</h4>

Renderizar listas dinamicamente é uma tarefa comum em React. Utilizamos o método map para iterar sobre um array e gerar elementos JSX para cada item.

    const numeros = [1, 2, 3, 4, 5];
    const listaNumeros = numeros.map((numero) =>
      <li key={numero.toString()}>{numero}</li>
    );

    const elemento = <ul>{listaNumeros}</ul>;

<h4>Chaves em Listas</h4>

Cada elemento em uma lista deve ter uma propriedade "key" única para ajudar o React a identificar quais itens foram alterados, adicionados ou removidos.

    const tarefas = ['Estudar', 'Trabalhar', 'Exercitar'];
    const listaTarefas = tarefas.map((tarefa, index) =>
      <li key={index}>{tarefa}</li>
    );

    const elemento = <ul>{listaTarefas}</ul>;

<h3>Componentes Dinâmicos</h3>

<h4>Propriedades (Props)</h4>

Componentes podem receber dados dinâmicos através de propriedades (props). Isso permite a criação de componentes reutilizáveis e dinâmicos.

    function BemVindo(props) {
      return <h1>Olá, {props.nome}</h1>;
    }

    const elemento = <BemVindo nome="Carlos" />;

<h4>Estado (State)</h4>

O estado (state) é usado para gerenciar dados dinâmicos dentro de um componente. Com useState do React, podemos criar e atualizar estados.

    import React, { useState } from 'react';

    function Contador() {
    const [contagem, setContagem] = useState(0);

      return (
        <div>
          <p>Você clicou {contagem} vezes</p>
          <button onClick={() => setContagem(contagem + 1)}>
            Clique aqui
          </button>
        </div>
      );
    }

<h3>Condicionais em JSX</h3>

<h4>Renderização Condicional</h4>

JSX permite renderizar elementos condicionalmente usando operadores condicionais ou ternários.
    
    const usuarioLogado = true;

    const elemento = (
      <div>
        {usuarioLogado ? <p>Bem-vindo de volta!</p> : <p>Por favor, faça login.            </p>}
      </div>
      );

<h3>Conclusão</h3>

JSX oferece uma maneira poderosa e flexível de criar interfaces de usuário dinâmicas. Ao entender como integrar dados dinâmicos no JSX, você pode construir aplicações React mais interativas e eficientes. Pratique esses conceitos com projetos reais para aprofundar seu conhecimento e se tornar um desenvolvedor React mais competente.


