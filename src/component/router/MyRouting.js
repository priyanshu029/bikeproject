import React from 'react'
import Home from '../home/Home';
import PopularBikes from '../popular/PopularBikes';
import Header from '../header/Header';
const MyRouting = () => {
    return (
        <div>
            <Header/>
            <Home/>
            <PopularBikes/>
        </div>
    )
}

export default MyRouting
