import React from 'react'
import Footer from './Footer'
import Header from './Header'
export default function DefaultLayout(props) {
    return (
        <div>
            <Header />
            <div className='body'>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}
