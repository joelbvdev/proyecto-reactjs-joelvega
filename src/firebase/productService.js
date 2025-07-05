import { collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";
import { db } from "./config";

// Obtener todos los productos
export const getProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "productos"));
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });
    return products;
  } catch (error) {
    console.error("Error obteniendo productos:", error);
    return [];
  }
};

// Obtener un producto por ID
export const getProductById = async (id) => {
  try {
    const docRef = doc(db, "productos", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.log("No existe el producto!");
      return null;
    }
  } catch (error) {
    console.error("Error obteniendo producto:", error);
    return null;
  }
};

// Obtener productos por categoría
export const getProductsByCategory = async (category) => {
  try {
    const q = query(collection(db, "productos"), where("category", "==", category));
    const querySnapshot = await getDocs(q);
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });
    return products;
  } catch (error) {
    console.error("Error obteniendo productos por categoría:", error);
    return [];
  }
};