import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

const resource = "posts"

// /users

class PostsService {

    static async fetchByUser() {
        try {
            const token = localStorage.getItem("token")
            if( !token ) throw new Error("No token provided")

            const {data} = await axios.get( API_URL + resource + "/", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            
            })

            console.log("data", data)

            return {
                data: data,
                error: null
            }
        } catch (error) {
            return {
                data: null,
                error: error
            }
        }
        
    }

    static async fetchPublic() {
        try {
            const {data} = await axios.get( API_URL + resource + "/public")
            return {
                data: data,
                error: null
            }
        } catch (error) {
            return {
                data: null,
                error: error
            }
        }
    }
}

export default PostsService