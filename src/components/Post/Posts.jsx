import { useEffect, useState } from 'react'
import PostItem from './PostItem'
import PostsService from '../../services/posts.service'
import { toast } from 'react-toastify';
import { Alert } from 'react-bootstrap'


function Posts({isPublic = true}) {

    const [posts, setPosts] = useState([])

    const readPosts = ({error, data}) => {
        console.log("error", error)
        console.log("data", data)
        if (error) {
            console.error(error)
            toast.error(error)
        } else {
            console.log(data)
            setPosts(data)
        }
    }

    useEffect(() => {
        if(isPublic)
            PostsService.fetchPublic()
                .then( readPosts )
        else
            PostsService.fetchByUser()
                .then( readPosts )
    }, [isPublic]) 

    return(
        <>
            {posts.length? (
                posts.map( (item, index) => {
                    return (
                       <PostItem post={item} />
                    )
                } )
            ): (
                <Alert variant='warning'>No hay posts</Alert>
            )}
        </>
    )
}

export default Posts