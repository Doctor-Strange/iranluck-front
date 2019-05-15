import axios from 'axios';

const instance = axios.create({
    baseURL: "http://info.iranluck.com/api/Customer",
    headers: {
        'Content-Type': 'application/json',
        'DeviceId': navigator.productSub,
        'DeviceName': navigator.vendor,
        'OS': navigator.platform,
    }
})

export default instance;