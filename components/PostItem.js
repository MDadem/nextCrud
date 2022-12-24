import React from 'react'

export default function PostItem({ post }) {
    return (
        <div className='col-md-7 p-3 m-3 bs'>
            <h3>{post.title}</h3>
            <img src={post.imageurl} className="img-fluid" height='400' />
            <p>{post.description}</p>
        </div>
    )
}
