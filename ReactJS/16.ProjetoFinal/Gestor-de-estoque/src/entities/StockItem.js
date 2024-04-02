export const Sales = [
    "Sim",
    "Não"
  ]
  
  export default class StockItem {
    constructor({ name, description, quantity, price, saleAvailable}) {
      this.id = Math.floor(Math.random() * 10000000)
      this.name = name
      this.description = description
      this.quantity = +quantity
      this.price = +price
      this.saleAvailable = saleAvailable
      this.createdAt = new Date()
      this.updatedAt = new Date()
      this.#validate()
    }
  
    #validate() {
      const validName = typeof this.name === "string"
      const validDescription = typeof this.description === "string"
      const validQuantity = typeof this.quantity === "number" && Number.isInteger(this.quantity)
      const validPrice = typeof this.price === "number"
      const validSales = Sales.includes(this.saleAvailable)
      if (!(
        validName &&
        validDescription &&
        validQuantity &&
        validPrice &&
        validSales
      )) {
        throw new Error("Invalid item!")
      }
    }
  }