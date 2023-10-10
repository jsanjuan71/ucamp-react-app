import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

const resource = "users"

// /users

class UsersService {

    static async getAllUsers() {
        return await axios.get( API_URL + resource )
    }

    static async login({email, password}) {
        return await axios.post( API_URL + resource + "/login", {email, password} )
    }
    
    static async signup(newUserData) {
        return await axios.post( API_URL + resource + "/", newUserData )
    }
}

export default UsersService