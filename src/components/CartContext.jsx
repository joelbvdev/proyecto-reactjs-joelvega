import { createContext, useState } from "react"

export const CartContext = createContext()

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  // Función para convertir precio string a número
  const getPrecioNumerico = (producto) => {
    return producto.precioNumerico || Number.parseInt(producto.precio.replace(/[$.,]/g, "")) || 0
  }

  const addItem = (item, quantity) => {
    const exists = cart.find((prod) => prod.id === item.id)
    const itemWithNumericPrice = {
      ...item,
      precioNumerico: getPrecioNumerico(item),
    }

    if (exists) {
      const updatedCart = cart.map((prod) =>
        prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod,
      )
      setCart(updatedCart)
    } else {
      setCart([...cart, { ...itemWithNumericPrice, quantity }])
    }
  }

  const addToCart = addItem

  const clearCart = () => setCart([])

  const removeItem = (id) => setCart(cart.filter((prod) => prod.id !== id))

  const getTotalItems = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return cart.reduce((acc, item) => {
      const precio = item.precioNumerico || getPrecioNumerico(item)
      return acc + precio * item.quantity
    }, 0)
  }

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        addToCart,
        clearCart,
        removeItem,
        getTotalItems,
        getTotalPrice,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}




