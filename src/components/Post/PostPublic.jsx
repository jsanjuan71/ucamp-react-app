import PageLayout from '../Layouts/PageLayout'
import Posts from './Posts'


function PostPublic() {

    return(
        <PageLayout pageTitle={"Blog"} backPage='/'  >
            <Posts isPublic={true} />
        </PageLayout>
    )
}

export default PostPublic