import React from 'react'
import image from '../popular/ninjazx10r.jpg'
import Popup from 'reactjs-popup';

const SearchResult = ({searchData}) => {

    console.log("searchData"+searchData);

    return (
        <>
        <div className='heading'>Search Result</div>
        <div className='popularbikes'>
            {
                searchData.map((bike) => {
                    return (
                        <div className='card'>
                            <div className='card-image'>
                                <img width='350px' src={image} alt='loading!!!'></img>
                            </div>
                            <div className='card-model'>
                                {bike.make} {bike.model} 
                            </div>
                            <div className='card-price'>
                                $1,770,000*
                            </div>
                            <Popup trigger={<button className='card-button'>View All</button>}>
                                {/* {<ViewAll info={bike}/>} */}
                            </Popup>
                        </div>
                    );
                })
            }
        </div>
        </>
    )
}

export default SearchResult
