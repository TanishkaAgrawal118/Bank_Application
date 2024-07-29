import axios from 'axios';

export function adminLogin(data){
    return axios.post("http://localhost:3500/adminLogin", data);

}