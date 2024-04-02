export default () => {
    const status = true
    
    return (
    <h2
        style={{
            color: status ? "#00ff9f" : "#ff0000"
        }}
    >
        Current status: {status ? "ON" : 'OFF'}
    </h2>)
}
//Trabalhando com estilos em componentes no qual é utilizado o javascript para estilização