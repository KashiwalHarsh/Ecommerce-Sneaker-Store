import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";
var TOKEN =""

const USER = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser;
console.log(USER)

if(USER){
    TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
}else{
    console.log("error in USER" )
}


console.log(TOKEN)

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
});