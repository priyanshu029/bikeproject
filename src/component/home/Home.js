import React from 'react'
import './Home.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import SearchResult from '../search/SearchResult'

const Home = () => {


    const navigate = useNavigate();

    const search = async () => {
        const make = document.getElementById('brand').value;
        const model = document.getElementById('model').value;

        console.log(make + " "+ model);

        const url = 'https://api.api-ninjas.com/v1/motorcycles?make='+make+'&model=' +model;
        console.log(url);
        const response = await axios.get(url, {
            headers: {
                'X-Api-Key': 'Rrx0gvfxTYylsxZpmoEFxw==JVKnw49ucBbSqzq3'
            },
        });
        console.log(response);
        const search = response.data;
        console.log(search);
        console.log("search function"+response.data);
        navigate('/search',{search})
        
        return(
            <SearchResult searchData={search}/>
        );



    }


    return (
        <div className='home'>
            <div>
                <div className='row'>
                    <div className='col-4 search' style={{marginTop: '90px'}}>
                        <h1 className='search-heading'>Search the right bike</h1>
                        <div className='radio'>
                            New Bikes<input type='radio' name='radio'className='radio-r'></input>
                            Used Bikes<input type='radio' name='radio' className='radio-r'></input>
                        </div>
                        <input className='search-textbox' type='text' id='brand' placeholder='Enter Brand'></input>
                        <br/>
                        <input className='search-textbox' type='text' id='model' placeholder='Enter Model'></input>
                        <br/>
                        <button className='search-button' onClick={()=>{search()}}>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
