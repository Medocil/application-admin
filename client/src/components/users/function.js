import axios from 'axios';

export async function fetchUser() {
    
    const  res = await axios.get('https://jsonplaceholder.typicode.com/users')
    return res.data;
}


    
   

