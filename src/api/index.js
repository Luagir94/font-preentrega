import axios from "axios"

const apiCalls = {

    register: async (data) => {
       try {
        const req = await axios({
            method: 'post',
            url: `${process.env.REACT_APP_API}users`,   
            data,
            mode: 'cors'
        })
        return req
       } catch (error) {
            console.log(error);
       }
       

    },

    login: async (data) => {
       
        const req = await axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}login`,
            data,
          
        })
        return req

    },
    get: async (token,url) => {
        const req = await axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API}${url}`,
            headers: { 'Authorization' : `Bearer ${token}`},
        })
        return req
    },
    delete: async (token, url) => {
        const req = await axios({
            method: 'DELETE',
            url: `${process.env.REACT_APP_API}${url}`,
            headers: { 'Authorization' : `Bearer ${token}`},
        })
        return req
    },
    post:async (token, url,data) => {
        const req = await axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}${url}`,
            headers: { 'Authorization' : `Bearer ${token}`},
            data
        })
        return req
    },
    patch:async (token, url,data) => {
        const req = await axios({
            method: 'PATCH',
            url: `${process.env.REACT_APP_API}${url}`,
            headers: { 'Authorization' : `Bearer ${token}`},
            data
        })
        return req
    },
}
export default apiCalls