import { db } from "../tools/firebase"
import { collection, getDocs } from "firebase/firestore"

const collection_name = "products"

class ProductfirebaseService {

    static async getAllProducts() {
       const response = await getDocs( collection(db, collection_name) )
       const products = response.docs.map( doc => doc.data() )
       return products
    }

    static async getProductBySku(sku) {
        
    }

    // creamos la accion para visitar el endpoint POST para crear un producto
    static async createProduct(data) {
        
    }
}

const objeto = new ProductfirebaseService()
objeto.getAllProducts()

ProductfirebaseService.getAllProducts()

export default ProductfirebaseService