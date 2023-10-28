import PageLayout from '../Layouts/PageLayout'
import Posts from './Posts'


function PostMe() {

    return(
        <PageLayout pageTitle={"Blog"} backPage='/'  >
            <Posts isPublic={false} />
        </PageLayout>
    )
}

export default PostMe