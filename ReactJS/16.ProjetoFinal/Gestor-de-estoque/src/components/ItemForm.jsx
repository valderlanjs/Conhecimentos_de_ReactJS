import PropTypes from "prop-types"
import StockItem, { Sales } from "../entities/StockItem"
import { useRef, useState } from "react"
import useStock from "../hooks/useStock"

ItemForm.propTypes = {
  itemToUpdate: PropTypes.object
}

export default function ItemForm({ itemToUpdate }) {
  const defaultItem = {
    name: "",
    description: "",
    quantity: 0,
    price: 0,
    saleAvailable: ""
  }

  const [item, setItem] = useState(itemToUpdate ? itemToUpdate : defaultItem)
  const { addItem, updateItem } = useStock()
  const inputRef = useRef(null)

  const handleChange = (ev) => {
    setItem((current) => ({ ...current, [ev.target.name]: ev.target.value }))
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    try {
      if (itemToUpdate) {
        updateItem(itemToUpdate.id, item)
        alert("Item atualizado com sucesso!")
      } else {
        const validItem = new StockItem(item)
        addItem(validItem)
        setItem(defaultItem)
        alert("Item cadastrado com sucesso!")
      }
    } catch (err) {
      console.log(err.message)
      alert("Ocorreu um erro.")
    } finally {
      inputRef.current.focus()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            ref={inputRef}
            value={item.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantidade</label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            required
            min={0}
            step={1}
            value={item.quantity}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Preço</label>
          <input
            type="number"
            name="price"
            id="price"
            required
            min={0.00}
            step={0.01}
            value={item.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="sales">Disponível</label>
          <select
            name="sales"
            id="sales"
            required
            value={item.saleAvailable}
            onChange={handleChange}
          >
            <option disabled value="">Selecione se está disponível...</option>
            {Sales.map((sale) => (
              <option
                key={sale}
                value={sale}
                defaultChecked={item.sale === sale}
              >
                {sale}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="description">Descrição</label>
        <textarea
          name="description"
          id="description"
          required
          rows={6}
          value={item.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <button className="button is-primary is-large">
        Salvar
      </button>
    </form>
  )
}

