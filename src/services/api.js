import axios from "axios";

/* 
    json-server --watch -d 180 --host 192.168.3.16 db.json
*/

const api = axios.create({
    baseURL: 'http://192.168.3.16:3000'
})

export default api;