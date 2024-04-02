import { Link } from "react-router-dom";
import useStock from "../hooks/useStock";
import DeleteButton from "./DeleteButton";

export default function ItemsTable() {
  const { items } = useStock();

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Em Estoque</th>
          <th>Disponível</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody> 
      {items ? (
          items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity} unid.</td>
              <td>{item.saleAvailable}</td>
              <td>
                <Link to={`/items/${item.id}`} className="button is-primary is-small">
                  Ver
                </Link>
                <Link to={`/items/${item.id}/update`} className="button is-small">
                  Atualizar
                </Link>
                <DeleteButton itemId={item.id} itemName={item.name}/>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5">Não há items na tabela!</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}