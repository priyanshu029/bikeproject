import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './PopularBikes.css'
import image from './ninjazx10r.jpg'
import Popup from 'reactjs-popup';
import ViewAll from './ViewAll';
import heart from './heart-regular.svg'

const PopularBikes = () => {

    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        getBikes();
    }, []);

    async function getBikes() {
        const url = 'https://api.api-ninjas.com/v1/motorcycles?make=' + 'Kawasaki' + '&model=' + 'Ninja';
        const response = await axios.get(url, {
            headers: {
                'X-Api-Key': 'Rrx0gvfxTYylsxZpmoEFxw==JVKnw49ucBbSqzq3'
            },
        });
        setBikes(response.data);
    }



    return (
        <>
            <div className='heading'>Popular bikes</div>
            <div className='popularbikes'>
                {
                    bikes.map((bike) => {
                        return (
                            <div className='card'>
                                <div className='card-image'>
                                    
                                    <img width='350px' src={image} alt='loading!!!'></img>
                                    <button className='heart-button'>
                                        <img  src={heart}></img>
                                    </button>
                                </div>
                                <div className='card-model'>
                                    {bike.make} {bike.model}
                                </div>
                                <div className='card-price'>
                                    $1,770,000*
                                </div>
                                <Popup trigger={<button className='card-button' onClick={() => { }}>View All</button>}>
                                    {<ViewAll info={bike} />}
                                </Popup>
                            </div>
                        );
                    })
                }
            </div>
        </>
    )
}

export default PopularBikes
