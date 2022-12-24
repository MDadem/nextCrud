import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import domain from '../../utils/config'
import Swal from 'sweetalert2'
export default function AddPost() {
    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')
    const [imageurl, setimageurl] = useState('')
    async function addpost() {
        const post = {
            title,
            description,
            imageurl
        }
        // console.log(post)
        try {
            await axios.post(`${domain}/posts`, post)
            alert('Post added successfully')
        } catch (error) {
            alert('Something went wrong')
        }
    }
    return (
        <div className='mt-5 bs'>

            <div className='row justify-content-center'>
                <div className='col-md-5'>

                    <div className='flex'>

                        <h1>Add Post</h1>
                        <button className='btn btn-primary'>
                            <a href='/posts'>Check Posts</a>
                        </button>
                    </div>

                    <div>
                        <input type='text'
                            className='form-control'
                            placeholder='title'
                            value={title}
                            onChange={(e) => { settitle(e.target.value) }} />

                        <input type='text'
                            className='form-control'
                            placeholder='image URL'
                            
                            value={imageurl}
                            onChange={(e) => { setimageurl(e.target.value) }} />

                        <textarea className='form-control'
                            placeholder='description'
                            cols='30' rows='10'
                            value={description}
                            onChange={(e) => { setdescription(e.target.value) }} />
                        <button className='btn btn-primary' onClick={addpost}>Add Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
