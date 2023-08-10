import axios from 'axios'

const API_URL = "http://localhost:3001/"

const resource = "products"

class ProductService {

    static async getAllProducts() {
        return await axios.get( API_URL + resource )
        //http://localhost:3001/product
    }

    static async getProductBySku(sku) {
        return await axios.get( API_URL + resource + "/" + sku )
        // http://localhost:3001/products/sku1212
    }

    // creamos la accion para visitar el endpoint POST para crear un producto
    static async createProduct(data) {
        return await axios.post( API_URL + resource + "/", data )
        // http://localhost:3001/products/sku1212
    }
}

export default ProductService