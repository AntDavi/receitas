import axios from "axios";

/* 
    json-server --watch -d 180 --host 192.168.1.22 db.json
*/


const api = axios.create({
    baseURL: 'http://192.168.1.22:3000'
})

export default api;