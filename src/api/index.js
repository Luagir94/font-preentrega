import axios from "axios"


const apiCalls = {
    register: async (data) => {
       
        const req = await axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}users`,
            data
        })
        return req.data

    },

    login: async (data) => {
       
        const req = await axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}login`,
            data
        })
        return req.data

    }
}
export default apiCalls