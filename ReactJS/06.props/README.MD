<h1>Props no ReactJS</h1>
    
<h2>Introdução></h2>
    
<p>O React é uma biblioteca JavaScript popular para a construção de interfaces de usuário. Um dos conceitos fundamentais
        do React é o uso de componentes, que são blocos reutilizáveis de código. Para que esses componentes se tornem
        verdadeiramente reutilizáveis e dinâmicos, precisamos entender e utilizar as props (abreviação de "propriedades").
</p>
    
<h2>O que são Props?</h2>
    
<h3>Definição</h3>
    
<p>Props são argumentos passados para os componentes React, semelhantes aos parâmetros de uma função. Elas permitem que
você passe dados de um componente pai para um componente filho, tornando-os dinâmicos e reutilizáveis.</p>

    function BemVindo(props) {
     return <h1>Olá, {props.nome}</h1>;
    }
    
    const elemento = <BemVindo nome="Carlos" />;

<p>No exemplo acima, nome é uma prop passada para o componente BemVindo.</p>

<h2>Acessando Props</h2>

Dentro de um componente funcional, as props são acessadas através do parâmetro `props`. Em componentes de classe, elas são acessadas usando `this.props`.

        // Componente funcional
        function BemVindo(props) {
            return <h1>Olá, {props.nome}</h1>;
        }

        // Componente de classe
        class BemVindo extends React.Component {
            render() {
            return <h1>Olá, {this.props.nome}</h1>;
            }
        }


<h2>Passando Props</h2>

<h3>Passando Strings</h3>

As props podem ser passadas como strings diretamente no JSX:

        <BemVindo nome="Carlos" />


<h3>Passando Variáveis e Expressões</h3>

Você também pode passar variáveis e expressões JavaScript como props:

        const nome = "Ana";
        <BemVindo nome={nome} />

        const idade = 25;
        <Pessoa idade={idade + 5} />


<h3>Passando Funções</h3>

Props podem incluir funções que permitem que componentes filhos se comuniquem com componentes pais:

        function Botao(props) {
            return < onClick={props.aoClicar}>Clique aqui</         button>;
        }

        function App() {
            const mostrarAlerta = () => alert('Botão clicado!');
  
            return <Botao aoClicar={mostrarAlerta} />;
        }

<h2>PropTypes e DefaultProps</h2>

<h3>PropTypes</h3>

Para garantir que os componentes recebam as props com os tipos corretos, você pode definir `PropTypes`. Isso ajuda a documentar e a validar as props que um componente deve receber.

        import PropTypes from 'prop-types';

        function BemVindo(props) {
          return <h1>Olá, {props.nome}</h1>;
        }

        BemVindo.propTypes = {
          nome: PropTypes.string.isRequired
        };

<h2>DefaultProps</h2>

`defaultProps` permite definir valores padrão para props que não foram especificadas:

        function BemVindo(props) {
          return <h1>Olá, {props.nome}</h1>;
        }

        BemVindo.defaultProps = {
          nome: 'Visitante'
        };

Se `nome` não for fornecido, o componente `BemVindo` usará "Visitante" como valor padrão.

<h2>Componentes Controlados e Não Controlados</h2>

<h3>Componentes Controlados</h3>

Componentes controlados têm seu estado gerenciado pelo componente pai através de props. Isso é comum em formulários:

        class Formulario extends React.Component {
            constructor(props) {
                super(props);
                this.state = { valor: '' };
            }

            handleChange = (e) => {
                this.setState({ valor: e.target.value });
            }

                render() {
                    return (
                     <input
                     type="text"
                     value={this.state.valor}
                     onChange={this.handleChange}
                    />
                    );
                }
            }

<h3>Componentes Não Controlados</h3>

Componentes não controlados mantêm seu próprio estado interno:

        class Formulario extends React.Component {
        constructor(props) {
            super(props);
            this.inputRef = React.createRef();
        }

        handleSubmit = (e) => {
            e.preventDefault();
            alert('Valor: ' + this.inputRef.current.value);
        }

        render() {
            return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref={this.inputRef} />
                <button type="submit">Enviar</button>
            </form>
            );
        }
        }

<h2>Boas Práticas com Props</h2>

<h3>Desestruturação de Props</h3>

Para tornar o código mais limpo, você pode desestruturar as props:

        function BemVindo({ nome }) {
        return <h1>Olá, {nome}</h1>;
        }

<h2>Evite Mutar Props</h2>
Props são imutáveis. Nunca tente modificar uma prop diretamente dentro de um componente filho.

<h2>Nomeação de Props</h2>
Escolha nomes de props claros e descritivos para facilitar a leitura e manutenção do código.


        // Bom
        <Botao aoClicar={handleClick} />

        // Ruim
        <Botao click={handleClick} />

<h2>Conclusão</h2>

Props são uma parte essencial do React, permitindo que os componentes sejam dinâmicos e reutilizáveis. Compreender como usar e gerenciar props efetivamente é fundamental para desenvolver aplicações React robustas e eficientes. Continue praticando e experimentando com props em seus projetos para aprimorar suas habilidades.