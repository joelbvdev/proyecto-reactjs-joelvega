import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "./config"


export const createOrder = async (orderData) => {
  try {
    console.log("Intentando crear orden:", orderData) 

    const docRef = await addDoc(collection(db, "orders"), {
      ...orderData,
      date: serverTimestamp(),
      status: "pending",
    })

    console.log("Orden creada exitosamente con ID:", docRef.id) 
    return docRef.id
  } catch (error) {
    console.error("Error detallado creando orden:", error) 
    throw error
  }
}

