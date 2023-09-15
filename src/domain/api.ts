import axios from "axios"

const url = 'https://api.goapi.id/v1/'

const baseUrl = axios.create({
    baseURL: url,
    headers: {
        "X-API-KEY": 'ejaQ0XRLI0t8pm1gyMmK5ETwCBqUpB'
    }
})

export default baseUrl