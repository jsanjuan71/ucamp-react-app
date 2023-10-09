import axios from 'axios'

const API_URL = "https://ucamp-store-api-last.onrender.com/"

const resource = "users"

class UsersService {

    static async getAllUsers() {
        return await axios.get( API_URL + resource )
    }

    static async login({email, password}) {
        return await axios.post( API_URL + resource + "/login", {email, password} )
    }

    // creamos la accion para visitar el endpoint POST para crear un producto
    static async signup(newUserData) {
        return await axios.post( API_URL + resource + "/", newUserData )
        // http://localhost:3001/products/
    }
}

export default UsersService