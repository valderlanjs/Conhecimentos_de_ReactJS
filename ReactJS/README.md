<h1>Introdução ao React</h1>


<p>Como funciona o React, para que ele serve, por que foi criado e quais problemas essa biblioteca resolve. vou abordar os principais conceitos do React, como JSX, componentes, props, eventos, estado, formulários, renderização condicional, listas e muito mais!</p>

<h3>O que aprender</h3>

<ul>
    <li>Como funciona o React e sua filosofia</li>
    <li>Por que o React foi criado e quais problemas ele resolve</li>
    <li>Os principais conceitos e funcionalidades do React:
        <ul>
            <li>JSX</li>
            <li>Componentes</li>
            <li>Props</li>
            <li>Eventos</li>
            <li>Estado</li>
            <li>Formulários</li>
            <li>Renderização condicional</li>
            <li>Listas</li>
            <li>E muitos outros!</li>
        </ul>
    </li>
</ul>


<h3>Requisitos</h3>

<p>Ter conhecimentos sólidos em:</p>

<ul>
    <li><strong>HTML e CSS</strong>: utilizar JSX (parecido com HTML) e CSS em alguns exercícios</li>
    <li><strong>Javascript</strong>: React é basicamente Javascript, então é essencial dominar bem JS antes de começar. Em especial:
        <ul>
            <li>Funções</li>
            <li>Objetos</li>
            <li>Arrays</li>
        </ul>
    </li>
</ul>


<h2>O que é React e por que utilizá-lo</h2>

<p>React é uma biblioteca Javascript open-source criada pelo Facebook para construção de interfaces de usuário. É utilizada para desenvolver aplicações web e mobile de alta performance e escalabilidade.</p><p>Mas por que utilizar React ao invés de apenas Javascript, HTML e CSS?</p>

<h3>Problemas que o React resolve</h3>

<p>O React surgiu da necessidade de resolver alguns problemas comuns no desenvolvimento web:</p>

<ul>
    <li><p><strong>Complexidade crescente</strong> das aplicações web, que ficam cada vez maiores e mais complexas. O React ajuda a manter essa complexidade organizada.</p></li>
    <li><p><strong>Atualização de dados</strong> na interface. O React facilita fazer essas atualizações de forma performática através do conceito de &quot;estado&quot;.</p></li>
    <li><p><strong>Organização</strong>. O React permite quebrar a interface em <strong>componentes</strong> reutilizáveis, facilitando a manutenção do código.</p></li>
    <li><p><strong>Testabilidade</strong>. A natureza modular do React permite testar os componentes de forma isolada.</p></li>
</ul>

<p>Em resumo, o React surgiu da necessidade de uma arquitetura que desse conta de aplicações web cada vez mais complexas e escaláveis.</p>

<h3>Benefícios do React</h3>

<p>Utilizar React traz diversos benefícios, como:</p>

<ul>
    <li>Código mais organizado e fácil de dar manutenção</li>
    <li>Interface construída com <strong>componentes reutilizáveis</strong></li>
    <li>Fácil <strong>integração com outras bibliotecas</strong> Javascript</li>
    <li>Ecossistema enorme e comunidade muito ativa</li>
    <li>Alta performance</li>
    <li>Sites responsivos de forma facilitada</li>
    <li>Entre muitos outros benefícios</li>
</ul>

<p>Por tudo isso e mais, React se tornou uma das bibliotecas Javascript mais populares nos últimos anos. Vale muito a pena aprender!</p>

<h2>JSX: Javascript + XML</h2>

<p>Um dos principais conceitos do React é o <strong>JSX</strong>.</p>

<p>JSX permite escrever código que lembra muito HTML, mas com toda a funcionalidade do Javascript.</p>

<p>É uma extensão de sintaxe para Javascript que permite descrever como a interface deve ser renderizada.</p>

<p>Exemplo:</p>

<pre><code class="language-jsx">const element = &lt;h1&gt;Hello, world!&lt;/h1&gt;;</code></pre>

<p>Este código JSX será &quot;convertido&quot; para Javascript puro e renderizará um h1 com o texto &quot;Hello World&quot;.</p>

<p>O JSX é apenas &quot;açúcar sintático&quot; para chamar funções Javascript que renderizam os elementos na tela.</p>

<p>No fundo é tudo Javascript, mas de uma forma que facilita muito criar interfaces complexas com facilidade de manipulação de dados.</p>

<h2>Componentes</h2>

<p>Outro conceito chave no React são os <strong>componentes</strong>.</p>

<p>Componentes permitem dividir a interface em partes menores, independentes e reutilizáveis.</p>

<p>São pequenos pedaços isolados de código que retornam trechos de interface.</p>

<p>Exemplo de componente:</p>

<pre><code class="language-jsx">function Botao() {  return &lt;button&gt;Clique aqui&lt;/button&gt;; }</code></pre>

<p>Este componente renderiza um botão com o texto &quot;Clique aqui&quot;.</p>

<p>Podemos reutilizar este componente em qualquer lugar da aplicação:</p>

