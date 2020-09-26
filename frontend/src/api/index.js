import axios from 'axios';

export const fetchData = async (ico) => {
    try {
        console.log('API Request send!')
        const data = await axios.get('http://localhost:8080/api/ares/'+ ico);
        return data;    
    } catch (e) {}
}