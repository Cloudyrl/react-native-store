import {STRAPI_API} from '../utils/urls';
import axios from 'axios';


const loginUser = async ({email,password}) => {
    try{
        const response = await axios.post(`${STRAPI_API}/auth/local`,{
            identifier:email,
            password
        })
        return response;
    }catch(e){
        console.log(e);
    }
}

export default loginUser;