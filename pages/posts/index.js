import axios from 'axios'
import React from 'react'
import PostItem from '../../components/PostItem'
import domain from '../../utils/config'

function index({ postsdata }) {
    console.log(postsdata)


    const postitems = postsdata.map((post) => {
        return <PostItem post={post} />
    })


    return (
        <div>
            <div className='text-end mt-3'>
                <a className='btn btn-primary' href='/posts/addpost'>Add post</a>
            </div>
            <div className='row mt-2 justify-content-center'>
                {postitems}
            </div>
        </div>
    )
}
export default index
export async function getStaticProps() {
    try {
        const response = await axios.get(`${domain}/posts`)
        return {
            props: {
                postsdata: response.data
            }
        }
    } catch (error) {
        console.log(error)
    }
}