<pre><code class="language-jsx">function Pagina() {  return (    &lt;div&gt;      &lt;Botao /&gt; // Renderizando o componente      &lt;Botao /&gt; // Renderizando novamente    &lt;/div&gt;  );}</code></pre>

<p>Os componentes são a base para criar interfaces complexas no React. Permite dividir em partes menores, testáveis e reaproveitáveis.</p>

<h2>Props</h2>

<p>As <strong>props</strong> (ou propriedades) permitem customizar componentes na hora de utilizá-los.</p><p>São dados que podemos passar para o componente personalizar seu funcionamento.</p>

<p>Exemplo:</p><pre><code class="language-jsx">function Botao(props) {  return &lt;button&gt;{props.text}&lt;/button&gt;;}function Pagina() {  return (    &lt;div&gt;      &lt;Botao text=&quot;Comprar&quot; /&gt;      &lt;Botao text=&quot;Vender&quot; /&gt;    &lt;/div&gt;  );  }</code></pre>

<p>Neste exemplo, passamos a prop <code>text</code> para customizar o texto do botão em cada caso.</p>

<p>As props permitem reutilizar o mesmo componente de diferentes maneiras.</p>

<h2>Estado</h2><p>O <strong>estado</strong> é um objeto Javascript que contém dados que podem influenciar na renderização da interface.</p>

<p>Quando os dados do estado são atualizados, o React redesenha os componentes de forma inteligente, renderizando apenas o necessário.</p>

<p>Exemplo de estado:</p>

<pre><code class="language-jsx">const [contador, setContador] = useState(0); </code></pre>

<p>Este código define um estado chamado <code>contador</code> com valor inicial 0.</p>

<p>Podemos atualizar este estado chamando a função <code>setContador()</code>.</p>

<p>Quando isso ocorre, o React redesenha os componentes, fazendo com que a interface reflita o novo valor.</p>

<p>O estado é uma funcionalidade muito importante para criar interfaces dinâmicas e interativas.</p>

<h2>Eventos</h2>

<p>Para criar interfaces interativas, precisamos lidar com eventos do usuário, como cliques, submissão de formulários, etc.</p>

<p>No React, lidamos com eventos de forma muito similar ao DOM do browser:</p>

<pre><code class="language-jsx">function Botao() {  function clicou() {    console.log(&quot;Botão clicado!&quot;);  }  return (    &lt;button onClick={clicou}&gt; // Adicionando listener de evento      Clique aqui    &lt;/button&gt;  )}</code></pre>

<p>Basta adicionar listeners de eventos aos elementos JSX, passando funções Javascript para serem executadas quando o evento ocorrer.</p>

<p>Dessa forma conseguimos responder às interações do usuário.</p><h2>Formulários</h2><p>Formulários têm alguns comportamentos específicos no React.</p>

<p>Geralmente guardamos os dados do formulário no <strong>estado</strong> do componente, pois aí fica fácil de acessar para envio ou validação.</p>

<p>Exemplo:</p>

<pre><code class="language-jsx">function Formulario() {  const [email, setEmail] = useState(&quot;&quot;);  function aoDigitarEmail(evento) {    setEmail(evento.target.value);   }  return (    &lt;form&gt;      &lt;input         type=&quot;email&quot;        value={email}        onChange={aoDigitarEmail} /&gt;      &lt;button type=&quot;submit&quot;&gt;Enviar&lt;/button&gt;    &lt;/form&gt;  );}</code></pre>

<p>Alguns detalhes importantes:</p>

<ul>
    <li>Guardamos o valor do input no estado com <code>useState</code></li>
    <li>Sincronizamos esse valor no atributo <code>value</code> do input</li>
    <li>Capturamos a digitação com o evento <code>onChange</code>, atualizando o estado</li>
</ul>

<p>Dessa forma o React controla o formulário de ponta a ponta.</p>

<h2>Renderização condicional</h2>

<p>Podemos renderizar componentes condicionalmente baseado em valores do estado com as estruturas <code>if/else</code> ou operador ternário.</p><p>Exemplo:</p>

<pre><code class="language-jsx">function Pagina() {  const [mostrarTexto, setMostrarTexto] = useState(true);  return (    &lt;div&gt;      {mostrarTexto ? ( // Renderiza se verdadeiro        &lt;p&gt;Texto para mostrar&lt;/p&gt;        ) : (        &lt;p&gt;Texto para esconder&lt;/p&gt;      )}      &lt;button onClick={() =&gt; setMostrarTexto(!mostrarTexto)}&gt;        Alterar texto      &lt;/button&gt;    &lt;/div&gt;  );}</code></pre>

<p>Desta forma podemos renderizar diferentes interfaces baseado no estado da aplicação.</p>

<h2>Listas e chaves</h2>

<p>Para renderizar listas de itens no React, utilizamos a função <code>map()</code>:</p>

<pre><code class="language-jsx">function Lista() {  const itens = [&quot;Item 1&quot;, &quot;Item 2&quot;, &quot;Item 3&quot;];    return (    &lt;ul&gt;      {itens.map(item =&gt; (         &lt;li key={item}&gt;{item}&lt;/li&gt;      ))}    &lt;/ul&gt;  );}</code></pre>

<p>O <code>key</code> é importante para o React identificar quais itens são adicionados/alterados/removidos.</p><p>Desta forma podemos renderizar listas de qualquer tipo de dados de forma fácil.</p>

<h2>Considerações finais</h2>

<p>Esses foram alguns dos principais conceitos que vamos explorar neste módulo de fundamentos do React. Ao dominar bem essas funcionalidades você estará apto a criar diversos tipos de aplicações.</p>

<p>Mas calma, ainda tem muito mais pela frente! No próximo módulo vamos aprender tópicos mais avançados como rotas, requisições HTTP, testes e muito mais.</p>

