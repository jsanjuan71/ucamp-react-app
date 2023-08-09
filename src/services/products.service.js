import axios from 'axios';
import { API_URL } from '../utils/constants/config';

const baseUrl = API_URL + "products"

class ProductService {

    static async fetchAll() {
        try {
            const {data} = await axios.get(baseUrl)
            return data
        } catch (error) {
            return error.message
        }
    }
      
}

export default ProductService