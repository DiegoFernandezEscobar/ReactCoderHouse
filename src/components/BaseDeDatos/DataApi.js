import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';


const options = {
    method: 'GET',
    headers: {
        'X-Access-Token': '81c65c5420a95a11fb089e07b33c021d',
        'X-RapidAPI-Key': '5b0f066a26mshb919306c84f83c6p1dbdbfjsnc5b4d3a11fa6',
        'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
    }
};








const DataApi = () => {
    useEffect(  ()=>{
        
        fetch('https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?origin=HKT&page=None&currency=RUB&destination=-', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    
    },[])
 

}
export default DataApi